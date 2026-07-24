import { Link } from "react-router-dom";

export default function RecentTransactions({ transactions }) {
if (!transactions || transactions.length === 0) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-8">
      <h2 className="text-xl font-semibold mb-6">
        Recent Transactions
      </h2>

      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-5xl mb-4">📭</div>

        <h3 className="text-lg font-semibold text-gray-700">
          No Transactions Yet
        </h3>

        <p className="text-gray-500 mt-2 text-center">
          Start tracking your expenses by adding your first transaction.
        </p>

        <Link
          to="/transactions"
          className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Transaction
        </Link>
      </div>
    </div>
  );
}

  return (
    <div className="bg-white rounded-2xl border p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Recent Transactions
        </h2>

        <Link
          to="/transactions"
          className="text-blue-600 hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction._id}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <h3 className="font-medium">
                {transaction.title}
              </h3>

              <p className="text-sm text-gray-500">
                {transaction.category}
              </p>
            </div>

            <div className="text-right">
              <p
                className={`font-semibold ${
                  transaction.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}₹
                {transaction.amount}
              </p>

              <p className="text-xs text-gray-400">
                {new Date(transaction.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}