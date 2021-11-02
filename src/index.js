import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import Comingsoon from "./Comingsoon";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Comingsoon />
  </BrowserRouter>,
  document.getElementById("root")
);
