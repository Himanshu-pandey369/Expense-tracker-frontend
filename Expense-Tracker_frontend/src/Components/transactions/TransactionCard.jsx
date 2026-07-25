import { Pencil, Trash2 } from "lucide-react";

export default function TransactionCard({
  transaction,
  onEdit,
  onDelete,
}) {
  const isIncome = transaction.type === "income";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {transaction.title}
          </h2>

          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {transaction.category}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isIncome
              ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
              : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
          }`}
        >
          {transaction.type}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Amount</p>
          <p
            className={`text-lg font-bold ${
              isIncome ? "text-green-600" : "text-red-600"
            }`}
          >
            {isIncome ? "+" : "-"}₹
            {Number(transaction.amount).toLocaleString("en-IN")}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
          <p className="font-medium text-gray-900 dark:text-white">
            {new Date(transaction.date).toLocaleDateString("en-IN")}
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => onEdit(transaction)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-50 py-3 text-blue-600 transition hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900"
        >
          <Pencil size={18} />
          Edit
        </button>

        <button
          onClick={() => onDelete(transaction)}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-50 py-3 text-red-600 transition hover:bg-red-100 dark:bg-red-950 dark:hover:bg-red-900"
        >
          <Trash2 size={18} />
          Delete
        </button>
      </div>
    </div>
  );
}