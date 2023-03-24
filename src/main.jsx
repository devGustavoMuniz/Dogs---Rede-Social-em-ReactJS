import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

const aplication = ReactDOMClient.createRoot(root);

aplication.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
