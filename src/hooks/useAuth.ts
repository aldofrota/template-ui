import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/state/authStore";

export const useAuth = () => {
  const navigate = useNavigate();
  const { user, token, isAuthenticated, login, logout } = useAuthStore();

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      try {
        console.log("Login:", email, password);
        // Aqui você faria a chamada para sua API
        // Este é apenas um exemplo
        // const response = await fetch("/api/login", {
        //   method: "POST",
        //   body: JSON.stringify({ email, password }),
        // });

        // if (!response.ok) {
        //   throw new Error("Falha no login");
        // }

        // const data = await response.json();

        const data = {
          user: {
            id: "1",
            name: "John Doe",
            email,
          },
          token: "1234567890",
        };
        login(data.user, data.token);
        navigate("/");
      } catch (error) {
        console.error("Erro no login:", error);
        throw error;
      }
    },
    [login, navigate]
  );

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return {
    user,
    token,
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
  };
};
