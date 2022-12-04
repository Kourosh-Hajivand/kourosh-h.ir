import { createSlice } from "@reduxjs/toolkit";
import data from "../Data/Info";
const initialState = {
  Contetnt: data.EN,
};
const LanguageHandler = createSlice({
  name: "Language",
  initialState,
  reducers: {
    ChangeData: (state, action) => {
      return { ...state, Contetnt: action.payload };
    },
  },
});
export const { ChangeData } = LanguageHandler.actions;
export default LanguageHandler.reducer;
