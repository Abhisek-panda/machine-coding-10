import { BrowserRouter as Router } from "react-router-dom";
import React, { useContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { DataContext, DataProvider } from "./Context/DataContext.jsx";

export const useData = () => useContext(DataContext);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </React.StrictMode>
);
