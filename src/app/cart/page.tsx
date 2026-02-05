"use client";

import { useCart } from "@/context/cart-context";
import { products } from "@/data/sample-data";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, clearCart, total } = useCart();
  const detailed = cart.map((item) => ({ item, product: products.find((p) => p.id === item.productId)! }));
  const hasRx = detailed.some((d) => d.product.rxRequired);
  if (!cart.length) return <main id="main-content" className="mx-auto max-w-3xl px-4 py-20 text-center"><div className="text-7xl">🛒</div><h1 className="mt-4 text-3xl font-bold">Your cart is empty</h1><Link href="/shop" className="mt-6 inline-block rounded-md bg-pharma-primary px-6 py-3 text-white">Continue Shopping</Link></main>;

  const discount = total * 0.1;
  const tax = (total - discount) * 0.05;
  const delivery = total > 50 ? 0 : 5;

  return (
    <main id="main-content" className="mx-auto max-w-[1280px] px-4 py-10"><div className="grid gap-6 lg:grid-cols-10"><section className="rounded-lg bg-white p-6 shadow-sm lg:col-span-7"><h1 className="text-3xl font-bold">Shopping Cart ({cart.length} items)</h1><div className="mt-6 space-y-4">{detailed.map(({item,product})=><div key={product.id} className="grid items-center gap-3 rounded-lg border p-3 md:grid-cols-6"><img src={product.image} alt={product.name} className="h-16 w-16 rounded object-cover"/><p className="md:col-span-2">{product.name} {product.rxRequired && <span className="text-xs text-pharma-error">Rx Required</span>}</p><p>{formatPrice(product.price)}</p><div className="flex items-center gap-2"><button onClick={()=>updateQty(product.id, item.quantity-1)}>-</button><span>{item.quantity}</span><button onClick={()=>updateQty(product.id, item.quantity+1)}>+</button></div><p>{formatPrice(product.price*item.quantity)}</p><button onClick={()=>removeFromCart(product.id)}>🗑️</button></div>)}</div><div className="mt-6 flex gap-3"><Link href="/shop" className="rounded border px-4 py-2">Continue Shopping</Link><button onClick={clearCart} className="rounded border px-4 py-2">Clear Cart</button></div></section><aside className="space-y-4 lg:col-span-3">{hasRx && <div className="rounded-lg bg-yellow-100 p-4">Prescription Required for some items <Link className="ml-1 underline" href="/prescription">Upload Prescription</Link></div>}<div className="rounded-lg bg-white p-6 shadow-sm"><h2 className="text-xl font-semibold">Price Details</h2><p className="mt-3 flex justify-between"><span>Subtotal</span><span>{formatPrice(total)}</span></p><p className="flex justify-between text-pharma-success"><span>Discount</span><span>-{formatPrice(discount)}</span></p><p className="flex justify-between"><span>Delivery</span><span>{delivery===0?'Free':formatPrice(delivery)}</span></p><p className="flex justify-between"><span>GST</span><span>{formatPrice(tax)}</span></p><hr className="my-3"/><p className="flex justify-between text-lg font-bold"><span>Total</span><span>{formatPrice(total-discount+tax+delivery)}</span></p><details className="mt-4"><summary>Have a Coupon?</summary><div className="mt-2 flex gap-2"><input className="w-full rounded border px-2"/><button className="rounded bg-pharma-primary px-3 text-white">Apply</button></div></details><Link href="/checkout" className="mt-4 block rounded-md bg-pharma-primary py-3 text-center text-white">Proceed to Checkout</Link></div></aside></div></main>
  );
}
