'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProductDetailsTableProps {
  product: {
    id: string;
    name: string;
    image_url: string;
    price: number;
  };
}

export default function ProductDetailsTable({ product }: ProductDetailsTableProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Product Name */}
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-900">Product Name</h2>
          <p className="mt-2 text-sm text-gray-700">{product.name}</p>
        </div>

        {/* Image */}
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-900">Product Image</h2>
          <div className="mt-2 w-48 h-48 relative rounded-md overflow-hidden border border-gray-200">
            <Image
                src={product.image_url || '/placeholder.jpg'}
                alt={product.name}
                fill
                className="object-cover"
            />
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-900">Price</h2>
          <p className="mt-2 text-sm text-gray-700">${product.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/products"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Back to Products
        </Link>
        <Link
          href={`/dashboard/products/${product.id}/edit`}
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Edit Product
        </Link>
      </div>
    </div>
  );
}
