import { createSlice } from "@reduxjs/toolkit";
const initialState = "EN";
const ChangeLangauge = createSlice({
  name: "Changelan",
  initialState,
  reducers: {
    changelan: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { changelan } = ChangeLangauge.actions;
export default ChangeLangauge.reducer;
