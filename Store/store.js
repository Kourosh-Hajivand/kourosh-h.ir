import { combineReducers, configureStore } from "@reduxjs/toolkit";
import DataHandler from "./DataReducer";
import ChangeLangauge from "./LanguageReducer";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const reducers = combineReducers({
  Data: DataHandler,
  Language: ChangeLangauge,
});

export function makeStore() {
  return configureStore({
    reducer: reducers,
  });
}
export const wrapper = createWrapper(makeStore, { debug: false });
