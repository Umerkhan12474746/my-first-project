"use client";

import { useState } from "react";

export default function PrescriptionPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main id="main-content" className="mx-auto max-w-[1280px] px-4 py-10">
      <section className="rounded-lg bg-gradient-to-r from-pharma-primary to-pharma-secondary p-8 text-white"><h1 className="text-4xl font-bold">Upload Your Prescription</h1><p>Upload valid prescription and get your medicines delivered</p><p className="mt-2">Upload → Verify → Deliver</p></section>
      <section className="mt-8 grid gap-6 lg:grid-cols-5">
        <div className="rounded-lg bg-white p-6 shadow-sm lg:col-span-3"><h2 className="text-2xl font-semibold">Upload Form</h2><div className="mt-4 rounded-lg border-2 border-dashed p-10 text-center">Drag prescription here or click to browse<br/>JPG, PNG, PDF (Max 5MB)</div><button className="mt-4 rounded-md bg-pharma-primary px-4 py-2 text-white">Upload another prescription</button></div>
        <form className="rounded-lg bg-white p-6 shadow-sm lg:col-span-2" onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}}><h3 className="text-xl font-semibold">Patient Details</h3><div className="mt-3 space-y-3">{["Full Name","Phone Number","Email","Age"].map((f)=><input key={f} required placeholder={f} className="min-h-11 w-full rounded-md border px-3" />)}<div><p>Gender</p><label><input type="radio" name="gender"/> Male</label><label className="ml-3"><input type="radio" name="gender"/> Female</label></div><textarea placeholder="Address" className="w-full rounded-md border p-3" /></div><button className="mt-4 min-h-11 w-full rounded-md bg-pharma-success text-white">Submit</button></form>
      </section>
      <section className="mt-8 rounded-lg bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">Prescription Guidelines</h2><ul className="mt-3 space-y-2 text-sm"><li>✓ Valid prescription from registered doctor</li><li>✓ Doctor&apos;s signature and stamp clearly visible</li><li>✓ Patient name must match order details</li><li>✓ Prescription should be recent (within 6 months)</li><li>✓ Clear image (not blurry)</li></ul></section>
      {submitted && <section className="mt-8 rounded-lg bg-green-50 p-6"><h3 className="text-2xl font-bold text-pharma-success">Success! Prescription ID: RX-2026-10012</h3><p>Status: Uploaded → Under Review → Verified → Order Placed (2-4 hours)</p><button className="mt-3 rounded-md bg-pharma-primary px-4 py-2 text-white">Track Status</button></section>}
    </main>
  );
}
