import { Pencil, Trash2 } from "lucide-react";

export default function BudgetCard({
  budget,
  onEdit,
  onDelete,
}) {
  const progress = Math.min(budget.percentageUsed, 100);

  const progressColor =
    budget.percentageUsed >= 100
      ? "bg-red-500"
      : budget.percentageUsed >= 90
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {budget.category}
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Monthly Budget
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(budget)}
            className="rounded-lg p-2 transition hover:bg-blue-100 dark:hover:bg-blue-950"
          >
            <Pencil size={18} className="text-blue-600" />
          </button>

          <button
            onClick={() => onDelete(budget)}
            className="rounded-lg p-2 transition hover:bg-red-100 dark:hover:bg-red-950"
          >
            <Trash2 size={18} className="text-red-600" />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
          <span>₹{budget.spent.toLocaleString("en-IN")}</span>
          <span>₹{budget.budget.toLocaleString("en-IN")}</span>
        </div>

        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-slate-800">
          <div
            className={`h-full ${progressColor} transition-all duration-500`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-2 flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{budget.percentageUsed}%</span>
          <span>₹{budget.remaining.toLocaleString("en-IN")} left</span>
        </div>
      </div>

      {budget.overBudget ? (
        <div className="mt-5 rounded-xl bg-red-100 p-3 font-medium text-red-700 dark:bg-red-950 dark:text-red-300">
          ⚠ Budget exceeded by ₹
          {(budget.spent - budget.budget).toLocaleString("en-IN")}
        </div>
      ) : budget.alert ? (
        <div className="mt-5 rounded-xl bg-yellow-100 p-3 font-medium text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
          ⚠ You have used more than 90% of your budget.
        </div>
      ) : (
        <div className="mt-5 rounded-xl bg-green-100 p-3 font-medium text-green-700 dark:bg-green-950 dark:text-green-300">
          ✅ Budget is under control.
        </div>
      )}
    </div>
  );
}