import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice.js";
import authReducer from "./authSlice.js"; // <- No "redux/" here
import themeReducer from "./themeSlice.js"; // <- And here
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
