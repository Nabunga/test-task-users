import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './users/usersSlice';

export const store = configureStore({
  reducer: {
    usersSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch