import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // optional - create or remove if not using

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("No root element found. Make sure public/index.html contains <div id=\"root\"></div>");
}

const root = ReactDOM.createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
