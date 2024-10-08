import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styling/index.css";
import AppRouter from "./routers/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
