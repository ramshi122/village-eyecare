#!/usr/bin/env python3
"""
Parse image search JSON files and generate a comprehensive 200+ product catalog
for Italia Optical with real eyewear images.
"""
import json
import os
import random
from pathlib import Path

SCRIPTS_DIR = Path('/home/z/my-project/scripts')
OUTPUT_FILE = Path('/home/z/my-project/src/lib/data.ts')

random.seed(42)  # Reproducible

# Load all image URLs
def load_images(json_path):
    try:
        with open(json_path) as f:
            data = json.load(f)
        if data.get('success') and data.get('results'):
            return [r['original_url'] for r in data['results']]
    except Exception as e:
        print(f"Error loading {json_path}: {e}")
    return []

eyeglass_imgs = load_images(SCRIPTS_DIR / 'img-eyeglasses.json')
sunglass_imgs = load_images(SCRIPTS_DIR / 'img-sunglasses.json')
contact_imgs = load_images(SCRIPTS_DIR / 'img-contacts.json')
accessory_imgs = load_images(SCRIPTS_DIR / 'img-accessories.json')
kids_imgs = load_images(SCRIPTS_DIR / 'img-kids.json')
computer_imgs = load_images(SCRIPTS_DIR / 'img-computer.json')
aviator_imgs = load_images(SCRIPTS_DIR / 'img-aviator.json')
designer_imgs = load_images(SCRIPTS_DIR / 'img-designer.json')

print(f"Loaded: eyeglasses={len(eyeglass_imgs)}, sunglasses={len(sunglass_imgs)}, "
      f"contacts={len(contact_imgs)}, accessories={len(accessory_imgs)}, "
      f"kids={len(kids_imgs)}, computer={len(computer_imgs)}, "
      f"aviator={len(aviator_imgs)}, designer={len(designer_imgs)}")

all_frame_imgs = eyeglass_imgs + designer_imgs + sunglass_imgs + aviator_imgs
all_frame_imgs = list(dict.fromkeys(all_frame_imgs))

CAT_IMAGES = {
    'eyeglasses': (eyeglass_imgs + designer_imgs) or all_frame_imgs,
    'sunglasses': (sunglass_imgs + aviator_imgs) or all_frame_imgs,
    'contact-lenses': contact_imgs or all_frame_imgs,
    'power-sunglasses': (aviator_imgs + sunglass_imgs) or all_frame_imgs,
    'computer-glasses': computer_imgs or (eyeglass_imgs + designer_imgs) or all_frame_imgs,
    'kids-glasses': kids_imgs or (eyeglass_imgs + designer_imgs) or all_frame_imgs,
    'accessories': accessory_imgs or all_frame_imgs,
}

EYEGLASS_NAMES = [
    'Milano Round', 'Venice Cat-Eye', 'Roma Titanium', 'Florence Square', 'Naples Oval',
    'Turin Rectangle', 'Genoa Hexagon', 'Palermo Aviator', 'Bologna Round', 'Verona Cat-Eye',
    'Pisa Square', 'Siena Oval', 'Lucca Rectangle', 'Como Round', 'Bergamo Hexagon',
    'Padova Cat-Eye', 'Trieste Square', 'Bari Round', 'Lecce Oval', 'Catania Rectangle',
    'Messina Hexagon', 'Taranto Cat-Eye', 'Cagliari Round', 'Ancona Square', 'Parma Oval',
    'Modena Rectangle', 'Reggio Round', 'Ravenna Hexagon', 'Ferrara Cat-Eye', 'Rimini Square',
    'Bolzano Oval', 'Trento Rectangle', 'Aosta Round', 'Asti Hexagon', 'Cremona Cat-Eye',
    'Mantova Square', 'Pavia Oval', 'Varese Rectangle', 'Sondrio Round', 'Belluno Hexagon',
    'Gorizia Cat-Eye', 'Udine Square', 'Pordenone Oval', 'Treviso Rectangle', 'Vicenza Round',
    'Rovigo Hexagon', 'Imola Cat-Eye', 'Faenza Square', 'Cesena Oval', 'Forli Rectangle',
]

SUNGLASS_NAMES = [
    'Capri Aviator', 'Sicily Oversized', 'Naples Sport', 'Amalfi Wayfarer', 'Positano Round',
    'Ischia Square', 'Procida Cat-Eye', 'Capri Polarized', 'Sorrento Aviator', 'Ravello Oversized',
    'Amalfi Sport', 'Maiori Wayfarer', 'Minori Round', 'Maiori Square', 'Vietri Cat-Eye',
    'Praiano Polarized', 'Furore Aviator', 'Conca Oversized', 'Atrani Sport', 'Scala Wayfarer',
    'Agerola Round', 'Pimonte Square', 'Gragnano Cat-Eye', 'Lettere Polarized', 'Casola Aviator',
    'Tramonti Oversized', 'Castellammare Wayfarer', 'Vico Equense Round', 'Meta Square',
    'Piano Cat-Eye', 'Vico Polarized', 'Seiano Aviator', 'Scopolo Oversized', 'Tiberio Sport',
    'Faraglioni Wayfarer', 'Marina Round', 'Augustus Square', 'Tiberius Cat-Eye',
    'Mount Solaro Polarized', 'Anacapri Aviator', 'Grotto Oversized', 'Blue Grotto Sport',
    'Via Krupp Wayfarer', 'Villa San Round', 'Marina Piccola Square', 'Marina Grande Cat-Eye',
]

CONTACT_NAMES = [
    'Aqua Clear Daily', 'Color Glow Monthly', 'Pure Vision Toric', 'Biofinity Weekly',
    'Dailies Total', 'Acuvue Oasys', 'Air Optix Night', 'FreshLook Color',
    'PureVision HD', 'Soflens Daily', 'Optima Hybrid', 'Clariti 1-Day',
    'MyDay Daily', 'Precision UV', 'Ultra Plus', 'Biotrue One-Day',
    'Total 30 Monthly', 'Precision1 Daily', 'Infiniti Monthly', 'ClearColor Plus',
]

COMPUTER_NAMES = [
    'Pixel Guard Blue', 'Screen Shield Round', 'Digital Relief Square', 'Focus Flex Rectangle',
    'Code Comfort Oval', 'Gaming Pro Hexagon', 'Stream Sight Cat-Eye', 'Office Oval Round',
    'Tech Tint Square', 'Cyber Cut Rectangle', 'Monitor Mate Hexagon', 'Dev Frames Cat-Eye',
    'Block Blue Round', 'Pixel Pro Square', 'Screen Safe Rectangle', 'Code Shield Oval',
    'Dev Guard Hexagon', 'Stream Pro Cat-Eye', 'Office Comfort Round', 'Tech Flex Square',
    'Coder Lite Round', 'Stream Lite Square', 'Focus Lite Rectangle', 'Pixel Lite Oval',
    'Screen Lite Hexagon',
]

KIDS_NAMES = [
    'Junior Flex Round', 'Kids Adventure Square', 'Little Star Cat-Eye', 'Play Time Rectangle',
    'Smarty Pants Oval', 'Cool Kid Hexagon', 'Bright Eyes Round', 'Happy Face Square',
    'Super Kid Rectangle', 'Tiny Trend Oval', 'Fun Flex Hexagon', 'Cute Cat-Eye',
    'Adventure Round', 'Explorer Square', 'Dreamer Rectangle', 'Giggles Oval',
    'Rocket Hexagon', 'Sunshine Cat-Eye', 'Wonder Round', 'Joy Square',
]

POWER_SUN_NAMES = [
    'Tuscany Power', 'Amalfi Power', 'Capri Power', 'Sicily Power', 'Venice Power',
    'Roma Power', 'Milano Power', 'Naples Power', 'Florence Power', 'Genoa Power',
    'Turin Power', 'Bologna Power', 'Verona Power', 'Pisa Power', 'Siena Power',
    'Lucca Power', 'Como Power', 'Bergamo Power', 'Padova Power', 'Trieste Power',
    'Bari Power', 'Lecce Power', 'Catania Power', 'Messina Power', 'Taranto Power',
]

ACCESSORY_NAMES = [
    'Premium Leather Case', 'Microfiber Cleaning Kit', 'Anti-Fog Wipes', 'Lens Spray Bottle',
    'Soft Pouch Black', 'Hard Shell Case', 'Screwdriver Tool Kit', 'Nose Pads Replacement',
    'Temple Tips Soft', 'Chain Strap Gold', 'Chain Strap Silver', 'Chain Strap Black',
    'Cleaning Cloth Pack', 'Lens Pen Cleaner', 'UV Sanitizer Box', 'Storage Box Premium',
    'Travel Case Hard', 'Magnetic Holder', 'Eyewear Stand Wood', 'Display Stand Metal',
]

BRANDS = ['Italia Premium', 'Italia Femme', 'Italia Pro', 'Italia Sun', 'Italia Active',
          'Italia Vision', 'Italia Tech', 'Italia Kids', 'Italia Care', 'Italia Luxe']

FRAME_SHAPES = ['round', 'square', 'rectangle', 'aviator', 'cat-eye', 'oval', 'hexagon']
FRAME_COLORS = [
    'Tortoise', 'Black', 'Honey Amber', 'Gunmetal', 'Crystal Blue', 'Matte Black',
    'Black Rose', 'Gold Brown', 'Silver Smoke', 'Forest Green', 'Wine Red', 'Navy Blue',
    'Cherry Red', 'Honey', 'Charcoal', 'Bronze', 'Emerald', 'Sapphire', 'Ivory',
    'Champagne', 'Rose Gold', 'Platinum', 'Onyx', 'Pearl White', 'Sky Blue',
]

MATERIALS = ['Acetate', 'Titanium', 'Metal', 'TR90', 'Polycarbonate', 'Stainless Steel']
GENDERS = ['men', 'women', 'unisex', 'kids']
SIZES = ['Small', 'Medium', 'Large', 'Extra Large']
WEIGHTS = ['12g', '14g', '16g', '18g', '20g', '22g', '24g', '26g', '28g', '30g', 'N/A']

REVIEW_NAMES = ['Aarav Sharma', 'Priya Mehta', 'Rohit Gupta', 'Sneha Reddy', 'Vikram Singh',
                'Ananya Verma', 'Rajesh Khurana', 'Meera Kapoor', 'Arjun Nair', 'Pooja Bhatt',
                'Karan Malhotra', 'Divya Iyer', 'Sahil Khan', 'Ritu Aggarwal', 'Nitin Joshi',
                'Sonia Mehta', 'Akash Verma', 'Neha Pandey', 'Manish Tiwari', 'Kavya Rao']

REVIEW_TITLES = ['Excellent quality!', 'Good value for money', 'Highly recommend', 'Satisfied',
                 'Perfect fit', 'Great purchase', 'Worth every rupee', 'Stylish and comfortable',
                 'Premium feel', 'Fast delivery', 'Better than expected', 'Love it!']

REVIEW_COMMENTS = [
    'The frame is lightweight and looks premium. Fast delivery by Italia Optical.',
    'Stylish design and the lenses are perfectly adjusted. Comfortable for daily wear.',
    'Got many compliments. The try-on feature helped me choose the perfect frame.',
    'Good product and the frame quality is top notch. Will buy again.',
    'Excellent build quality. Feels durable and the lenses are crystal clear.',
    'Perfect prescription match. The staff was super helpful with the selection.',
    'Great value for the price. The case that comes with it is also premium.',
    'Comfortable to wear all day. No pressure on the nose or temples.',
    'The blue light filtering really helps with my screen time. Highly recommend.',
    'Beautiful design and the color is exactly as shown in the photos.',
]

def make_reviews(product_id, count):
    reviews = []
    for i in range(count):
        reviews.append({
            'id': f'{product_id}-r{i}',
            'productId': product_id,
            'userName': random.choice(REVIEW_NAMES),
            'rating': random.choice([4, 4, 5, 5, 5, 3]),
            'title': random.choice(REVIEW_TITLES),
            'comment': random.choice(REVIEW_COMMENTS),
            'date': f'2025-{random.randint(1,5):02d}-{random.randint(1,28):02d}',
        })
    return reviews

def get_images_for_category(cat_slug, used_images):
    pool = CAT_IMAGES.get(cat_slug, all_frame_imgs)
    if not pool:
        pool = all_frame_imgs
    available = [img for img in pool if img not in used_images]
    if len(available) < 3:
        available = pool[:]
    n = random.randint(3, 4)
    if len(available) >= n:
        chosen = random.sample(available, n)
    else:
        chosen = (available * ((n // len(available)) + 1))[:n]
    for c in chosen:
        used_images.add(c)
    return chosen

def generate_product(idx, cat_slug, cat_id, name_pool, used_images):
    name = random.choice(name_pool)
    brand = random.choice(BRANDS)
    shape = random.choice(FRAME_SHAPES)
    color = random.choice(FRAME_COLORS)
    gender = random.choice(GENDERS) if cat_slug != 'kids-glasses' else 'kids'
    material = random.choice(MATERIALS)
    
    if cat_slug == 'accessories':
        price = random.randint(199, 999)
        mrp = int(price * random.uniform(1.5, 2.2))
    elif cat_slug == 'contact-lenses':
        price = random.randint(899, 2499)
        mrp = int(price * random.uniform(1.3, 1.8))
    else:
        price = random.randint(1299, 5999)
        mrp = int(price * random.uniform(1.5, 2.5))
    
    discount = round((1 - price / mrp) * 100)
    
    is_featured = random.random() < 0.25
    is_new = random.random() < 0.30
    is_best = random.random() < 0.30
    is_offer = discount >= 40 and random.random() < 0.6
    
    rating = round(random.uniform(4.0, 5.0), 1)
    review_count = random.randint(5, 350)
    stock = random.randint(5, 120)
    
    weight = random.choice(WEIGHTS) if cat_slug != 'contact-lenses' else 'N/A'
    size = random.choice(SIZES) if cat_slug not in ('contact-lenses', 'accessories') else 'One Size'
    
    slug_base = f'{name.lower().replace(" ", "-")}-{idx}'
    
    if cat_slug == 'eyeglasses':
        desc = f'Handcrafted {material.lower()} frame with a {shape} silhouette. {color} finish with spring hinges for all-day comfort. Anti-reflective coating on prescription lenses included.'
    elif cat_slug == 'sunglasses':
        desc = f'Premium {shape} sunglasses with polarized UV400 lenses. {color} {material.lower()} frame with anti-scratch coating. Comes with premium leather case.'
    elif cat_slug == 'contact-lenses':
        desc = f'{color} soft contact lenses with high oxygen permeability. UV blocker. Comfortable for 12+ hours of wear. {material} material for all-day comfort.'
    elif cat_slug == 'power-sunglasses':
        desc = f'Prescription-ready {shape} sunglasses. Polarized lenses with your power. {color} frame with UV400 protection. Custom power available up to ±8.00.'
    elif cat_slug == 'computer-glasses':
        desc = f'Blue-light blocking computer glasses in {shape} design. {color} {material.lower()} frame. Reduces digital eye strain from screens. Lightweight for long sessions.'
    elif cat_slug == 'kids-glasses':
        desc = f'Flexible {material.lower()} frame designed for kids. {color} color with bendable temples and impact-resistant lenses. Ages 5-14. Fun and durable.'
    else:
        desc = f'Premium {color.lower()} eyewear accessory. {material} construction with quality finish. Compatible with most frame sizes. Italia Optical branded.'
    
    images = get_images_for_category(cat_slug, used_images)
    
    return {
        'id': f'p{idx}',
        'name': f'{name} {shape.capitalize()}',
        'slug': slug_base,
        'brand': brand,
        'description': desc,
        'price': price,
        'mrp': mrp,
        'discount': discount,
        'categoryId': cat_id,
        'categorySlug': cat_slug,
        'frameShape': shape,
        'frameColor': color,
        'gender': gender,
        'material': material,
        'weight': weight,
        'size': size,
        'images': images,
        'rating': rating,
        'reviewCount': review_count,
        'stock': stock,
        'isFeatured': is_featured,
        'isNew': is_new,
        'isBestSeller': is_best,
        'isOffer': is_offer,
        'reviews': make_reviews(f'p{idx}', random.randint(2, 4)),
    }

CATEGORIES_CONFIG = [
    ('eyeglasses', 'c1', EYEGLASS_NAMES, 50),
    ('sunglasses', 'c2', SUNGLASS_NAMES, 45),
    ('contact-lenses', 'c3', CONTACT_NAMES, 20),
    ('power-sunglasses', 'c4', POWER_SUN_NAMES, 25),
    ('computer-glasses', 'c5', COMPUTER_NAMES, 25),
    ('kids-glasses', 'c6', KIDS_NAMES, 20),
    ('accessories', 'c7', ACCESSORY_NAMES, 20),
]

products = []
used_images = set()
idx = 1
for slug, cat_id, name_pool, count in CATEGORIES_CONFIG:
    for _ in range(count):
        prod = generate_product(idx, slug, cat_id, name_pool, used_images)
        products.append(prod)
        idx += 1

print(f'Generated {len(products)} products')

with open(OUTPUT_FILE) as f:
    existing = f.read()

products_start = existing.find('export const PRODUCTS')
bracket_count = 0
i = existing.find('[', products_start)
in_string = False
escape = False
string_char = None
while i < len(existing):
    c = existing[i]
    if escape:
        escape = False
    elif c == '\\':
        escape = True
    elif in_string:
        if c == string_char:
            in_string = False
    elif c in ('"', "'", '`'):
        in_string = True
        string_char = c
    elif c == '[':
        bracket_count += 1
    elif c == ']':
        bracket_count -= 1
        if bracket_count == 0:
            break
    i += 1

end_semicolon = existing.find(';', i)
before_products = existing[:products_start]
after_products = existing[end_semicolon + 1:]

def ts_bool(b):
    return 'true' if b else 'false'

def ts_string(s):
    s = s.replace('`', '\\`').replace('${', '\\${')
    return f'`{s}`'

def ts_array(arr):
    return '[' + ', '.join(ts_string(x) for x in arr) + ']'

def ts_reviews(reviews):
    lines = []
    for r in reviews:
        lines.append(
            f"    {{ id: {ts_string(r['id'])}, productId: {ts_string(r['productId'])}, "
            f"userName: {ts_string(r['userName'])}, rating: {r['rating']}, "
            f"title: {ts_string(r['title'])}, comment: {ts_string(r['comment'])}, "
            f"date: {ts_string(r['date'])} }}"
        )
    return ',\n'.join(lines)

products_ts = []
for p in products:
    images_ts = ts_array(p['images'])
    reviews_ts = ts_reviews(p['reviews'])
    products_ts.append(
        f"""  {{
    id: {ts_string(p['id'])}, name: {ts_string(p['name'])}, slug: {ts_string(p['slug'])}, brand: {ts_string(p['brand'])},
    description: {ts_string(p['description'])},
    price: {p['price']}, mrp: {p['mrp']}, discount: {p['discount']}, categoryId: {ts_string(p['categoryId'])}, categorySlug: {ts_string(p['categorySlug'])},
    frameShape: {ts_string(p['frameShape'])}, frameColor: {ts_string(p['frameColor'])}, gender: {ts_string(p['gender'])}, material: {ts_string(p['material'])},
    weight: {ts_string(p['weight'])}, size: {ts_string(p['size'])}, images: {images_ts},
    rating: {p['rating']}, reviewCount: {p['reviewCount']}, stock: {p['stock']}, isFeatured: {ts_bool(p['isFeatured'])}, isNew: {ts_bool(p['isNew'])}, isBestSeller: {ts_bool(p['isBestSeller'])}, isOffer: {ts_bool(p['isOffer'])},
    reviews: [
{reviews_ts}
    ],
  }}"""
    )

new_products_section = 'export const PRODUCTS: Product[] = [\n' + ',\n'.join(products_ts) + '\n];\n'

new_content = before_products + new_products_section + after_products

with open(OUTPUT_FILE, 'w') as f:
    f.write(new_content)

print(f'Written {len(products)} products to {OUTPUT_FILE}')
print(f'File size: {os.path.getsize(OUTPUT_FILE)} bytes')
