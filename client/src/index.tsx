import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/css/SkillsPage.css";
import { WebSocketProvider } from "./context/WebSocketContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WebSocketProvider>
      <App />
    </WebSocketProvider>
  </React.StrictMode>
);
