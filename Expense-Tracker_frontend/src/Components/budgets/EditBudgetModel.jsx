import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { updateBudget } from "../../services/budgetService";

export default function EditBudgetModal({
  isOpen,
  onClose,
  budget,
  refreshBudgets,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    if (budget) {
      reset({
        category: budget.category,
        amount: budget.budget,
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      });
    }
  }, [budget, reset]);

  if (!isOpen || !budget) return null;

  const closeModal = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    try {
      await updateBudget(budget._id, {
        ...data,
        amount: Number(data.amount),
        month: Number(data.month),
        year: Number(data.year),
      });

      toast.success("Budget Updated");

      refreshBudgets();

      closeModal();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update budget"
      );
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b px-6 py-5">
          <h2 className="text-2xl font-bold">
            Edit Budget
          </h2>

          <button
            onClick={closeModal}
            className="text-3xl text-gray-400 hover:text-black"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              {...register("category")}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">
                Entertainment
              </option>
              <option value="Salary">Salary</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Budget Amount
            </label>

            <input
              type="number"
              {...register("amount")}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Month
            </label>

            <input
              type="number"
              min={1}
              max={12}
              {...register("month")}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Year
            </label>

            <input
              type="number"
              {...register("year")}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={closeModal}
              className="border rounded-xl px-6 py-3 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3"
            >
              {isSubmitting
                ? "Updating..."
                : "Update Budget"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}