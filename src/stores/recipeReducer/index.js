import { createSlice } from "@reduxjs/toolkit";

const recipe = createSlice({
  name: "recipe",
  initialState: {
    data: null,
    slug: null,
  },
  reducers: {
    setDetail(state, action) {
      state.data = action.payload.data;
      state.slug = action.payload.slug;
    },
  },
});

export const { setDetail } = recipe.actions;
export default recipe.reducer;
