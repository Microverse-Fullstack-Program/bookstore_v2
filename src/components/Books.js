import { useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './NewBook;';

const Books = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <div className="books-wrapper">
      {books.map((book) => (
        <div key={book.item_id} className="book">
          {' '}
          <Book book={book} />
        </div>
      ))}

      <AddBookForm />
    </div>
  );
};

export default Books;
