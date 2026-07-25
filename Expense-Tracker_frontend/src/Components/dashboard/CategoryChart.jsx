import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useTheme } from "../../Context/ThemeContext";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#EF4444",
  "#F59E0B",
  "#8B5CF6",
  "#06B6D4",
];

export default function CategoryChart({ data }) {
  const { darkMode } = useTheme();

  if (!data || data.length === 0) {
    return (
      <div className="flex h-105 flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Expense by Category
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Category-wise spending
          </p>
        </div>

        <div className="text-center">
          <div className="mb-4 text-5xl">📊</div>

          <p className="text-gray-500 dark:text-gray-400">
            No category data available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Expense by Category
        </h2>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Category-wise spending
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            nameKey="category"
            outerRadius={110}
            label={({ percent }) =>
              `${((percent || 0) * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.category}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) =>
              `₹${Number(value).toLocaleString("en-IN")}`
            }
            contentStyle={{
              backgroundColor: darkMode ? "#0F172A" : "#FFFFFF",
              border: `1px solid ${
                darkMode ? "#334155" : "#E5E7EB"
              }`,
              borderRadius: "12px",
              color: darkMode ? "#F8FAFC" : "#111827",
            }}
            labelStyle={{
              color: darkMode ? "#CBD5E1" : "#374151",
            }}
            itemStyle={{
              color: darkMode ? "#60A5FA" : "#2563EB",
            }}
          />

          <Legend
            verticalAlign="bottom"
            height={40}
            wrapperStyle={{
              color: darkMode ? "#CBD5E1" : "#374151",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}