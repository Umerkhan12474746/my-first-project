import { SimplePage } from "@/components/simple-page";

export default function FaqPage() { return <SimplePage title="Frequently Asked Questions"><input placeholder="Search FAQs" className="min-h-11 w-full rounded border px-3"/>{["Ordering & Payment","Shipping & Delivery","Returns & Refunds","Prescription Upload","Account & Privacy"].map((c)=><details key={c} className="mt-3 rounded border p-3"><summary>{c}</summary><p className="mt-2">Sample answer content for {c}.</p></details>)}</SimplePage>; }
