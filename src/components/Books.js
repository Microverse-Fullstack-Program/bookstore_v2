import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import DisplayBook from './DisplayBook';
import AddBookForm from './AddBookForm';
import { FetchBook } from '../redux/books/booksSlice';

const Books = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBook());
  }, [dispatch]);

  if (isLoading) {
    return <p className="loading">Please wait it is loading...</p>;
  }

  if (error) {
    return <p className="error">Error occurred while fetching books</p>;
  }

  return (
    <ul className="books-wrapper">
      {books.map((book) => (
        <li key={book.item_id} className="book">
          {' '}
          <DisplayBook book={book} />
        </li>
      ))}

      <AddBookForm />
    </ul>
  );
};

export default Books;
