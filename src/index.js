import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    {/*프로바이더는 무조건 store라는  props를 받는다.*/}
    <App />
  </Provider>,
  document.getElementById("root")
);
