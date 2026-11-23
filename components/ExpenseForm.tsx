"use client";

export default function ExpenseForm() {
  return (
    <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5">
      <label className="text-sm font-medium text-slate-600">
        Description
        <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" placeholder="Groceries" />
      </label>
      <label className="text-sm font-medium text-slate-600">
        Category
        <select className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5">
          <option>Housing</option>
          <option>Groceries</option>
          <option>Transport</option>
          <option>Entertainment</option>
        </select>
      </label>
      <label className="text-sm font-medium text-slate-600">
        Amount
        <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" type="number" min="0" step="0.01" placeholder="0.00" />
      </label>
      <button className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white" type="submit">Add expense</button>
    </form>
  );
}
