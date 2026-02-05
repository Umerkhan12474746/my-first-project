import { AccountShell } from "@/components/account/account-shell";

export default function SettingsPage() {
  return <AccountShell><h1 className="text-2xl font-bold">Account Settings</h1><div className="mt-4 grid gap-3 md:grid-cols-2">{["Full Name","Email","Phone"].map((f)=><input key={f} placeholder={f} className="min-h-11 rounded border px-3"/>)}</div><h2 className="mt-6 text-xl font-semibold">Change Password</h2><div className="mt-3 grid gap-3 md:grid-cols-2"><input placeholder="New Password" className="min-h-11 rounded border px-3"/><input placeholder="Confirm Password" className="min-h-11 rounded border px-3"/></div><label className="mt-4 block"><input type="checkbox" className="mr-2"/>Receive newsletters and offers</label><button className="mt-4 rounded bg-pharma-primary px-4 py-2 text-white">Save Changes</button><button className="ml-3 rounded border border-pharma-error px-4 py-2 text-pharma-error">Delete Account</button></AccountShell>;
}
