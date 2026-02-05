import { AccountShell } from "@/components/account/account-shell";

export default function AccountPage() {
  return <AccountShell><h1 className="text-3xl font-bold">Hello, John!</h1><div className="mt-6 grid gap-4 md:grid-cols-4">{[["Total Orders","24"],["Active Orders","3"],["Saved Addresses","2"],["Wishlist Items","9"]].map(([t,v])=><div key={String(t)} className="rounded-lg border p-4"><p className="text-sm text-pharma-light">{t}</p><p className="text-2xl font-bold">{v}</p></div>)}</div><h2 className="mt-8 text-xl font-semibold">Recent Orders</h2><div className="mt-3 space-y-2">{["#PC-1001","#PC-1000","#PC-998"].map((o)=><div key={o} className="rounded border p-3">{o} • Delivered</div>)}</div></AccountShell>;
}
