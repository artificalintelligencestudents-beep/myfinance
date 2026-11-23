import Sidebar from "@/components/Sidebar";

const categories = [
  ["Housing", "$1,200", "bg-indigo-500"],
  ["Groceries", "$420", "bg-emerald-500"],
  ["Transport", "$280", "bg-amber-500"],
  ["Entertainment", "$180", "bg-rose-500"],
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <Sidebar />
      <main className="md:ml-[236px]">
        <header className="flex h-[78px] items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
          <h1 className="text-xl font-bold text-slate-900">Categories</h1>
          <button className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white">Add category</button>
        </header>
        <div className="grid gap-4 p-5 md:grid-cols-2 md:p-8 lg:grid-cols-4">
          {categories.map(([name, amount, color]) => (
            <section key={name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className={`block h-2 w-12 rounded-full ${color}`} />
              <h2 className="mt-5 font-bold text-slate-900">{name}</h2>
              <p className="mt-2 text-2xl font-bold text-slate-700">{amount}</p>
              <p className="mt-2 text-xs text-slate-400">This month</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
