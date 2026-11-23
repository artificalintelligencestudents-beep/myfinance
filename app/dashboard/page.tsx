import Sidebar from "@/components/Sidebar";
import DashboardCards from "@/components/DashboardCards";
import Charts from "@/components/Charts";
import TransactionTable from "@/components/TransactionTable";
import { calculateTotals } from "@/lib/calculations";
import type { Transaction } from "@/types/transaction";

const transactions: Transaction[] = [
  { id: "1", description: "Salary", category: "Income", amount: 5200, type: "income", date: "Jun 28, 2026" },
  { id: "2", description: "Whole Foods", category: "Groceries", amount: 124.50, type: "expense", date: "Jun 27, 2026" },
  { id: "3", description: "Spotify", category: "Entertainment", amount: 12.99, type: "expense", date: "Jun 26, 2026" },
  { id: "4", description: "Freelance Project", category: "Income", amount: 850, type: "income", date: "Jun 24, 2026" },
];

export default function DashboardPage() {
  const totals = calculateTotals(transactions);

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Sidebar />
      <main className="md:ml-[236px]">
        <header className="flex h-[78px] items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
          <div>
            <p className="text-xs font-medium text-slate-400">MONDAY, JUNE 29</p>
            <h1 className="mt-1 text-xl font-bold text-slate-900">Good morning, Alex</h1>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">A</div>
        </header>

        <div className="mx-auto max-w-[1180px] p-5 md:p-8">
          <DashboardCards {...totals} />

          <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.7fr)_minmax(260px,.7fr)]">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-slate-900">Cash flow</h2>
                  <p className="mt-1 text-xs text-slate-400">Income and expenses over time</p>
                </div>
                <select className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600" defaultValue="6">
                  <option value="6">Last 6 months</option>
                </select>
              </div>
              <Charts />
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-bold text-slate-900">Budget</h2>
              <p className="mt-1 text-xs text-slate-400">Monthly spending limit</p>
              <div className="mt-8 text-center">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-[12px] border-indigo-100 border-t-indigo-600 border-r-indigo-600">
                  <div>
                    <p className="text-xl font-bold text-slate-900">$2,840</p>
                    <p className="text-xs text-slate-400">of $4,000</p>
                  </div>
                </div>
              </div>
              <p className="mt-7 text-center text-sm font-medium text-emerald-600">$1,160 remaining</p>
            </section>
          </div>

          <section className="mt-5 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="font-bold text-slate-900">Recent transactions</h2>
              <a href="/transactions" className="text-xs font-semibold text-indigo-600 no-underline">View all</a>
            </div>
            <TransactionTable transactions={transactions} />
          </section>
        </div>
      </main>
    </div>
  );
}
