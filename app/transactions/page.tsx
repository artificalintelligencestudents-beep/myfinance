import Sidebar from "@/components/Sidebar";
import TransactionTable from "@/components/TransactionTable";
import type { Transaction } from "@/types/transaction";

const transactions: Transaction[] = [
  { id: "1", description: "Salary", category: "Income", amount: 5200, type: "income", date: "Jun 28, 2026" },
  { id: "2", description: "Whole Foods", category: "Groceries", amount: 124.50, type: "expense", date: "Jun 27, 2026" },
  { id: "3", description: "Spotify", category: "Entertainment", amount: 12.99, type: "expense", date: "Jun 26, 2026" },
  { id: "4", description: "Freelance Project", category: "Income", amount: 850, type: "income", date: "Jun 24, 2026" },
  { id: "5", description: "Electric Bill", category: "Utilities", amount: 96.20, type: "expense", date: "Jun 22, 2026" },
];

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Sidebar />
      <main className="md:ml-[236px]">
        <header className="flex h-[78px] items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
          <h1 className="text-xl font-bold text-slate-900">Transactions</h1>
          <button className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white">Add transaction</button>
        </header>
        <div className="p-5 md:p-8">
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <TransactionTable transactions={transactions} />
          </section>
        </div>
      </main>
    </div>
  );
}
