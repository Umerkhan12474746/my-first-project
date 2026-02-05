"use client";

import { articles, categories, products, testimonials } from "@/data/sample-data";
import { ProductCard } from "@/components/product-card";
import { useEffect, useMemo, useState } from "react";

export function HomeSections() {
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const suggestions = useMemo(() => products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).slice(0, 5), [search]);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main id="main-content">
      <section className="bg-gradient-to-r from-blue-50 to-white py-10">
        <div className="mx-auto grid h-auto max-w-[1280px] items-center gap-8 px-4 md:h-[500px] md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-pharma-dark">Your Trusted Healthcare Partner</h1>
            <p className="mt-4 text-xl text-pharma-light">Quality Medicines Delivered to Your Doorstep - Fast, Safe & Reliable</p>
            <div className="mt-6 flex gap-3"><button className="min-h-11 rounded-md bg-pharma-primary px-6 py-3 text-white">Order Medicines</button><button className="min-h-11 rounded-md border border-pharma-primary px-6 py-3 text-pharma-primary">Upload Prescription</button></div>
            <p className="mt-4 text-sm text-pharma-light">✓ Licensed Pharmacy ✓ 100% Genuine ✓ Secure Payment</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-md"><img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80" alt="Pharmacist delivering medicines" className="h-80 w-full rounded-lg object-cover"/></div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[800px] px-4">
          <div className="relative flex rounded-lg border p-2 shadow-sm"><span className="p-3">💊</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for medicines, health products..." className="w-full outline-none"/><button className="rounded-md bg-pharma-primary px-6 text-white">Search</button>
            {search && <ul className="absolute left-0 top-14 z-10 w-full rounded-md border bg-white shadow-lg">{suggestions.map((s) => <li key={s.id} className="px-4 py-2 hover:bg-blue-50">{s.name}</li>)}</ul>}
          </div>
          <p className="mt-4 text-sm">Popular searches: {['Paracetamol','Vitamin D','Blood Pressure Monitor'].map(tag => <span key={tag} className="ml-2 rounded-full bg-gray-100 px-3 py-1">{tag}</span>)}</p>
        </div>
      </section>

      <section className="bg-pharma-bg py-20"><div className="mx-auto max-w-[1280px] px-4"><h2 className="text-center text-3xl font-bold">Shop by Category</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{categories.map((c)=><div key={c.name} className="rounded-lg bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="text-5xl">{c.icon}</div><h3 className="mt-3 font-bold">{c.name}</h3><p className="text-sm text-pharma-light">{c.count}</p></div>)}</div></div></section>

      <section className="py-20"><div className="mx-auto max-w-[1280px] px-4"><div className="flex items-center justify-between"><h2 className="text-3xl font-bold">Featured Products</h2><a href="/shop" className="text-pharma-primary">View All</a></div><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0,8).map((product)=><ProductCard key={product.id} product={product}/>)}</div></div></section>

      <section className="bg-gradient-to-r from-pharma-primary to-pharma-secondary py-16 text-white"><div className="mx-auto grid max-w-[1280px] gap-6 px-4 md:grid-cols-2"><div className="text-7xl">📄</div><div><h2 className="text-3xl font-bold">Have a Prescription?</h2><p className="mt-2">Upload your prescription and we&apos;ll prepare your order</p><button className="mt-4 rounded-md bg-white px-6 py-3 font-semibold text-pharma-primary">Upload Now</button><p className="mt-3 text-sm">1. Upload 2. Verify 3. Deliver</p></div></div></section>

      <section className="bg-white py-20"><div className="mx-auto max-w-[1280px] px-4"><h2 className="text-center text-3xl font-bold">Why Choose PharmaCare+</h2><div className="mt-8 grid gap-6 md:grid-cols-4">{[["🎓","Licensed Pharmacy","Certified and regulated by health authorities"],["🚚","Fast Delivery","Free delivery on orders above $50"],["💳","Secure Payment","100% safe and encrypted transactions"],["🎧","24/7 Support","Always here to help you"]].map(([icon,title,desc])=><div key={String(title)} className="rounded-lg border p-6 text-center"><div className="text-4xl">{icon}</div><h3 className="mt-3 font-semibold">{title}</h3><p className="text-sm text-pharma-light">{desc}</p></div>)}</div></div></section>

      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20"><div className="mx-auto max-w-[1280px] px-4"><h2 className="text-center text-3xl font-bold">What Our Customers Say</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{[0,1,2].map((offset)=>{const t=testimonials[(index+offset)%testimonials.length]; return <div key={`${t.name}-${offset}`} className="rounded-lg bg-white p-6 shadow"><p>⭐⭐⭐⭐⭐</p><p className="mt-3 text-pharma-light">“{t.quote}”</p><p className="mt-4 font-semibold">{t.name}</p><p className="text-sm text-pharma-light">{t.location}</p></div>;})}</div><div className="mt-4 text-center"><button onClick={()=>setIndex((index-1+testimonials.length)%testimonials.length)} aria-label="Previous">←</button><button onClick={()=>setIndex((index+1)%testimonials.length)} className="ml-4" aria-label="Next">→</button></div></div></section>

      <section className="bg-white py-20"><div className="mx-auto max-w-[1280px] px-4"><div className="flex items-center justify-between"><h2 className="text-3xl font-bold">Latest Health Articles</h2><a href="#" className="text-pharma-primary">Read More</a></div><div className="mt-8 grid gap-6 md:grid-cols-3">{articles.slice(0,3).map((a)=><article key={a.id} className="rounded-lg border"><img src={a.image} alt={a.title} className="h-40 w-full rounded-t-lg object-cover" loading="lazy"/><div className="p-4"><span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-pharma-primary">{a.category}</span><h3 className="mt-3 font-semibold">{a.title}</h3><p className="line-clamp-2 text-sm text-pharma-light">{a.excerpt}</p><p className="mt-2 text-xs text-pharma-light">{a.date}</p></div></article>)}</div></div></section>

      <section className="bg-pharma-primary py-16 text-center text-white"><h2 className="text-3xl font-bold">Stay Updated on Health & Wellness</h2><p className="mt-2">Subscribe to our newsletter for health tips and exclusive offers</p><div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 px-4 sm:flex-row"><input placeholder="Enter email" className="min-h-11 flex-1 rounded-md px-4 text-pharma-dark"/><button className="min-h-11 rounded-md bg-pharma-success px-6">Subscribe</button></div><p className="mt-2 text-sm">We respect your privacy</p></section>
    </main>
  );
}
