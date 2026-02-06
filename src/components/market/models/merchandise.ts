export interface IMerchandise {
  id: number
  brandName: string
  type: string
  item: string
  description: string
  price: number
  discount: number
  imageUrl?: string
}

export interface ICartItem extends IMerchandise {
  quantity: number
}

export const merchandiseItems: IMerchandise[] = [
  // Nike items
  {
    id: 1,
    brandName: 'Nike',
    type: 'men',
    item: 'Classic Black T-Shirt',
    description: 'Premium cotton blend t-shirt in classic white with Nike swoosh logo',
    price: 45.99,
    discount: 10,
    imageUrl: '/assets/images/shop/1.webp'
  },
  {
    id: 2,
    brandName: 'Nike',
    type: 'men',
    item: 'Navy Blue Performance Shirt',
    description: 'Moisture-wicking polyester performance shirt black with breathable mesh panels',
    price: 68.50,
    discount: 10,
    imageUrl: '/assets/images/shop/2.webp'
  },
  {
    id: 3,
    brandName: 'Nike',
    type: 'women',
    item: 'Pink Athletic Top',
    description: 'Lightweight stretch fabric athletic top in soft pink with Dri-FIT technology',
    price: 52.99,
    discount: 10,
    imageUrl: '/assets/images/shop/3.webp'
  },
  {
    id: 4,
    brandName: 'Nike',
    type: 'sports',
    item: 'White Training Shirt',
    description: 'Pro-grade white training shirt with compression fit and moisture control',
    price: 89.99,
    discount: 10,
    imageUrl: '/assets/images/shop/4.webp'
  },
  {
    id: 5,
    brandName: 'Nike',
    type: 'women',
    item: 'Grey Heather Hoodie',
    description: 'Cozy fleece-lined hoodie in grey heather with kangaroo pocket',
    price: 95.00,
    discount: 10,
    imageUrl: '/assets/images/shop/5.webp'
  },

  // Adidas items
  {
    id: 6,
    brandName: 'Adidas',
    type: 'men',
    item: 'Black Three-Stripe Tee',
    description: 'Iconic black cotton tee featuring the classic three stripes design',
    price: 42.50,
    discount: 10,
    imageUrl: '/assets/images/shop/6.webp'
  },
  {
    id: 7,
    brandName: 'Adidas',
    type: 'women',
    item: 'White Sport Shirt',
    description: 'Crisp white sport shirt with Climacool ventilation technology',
    price: 58.75,
    discount: 10,
    imageUrl: '/assets/images/shop/7.webp'
  },
  {
    id: 8,
    brandName: 'Adidas',
    type: 'kids',
    item: 'Red Youth Jersey',
    description: 'Vibrant red polyester jersey with moisture-wicking fabric for active kids',
    price: 40.00,
    discount: 10,
    imageUrl: '/assets/images/shop/8.webp'
  },
  {
    id: 9,
    brandName: 'Adidas',
    type: 'sports',
    item: 'Blue Training Top',
    description: 'Royal blue training top with mesh inserts and ergonomic fit',
    price: 72.99,
    discount: 10,
    imageUrl: '/assets/images/shop/9.webp'
  },
  {
    id: 10,
    brandName: 'Adidas',
    type: 'men',
    item: 'Green Track Jacket',
    description: 'Forest green track jacket with full zip and side pockets',
    price: 110.00,
    discount: 10,
    imageUrl: '/assets/images/shop/10.webp'
  },

  // Vans items
  {
    id: 11,
    brandName: 'Birkenstock',
    type: 'men',
    item: 'Checkerboard Print Shirt',
    description: 'Black and white checkerboard pattern button-up shirt in cotton twill',
    price: 55.99,
    discount: 10,
    imageUrl: '/assets/images/shop/11.webp'
  },
  {
    id: 12,
    brandName: 'Vans',
    type: 'women',
    item: 'Pink Skate Tee',
    description: 'Soft pink cotton tee with vintage Vans logo graphic',
    price: 48.50,
    discount: 10,
    imageUrl: '/assets/images/shop/12.webp'
  },
  {
    id: 13,
    brandName: 'Vans',
    type: 'kids',
    item: 'Orange Youth Hoodie',
    description: 'Bright orange pullover hoodie with drawstring hood and front pocket',
    price: 62.00,
    discount: 10,
    imageUrl: '/assets/images/shop/13.webp'
  },
  {
    id: 14,
    brandName: 'Vans',
    type: 'men',
    item: 'Grey Flannel Shirt',
    description: 'Charcoal grey plaid flannel shirt with button-down collar',
    price: 78.99,
    discount: 10,
    imageUrl: '/assets/images/shop/14.webp'
  },
  {
    id: 15,
    brandName: 'Vans',
    type: 'women',
    item: 'White Crop Top',
    description: 'Classic white crop top with "Off The Wall" slogan print',
    price: 44.75,
    discount: 10,
    imageUrl: '/assets/images/shop/15.webp'
  },

  // Converse items
  {
    id: 16,
    brandName: 'Converse',
    type: 'men',
    item: 'Black Star Chevron Tee',
    description: 'Black cotton tee featuring the iconic star chevron logo',
    price: 46.99,
    discount: 10,
    imageUrl: '/assets/images/shop/16.webp'
  },
  {
    id: 17,
    brandName: 'Converse',
    type: 'women',
    item: 'Burgundy Casual Shirt',
    description: 'Soft burgundy casual shirt with relaxed fit and rolled sleeves',
    price: 54.50,
    discount: 10,
    imageUrl: '/assets/images/shop/17.webp'
  },
  {
    id: 18,
    brandName: 'Converse',
    type: 'men',
    item: 'Navy Polo Shirt',
    description: 'Navy blue pique polo shirt with embroidered logo',
    price: 65.00,
    discount: 10,
    imageUrl: '/assets/images/shop/18.webp'
  },
  {
    id: 19,
    brandName: 'Converse',
    type: 'women',
    item: 'Yellow Tank Top',
    description: 'Bright yellow ribbed tank top in lightweight cotton blend',
    price: 41.99,
    discount: 10,
    imageUrl: '/assets/images/shop/19.webp'
  },
  {
    id: 20,
    brandName: 'Converse',
    type: 'men',
    item: 'Grey Pullover Sweatshirt',
    description: 'Heather grey crewneck sweatshirt with fleece interior',
    price: 88.00,
    discount: 10,
    imageUrl: '/assets/images/shop/20.webp'
  },

  // Under Armour items
  {
    id: 21,
    brandName: 'Under Armour',
    type: 'sports',
    item: 'Black HeatGear Shirt',
    description: 'Black compression shirt with HeatGear technology for superior cooling',
    price: 58.99,
    discount: 10,
    imageUrl: '/assets/images/shop/21.webp'
  },
  {
    id: 22,
    brandName: 'Under Armour',
    type: 'kids',
    item: 'Blue Youth Tech Tee',
    description: 'Royal blue tech tee with anti-odor technology for young athletes',
    price: 42.50,
    discount: 10,
    imageUrl: '/assets/images/shop/22.webp'
  },
  {
    id: 23,
    brandName: 'Under Armour',
    type: 'sports',
    item: 'Red ColdGear Base Layer',
    description: 'Red thermal base layer with dual-layer fabric for warmth',
    price: 75.00,
    discount: 10,
    imageUrl: '/assets/images/shop/23.webp'
  },
  {
    id: 24,
    brandName: 'Under Armour',
    type: 'kids',
    item: 'Green Performance Polo',
    description: 'Forest green moisture-wicking polo with anti-pick fabric',
    price: 48.99,
    discount: 10,
    imageUrl: '/assets/images/shop/24.webp'
  },
  {
    id: 25,
    brandName: 'Under Armour',
    type: 'sports',
    item: 'White Tactical Shirt',
    description: 'White tactical performance shirt with raglan sleeves and stretch construction',
    price: 92.50,
    discount: 10,
    imageUrl: '/assets/images/shop/25.webp'
  },

  // New Balance items
  {
    id: 26,
    brandName: 'New Balance',
    type: 'men',
    item: 'Grey Essential Tee',
    description: 'Heather grey essential cotton tee with classic NB logo',
    price: 44.00,
    discount: 10,
    imageUrl: '/assets/images/shop/26.webp'
  },
  {
    id: 27,
    brandName: 'New Balance',
    type: 'men',
    item: 'Navy Running Shirt',
    description: 'Navy blue running shirt with NB DRY moisture-wicking technology',
    price: 56.99,
    discount: 10,
    imageUrl: '/assets/images/shop/27.webp'
  },
  {
    id: 28,
    brandName: 'New Balance',
    type: 'men',
    item: 'Black Quarter-Zip Pullover',
    description: 'Black performance quarter-zip with brushed back fleece',
    price: 98.00,
    discount: 10,
    imageUrl: '/assets/images/shop/28.webp'
  },
  {
    id: 29,
    brandName: 'New Balance',
    type: 'men',
    item: 'Green Athletic Shirt',
    description: 'Olive green athletic shirt with reflective logo for visibility',
    price: 62.50,
    discount: 10,
    imageUrl: '/assets/images/shop/29.webp'
  },
  {
    id: 30,
    brandName: 'New Balance',
    type: 'men',
    item: 'White Sport Polo',
    description: 'Classic white sport polo with moisture management fabric',
    price: 70.00,
    discount: 10,
    imageUrl: '/assets/images/shop/30.webp'
  },

  // Sleepwear items
  {
    id: 31,
    brandName: 'Furla',
    type: 'sleepwear',
    item: 'Silk Lounge Set',
    description: 'Soft silk lounge set with relaxed fit and breathable finish',
    price: 120.00,
    discount: 10,
    imageUrl: '/assets/images/shop/31.webp'
  },
  {
    id: 32,
    brandName: 'Furla',
    type: 'sleepwear',
    item: 'Cotton Pajama Shirt',
    description: 'Lightweight cotton pajama shirt with piping detail',
    price: 68.00,
    discount: 10,
    imageUrl: '/assets/images/shop/32.webp'
  },
  {
    id: 33,
    brandName: 'Prada',
    type: 'sleepwear',
    item: 'Satin Nightgown',
    description: 'Luxurious satin nightgown with adjustable straps',
    price: 140.00,
    discount: 10,
    imageUrl: '/assets/images/shop/33.webp'
  },
  {
    id: 34,
    brandName: 'Prada',
    type: 'sleepwear',
    item: 'Modal Sleep Tee',
    description: 'Ultra-soft modal sleep tee with relaxed neckline',
    price: 75.00,
    discount: 10,
    imageUrl: '/assets/images/shop/34.webp'
  },
  {
    id: 35,
    brandName: 'Kate Spade',
    type: 'sleepwear',
    item: 'Printed Pajama Set',
    description: 'Playful printed pajama set with matching top and pants',
    price: 85.00,
    discount: 10,
    imageUrl: '/assets/images/shop/35.webp'
  },
  {
    id: 36,
    brandName: 'Kate Spade',
    type: 'sleepwear',
    item: 'Robe with Belt',
    description: 'Cozy sleep robe with tie belt and soft brushed fabric',
    price: 95.00,
    discount: 10,
    imageUrl: '/assets/images/shop/36.webp'
  },

  // Men items (additional)
  {
    id: 37,
    brandName: 'Nike',
    type: 'men',
    item: 'Graphite Sports Tee',
    description: 'Breathable graphite sports tee with soft-touch finish',
    price: 49.00,
    discount: 10,
    imageUrl: '/assets/images/shop/1.webp'
  },
  {
    id: 38,
    brandName: 'Nike',
    type: 'men',
    item: 'Tech Knit Crew',
    description: 'Lightweight tech knit crew with stretch comfort',
    price: 62.00,
    discount: 10,
    imageUrl: '/assets/images/shop/2.webp'
  },
  {
    id: 39,
    brandName: 'Adidas',
    type: 'men',
    item: 'Essentials Training Tee',
    description: 'Classic training tee with moisture control',
    price: 45.00,
    discount: 10,
    imageUrl: '/assets/images/shop/3.webp'
  },
  {
    id: 40,
    brandName: 'Adidas',
    type: 'men',
    item: 'Urban Track Top',
    description: 'Relaxed track top with ribbed cuffs',
    price: 88.00,
    discount: 10,
    imageUrl: '/assets/images/shop/4.webp'
  },
  {
    id: 41,
    brandName: 'Vans',
    type: 'men',
    item: 'Skate Long Sleeve',
    description: 'Soft long sleeve tee with minimal Vans branding',
    price: 52.00,
    discount: 10,
    imageUrl: '/assets/images/shop/5.webp'
  },
  {
    id: 42,
    brandName: 'Vans',
    type: 'men',
    item: 'Corduroy Overshirt',
    description: 'Textured corduroy overshirt with button front',
    price: 74.00,
    discount: 10,
    imageUrl: '/assets/images/shop/6.webp'
  },
  {
    id: 43,
    brandName: 'Vans',
    type: 'men',
    item: 'Canvas Work Shirt',
    description: 'Durable canvas work shirt with chest pockets',
    price: 79.00,
    discount: 10,
    imageUrl: '/assets/images/shop/7.webp'
  },
  {
    id: 44,
    brandName: 'Converse',
    type: 'men',
    item: 'Logo Pocket Tee',
    description: 'Cotton pocket tee with tonal logo',
    price: 42.00,
    discount: 10,
    imageUrl: '/assets/images/shop/8.webp'
  },
  {
    id: 45,
    brandName: 'Birkenstock',
    type: 'men',
    item: 'Relaxed Linen Shirt',
    description: 'Airy linen shirt with relaxed silhouette',
    price: 90.00,
    discount: 10,
    imageUrl: '/assets/images/shop/9.webp'
  },
  {
    id: 46,
    brandName: 'Birkenstock',
    type: 'men',
    item: 'Soft Jersey Henley',
    description: 'Jersey henley with three-button placket',
    price: 48.00,
    discount: 10,
    imageUrl: '/assets/images/shop/10.webp'
  },
  {
    id: 47,
    brandName: 'Birkenstock',
    type: 'men',
    item: 'Coastal Sweatshirt',
    description: 'Brushed fleece sweatshirt for everyday comfort',
    price: 72.00,
    discount: 10,
    imageUrl: '/assets/images/shop/11.webp'
  },

  // Women items (additional)
  {
    id: 48,
    brandName: 'Nike',
    type: 'women',
    item: 'Dri-FIT Tank',
    description: 'Lightweight tank with sweat-wicking fabric',
    price: 36.00,
    discount: 10,
    imageUrl: '/assets/images/shop/12.webp'
  },
  {
    id: 49,
    brandName: 'Nike',
    type: 'women',
    item: 'Soft Knit Pullover',
    description: 'Cozy knit pullover with relaxed fit',
    price: 68.00,
    discount: 10,
    imageUrl: '/assets/images/shop/13.webp'
  },
  {
    id: 50,
    brandName: 'Adidas',
    type: 'women',
    item: 'Studio Crop Tee',
    description: 'Cropped tee with breathable panels',
    price: 39.00,
    discount: 10,
    imageUrl: '/assets/images/shop/14.webp'
  },
  {
    id: 51,
    brandName: 'Adidas',
    type: 'women',
    item: 'Run Layer Top',
    description: 'Light running layer with thumbholes',
    price: 54.00,
    discount: 10,
    imageUrl: '/assets/images/shop/15.webp'
  },
  {
    id: 52,
    brandName: 'Adidas',
    type: 'women',
    item: 'Weekend Hoodie',
    description: 'Soft hoodie with roomy hood and kangaroo pocket',
    price: 78.00,
    discount: 10,
    imageUrl: '/assets/images/shop/16.webp'
  },
  {
    id: 53,
    brandName: 'Vans',
    type: 'women',
    item: 'Skate Graphic Tee',
    description: 'Classic tee with seasonal graphic print',
    price: 38.00,
    discount: 10,
    imageUrl: '/assets/images/shop/17.webp'
  },
  {
    id: 54,
    brandName: 'Vans',
    type: 'women',
    item: 'Oversized Crew',
    description: 'Oversized crewneck with soft fleece interior',
    price: 64.00,
    discount: 10,
    imageUrl: '/assets/images/shop/18.webp'
  },
  {
    id: 55,
    brandName: 'Converse',
    type: 'women',
    item: 'Essential Long Sleeve',
    description: 'Lightweight long sleeve with embroidered logo',
    price: 46.00,
    discount: 10,
    imageUrl: '/assets/images/shop/19.webp'
  },
  {
    id: 56,
    brandName: 'Converse',
    type: 'women',
    item: 'Classic Hoodie',
    description: 'Everyday hoodie with soft fleece lining',
    price: 72.00,
    discount: 10,
    imageUrl: '/assets/images/shop/20.webp'
  },
  {
    id: 57,
    brandName: 'Puma',
    type: 'women',
    item: 'Studio Tee',
    description: 'Studio-ready tee with stretch fabric',
    price: 40.00,
    discount: 10,
    imageUrl: '/assets/images/shop/21.webp'
  },
  {
    id: 58,
    brandName: 'Puma',
    type: 'women',
    item: 'Training Tank',
    description: 'Mesh-backed training tank for airflow',
    price: 34.00,
    discount: 10,
    imageUrl: '/assets/images/shop/22.webp'
  },
  {
    id: 59,
    brandName: 'Puma',
    type: 'women',
    item: 'Everyday Crew',
    description: 'Soft everyday crew with ribbed hem',
    price: 58.00,
    discount: 10,
    imageUrl: '/assets/images/shop/23.webp'
  },
  {
    id: 60,
    brandName: 'Puma',
    type: 'women',
    item: 'Cozy Zip Hoodie',
    description: 'Zip hoodie with brushed fleece interior',
    price: 80.00,
    discount: 10,
    imageUrl: '/assets/images/shop/24.webp'
  },

  // Kids items (additional)
  {
    id: 61,
    brandName: 'Adidas',
    type: 'kids',
    item: 'Playday Tee',
    description: 'Soft playday tee with stretch comfort',
    price: 28.00,
    discount: 10,
    imageUrl: '/assets/images/shop/25.webp'
  },
  {
    id: 62,
    brandName: 'Adidas',
    type: 'kids',
    item: 'Weekend Hoodie',
    description: 'Warm hoodie for school and play',
    price: 42.00,
    discount: 10,
    imageUrl: '/assets/images/shop/26.webp'
  },
  {
    id: 63,
    brandName: 'Adidas',
    type: 'kids',
    item: 'Active Shorts Set',
    description: 'Matching tee and shorts set for active kids',
    price: 36.00,
    discount: 10,
    imageUrl: '/assets/images/shop/27.webp'
  },
  {
    id: 64,
    brandName: 'Vans',
    type: 'kids',
    item: 'Skate Logo Tee',
    description: 'Logo tee with soft cotton feel',
    price: 26.00,
    discount: 10,
    imageUrl: '/assets/images/shop/28.webp'
  },
  {
    id: 65,
    brandName: 'Vans',
    type: 'kids',
    item: 'Mini Crew Sweatshirt',
    description: 'Cozy crew sweatshirt for cool days',
    price: 38.00,
    discount: 10,
    imageUrl: '/assets/images/shop/29.webp'
  },
  {
    id: 66,
    brandName: 'Vans',
    type: 'kids',
    item: 'Color Block Hoodie',
    description: 'Color block hoodie with kangaroo pocket',
    price: 44.00,
    discount: 10,
    imageUrl: '/assets/images/shop/30.webp'
  },
  {
    id: 67,
    brandName: 'Under Armour',
    type: 'kids',
    item: 'Sport Tech Tee',
    description: 'Quick-dry tech tee for practice',
    price: 32.00,
    discount: 10,
    imageUrl: '/assets/images/shop/31.webp'
  },
  {
    id: 68,
    brandName: 'Under Armour',
    type: 'kids',
    item: 'Performance Hoodie',
    description: 'Light performance hoodie for warmups',
    price: 48.00,
    discount: 10,
    imageUrl: '/assets/images/shop/32.webp'
  },
  {
    id: 69,
    brandName: 'Puma',
    type: 'kids',
    item: 'Playtime Tee',
    description: 'Everyday tee with playful graphic',
    price: 24.00,
    discount: 10,
    imageUrl: '/assets/images/shop/33.webp'
  },
  {
    id: 70,
    brandName: 'Puma',
    type: 'kids',
    item: 'Track Jacket',
    description: 'Light track jacket with zip front',
    price: 46.00,
    discount: 10,
    imageUrl: '/assets/images/shop/34.webp'
  },
  {
    id: 71,
    brandName: 'Puma',
    type: 'kids',
    item: 'Fleece Joggers',
    description: 'Soft fleece joggers for all-day comfort',
    price: 34.00,
    discount: 10,
    imageUrl: '/assets/images/shop/35.webp'
  },
  {
    id: 72,
    brandName: 'Puma',
    type: 'kids',
    item: 'Sporty Hoodie',
    description: 'Sporty hoodie with warm lining',
    price: 42.00,
    discount: 10,
    imageUrl: '/assets/images/shop/36.webp'
  },
  {
    id: 73,
    brandName: 'Nike',
    type: 'kids',
    item: 'Youth Training Tee',
    description: 'Training tee with soft jersey feel',
    price: 26.00,
    discount: 10,
    imageUrl: '/assets/images/shop/1.webp'
  },
  {
    id: 74,
    brandName: 'Nike',
    type: 'kids',
    item: 'Kids Warmup Hoodie',
    description: 'Warmup hoodie with front pocket',
    price: 44.00,
    discount: 10,
    imageUrl: '/assets/images/shop/2.webp'
  },
  {
    id: 75,
    brandName: 'Nike',
    type: 'kids',
    item: 'Play Shorts Set',
    description: 'Matching set with breathable shorts',
    price: 32.00,
    discount: 10,
    imageUrl: '/assets/images/shop/3.webp'
  },
  {
    id: 76,
    brandName: 'Nike',
    type: 'kids',
    item: 'Active Long Sleeve',
    description: 'Long sleeve top for cooler days',
    price: 30.00,
    discount: 10,
    imageUrl: '/assets/images/shop/4.webp'
  },

  // Sports items (additional)
  {
    id: 77,
    brandName: 'Nike',
    type: 'sports',
    item: 'Pro Training Tee',
    description: 'Compression training tee with sweat control',
    price: 65.00,
    discount: 10,
    imageUrl: '/assets/images/shop/5.webp'
  },
  {
    id: 78,
    brandName: 'Nike',
    type: 'sports',
    item: 'Ventilated Jersey',
    description: 'Ventilated jersey with lightweight mesh',
    price: 72.00,
    discount: 10,
    imageUrl: '/assets/images/shop/6.webp'
  },
  {
    id: 79,
    brandName: 'Nike',
    type: 'sports',
    item: 'Performance Quarter-Zip',
    description: 'Quarter-zip layer for training sessions',
    price: 88.00,
    discount: 10,
    imageUrl: '/assets/images/shop/7.webp'
  },
  {
    id: 80,
    brandName: 'Adidas',
    type: 'sports',
    item: 'Match Day Tee',
    description: 'Match-day tee with quick-dry fabric',
    price: 60.00,
    discount: 10,
    imageUrl: '/assets/images/shop/8.webp'
  },
  {
    id: 81,
    brandName: 'Adidas',
    type: 'sports',
    item: 'Training Layer',
    description: 'Stretch training layer for mobility',
    price: 74.00,
    discount: 10,
    imageUrl: '/assets/images/shop/9.webp'
  },
  {
    id: 82,
    brandName: 'Adidas',
    type: 'sports',
    item: 'Stadium Hoodie',
    description: 'Warm stadium hoodie with fleece lining',
    price: 86.00,
    discount: 10,
    imageUrl: '/assets/images/shop/10.webp'
  },
  {
    id: 83,
    brandName: 'Under Armour',
    type: 'sports',
    item: 'Core Training Hoodie',
    description: 'Core hoodie for training and recovery',
    price: 84.00,
    discount: 10,
    imageUrl: '/assets/images/shop/11.webp'
  },
  {
    id: 84,
    brandName: 'New Balance',
    type: 'sports',
    item: 'NB Sport Tee',
    description: 'Light sport tee with NB DRY finish',
    price: 58.00,
    discount: 10,
    imageUrl: '/assets/images/shop/12.webp'
  },
  {
    id: 85,
    brandName: 'New Balance',
    type: 'sports',
    item: 'Endurance Long Sleeve',
    description: 'Long sleeve with reflective details',
    price: 70.00,
    discount: 10,
    imageUrl: '/assets/images/shop/13.webp'
  },
  {
    id: 86,
    brandName: 'New Balance',
    type: 'sports',
    item: 'Training Crew',
    description: 'Soft training crew with ribbed cuffs',
    price: 64.00,
    discount: 10,
    imageUrl: '/assets/images/shop/14.webp'
  },
  {
    id: 87,
    brandName: 'New Balance',
    type: 'sports',
    item: 'Speed Zip Layer',
    description: 'Zip layer for warmups and cool-downs',
    price: 82.00,
    discount: 10,
    imageUrl: '/assets/images/shop/15.webp'
  },
  {
    id: 88,
    brandName: 'Puma',
    type: 'sports',
    item: 'Active Mesh Tee',
    description: 'Mesh tee with lightweight ventilation',
    price: 52.00,
    discount: 10,
    imageUrl: '/assets/images/shop/16.webp'
  },
  {
    id: 89,
    brandName: 'Puma',
    type: 'sports',
    item: 'Sprint Jersey',
    description: 'Sprint jersey built for speed and comfort',
    price: 66.00,
    discount: 10,
    imageUrl: '/assets/images/shop/17.webp'
  },
  {
    id: 90,
    brandName: 'Puma',
    type: 'sports',
    item: 'Training Hoodie',
    description: 'Warm training hoodie with drawcord hood',
    price: 78.00,
    discount: 10,
    imageUrl: '/assets/images/shop/18.webp'
  },
  {
    id: 91,
    brandName: 'Puma',
    type: 'sports',
    item: 'Lightweight Warmup',
    description: 'Lightweight warmup top with stretch',
    price: 72.00,
    discount: 10,
    imageUrl: '/assets/images/shop/19.webp'
  },

  // Sleepwear items (additional)
  {
    id: 92,
    brandName: 'Furla',
    type: 'sleepwear',
    item: 'Silk Sleep Shorts',
    description: 'Silky sleep shorts with elastic waistband',
    price: 58.00,
    discount: 10,
    imageUrl: '/assets/images/shop/20.webp'
  },
  {
    id: 93,
    brandName: 'Furla',
    type: 'sleepwear',
    item: 'Satin Camisole',
    description: 'Satin camisole with delicate straps',
    price: 62.00,
    discount: 10,
    imageUrl: '/assets/images/shop/21.webp'
  },
  {
    id: 94,
    brandName: 'Prada',
    type: 'sleepwear',
    item: 'Soft Sleep Pants',
    description: 'Soft sleep pants with relaxed fit',
    price: 78.00,
    discount: 10,
    imageUrl: '/assets/images/shop/22.webp'
  },
  {
    id: 95,
    brandName: 'Prada',
    type: 'sleepwear',
    item: 'Evening Lounge Top',
    description: 'Elegant lounge top with smooth drape',
    price: 92.00,
    discount: 10,
    imageUrl: '/assets/images/shop/23.webp'
  },
  {
    id: 96,
    brandName: 'Kate Spade',
    type: 'sleepwear',
    item: 'Soft Sleep Tee',
    description: 'Light sleep tee with playful trim',
    price: 48.00,
    discount: 10,
    imageUrl: '/assets/images/shop/24.webp'
  },
  {
    id: 97,
    brandName: 'Kate Spade',
    type: 'sleepwear',
    item: 'Cozy Lounge Pants',
    description: 'Cozy lounge pants with drawstring waist',
    price: 60.00,
    discount: 10,
    imageUrl: '/assets/images/shop/25.webp'
  },
  {
    id: 98,
    brandName: 'Calvin Klein',
    type: 'sleepwear',
    item: 'Cotton Sleep Set',
    description: 'Breathable cotton sleep set with relaxed fit',
    price: 70.00,
    discount: 10,
    imageUrl: '/assets/images/shop/26.webp'
  },
  {
    id: 99,
    brandName: 'Calvin Klein',
    type: 'sleepwear',
    item: 'Ribbed Sleep Tank',
    description: 'Ribbed tank with soft stretch',
    price: 38.00,
    discount: 10,
    imageUrl: '/assets/images/shop/27.webp'
  },
  {
    id: 100,
    brandName: 'Calvin Klein',
    type: 'sleepwear',
    item: 'Lounge Shorts',
    description: 'Light lounge shorts with elastic waistband',
    price: 34.00,
    discount: 10,
    imageUrl: '/assets/images/shop/28.webp'
  },
  {
    id: 101,
    brandName: 'Calvin Klein',
    type: 'sleepwear',
    item: 'Sleep Robe',
    description: 'Soft robe with tie belt and side pockets',
    price: 82.00,
    discount: 10,
    imageUrl: '/assets/images/shop/29.webp'
  },
  {
    id: 102,
    brandName: "Victoria's Secret",
    type: 'sleepwear',
    item: 'Satin Pajama Set',
    description: 'Satin pajama set with button-up top',
    price: 88.00,
    discount: 10,
    imageUrl: '/assets/images/shop/30.webp'
  },
  {
    id: 103,
    brandName: "Victoria's Secret",
    type: 'sleepwear',
    item: 'Lace Trim Camisole',
    description: 'Camisole with lace trim and soft drape',
    price: 46.00,
    discount: 10,
    imageUrl: '/assets/images/shop/31.webp'
  },
  {
    id: 104,
    brandName: "Victoria's Secret",
    type: 'sleepwear',
    item: 'Modal Sleep Pants',
    description: 'Modal sleep pants with smooth hand feel',
    price: 62.00,
    discount: 10,
    imageUrl: '/assets/images/shop/32.webp'
  },
  {
    id: 105,
    brandName: "Victoria's Secret",
    type: 'sleepwear',
    item: 'Soft Lounge Robe',
    description: 'Soft lounge robe for cozy nights',
    price: 78.00,
    discount: 10,
    imageUrl: '/assets/images/shop/33.webp'
  }
]

export function getMerchandiseByBrand(brandName: string): IMerchandise[] {
  return merchandiseItems.filter(item => item.brandName.toLowerCase() === brandName.toLowerCase())
}

export function getMerchandiseByType(type: string): IMerchandise[] {
  return merchandiseItems.filter(item => item.type.toLowerCase() === type.toLowerCase())
}

export function getMerchandiseByBrandAndType(brandName: string, type: string): IMerchandise[] {
  return merchandiseItems.filter(item => 
    item.brandName.toLowerCase() === brandName.toLowerCase() && item.type.toLowerCase() === type.toLowerCase()
  )
}
