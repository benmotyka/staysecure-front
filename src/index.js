import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Suspense fallback={<div id="loading-screen"></div>}>
      <App />
    </Suspense>
  </Router>,
  document.getElementById("root")
);
