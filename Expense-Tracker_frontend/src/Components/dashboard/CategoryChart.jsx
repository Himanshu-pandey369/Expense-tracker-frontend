import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#EF4444",
  "#F59E0B",
  "#8B5CF6",
  "#06B6D4",
];

export default function CategoryChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-105 flex flex-col justify-center items-center">
        <div className="mb-6">
          <h2 className="text-xl font-bold">
            Expense by Category
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Category-wise spending
          </p>
        </div>

        <div className="text-center">
          <div className="text-5xl mb-4">📊</div>

          <p className="text-gray-500">
            No category data available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition p-6">      <h2 className="text-xl font-semibold mb-6">
      Expense by Category
    </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            nameKey="category"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) =>
              `₹${Number(value).toLocaleString("en-IN")}`
            }
          />

          <Legend
            verticalAlign="bottom"
            height={40}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}