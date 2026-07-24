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
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg"
      >
        {/* Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b">

          <h2 className="text-2xl font-bold">
            Create Budget
          </h2>

          <button
            onClick={closeModal}
            className="text-3xl text-gray-400 hover:text-black"
          >
            ×
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 space-y-5"
        >
          {/* Category */}

          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              {...register("category", {
                required: true,
              })}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">
                Select Category
              </option>

              <option value="Food">Food</option>

              <option value="Travel">Travel</option>

              <option value="Shopping">
                Shopping
              </option>

              <option value="Entertainment">
                Entertainment
              </option>

              <option value="Salary">
                Salary
              </option>

              <option value="Others">
                Others
              </option>
            </select>
          </div>

          {/* Amount */}

          <div>
            <label className="block mb-2 font-medium">
              Budget Amount
            </label>

            <input
              type="number"
              placeholder="5000"
              {...register("amount", {
                required: true,
              })}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Month */}

          <div>
            <label className="block mb-2 font-medium">
              Month
            </label>

            <select
              {...register("month")}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
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
                <option
                  key={month}
                  value={index + 1}
                >
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}

          <div>
            <label className="block mb-2 font-medium">
              Year
            </label>

            <input
              type="number"
              {...register("year")}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Footer */}

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
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 disabled:opacity-50"
            >
              {isSubmitting
                ? "Creating..."
                : "Create Budget"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}