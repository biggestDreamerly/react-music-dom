import React from "react";
import "./styles.css";
import { GlobalStyle } from "./style.js";
import { renderRoutes } from "react-router-config";
import routes from "./routes/index.js";
import { HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      {renderRoutes(routes)}
    </HashRouter>
  );
}
