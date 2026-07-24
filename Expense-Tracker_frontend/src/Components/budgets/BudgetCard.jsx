import { Pencil, Trash2 } from "lucide-react";

export default function BudgetCard({
  budget,
  onEdit,
  onDelete,
}) {
  const progress = Math.min(
    budget.percentageUsed,
    100
  );

  const progressColor =
    budget.percentageUsed >= 100
      ? "bg-red-500"
      : budget.percentageUsed >= 90
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold">
            {budget.category}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Monthly Budget
          </p>

        </div>

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(budget)}
            className="p-2 rounded-lg hover:bg-blue-100 transition"
          >
            <Pencil
              size={18}
              className="text-blue-600"
            />
          </button>

          <button
            onClick={() => onDelete(budget)}
            className="p-2 rounded-lg hover:bg-red-100 transition"
          >
            <Trash2
              size={18}
              className="text-red-600"
            />
          </button>

        </div>

      </div>

      <div className="mt-6">

        <div className="flex justify-between font-semibold">

          <span>
            ₹{budget.spent.toLocaleString("en-IN")}
          </span>

          <span>
            ₹{budget.budget.toLocaleString("en-IN")}
          </span>

        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-3">

          <div
            className={`h-full ${progressColor} transition-all duration-500`}
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="flex justify-between mt-2 text-sm text-gray-500">

          <span>
            {budget.percentageUsed}%
          </span>

          <span>
            ₹{budget.remaining.toLocaleString("en-IN")} left
          </span>

        </div>

      </div>

      {budget.overBudget ? (
        <div className="mt-5 rounded-xl bg-red-100 text-red-700 p-3 font-medium">
          ⚠ Budget exceeded by ₹
          {(budget.spent - budget.budget).toLocaleString(
            "en-IN"
          )}
        </div>
      ) : budget.alert ? (
        <div className="mt-5 rounded-xl bg-yellow-100 text-yellow-700 p-3 font-medium">
          ⚠ More than 90% used.
        </div>
      ) : (
        <div className="mt-5 rounded-xl bg-green-100 text-green-700 p-3 font-medium">
          ✅ Budget is under control.
        </div>
      )}
    </div>
  );
}