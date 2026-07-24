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
        error.response?.data?.message ||
          "Failed to delete budget"
      );
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8"
      >
        <div className="flex justify-center">

          <div className="bg-red-100 p-4 rounded-full">

            <Trash2
              size={38}
              className="text-red-600"
            />

          </div>

        </div>

        <h2 className="text-2xl font-bold text-center mt-6">
          Delete Budget
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Are you sure you want to delete
        </p>

        <p className="font-semibold text-center mt-2">
          "{budget.category}" Budget?
        </p>

        <div className="flex gap-4 mt-8">

          <button
            onClick={onClose}
            className="flex-1 border rounded-xl py-3 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl py-3"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}