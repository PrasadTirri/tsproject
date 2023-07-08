import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    cart:cartSlice
  },
});

export default store;
export type RootState= ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch

