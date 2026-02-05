"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cart-context";

const links = ["Home", "Shop Medicines", "Upload Prescription", "Health Articles", "About Us", "Contact"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState("");
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50">
      <div className="h-10 bg-pharma-secondary text-xs text-white">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4">
          <div className="flex gap-4"><span>📞 24/7 Helpline: 1-800-PHARMACY</span><span className="hidden sm:inline">📧 support@pharmacy.com</span></div>
          <div className="flex items-center gap-4"><a href="#" className="underline">Track Order</a><select className="rounded bg-white/20 px-2"><option>English</option></select></div>
        </div>
      </div>
      <nav className="h-20 bg-white shadow-md">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between gap-4 px-4">
          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">☰</button>
          <Link href="/" className="text-xl font-bold text-pharma-primary">✚ PharmaCare+</Link>
          <div className="hidden items-center gap-4 text-sm lg:flex">
            {links.map((link) => (
              <Link key={link} href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-pharma-primary">{link}</Link>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center rounded-md border px-3 py-2"><span>🔍</span><input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search medicines..." className="ml-2 outline-none" aria-label="Search medicines"/></div>
            <Link href="/cart" className="relative" aria-label="Cart">🛒<span className="absolute -right-3 -top-2 rounded-full bg-pharma-error px-1 text-xs text-white">{itemCount}</span></Link>
            <details className="relative"><summary className="cursor-pointer list-none">👤</summary><div className="absolute right-0 mt-2 w-40 rounded-lg border bg-white p-2 shadow"><a className="block p-2" href="#">Login</a><a className="block p-2" href="#">Register</a></div></details>
          </div>
        </div>
      </nav>
      {mobileOpen && <div className="fixed inset-0 z-[60] bg-black/40" onClick={() => setMobileOpen(false)}><aside className="h-full w-72 bg-white p-4" onClick={(e)=>e.stopPropagation()}><button onClick={() => setMobileOpen(false)}>✕</button><div className="mt-6 flex flex-col gap-4">{links.map((link)=><Link key={link} href={link==="Home"?"/":`/${link.toLowerCase().replace(/\s+/g,"-")}`}>{link}</Link>)}</div></aside></div>}
    </header>
  );
}
