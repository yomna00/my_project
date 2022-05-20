import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import "./css/bootstrap.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode className="background">
    <RecoilRoot>
      <BrowserRouter>
        <App className="background" />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
