import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Header />
  </BrowserRouter>,
  document.getElementById("root")
);
