import type { Transaction } from "@/types/transaction";

const money = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export default function TransactionTable({ transactions }: { transactions: Transaction[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
            <th className="px-5 py-3 font-medium">Name</th>
            <th className="px-5 py-3 font-medium">Category</th>
            <th className="px-5 py-3 font-medium">Date</th>
            <th className="px-5 py-3 text-right font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b border-slate-100 last:border-0">
              <td className="px-5 py-4 text-sm font-medium text-slate-800">{transaction.description}</td>
              <td className="px-5 py-4 text-sm text-slate-500">{transaction.category}</td>
              <td className="px-5 py-4 text-sm text-slate-500">{transaction.date}</td>
              <td className={`px-5 py-4 text-right text-sm font-semibold ${transaction.type === "income" ? "text-emerald-600" : "text-slate-800"}`}>
                {transaction.type === "income" ? "+" : "-"}{money(transaction.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
