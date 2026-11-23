import Link from "next/link";
import { WalletCards } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center gap-3 text-xl font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white"><WalletCards size={20} /></span>
          MyFinance
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-500">Sign in to manage your finances.</p>
        <form className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-slate-600">Email<input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" type="email" placeholder="you@example.com" /></label>
          <label className="block text-sm font-medium text-slate-600">Password<input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" type="password" placeholder="••••••••" /></label>
          <button className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white" type="submit">Sign in</button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-500">No account? <Link href="/signup" className="font-semibold text-indigo-600">Create one</Link></p>
      </section>
    </main>
  );
}
