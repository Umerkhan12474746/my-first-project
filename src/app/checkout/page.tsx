"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  return (
    <main id="main-content" className="mx-auto max-w-[1280px] px-4 py-10">
      <div className="mb-8 flex items-center justify-center gap-4">{[1,2,3].map((s)=><button key={s} onClick={()=>setStep(s)} className={`rounded-full px-4 py-2 ${step===s?'bg-pharma-primary text-white':'bg-gray-200'}`}>Step {s}: {s===1?'Delivery Address':s===2?'Payment Method':'Review Order'}</button>)}</div>
      <div className="grid gap-6 lg:grid-cols-10">
        <section className="rounded-lg bg-white p-6 shadow-sm lg:col-span-7">
          {step===1 && <div><h1 className="text-2xl font-bold">Delivery Address</h1><div className="mt-4 rounded border p-3">Saved Address • Deliver Here</div><div className="mt-4 grid gap-3 md:grid-cols-2">{["Full Name","Mobile Number","Pincode","Address Line 1","Address Line 2","City","State"].map((f)=><input key={f} placeholder={f} className="min-h-11 rounded border px-3"/>)}</div><button onClick={()=>setStep(2)} className="mt-4 rounded bg-pharma-primary px-4 py-2 text-white">Continue</button></div>}
          {step===2 && <div><h1 className="text-2xl font-bold">Payment Method</h1><div className="mt-4 space-y-3">{["Credit/Debit Card","UPI","Net Banking","Wallets","Cash on Delivery"].map((m)=><label key={m} className="block rounded border p-3"><input type="radio" name="payment" className="mr-2"/>{m}</label>)}</div><button onClick={()=>setStep(3)} className="mt-4 rounded bg-pharma-primary px-4 py-2 text-white">Place Order</button></div>}
          {step===3 && <div><h1 className="text-2xl font-bold">Order Review</h1><p className="mt-3">Delivery address, payment method and item list shown here.</p><label className="mt-4 block"><input type="checkbox" className="mr-2"/>I agree to terms and conditions</label><Link href="/order-confirmation" className="mt-4 inline-block rounded bg-pharma-success px-4 py-2 text-white">Confirm Order</Link></div>}
        </section>
        <aside className="rounded-lg bg-white p-6 shadow-sm lg:col-span-3"><h2 className="text-xl font-semibold">Order Summary</h2><p className="mt-2 text-sm text-pharma-light">Items, quantities, pricing, estimated delivery date and security badges.</p></aside>
      </div>
    </main>
  );
}
