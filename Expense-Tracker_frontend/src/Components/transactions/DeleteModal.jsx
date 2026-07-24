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
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">

          <div className="bg-red-100 p-4 rounded-full">
            <Trash2
              size={36}
              className="text-red-600"
            />
          </div>

        </div>

        <h2 className="text-2xl font-bold text-center mt-6">
          Delete Transaction
        </h2>

        <p className="text-gray-500 text-center mt-3">
          Are you sure you want to delete
        </p>

        <p className="font-semibold text-center mt-2">
          "{transaction.title}"
        </p>

        <div className="flex gap-4 mt-8">

          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}