import type { Transaction } from "@/types/transaction";

export function calculateTotals(transactions: Transaction[]) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);
  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  return { income, expenses, balance: income - expenses };
}
