import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { name, frameShape, frameColor, gender, category, material } = await req.json();

    if (!name) {
      return NextResponse.json({ error: 'Product name is required' }, { status: 400 });
    }

    // Build a detailed prompt for AI image generation
    const categoryDesc: Record<string, string> = {
      'eyeglasses': 'prescription eyeglasses frame',
      'sunglasses': 'stylish sunglasses with dark lenses',
      'contact-lenses': 'contact lens product packaging',
      'power-sunglasses': 'prescription sunglasses',
      'computer-glasses': 'blue light blocking computer glasses',
      'kids-glasses': 'colorful kids eyeglasses frame',
      'accessories': 'eyeglass case and lens cleaning accessory',
    };

    const catDesc = categoryDesc[category] || 'eyeglasses frame';
    const shapeDesc = frameShape ? `${frameShape} shaped` : '';
    const colorDesc = frameColor ? `in ${frameColor} color` : '';
    const genderDesc = gender === 'women' ? 'elegant feminine' : gender === 'men' ? 'masculine' : 'unisex';
    const materialDesc = material ? `${material.toLowerCase()} material` : '';

    const prompt = `Professional product photography of ${shapeDesc} ${catDesc} ${colorDesc}, ${genderDesc} style, ${materialDesc}, centered on pure white background, studio lighting, high resolution, e-commerce product shot, clean minimal, premium quality eyewear, multiple angle view`;

    // Generate image with Z.AI
    const zai = await ZAI.create();
    const response = await zai.images.generations.create({
      prompt,
      size: '1024x1024',
    });

    const imageBase64 = response.data[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');

    // Save to public folder
    const hash = crypto.createHash('md5').update(name + Date.now()).digest('hex').slice(0, 12);
    const filename = `product-${hash}.png`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });
    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);

    const imageUrl = `/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      imageUrl,
      message: 'AI image generated successfully',
    });
  } catch (error: any) {
    console.error('Image generation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate image' },
      { status: 500 }
    );
  }
}
