import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import { deleteTransaction } from "../../services/transactionService";

export default function DeleteTransactionModal({
  isOpen,
  onClose,
  transaction,
  refreshTransactions,
}) {
  if (!isOpen || !transaction) return null;

  const handleDelete = async () => {
    try {
      await deleteTransaction(transaction._id);

      toast.success("Transaction Deleted");

      refreshTransactions();

      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete transaction"
      );
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white dark:bg-gray-900 shadow-2xl p-8 border border-transparent dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">
          <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full">
            <Trash2
              size={36}
              className="text-red-600 dark:text-red-400"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mt-6 text-gray-900 dark:text-white">
          Delete Transaction
        </h2>

        <p className="text-gray-500 dark:text-gray-400 text-center mt-3">
          Are you sure you want to delete
        </p>

        <p className="font-semibold text-center mt-2 text-gray-900 dark:text-gray-100">
          "{transaction.title}"
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 dark:hover:bg-red-500 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}