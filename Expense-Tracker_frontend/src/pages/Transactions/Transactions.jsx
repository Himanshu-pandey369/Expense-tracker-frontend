import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import DashboardLayout from "../../Components/layout/DashboardLayout";
import TransactionFilters from "../../Components/transactions/TransactionFilters";
import TransactionTable from "../../Components/transactions/TransactionTable";
import TransactionSkeleton from "../../Components/transactions/TransactionSkeleton";

import AddTransactionModal from "../../Components/transactions/AddTransactionModal";
import EditTransactionModal from "../../Components/transactions/EditTransactionModal";
import DeleteTransactionModal from "../../Components/transactions/DeleteModal";
import Pagination from "../../Components/common/Pagination";
import {
  getTransactions,
  exportTransactions,
} from "../../services/TransactionService";
import { exportTransactionsPDF } from "../../utils/exportPdf";

export default function Transactions() {
  const location = useLocation();
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingTransaction, setDeletingTransaction] = useState(null);
  const exportMenuRef = useRef(null);

  useEffect(() => {
    fetchTransactions();
  }, [search, filterType, filterCategory, page]);

  useEffect(() => {
    setPage(1);
  }, [search, filterType, filterCategory]);

  useEffect(() => {
    if (location.state?.openAddModal) {
      setIsModalOpen(true);

      navigate(location.pathname, {
        replace: true,
        state: {},
      });
    }
  }, [location, navigate]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);

      const response = await getTransactions({
        page,
        limit: 10,
        search,
        type: filterType,
        category: filterCategory,
      });

      setTransactions(response.transactions);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = async () => {
    try {
      const response = await exportTransactions({
        search,
        type: filterType,
        category: filterCategory,
      });

      const transactions = response.transactions;

      if (!transactions.length) {
        toast.error("No transactions to export.");
        return;
      }

      const headers = [
        "Title",
        "Category",
        "Type",
        "Amount",
        "Date",
        "Note",
      ];

      const rows = transactions.map((transaction) => [
        transaction.title,
        transaction.category,
        transaction.type,
        transaction.amount,
        new Date(transaction.date).toLocaleDateString("en-IN"),
        transaction.note || "",
      ]);

      const csvContent = [
        headers.join(","),
        ...rows.map((row) =>
          row.map((value) => `"${value}"`).join(",")
        ),
      ].join("\n");

      const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;",
      });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download = `transactions-${new Date().toISOString().split("T")[0]
        }.csv`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      toast.success("CSV exported successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to export CSV.");
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

  const handleExportPDF = async () => {
  try {
    const response = await exportTransactions({
      search,
      type: filterType,
      category: filterCategory,
    });

    if (!response.transactions.length) {
      toast.error("No transactions to export.");
      return;
    }

    exportTransactionsPDF(response.transactions);

    setShowExportMenu(false);

    toast.success("PDF exported successfully!");
  } catch (error) {
    console.error(error);
    toast.error("Failed to export PDF.");
  }
};

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        exportMenuRef.current &&
        !exportMenuRef.current.contains(e.target)
      ) {
        setShowExportMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
          <div
            ref={exportMenuRef}
            className="relative"
          >
            <button
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="bg-gray-700 hover:bg-gray-800 text-white rounded-xl px-5 py-3"
            >
              Export ▼
            </button>

            {showExportMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border z-50 overflow-hidden">
                <button
                  onClick={() => {
                    handleExportPDF();
                    setShowExportMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  📄 Export PDF
                </button>

                <button
                  onClick={() => {
                    handleExportCSV();
                    setShowExportMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  📊 Export CSV
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-3"
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
          <TransactionSkeleton />
        ) : (
          <>
            <TransactionTable
              transactions={transactions}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
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