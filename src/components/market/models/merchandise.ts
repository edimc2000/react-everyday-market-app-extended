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
  }
]

export function getMerchandiseByBrand(brandName: string): IMerchandise[] {
  return merchandiseItems.filter(item => item.brandName === brandName)
}

export function getMerchandiseByType(type: string): IMerchandise[] {
  return merchandiseItems.filter(item => item.type === type)
}

export function getMerchandiseByBrandAndType(brandName: string, type: string): IMerchandise[] {
  return merchandiseItems.filter(item => 
    item.brandName === brandName && item.type === type
  )
}
