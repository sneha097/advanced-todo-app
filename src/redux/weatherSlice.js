// src/redux/weatherSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather(state, action) {
      state.weather = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setWeather, setLoading, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
