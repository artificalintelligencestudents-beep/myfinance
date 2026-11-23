"use client";

export default function IncomeForm() {
  return (
    <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5">
      <label className="text-sm font-medium text-slate-600">
        Description
        <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" placeholder="Salary" />
      </label>
      <label className="text-sm font-medium text-slate-600">
        Amount
        <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" type="number" min="0" step="0.01" placeholder="0.00" />
      </label>
      <label className="text-sm font-medium text-slate-600">
        Date
        <input className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2.5" type="date" />
      </label>
      <button className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white" type="submit">Add income</button>
    </form>
  );
}
