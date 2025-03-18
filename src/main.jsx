import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme/ThemeProvider.jsx";
import { UserProvider } from "./components/contextApi/UsersCpntext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeProvider>
);
