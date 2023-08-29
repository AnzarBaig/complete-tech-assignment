import { configureStore } from "@reduxjs/toolkit";
import imageMasonryReducer from "../features/imageMasonry/imageMasonry";
import SearchDataReducer from "../features/serachData/searchData";

export const store = configureStore({
    reducer: {
      imageMasonry: imageMasonryReducer,
      SearchData: SearchDataReducer
    },
  });
  