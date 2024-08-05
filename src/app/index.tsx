import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./styles/index.scss";
import "rsuite/dist/rsuite.min.css";

import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
