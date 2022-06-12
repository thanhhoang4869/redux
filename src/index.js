import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./components/App";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer: reducers });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
