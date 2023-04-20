import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './features/article/articleSlice';
import modalReducer from './features/modal/modalSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    article: articleReducer,
    modal: modalReducer,
    user: userReducer,
  },
});
