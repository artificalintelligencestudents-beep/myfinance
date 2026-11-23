import { ArrowDownLeft, ArrowUpRight, Wallet } from "lucide-react";

interface DashboardCardsProps {
  income: number;
  expenses: number;
  balance: number;
}

const money = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export default function DashboardCards({ income, expenses, balance }: DashboardCardsProps) {
  const cards = [
    { label: "Total Balance", value: balance, icon: Wallet, tone: "text-indigo-600 bg-indigo-50" },
    { label: "Total Income", value: income, icon: ArrowDownLeft, tone: "text-emerald-600 bg-emerald-50" },
    { label: "Total Expenses", value: expenses, icon: ArrowUpRight, tone: "text-rose-600 bg-rose-50" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map(({ label, value, icon: Icon, tone }) => (
        <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500">{label}</span>
            <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${tone}`}>
              <Icon size={18} />
            </span>
          </div>
          <p className="text-2xl font-bold tracking-tight text-slate-900">{money(value)}</p>
          <p className="mt-2 text-xs text-slate-400">vs. last month</p>
        </div>
      ))}
    </div>
  );
}
