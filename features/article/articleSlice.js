import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    updateArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { updateArticles } = articleSlice.actions;
export default articleSlice.reducer;
