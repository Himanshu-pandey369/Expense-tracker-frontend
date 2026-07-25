import { Pencil, Trash2 } from "lucide-react";

export default function TransactionCard({
  transaction,
  onEdit,
  onDelete,
}) {
  const isIncome = transaction.type === "income";

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="font-semibold text-lg">
            {transaction.title}
          </h2>

          <p className="text-gray-500 mt-1">
            {transaction.category}
          </p>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isIncome
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {transaction.type}
        </span>

      </div>

      <div className="flex justify-between items-center mt-5">

        <div>

          <p className="text-sm text-gray-500">
            Amount
          </p>

          <p
            className={`font-bold text-lg ${
              isIncome
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {isIncome ? "+" : "-"}₹
            {transaction.amount.toLocaleString("en-IN")}
          </p>

        </div>

        <div className="text-right">

          <p className="text-sm text-gray-500">
            Date
          </p>

          <p className="font-medium">
            {new Date(
              transaction.date
            ).toLocaleDateString("en-IN")}
          </p>

        </div>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => onEdit(transaction)}
          className="flex-1 flex justify-center items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl py-3 transition"
        >
          <Pencil size={18} />
          Edit
        </button>

        <button
          onClick={() => onDelete(transaction)}
          className="flex-1 flex justify-center items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl py-3 transition"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

    </div>
  );
}