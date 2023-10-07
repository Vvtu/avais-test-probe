import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../reset.d.ts";
import "./index.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
