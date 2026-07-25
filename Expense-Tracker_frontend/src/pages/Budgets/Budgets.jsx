import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import BudgetSkeleton from "../../Components/budgets/BudgetSkeleton";
import BudgetCard from "../../components/budgets/BudgetCard";
import AddBudgetModal from "../../components/budgets/AddBudgetModal";
import EditBudgetModal from "../../components/budgets/EditBudgetModel";
import DeleteBudgetModal from "../../components/budgets/DeleteBudget";

import { getBudgets } from "../../services/budgetService";

export default function Budgets() {
  const location = useLocation();
  const navigate = useNavigate();

  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isAddOpen, setIsAddOpen] = useState(false);

  const [isEditOpen, setIsEditOpen] = useState(false);

  const [isDeleteOpen, setIsDeleteOpen] =
    useState(false);

  const [selectedBudget, setSelectedBudget] =
    useState(null);

  useEffect(() => {
    fetchBudgets();
  }, []);

  // Open Create Budget modal from Dashboard Quick Action
  useEffect(() => {
    if (location.state?.openAddModal) {
      setIsAddOpen(true);

      navigate(location.pathname, {
        replace: true,
        state: {},
      });
    }
  }, [location, navigate]);

  const fetchBudgets = async () => {
    try {
      setLoading(true);

      const response = await getBudgets();

      setBudgets(response.budgets);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (budget) => {
    setSelectedBudget(budget);
    setIsEditOpen(true);
  };

  const handleDelete = (budget) => {
    setSelectedBudget(budget);
    setIsDeleteOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          <div>

            <h1 className="text-3xl font-bold">
              Budgets
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your monthly budgets.
            </p>

          </div>

          <button
            onClick={() => setIsAddOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl mt-4 md:mt-0"
          >
            + Create Budget
          </button>

        </div>

        {/* Content */}

        {loading ? (
          <BudgetSkeleton />
        ) : budgets.length === 0 ? (
          <div className="bg-white rounded-2xl border p-12 text-center">

            <div className="text-6xl">
              💰
            </div>

            <h2 className="text-2xl font-semibold mt-5">
              No Budgets Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Create your first monthly budget.
            </p>

          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {budgets.map((budget) => (
              <BudgetCard
                key={budget._id}
                budget={budget}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}

          </div>
        )}

        {/* Modals */}

        <AddBudgetModal
          isOpen={isAddOpen}
          onClose={() => setIsAddOpen(false)}
          refreshBudgets={fetchBudgets}
        />

        <EditBudgetModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          budget={selectedBudget}
          refreshBudgets={fetchBudgets}
        />

        <DeleteBudgetModal
          isOpen={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          budget={selectedBudget}
          refreshBudgets={fetchBudgets}
        />

      </div>
    </DashboardLayout>
  );
}