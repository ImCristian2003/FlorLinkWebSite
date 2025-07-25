import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import { UsersApp } from "./UsersApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider.jsx";

//import { LoginPage } from "./auth/pages/LoginPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UsersApp />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
