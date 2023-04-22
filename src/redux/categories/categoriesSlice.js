import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredBooks: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'No book avaliable!',
    }),
    filterBooks: (state, action) => {
      const { books, category } = action.payload;
      return {
        ...state,
        filteredBooks: books.filter((book) => book.category === category),
      };
    },
  },
});

export default categoriesSlice.reducer;
export const { checkStatus, filterBooks } = categoriesSlice.actions;
