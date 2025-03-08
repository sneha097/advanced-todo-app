import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice.js";
import authReducer from "./redux/authSlice.js";
import themeReducer from "./redux/themeSlice"; 
import weatherReducer from "./weatherSlice.js";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    weather: weatherReducer,
    theme: themeReducer,
  },
});

export default store;
