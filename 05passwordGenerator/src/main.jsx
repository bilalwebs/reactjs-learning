import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import UseCallback from "./hook/Memo/Usecallback.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <UseCallback /> */}
  </StrictMode>,
);
