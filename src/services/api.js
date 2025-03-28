import axios from "axios";

const API_URL = "https://reqres.in/api";

export const loginUser = async (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const fetchUsers = async (page = 1) => {
  return axios.get(`${API_URL}/users?page=${page}`);
};

export const updateUser = async (id, userData) => {
  return axios.put(`${API_URL}/users/${id}`, userData);
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/users/${id}`);
};
