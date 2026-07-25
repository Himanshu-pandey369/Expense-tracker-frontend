import api from "../API/axios";

export const getTransactions = async ({
  page = 1,
  limit = 10,
  search = "",
  type = "",
  category = "",
} = {}) => {
  const response = await api.get("/transactions", {
    params: {
      page,
      limit,
      search,
      type,
      category,
    },
  });

  return response.data;
};

export const createTransaction = async (data) => {
  const response = await api.post("/transactions", data);
  return response.data;
};

export const updateTransaction = async (id, data) => {
  const response = await api.put(`/transactions/${id}`, data);
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await api.delete(`/transactions/${id}`);
  return response.data;
};

export const exportTransactions = async ({
  search = "",
  type = "",
  category = "",
} = {}) => {
  const response = await api.get("/transactions/export", {
    params: {
      search,
      type,
      category,
    },
  });

  return response.data;
};