import { Pencil, Trash2 } from "lucide-react";
import TransactionCard from "./TransactionCard";

export default function TransactionTable({
  transactions,
  onEdit,
  onDelete,
}) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center text-gray-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-gray-300">
        No Transactions Found
      </div>
    );
  }

  return (
    <>
      {/* Mobile Cards */}
      <div className="space-y-4 lg:hidden">
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction._id}
            transaction={transaction}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200">
                  Title
                </th>

                <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200">
                  Category
                </th>

                <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200">
                  Type
                </th>

                <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200">
                  Amount
                </th>

                <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-200">
                  Date
                </th>

                <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-gray-200">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction._id}
                  className="border-t border-gray-200 transition hover:bg-gray-50 dark:border-slate-800 dark:hover:bg-slate-800/60"
                >
                  <td className="px-6 py-4 text-gray-900 dark:text-white">
                    {transaction.title}
                  </td>

                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {transaction.category}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        transaction.type === "income"
                          ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
                          : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </td>

                  <td
                    className={`px-6 py-4 font-semibold ${
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}₹
                    {Number(transaction.amount).toLocaleString("en-IN")}
                  </td>

                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {new Date(transaction.date).toLocaleDateString("en-IN")}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => onEdit(transaction)}
                        className="rounded-lg p-2 transition hover:bg-blue-100 dark:hover:bg-blue-950"
                      >
                        <Pencil size={18} className="text-blue-600" />
                      </button>

                      <button
                        onClick={() => onDelete(transaction)}
                        className="rounded-lg p-2 transition hover:bg-red-100 dark:hover:bg-red-950"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}