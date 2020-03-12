import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./lib/Auth";
import App from "./App";

// import './fonts/NunitoSans-Light.ttf'
// import './fonts/NunitoSans-Regular.ttf'
// import './fonts/NunitoSans-SemiBold.ttf'
// import './fonts/Quicksand-Regular.ttf'
// import './fonts/Quicksand-SemiBold.ttf'

ReactDOM.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
