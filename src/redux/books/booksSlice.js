import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL
const ApiKey = 'Gb1JegSOwIJELDtgYZwG';
const APIURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ApiKey}/books`;

// Actions
const ADD_BOOK = 'bookstore/booksSlice/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/booksSlice/REMOVE_BOOK';
const FETCH_BOOKS = 'book-store/booksSlice/FETCH_BOOKS';
const EDIT_BOOKS = 'book-store/booksSlice/EDIT_BOOKS';

// Action creators
const FetchBook = createAsyncThunk(FETCH_BOOKS, async () => {
  const res = await axios.get(APIURL);
  return res.data;
});

const AddBook = createAsyncThunk(ADD_BOOK, async (books) => {
  const res = await axios.post(APIURL, books);
  return res.data;
});

const EditBook = createAsyncThunk(EDIT_BOOKS, async (book) => book);

const RemoveBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${APIURL}/${id}`);
  return id;
});

const initialState = {
  books: [],
  isLoading: false,
  error: false,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addNewBook: (state, action) => {
      const bookItem = action.payload;
      const book = {
        item_id: bookItem.item_id,
        title: bookItem.title,
        author: bookItem.author,
        category: bookItem.category,
      };
      state.books.push(book);
    },
    updateBook: (state, action) => {
      const bookItem = action.payload;
      state.books.push(bookItem);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchBook.pending, (state) => ({
        ...state,
        isLoading: true,
        error: false,
      }))
      .addCase(FetchBook.fulfilled, (state, action) => {
        const books = action.payload;
        const newBooks = [];
        Object.keys(books).forEach((book) => newBooks.push({
          item_id: book,
          title: books[book][0].title,
          author: books[book][0].author,
          category: books[book][0].category,
        }));
        return ({
          ...state,
          books: newBooks,
          isLoading: false,
        });
      })
      .addCase(FetchBook.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(AddBook.pending, (state) => ({
        ...state,
        isLoading: true,
        error: false,
      }))
      .addCase(AddBook.fulfilled, (state) => ({
        ...state,
        books: state.books,
        isLoading: false,
        error: false,
      }))
      .addCase(AddBook.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(EditBook.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload.item_id),
        error: false,
      }))
      .addCase(EditBook.rejected, (state) => ({
        ...state,
        error: true,
      }))
      .addCase(RemoveBook.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
        error: false,
      }))
      .addCase(RemoveBook.rejected, (state) => ({
        ...state,
        error: true,
      }));
  },
});

export default bookSlice.reducer;
export const { addNewBook, updateBook } = bookSlice.actions;
export {
  FetchBook, AddBook, RemoveBook, EditBook,
};
