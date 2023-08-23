import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    [api.reducer]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
