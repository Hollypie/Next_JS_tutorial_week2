// placeholder-data-handcraftedhaven.ts
// Sample placeholder data for Handcrafted Haven project
// cSpell:ignore handcraftedhaven

import { User, Product, Review } from './definitions';

// --- Users ---
const users: User[] = [
  // Artisans (sellers)
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
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    account_type: 'artisan',
  },

  // Customers
  {
    id: 'c1d2e3f4-1111-2222-3333-444455556666',
    name: 'Alice Johnson',
    email: 'alice@test.com',
    password: 'password123',
    account_type: 'customer',
  },
  {
    id: 'c2d2e3f4-1111-2222-3333-444455556667',
    name: 'Mark Spencer',
    email: 'mark@test.com',
    password: 'password123',
    account_type: 'customer',
  },
  {
    id: 'c3d2e3f4-1111-2222-3333-444455556668',
    name: 'Nina Patel',
    email: 'nina@test.com',
    password: 'password123',
    account_type: 'customer',
  },
  {
    id: 'c4d2e3f4-1111-2222-3333-444455556669',
    name: 'Tommy Lee',
    email: 'tommy@test.com',
    password: 'password123',
    account_type: 'customer',
  },
  {
    id: 'c5d2e3f4-1111-2222-3333-444455556670',
    name: 'Emily Davis',
    email: 'emily@test.com',
    password: 'password123',
    account_type: 'customer',
  },
];

// --- Products ---
const products: Product[] = [
  {
    id: 'a1111111-1111-1111-1111-111111111111',
    name: 'Handmade Wooden Bowl',
    image_url: '/products/wooden-bowl.jpg',
    price: 4500,
  },
  {
    id: 'b2222222-2222-2222-2222-222222222222',
    name: 'Leather Journal',
    image_url: '/products/leather-journal.jpg',
    price: 3200,
  },
  {
    id: 'c3333333-3333-3333-3333-333333333333',
    name: 'Ceramic Vase',
    image_url: '/products/ceramic-vase.jpg',
    price: 5200,
  },
  {
    id: 'd4444444-4444-4444-4444-444444444444',
    name: 'Knitted Scarf',
    image_url: '/products/knitted-scarf.jpg',
    price: 2800,
  },
  {
    id: 'e5555555-5555-5555-5555-555555555555',
    name: 'Handcrafted Candle',
    image_url: '/products/handcrafted-candle.jpg',
    price: 1500,
  },
];

// --- Reviews ---
const reviews: Review[] = [
  {
    id: 'f6666666-6666-6666-6666-666666666666',
    product_id: 'a1111111-1111-1111-1111-111111111111',
    user_id: 'c1d2e3f4-1111-2222-3333-444455556666',
    content: 'Beautiful craftsmanship! Love the natural finish.',
  },
  {
    id: 'f7777777-7777-7777-7777-777777777777',
    product_id: 'b2222222-2222-2222-2222-222222222222',
    user_id: 'c2d2e3f4-1111-2222-3333-444455556667',
    content: 'The leather quality is excellent, very durable.',
  },
  {
    id: 'f8888888-8888-8888-8888-888888888888',
    product_id: 'c3333333-3333-3333-3333-333333333333',
    user_id: 'c3d2e3f4-1111-2222-3333-444455556668',
    content: 'Looks amazing on my shelf, exactly as pictured.',
  },
  {
    id: 'f9999999-9999-9999-9999-999999999999',
    product_id: 'd4444444-4444-4444-4444-444444444444',
    user_id: 'c4d2e3f4-1111-2222-3333-444455556669',
    content: 'Warm and cozy! The colors are vibrant.',
  },
  {
    id: 'f0000000-0000-0000-0000-000000000000',
    product_id: 'e5555555-5555-5555-5555-555555555555',
    user_id: 'c5d2e3f4-1111-2222-3333-444455556670',
    content: 'Lovely scent and long-lasting burn time.',
  },
];

export { users, products, reviews };
