// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import { JobsProvider } from "./context/JobsContext.jsx";
// import "./index.css";

// console.log("Starting TriNob Technologies application...");

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <JobsProvider>
//       <App />
//     </JobsProvider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
