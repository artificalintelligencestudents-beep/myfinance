import Sidebar from "@/components/Sidebar";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Sidebar />
      <main className="md:ml-[236px]">
        <header className="flex h-[78px] items-center border-b border-slate-200 bg-white px-5 md:px-8">
          <h1 className="text-xl font-bold text-slate-900">Settings</h1>
        </header>
        <div className="p-5 md:p-8">
          <section className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-bold text-slate-900">Profile</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-600">Name<input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" defaultValue="Alex Morgan" /></label>
              <label className="text-sm font-medium text-slate-600">Currency<select className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" defaultValue="USD"><option>USD</option><option>EUR</option><option>GBP</option></select></label>
              <label className="text-sm font-medium text-slate-600 sm:col-span-2">Email<input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" defaultValue="alex@example.com" /></label>
            </div>
            <button className="mt-6 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white">Save changes</button>
          </section>
        </div>
      </main>
    </div>
  );
}
