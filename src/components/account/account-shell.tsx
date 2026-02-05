import Link from "next/link";

const nav = [
  ["Dashboard", "/account"],
  ["My Orders", "/account/orders"],
  ["Prescriptions", "/account/prescriptions"],
  ["Addresses", "/account/addresses"],
  ["Wishlist", "/account/wishlist"],
  ["Account Settings", "/account/settings"],
];

export function AccountShell({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" className="mx-auto max-w-[1280px] px-4 py-10">
      <div className="grid gap-6 lg:grid-cols-10">
        <aside className="rounded-lg bg-white p-4 shadow-sm lg:col-span-2"><div className="border-b pb-3"><div className="text-3xl">👤</div><p className="font-semibold">John Doe</p><p className="text-sm text-pharma-light">john@example.com</p></div><nav className="mt-4 space-y-2">{nav.map(([label,href])=><Link key={String(label)} href={String(href)} className="block rounded px-2 py-2 hover:bg-blue-50">{label}</Link>)}<button className="w-full rounded bg-red-50 px-2 py-2 text-left text-pharma-error">Logout</button></nav></aside>
        <section className="rounded-lg bg-white p-6 shadow-sm lg:col-span-8">{children}</section>
      </div>
    </main>
  );
}
