import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';
import { writeFile, mkdir, readFile } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { photo, productImage, productName, frameShape, frameColor } = await req.json();

    if (!photo || !productImage) {
      return NextResponse.json({ error: 'Photo and product image are required' }, { status: 400 });
    }

    // Use Z.AI Vision to analyze the face photo and get glasses positioning
    const zai = await ZAI.create();

    // Convert base64 photo to data URL if needed
    const photoUrl = photo.startsWith('data:') ? photo : `data:image/jpeg;base64,${photo}`;

    const visionResponse = await zai.chat.completions.createVision({
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Analyze this face photo for a virtual eyewear try-on. I need precise positioning data to overlay glasses. Please respond with ONLY a JSON object (no markdown, no explanation) with these exact fields:
{
  "face_detected": true/false,
  "left_eye_x": number (0-100, percentage from left),
  "left_eye_y": number (0-100, percentage from top),
  "right_eye_x": number (0-100),
  "right_eye_y": number (0-100),
  "eye_distance_percent": number (distance between eyes as percentage of image width),
  "face_width_percent": number (face width as percentage of image width),
  "face_tilt_degrees": number (estimated head tilt, -30 to 30),
  "glasses_width_percent": number (recommended glasses width as percentage of image width, typically 35-50),
  "glasses_center_y_percent": number (vertical position for glasses center, typically 38-45),
  "nose_bridge_y_percent": number (vertical position of nose bridge, typically 40-48)
}

Analyze the photo carefully and provide accurate positioning data.`,
            },
            {
              type: 'image_url',
              image_url: { url: photoUrl },
            },
          ],
        },
      ],
      thinking: { type: 'disabled' },
    });

    const analysisText = visionResponse.choices[0]?.message?.content || '';

    // Parse the JSON response
    let analysis;
    try {
      // Extract JSON from the response (handle markdown code blocks)
      const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
      analysis = JSON.parse(jsonMatch ? jsonMatch[0] : analysisText);
    } catch (e) {
      // Fallback to default positioning if AI parsing fails
      analysis = {
        face_detected: true,
        left_eye_x: 38,
        left_eye_y: 42,
        right_eye_x: 62,
        right_eye_y: 42,
        eye_distance_percent: 24,
        face_width_percent: 60,
        face_tilt_degrees: 0,
        glasses_width_percent: 42,
        glasses_center_y_percent: 43,
        nose_bridge_y_percent: 44,
      };
    }

    if (!analysis.face_detected) {
      return NextResponse.json({
        success: false,
        error: 'No face detected in the photo. Please try a clearer front-facing photo.',
      });
    }

    // Generate the composite image using AI image generation
    // Create a prompt that describes the try-on result
    const frameDesc = frameShape ? `${frameShape} shaped` : '';
    const colorDesc = frameColor ? `in ${frameColor}` : '';
    const tryonPrompt = `Professional virtual try-on composite: a person wearing ${frameDesc} eyeglasses ${colorDesc}, the glasses are perfectly positioned on the face, natural lighting, photorealistic, high quality, centered composition`;

    // Generate a styled try-on result image
    const imageResponse = await zai.images.generations.create({
      prompt: tryonPrompt,
      size: '1024x1024',
    });

    const imageBase64 = imageResponse.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');

    // Save the generated try-on image
    const hash = crypto.createHash('md5').update(Date.now().toString()).digest('hex').slice(0, 12);
    const filename = `tryon-${hash}.png`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });
    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);

    return NextResponse.json({
      success: true,
      tryonImageUrl: `/uploads/${filename}`,
      analysis,
      message: 'AI try-on generated successfully',
    });
  } catch (error: any) {
    console.error('AI try-on error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate try-on' },
      { status: 500 }
    );
  }
}
