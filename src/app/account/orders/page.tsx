import Link from "next/link";
import { AccountShell } from "@/components/account/account-shell";

export default function OrdersPage() {
  return <AccountShell><h1 className="text-2xl font-bold">My Orders</h1><div className="mt-3 flex gap-2">{["All Orders","Processing","Delivered","Cancelled"].map((t)=><button key={t} className="rounded-full bg-gray-100 px-3 py-1 text-sm">{t}</button>)}</div><div className="mt-4 space-y-3">{[1,2,3].map((n)=><div key={n} className="rounded border p-4">Order ID: PC-10{n} • Total: $56.{n}0 • Status: Processing <div className="mt-2"><Link href={`/account/orders/${n}`} className="text-pharma-primary">View Details</Link></div></div>)}</div></AccountShell>;
}
