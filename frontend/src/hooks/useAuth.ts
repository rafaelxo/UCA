import { useState } from "react";
import type { User } from "../types";
import { authService } from "../services/api";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await authService.login(email, password);
      setUser(response.data.user);
      setToken(response.data.token);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    cellphone: string,
  ) => {
    setLoading(true);
    try {
      const response = await authService.register(
        email,
        password,
        name,
        cellphone,
      );
      setUser(response.data.user);
      setToken(response.data.token);
    } catch (error) {
      console.error("Register failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return {
    user,
    token,
    loading,
    login,
    register,
    logout,
  };
};
