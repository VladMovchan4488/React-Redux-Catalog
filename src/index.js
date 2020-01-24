// Library
import { Provider } from "react-redux";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
// Styles
import "../src/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import App from "./components/app/app";
import store from "./redux/store";

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>,
  document.getElementById("root")
);
