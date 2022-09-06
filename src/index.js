import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NotFound from './404.js';
import "./style.css";
import "./all.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
