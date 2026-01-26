import axios from "axios";
import type { PropertyCreate } from "../types";

const API_URL = "http://localhost:3000/api";

export const api = axios.create({
  baseURL: API_URL,
});

export const authService = {
  login: (email: string, password: string) => {
    return api.post("/auth/login", { email, password });
  },

  register: (
    email: string,
    password: string,
    name: string,
    cellphone: string,
  ) => {
    return api.post("/auth/register", { email, password, name, cellphone });
  },
};

export const propertyService = {
  getAll: () => {
    return api.get("/properties");
  },

  getById: (id: number) => {
    return api.get(`/properties/${id}`);
  },

  create: (property: PropertyCreate) => {
    return api.post("/properties", property);
  },

  update: (id: number, property: PropertyCreate) => {
    return api.put(`/properties/${id}`, property);
  },

  delete: (id: number) => {
    return api.delete(`/properties/${id}`);
  },
};
