import { PlusCircle, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200 dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <button
          onClick={() =>
            navigate("/transactions", {
              state: { openAddModal: true },
            })
          }
          className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5 text-left transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-slate-800 dark:hover:border-blue-500 dark:hover:bg-slate-800"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950">
            <PlusCircle className="text-blue-600" size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Add Transaction
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Record income or expense
            </p>
          </div>
        </button>

        <button
          onClick={() =>
            navigate("/budgets", {
              state: { openAddModal: true },
            })
          }
          className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5 text-left transition-all hover:border-green-500 hover:bg-green-50 dark:border-slate-800 dark:hover:border-green-500 dark:hover:bg-slate-800"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-950">
            <Wallet className="text-green-600" size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Create Budget
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Plan monthly spending
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}