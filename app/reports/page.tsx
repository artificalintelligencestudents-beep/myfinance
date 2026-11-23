import Sidebar from "@/components/Sidebar";
import Charts from "@/components/Charts";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Sidebar />
      <main className="md:ml-[236px]">
        <header className="flex h-[78px] items-center border-b border-slate-200 bg-white px-5 md:px-8">
          <h1 className="text-xl font-bold text-slate-900">Reports</h1>
        </header>
        <div className="p-5 md:p-8">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-900">Financial overview</h2>
            <Charts />
          </section>
        </div>
      </main>
    </div>
  );
}
