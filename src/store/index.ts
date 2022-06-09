import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
export * from "./reducers";
