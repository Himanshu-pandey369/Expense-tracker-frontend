import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { transactionSchema } from "../../utils/transactionValidation";
import { createTransaction } from "../../services/transactionService";

export default function AddTransactionModal({
  isOpen,
  onClose,
  refreshTransactions,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(transactionSchema),
  });

  const closeModal = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    try {
      await createTransaction(data);

      toast.success("Transaction Added Successfully");

      refreshTransactions();

      closeModal();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to add transaction"
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Add Transaction
          </h2>

          <button
            onClick={closeModal}
            className="text-3xl text-gray-400 hover:text-gray-700 transition"
          >
            ×
          </button>
        </div>

        {/* Body */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="overflow-y-auto p-6 space-y-5"
        >
          {/* Title */}

          <div>
            <label className="block text-sm font-semibold mb-2">
              Title
            </label>

            <input
              {...register("title")}
              placeholder="Netflix Subscription"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.title?.message}
            </p>
          </div>

          {/* Amount */}

          <div>
            <label className="block text-sm font-semibold mb-2">
              Amount
            </label>

            <input
              type="number"
              {...register("amount")}
              placeholder="500"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.amount?.message}
            </p>
          </div>

          {/* Type */}

          <div>
            <label className="block text-sm font-semibold mb-2">
              Type
            </label>

            <select
              {...register("type")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <p className="text-red-500 text-sm mt-1">
              {errors.type?.message}
            </p>
          </div>

          {/* Category */}

          <div>
            <label className="block text-sm font-semibold mb-2">
              Category
            </label>

            <select
              {...register("category")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Salary">Salary</option>
              <option value="Others">Others</option>
            </select>

            <p className="text-red-500 text-sm mt-1">
              {errors.category?.message}
            </p>
          </div>

          {/* Date */}

          <div>
            <label className="block text-sm font-semibold mb-2">
              Date
            </label>

            <input
              type="date"
              {...register("date")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.date?.message}
            </p>
          </div>

          {/* Note */}

          <div>
            <label className="block text-sm font-semibold mb-2">
              Note
            </label>

            <textarea
              rows={4}
              {...register("note")}
              placeholder="Optional..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Footer */}

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Save Transaction"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}