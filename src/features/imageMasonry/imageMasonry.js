import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  imageMasonry: [],
};

export const imageMasonry = createSlice({
  name: 'imageMasonry',
  initialState,
  reducers: {
    addPexelData: (state, action) => {
      const imageData = {
        id: nanoid(),
        data: action.payload,
      };
      state.imageMasonry.push(imageData);
    },
    clearPexelData: (state) => {
      state.imageMasonry = [];
    },
  },
});

export const { addPexelData, clearPexelData  } = imageMasonry.actions;

export default imageMasonry.reducer;
