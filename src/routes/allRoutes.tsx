import React from "react";

// Páginas públicas
const Login = React.lazy(() => import("@/features/auth/pages/Login"));

// Páginas protegidas
const Dashboard = React.lazy(
  () => import("@/features/dashboard/pages/Dashboard")
);
const About = React.lazy(() => import("@/features/about/pages/About"));

// Rotas públicas
export const publicRoutes = [{ path: "/login", component: <Login /> }];

// Rotas protegidas
export const authProtectedRoutes = [
  { path: "/", component: <Dashboard /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/about", component: <About /> },
];
