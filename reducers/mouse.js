import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

// création d'un reducer chargé d'enregistrer la valeur true or false du curseur

export const mouseSlice = createSlice({
  name: "mouse",
  initialState,
  reducers: {
    cursorBorW: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { cursorBorW } = mouseSlice.actions;
export default mouseSlice.reducer;
