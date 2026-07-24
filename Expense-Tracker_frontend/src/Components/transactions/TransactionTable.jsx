import { Pencil, Trash2 } from "lucide-react";

export default function TransactionTable({
  transactions,
  onEdit,
  onDelete,
}) {
  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-2xl border p-10 text-center">
        No Transactions Found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow border overflow-hidden">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Title
              </th>

              <th className="px-6 py-4 text-left">
                Category
              </th>

              <th className="px-6 py-4 text-left">
                Type
              </th>

              <th className="px-6 py-4 text-left">
                Amount
              </th>

              <th className="px-6 py-4 text-left">
                Date
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((transaction) => (

              <tr
                key={transaction._id}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-6 py-4">
                  {transaction.title}
                </td>

                <td className="px-6 py-4">
                  {transaction.category}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      transaction.type === "income"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
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
                  {transaction.type === "income"
                    ? "+"
                    : "-"}
                  ₹
                  {transaction.amount.toLocaleString()}
                </td>

                <td className="px-6 py-4">
                  {new Date(
                    transaction.date
                  ).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <button
                      onClick={() =>
                        onEdit(transaction)
                      }
                      className="p-2 rounded-lg hover:bg-blue-100"
                    >
                      <Pencil
                        size={18}
                        className="text-blue-600"
                      />
                    </button>

                    <button
                      onClick={() =>
                        onDelete(transaction)
                      }
                      className="p-2 rounded-lg hover:bg-red-100"
                    >
                      <Trash2
                        size={18}
                        className="text-red-600"
                      />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}