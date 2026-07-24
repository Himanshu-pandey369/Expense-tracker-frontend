import api from "../API/axios";

export const getProfile = async () => {
  const response = await api.get("/users/profile");
  return response.data;
};