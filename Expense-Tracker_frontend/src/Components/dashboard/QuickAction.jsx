import {
  PlusCircle,
  Wallet,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* Add Transaction */}

        <button
          onClick={() =>
            navigate("/transactions", {
              state: {
                openAddModal: true,
              },
            })
          }
          className="flex items-center gap-4 p-5 rounded-2xl border hover:border-blue-500 hover:bg-blue-50 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <PlusCircle
              className="text-blue-600"
              size={24}
            />
          </div>

          <div className="text-left">

            <h3 className="font-semibold">
              Add Transaction
            </h3>

            <p className="text-sm text-gray-500">
              Record income or expense
            </p>

          </div>
        </button>

        {/* Create Budget */}

        <button
          onClick={() =>
            navigate("/budgets", {
              state: {
                openAddModal: true,
              },
            })
          }
          className="flex items-center gap-4 p-5 rounded-2xl border hover:border-green-500 hover:bg-green-50 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
            <Wallet
              className="text-green-600"
              size={24}
            />
          </div>

          <div className="text-left">

            <h3 className="font-semibold">
              Create Budget
            </h3>

            <p className="text-sm text-gray-500">
              Plan monthly spending
            </p>

          </div>
        </button>

      </div>

    </div>
  );
}