import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MONTHS = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function ExpenseChart({ data }) {
  const chartData = data.map((item) => ({
    month: MONTHS[item.month],
    expense: item.total,
  }));

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Monthly Expenses
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Expense trend over time
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={chartData}>
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="#475569"
          />

          <XAxis
            dataKey="month"
            tick={{ fill: "#94A3B8", fontSize: 13 }}
            axisLine={{ stroke: "#475569" }}
            tickLine={{ stroke: "#475569" }}
          />

          <YAxis
            tick={{ fill: "#94A3B8", fontSize: 13 }}
            axisLine={{ stroke: "#475569" }}
            tickLine={{ stroke: "#475569" }}
          />

          <Tooltip
            formatter={(value) =>
              `₹${Number(value).toLocaleString("en-IN")}`
            }
            contentStyle={{
              backgroundColor: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "#F8FAFC",
            }}
            labelStyle={{ color: "#CBD5E1" }}
            itemStyle={{ color: "#60A5FA" }}
          />

          <Bar
            dataKey="expense"
            radius={[8, 8, 0, 0]}
            fill="#3B82F6"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}