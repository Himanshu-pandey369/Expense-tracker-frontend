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
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Monthly Expenses
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Expense trend over time
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={chartData}>
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip
            formatter={(value) =>
              `₹${Number(value).toLocaleString("en-IN")}`
            }
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