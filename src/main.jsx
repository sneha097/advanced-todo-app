import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store"; // ✅ This is the correct store
import App from "./App";
import Login from "./pages/Login";

// Authentication Check Component
const MainApp = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <App /> : <Login />;
};

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MainApp />
  </Provider>
);
