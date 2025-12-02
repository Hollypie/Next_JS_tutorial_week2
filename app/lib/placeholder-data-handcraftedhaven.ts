// placeholder-data.ts
// Sample placeholder data for Handcrafted Haven project
// cSpell:ignore handcraftedhaven

import { Seller, Product, Review } from './definitions';

// --- Sellers ---
const sellers: Seller[] = [
  {
    id: '1f5c8b32-1d2a-4d57-9b8a-1e6b0f9a2a01',
    name: 'Olivia Woodcraft',
    email: 'olivia@handcrafted.com',
    password: 'password123',
    account_type: 'artisan',
  },
  {
    id: '2a7f9c21-3e4b-4d67-bc1d-3f8c2a9e7f22',
    name: 'Liam Leatherworks',
    email: 'liam@handcrafted.com',
    password: 'password123',
    account_type: 'artisan',
  },
  {
    id: '3c9d7e45-6f8a-4a21-a5d7-9c0e1f2b3d34',
    name: 'Sophia Stonecraft',
    email: 'sophia@handcrafted.com',
    password: 'password123',
    account_type: 'artisan',
  },
];

// --- Products ---
const products: Product[] = [
  {
    id: 'p1',
    name: 'Handmade Wooden Bowl',
    image_url: '/products/wooden-bowl.jpg',
    price: 4500, // cents ($45.00)
  },
  {
    id: 'p2',
    name: 'Leather Journal',
    image_url: '/products/leather-journal.jpg',
    price: 3200,
  },
  {
    id: 'p3',
    name: 'Ceramic Vase',
    image_url: '/products/ceramic-vase.jpg',
    price: 5200,
  },
  {
    id: 'p4',
    name: 'Knitted Scarf',
    image_url: '/products/knitted-scarf.jpg',
    price: 2800,
  },
  {
    id: 'p5',
    name: 'Handcrafted Candle',
    image_url: '/products/handcrafted-candle.jpg',
    price: 1500,
  },
];

// --- Reviews ---
const reviews: Review[] = [
  {
    id: 'r1',
    product_name: 'Handmade Wooden Bowl',
    user_name: 'Alice Johnson',
    content: 'Beautiful craftsmanship! Love the natural finish.',
  },
  {
    id: 'r2',
    product_name: 'Leather Journal',
    user_name: 'Mark Spencer',
    content: 'The leather quality is excellent, very durable.',
  },
  {
    id: 'r3',
    product_name: 'Ceramic Vase',
    user_name: 'Nina Patel',
    content: 'Looks amazing on my shelf, exactly as pictured.',
  },
  {
    id: 'r4',
    product_name: 'Knitted Scarf',
    user_name: 'Tommy Lee',
    content: 'Warm and cozy! The colors are vibrant.',
  },
  {
    id: 'r5',
    product_name: 'Handcrafted Candle',
    user_name: 'Emily Davis',
    content: 'Lovely scent and long-lasting burn time.',
  },
];

export { sellers, products, reviews };
