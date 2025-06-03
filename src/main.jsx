import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // путь к store
import App from "./App";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
