import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, addPosts, updatePost } from "./postsOperation";

const initialState = {
  postsAll: [],
  isLoading: false,
  error: null,
};

const statusError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addPosts.pending, (state) => {})
      .addCase(addPosts.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addPosts.rejected, (state, action) => {
        statusError(state, action);
      })
      .addCase(getAllPosts.pending, (state) => {})
      .addCase(getAllPosts.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;
        state.postsAll = [...payload];
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updatePost.pending, (state) => { })
      .addCase(updatePost.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updatePost.rejected, (state, action) => {
        statusError(state, action);
      });
  },
});

export default postsSlice.reducer;
