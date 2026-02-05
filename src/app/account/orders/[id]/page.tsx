import { AccountShell } from "@/components/account/account-shell";

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <AccountShell><h1 className="text-2xl font-bold">Order Details #{id}</h1><p className="mt-3">Timeline: Placed → Confirmed → Shipped → Out for Delivery → Delivered</p><p className="mt-2">Delivery address, payment method, items and pricing shown here.</p><div className="mt-4 flex gap-2"><button className="rounded border px-3 py-2">Cancel Order</button><button className="rounded bg-pharma-primary px-3 py-2 text-white">Download Invoice</button></div></AccountShell>;
}
