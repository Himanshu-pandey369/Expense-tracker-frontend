import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { createBudget } from "../../services/budgetService";

export default function AddBudgetModal({
  isOpen,
  onClose,
  refreshBudgets,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    },
  });

  if (!isOpen) return null;

  const closeModal = () => {
    reset({
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });

    onClose();
  };

  const onSubmit = async (data) => {
    try {
      await createBudget({
        ...data,
        amount: Number(data.amount),
        month: Number(data.month),
        year: Number(data.year),
      });

      toast.success("Budget Created Successfully");

      refreshBudgets();
      closeModal();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create budget"
      );
    }
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900"
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create Budget
          </h2>

          <button
            onClick={closeModal}
            className="text-3xl leading-none text-gray-400 transition hover:text-gray-700 dark:hover:text-gray-200"
          >
            ×
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 overflow-y-auto p-6"
        >
          {/* Category */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Category
            </label>

            <select
              {...register("category", {
                required: true,
              })}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Salary">Salary</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Amount */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Budget Amount
            </label>

            <input
              type="number"
              placeholder="5000"
              {...register("amount", {
                required: true,
              })}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          {/* Month */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Month
            </label>

            <select
              {...register("month")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => (
                <option key={month} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Year
            </label>

            <input
              type="number"
              {...register("year")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

          {/* Footer */}

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="rounded-xl border border-gray-300 px-6 py-3 text-gray-900 transition hover:bg-gray-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Creating..." : "Create Budget"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}