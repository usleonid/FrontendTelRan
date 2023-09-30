import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import weatherInfo from '../features/slices/weatherSlice';
import message from '../features/slices/messageSlice';

export const store = configureStore({
  reducer: {
    weatherInfo, message,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
