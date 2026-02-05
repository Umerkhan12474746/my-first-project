import { AccountShell } from "@/components/account/account-shell";

export default function PrescriptionsPage() {
  return <AccountShell><h1 className="text-2xl font-bold">Prescriptions</h1><div className="mt-4 space-y-2">{["RX-1001","RX-1002","RX-1003"].map((id)=><div key={id} className="rounded border p-3">{id} • Verified • Order PC-1002 <button className="ml-2 underline">View</button></div>)}</div><button className="mt-4 rounded bg-pharma-primary px-4 py-2 text-white">Upload New Prescription</button></AccountShell>;
}
