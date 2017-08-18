import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../components/App";

console.log( 12 );

const Root = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
  );

export default Root;
