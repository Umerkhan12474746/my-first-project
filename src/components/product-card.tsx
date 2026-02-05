"use client";

import { useCart } from "@/context/cart-context";
import { useToast } from "@/context/toast-context";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  return (
    <article className="rounded-lg bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 overflow-hidden rounded-lg">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
        {product.rxRequired && <span className="absolute left-2 top-2 rounded bg-pharma-error px-2 py-1 text-xs text-white">Rx Required</span>}
        <span className="absolute right-2 top-2 rounded bg-pharma-success px-2 py-1 text-xs text-white">{product.discount}% OFF</span>
      </div>
      <Link href={`/product/${product.id}`} className="mt-3 block font-semibold hover:text-pharma-primary">{product.name}</Link>
      <p className="text-sm text-pharma-light">{product.brand}</p>
      <p className="text-sm">⭐ {product.rating} ({product.reviews})</p>
      <p className="mt-2"><span className="text-lg font-bold text-pharma-dark">{formatPrice(product.price)}</span> <span className="text-sm text-pharma-light line-through">{formatPrice(product.oldPrice)}</span></p>
      <button onClick={() => {addToCart(product.id); showToast("Item added to cart", "success");}} className="mt-3 min-h-11 w-full rounded-md bg-pharma-primary px-4 py-2 text-white hover:bg-blue-700">Add to Cart</button>
    </article>
  );
}

export function ProductSkeleton() {
  return <div className="animate-pulse rounded-lg bg-white p-4 shadow-sm"><div className="h-40 rounded bg-gray-200"/><div className="mt-3 h-4 rounded bg-gray-200"/><div className="mt-2 h-3 w-1/2 rounded bg-gray-200"/><div className="mt-3 h-10 rounded bg-gray-200"/></div>;
}
