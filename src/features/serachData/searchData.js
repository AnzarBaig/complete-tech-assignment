import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    searchData: [],
};

export const searchData = createSlice({
  name: 'searchData',
  initialState,
  reducers: {
    addSearchData: (state, action) => {
      const searchData = {
        id: nanoid(),
        data: action.payload,
      };
      state.searchData.push(searchData);
    },
  },
});

export const { addSearchData } = searchData.actions;

export default searchData.reducer;
