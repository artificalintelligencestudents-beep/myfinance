"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", income: 4200, expense: 2600 },
  { month: "Feb", income: 4800, expense: 3100 },
  { month: "Mar", income: 4300, expense: 2800 },
  { month: "Apr", income: 5200, expense: 3400 },
  { month: "May", income: 5900, expense: 3700 },
  { month: "Jun", income: 6300, expense: 3900 },
];

export default function Charts() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.24} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef0f4" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
          <Tooltip />
          <Area type="monotone" dataKey="income" stroke="#6366f1" strokeWidth={2.5} fill="url(#income)" />
          <Area type="monotone" dataKey="expense" stroke="#f43f5e" strokeWidth={2} fill="transparent" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
