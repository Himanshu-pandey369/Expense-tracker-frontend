import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import TransactionFilters from "../../components/transactions/TransactionFilters";
import TransactionTable from "../../components/transactions/TransactionTable";

import AddTransactionModal from "../../components/transactions/AddTransactionModal";
import EditTransactionModal from "../../components/transactions/EditTransactionModal";
import DeleteTransactionModal from "../../components/transactions/DeleteModal";

import { getTransactions } from "../../services/transactionService";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingTransaction, setDeletingTransaction] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, [search, filterType, filterCategory]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);

      const response = await getTransactions({
        search,
        type: filterType,
        category: filterCategory,
      });

      setTransactions(response.transactions);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setIsEditModalOpen(true);
  };

  const handleDelete = (transaction) => {
    setDeletingTransaction(transaction);
    setIsDeleteModalOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          <div>

            <h1 className="text-3xl font-bold">
              Transactions
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all your income and expenses.
            </p>

          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-3 mt-4 md:mt-0"
          >
            + Add Transaction
          </button>

        </div>

        <TransactionFilters
          search={search}
          setSearch={setSearch}
          filterType={filterType}
          setFilterType={setFilterType}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />

        {loading ? (
          <div className="bg-white rounded-2xl border p-10 text-center">
            Loading...
          </div>
        ) : (
          <TransactionTable
            transactions={transactions}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        <AddTransactionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          refreshTransactions={fetchTransactions}
        />

        <EditTransactionModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          transaction={editingTransaction}
          refreshTransactions={fetchTransactions}
        />

        <DeleteTransactionModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          transaction={deletingTransaction}
          refreshTransactions={fetchTransactions}
        />

      </div>
    </DashboardLayout>
  );
}