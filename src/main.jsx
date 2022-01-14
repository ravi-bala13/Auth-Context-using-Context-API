import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { LoginContextProvider } from "./contexts/LoginContext";
import { CartContextProvider } from "./contexts/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <LoginContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LoginContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
