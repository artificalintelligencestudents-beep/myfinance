import Link from "next/link";
import { WalletCards } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center gap-3 text-xl font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white"><WalletCards size={20} /></span>
          MyFinance
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Create an account</h1>
        <p className="mt-2 text-sm text-slate-500">Start tracking your money today.</p>
        <form className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-slate-600">Name<input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" placeholder="Alex Morgan" /></label>
          <label className="block text-sm font-medium text-slate-600">Email<input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" type="email" placeholder="you@example.com" /></label>
          <label className="block text-sm font-medium text-slate-600">Password<input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3" type="password" placeholder="At least 8 characters" /></label>
          <button className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white" type="submit">Create account</button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-500">Already registered? <Link href="/login" className="font-semibold text-indigo-600">Sign in</Link></p>
      </section>
    </main>
  );
}
