import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice.js';
import categoriesSlice from './categories/categoriesSlice.js';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
  },
});

export default store;
