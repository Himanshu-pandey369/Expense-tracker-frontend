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
    defaultValues: {
      type: "expense",
      category: "Food",
      date: new Date().toISOString().split("T")[0],
      note: "",
    },
  });

  const closeModal = () => {
    reset({
      type: "expense",
      category: "Food",
      date: new Date().toISOString().split("T")[0],
      note: "",
    });
    onClose();
  };

  const onSubmit = async (data) => {
    try {
      await createTransaction({
        ...data,
        amount: Number(data.amount),
      });

      toast.success("Transaction Created Successfully");
      refreshTransactions();
      closeModal();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create transaction"
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Add Transaction
          </h2>

          <button
            onClick={closeModal}
            className="text-3xl leading-none text-gray-400 transition hover:text-gray-700 dark:hover:text-gray-200"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 overflow-y-auto p-6"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Title
            </label>
            <input
              {...register("title")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.title?.message}
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Amount
            </label>
            <input
              type="number"
              {...register("amount")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.amount?.message}
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Type
            </label>
            <select
              {...register("type")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <p className="mt-1 text-sm text-red-500">
              {errors.type?.message}
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Category
            </label>
            <select
              {...register("category")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            >
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Salary">Salary</option>
              <option value="Others">Others</option>
            </select>
            <p className="mt-1 text-sm text-red-500">
              {errors.category?.message}
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Date
            </label>
            <input
              type="date"
              {...register("date")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
            <p className="mt-1 text-sm text-red-500">
              {errors.date?.message}
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Note
            </label>
            <textarea
              rows={4}
              {...register("note")}
              className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </div>

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
              {isSubmitting ? "Creating..." : "Create Transaction"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}