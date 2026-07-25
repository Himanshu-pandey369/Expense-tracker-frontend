import { Link } from "react-router-dom";

export default function RecentTransactions({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
          Recent Transactions
        </h2>

        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 text-5xl">📭</div>

          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            No Transactions Yet
          </h3>

          <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
            Start tracking your expenses by adding your first transaction.
          </p>

          <Link
            to="/transactions"
            className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Add Transaction
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Transactions
        </h2>

        <Link
          to="/transactions"
          className="text-blue-600 transition hover:underline dark:text-blue-400"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction._id}
            className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-slate-800"
          >
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                {transaction.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {transaction.category}
              </p>
            </div>

            <div className="text-right">
              <p
                className={`font-semibold ${
                  transaction.type === "income"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}₹
                {Number(transaction.amount).toLocaleString("en-IN")}
              </p>

              <p className="text-xs text-gray-400 dark:text-gray-500">
                {new Date(transaction.date).toLocaleDateString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}