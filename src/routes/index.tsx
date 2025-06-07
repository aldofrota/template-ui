import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/layouts/Layout";
import NonAuthLayout from "@/layouts/NonAuthLayout";
import AuthProtected from "@/routes/AuthProtected";
import { authProtectedRoutes, publicRoutes } from "@/routes/allRoutes";

const RoutesComponents = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
            />
          ))}
        </Route>

        <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <AuthProtected>
                  <Layout>{route.component}</Layout>
                </AuthProtected>
              }
            />
          ))}
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default RoutesComponents;
