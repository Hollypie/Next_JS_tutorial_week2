// cSpell:ignore handcraftedhaven

import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { users, products, reviews } from '../lib/placeholder-data-handcraftedhaven';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// ------------------------------
// Seed Users
// ------------------------------
async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      account_type TEXT NOT NULL CHECK (account_type IN ('artisan', 'customer'))
    );
  `;

  return Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return sql`
        INSERT INTO users (id, name, email, password, account_type)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.account_type})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );
}

// ------------------------------
// Seed Products
// ------------------------------
async function seedProducts() {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name TEXT NOT NULL,
      image_url TEXT NOT NULL,
      price INT NOT NULL
    );
  `;

  return Promise.all(
    products.map(
      (product) => sql`
        INSERT INTO products (id, name, image_url, price)
        VALUES (${product.id}, ${product.name}, ${product.image_url}, ${product.price})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );
}

// ------------------------------
// Seed Reviews
// ------------------------------
async function seedReviews() {
  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      product_id UUID REFERENCES products(id),
      user_id UUID REFERENCES users(id),
      content TEXT NOT NULL
    );
  `;

  return Promise.all(
    reviews.map(
      (review) => sql`
        INSERT INTO reviews (id, product_id, user_id, content)
        VALUES (${review.id}, ${review.product_id}, ${review.user_id}, ${review.content})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );
}

// ------------------------------
// Seed All Data
// ------------------------------
export async function GET() {
  try {
    await sql.begin(async () => {
      // Run each seed sequentially to respect foreign key dependencies
      await seedUsers();
      await seedProducts();
      await seedReviews();
    });

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
