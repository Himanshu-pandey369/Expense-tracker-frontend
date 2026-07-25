import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import { deleteBudget } from "../../services/budgetService";

export default function DeleteBudgetModal({
  isOpen,
  onClose,
  budget,
  refreshBudgets,
}) {
  if (!isOpen || !budget) return null;

  const handleDelete = async () => {
    try {
      await deleteBudget(budget._id);

      toast.success("Budget Deleted");
      refreshBudgets();
      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete budget"
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">
          <div className="rounded-full bg-red-100 p-4 dark:bg-red-950">
            <Trash2 size={38} className="text-red-600 dark:text-red-300" />
          </div>
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Delete Budget
        </h2>

        <p className="mt-3 text-center text-gray-500 dark:text-gray-400">
          Are you sure you want to delete
        </p>

        <p className="mt-2 text-center font-semibold text-gray-900 dark:text-white">
          "{budget.category}" budget?
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-gray-300 py-3 text-gray-900 transition hover:bg-gray-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 rounded-xl bg-red-600 py-3 text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}