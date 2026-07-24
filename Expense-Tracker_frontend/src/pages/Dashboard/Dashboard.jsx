import { useEffect, useState } from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Receipt,
} from "lucide-react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import SummaryCard from "../../components/dashboard/SummaryCard";
import ExpenseChart from "../../components/dashboard/ExpenseChart";
import CategoryChart from "../../components/dashboard/CategoryChart";
import RecentTransactions from "../../components/dashboard/RecentTransaction";

import {
  getDashboardSummary,
  getRecentTransactions,
  getMonthlyExpenses,
  getCategoryExpenses,
} from "../../services/dashboardService";

export default function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [monthlyExpenses, setMonthlyExpenses] = useState([]);
  const [categoryExpenses, setCategoryExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [
          summaryRes,
          recentRes,
          monthlyRes,
          categoryRes,
        ] = await Promise.all([
          getDashboardSummary(),
          getRecentTransactions(),
          getMonthlyExpenses(),
          getCategoryExpenses(),
        ]);

        setSummary(summaryRes.summary);
        setTransactions(recentRes.transactions);
        setMonthlyExpenses(monthlyRes.monthlyExpenses);
        setCategoryExpenses(categoryRes.categoryExpenses);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-[70vh]">
          <p className="text-lg font-semibold text-gray-500">
            Loading Dashboard...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Financial Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Here's an overview of your finances.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <SummaryCard
            title="Current Balance"
            amount={summary.currentBalance}
            icon={<Wallet className="text-white" size={28} />}
            bgColor="bg-blue-500"
          />

          <SummaryCard
            title="Total Income"
            amount={summary.totalIncome}
            icon={<TrendingUp className="text-white" size={28} />}
            bgColor="bg-green-500"
          />

          <SummaryCard
            title="Total Expense"
            amount={summary.totalExpense}
            icon={<TrendingDown className="text-white" size={28} />}
            bgColor="bg-red-500"
          />

          <SummaryCard
            title="Transactions"
            amount={summary.totalTransactions}
            icon={<Receipt className="text-white" size={28} />}
            bgColor="bg-purple-500"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ExpenseChart data={monthlyExpenses} />
          <CategoryChart data={categoryExpenses} />
        </div>

        {/* Recent Transactions */}
        <RecentTransactions transactions={transactions} />

      </div>
    </DashboardLayout>
  );
}