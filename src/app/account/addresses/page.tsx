import { AccountShell } from "@/components/account/account-shell";

export default function AddressesPage() {
  return <AccountShell><h1 className="text-2xl font-bold">Addresses</h1><div className="mt-4 grid gap-3 md:grid-cols-2">{["Home","Office"].map((a)=><div key={a} className="rounded border p-3">{a} Address <span className="ml-2 text-xs">Default</span><div className="mt-2"><button className="mr-2 underline">Edit</button><button className="underline">Delete</button></div></div>)}</div><button className="mt-4 rounded bg-pharma-primary px-4 py-2 text-white">Add New Address</button></AccountShell>;
}
