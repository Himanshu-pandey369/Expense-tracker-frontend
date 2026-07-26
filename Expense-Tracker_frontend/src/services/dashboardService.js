import api from "../API/axios";

export const getDashboardSummary = async () => {
  const response = await api.get("/dashboard");
  return response.data;
};

export const getRecentTransactions = async () => {
  const response = await api.get("/dashboard/recent-transactions");
  return response.data;
};

export const getCategoryExpenses = async () => {
  const response = await api.get("/dashboard/category-expenses");
  return response.data;
};

export const getMonthlyExpenses = async () => {
  const response = await api.get("/dashboard/monthly-expenses");
  return response.data;
};
