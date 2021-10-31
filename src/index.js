import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import { Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Header />
  </Router>,
  document.getElementById("root")
);
