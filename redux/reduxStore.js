import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './Posts/postsSlice';
import authSlice from './Auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postsSlice,
  }});

