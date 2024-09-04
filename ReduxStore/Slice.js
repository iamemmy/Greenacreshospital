// exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
  isStaticSidebar: false,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setIsMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    setIsStaticSidebar: (state, action) => {
      state.isStaticSidebar = action.payload;
    }
  },
});

export  const {
  setIsMenuOpen,
  setIsStaticSidebar
} = exampleSlice.actions;

export default exampleSlice.reducer;
