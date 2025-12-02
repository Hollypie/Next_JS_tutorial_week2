// cSpell:ignore handcraftedhaven

import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { sellers, products, reviews } from '../lib/placeholder-data-handcraftedhaven';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedSellers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS sellers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      account_type TEXT NOT NULL
    );
  `;

  return Promise.all(
    sellers.map(async (seller) => {
      const hashedPassword = await bcrypt.hash(seller.password, 10);
      return sql`
        INSERT INTO sellers (id, name, email, password, account_type)
        VALUES (${seller.id}, ${seller.name}, ${seller.email}, ${hashedPassword}, ${seller.account_type})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );
}

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
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

async function seedReviews() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      product_name TEXT NOT NULL,
      user_name TEXT NOT NULL,
      content TEXT NOT NULL
    );
  `;

  return Promise.all(
    reviews.map(
      (review) => sql`
        INSERT INTO reviews (id, product_name, user_name, content)
        VALUES (${review.id}, ${review.product_name}, ${review.user_name}, ${review.content})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );
}

export async function GET() {
  try {
    await sql.begin(async (sql) => [
      seedSellers(),
      seedProducts(),
      seedReviews(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
