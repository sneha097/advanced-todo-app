import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Redux/authSlice"; // Import auth slice
import App from "./App";
import Login from "./pages/Login";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

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