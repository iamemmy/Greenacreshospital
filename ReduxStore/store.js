import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './Slice';

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;
