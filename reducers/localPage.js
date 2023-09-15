import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Home",
};



export const localPageSlice = createSlice({
  name: "localPage",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changePage } = localPageSlice.actions;
export default localPageSlice.reducer;
