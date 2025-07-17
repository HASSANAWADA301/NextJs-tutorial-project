import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slices/headerSlice";
import uiReducer from "./slices/darkSlice";
import footerReducer from "./slices/footerSlice";
import { statsApi } from "./api/statsApi";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    footer: footerReducer,
    ui: uiReducer,
    [statsApi.reducerPath]: statsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(statsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
