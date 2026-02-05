"use client";

import { ProductCard } from "@/components/product-card";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/context/toast-context";
import { products } from "@/data/sample-data";
import { formatPrice } from "@/lib/utils";
import { useMemo, useState } from "react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id)) ?? products[0];
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("Description");
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const related = useMemo(() => products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4), [product]);

  return (
    <main id="main-content" className="mx-auto max-w-[1280px] px-4 py-10">
      <p className="text-sm text-pharma-light">Home &gt; Medicines &gt; {product.category} &gt; {product.name}</p>
      <section className="mt-6 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src={product.image} alt={product.name} className="h-96 w-full rounded-lg object-cover" />
          <div className="mt-3 grid grid-cols-4 gap-2">{[1,2,3,4].map((n)=><img key={n} src={product.image} alt={`${product.name} thumbnail ${n}`} className="h-20 w-full rounded-md object-cover"/>)}</div>
        </div>
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-1">{product.rating} ★ ({product.reviews} reviews)</p>
          <p className="text-pharma-light">{product.brand}</p>
          <p className="mt-4 text-3xl font-bold">{formatPrice(product.price)} <span className="text-base text-pharma-light line-through">{formatPrice(product.oldPrice)}</span> <span className="text-base text-pharma-success">{product.discount}% off</span></p>
          <p className="text-sm text-pharma-light">Inclusive of all taxes</p>
          {product.rxRequired && <p className="mt-2 inline-block rounded bg-red-100 px-3 py-1 text-sm text-pharma-error">Prescription required ℹ️</p>}
          <ul className="mt-4 list-disc pl-6 text-sm"><li>Composition: {product.composition}</li><li>Uses: {product.uses}</li><li>Manufacturer: {product.brand}</li><li>Pack size: Strip of 15 tablets</li></ul>
          <div className="mt-4 flex items-center gap-3"><button onClick={()=>setQty(Math.max(1,qty-1))} className="rounded border px-3">-</button><span>{qty}</span><button onClick={()=>setQty(qty+1)} className="rounded border px-3">+</button><span className="text-pharma-success">In Stock</span></div>
          <div className="mt-4 flex gap-3"><button className="min-h-11 rounded-md bg-pharma-primary px-6 text-white" onClick={()=>{for(let i=0;i<qty;i++) addToCart(product.id); showToast('Item added to cart','success');}}>Add to Cart</button><button className="min-h-11 rounded-md border border-pharma-primary px-6 text-pharma-primary">Buy Now</button></div>
          <div className="mt-4 rounded-lg bg-white p-4 shadow-sm"><p>Check delivery by pincode</p><div className="mt-2 flex gap-2"><input placeholder="Enter pincode" className="rounded border px-3 py-2"/><button className="rounded bg-pharma-primary px-4 text-white">Check</button></div><p className="mt-2 text-sm">Estimated delivery: Tomorrow • Free delivery above $50</p></div>
        </div>
      </section>
      <section className="mt-10 rounded-lg bg-white p-6 shadow-sm"><div className="flex flex-wrap gap-2">{["Description","Composition","Uses & Benefits","Side Effects","Reviews (234)"].map((t)=><button key={t} onClick={()=>setTab(t)} className={`rounded-full px-4 py-2 ${tab===t?'bg-pharma-primary text-white':'bg-gray-100'}`}>{t}</button>)}</div><div className="mt-4 text-pharma-light">{tab === "Description" && <p>{product.description}. How to use: follow physician advice. Store in cool dry place.</p>}{tab === "Composition" && <p>Active ingredients: {product.composition}. Inactive ingredients: cellulose, magnesium stearate. Strength: 500mg.</p>}{tab === "Uses & Benefits" && <p>Used for {product.uses}. Benefits include fast and long lasting relief.</p>}{tab === "Side Effects" && <p>Common side effects: {product.sideEffects}. Consult doctor if persistent.</p>}{tab.startsWith("Reviews") && <p>Rating breakdown: 5★ 60%, 4★ 25%, 3★ 10%, 2★ 3%, 1★ 2%.</p>}</div></section>
      <section className="mt-10"><h2 className="text-2xl font-bold">You May Also Like</h2><div className="mt-4 grid gap-6 md:grid-cols-4">{related.map((p)=><ProductCard key={p.id} product={p}/>)}</div></section>
    </main>
  );
}
