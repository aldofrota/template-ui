import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/components";
import { BrowserRouter } from "react-router-dom";
import "@/styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
