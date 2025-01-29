import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import authReducer from './slices/authSlice';
import farmReducer from './slices/farmSlice';
import syncReducer from './slices/syncSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    farm: farmReducer,
    sync: syncReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
