import { useSelector } from 'react-redux';
import DisplayBook from './DisplayBook';
import AddBookForm from './AddBookForm';

const Books = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <div className="books-wrapper">
      {books.map((book) => (
        <div key={book.item_id} className="book">
          {' '}
          <DisplayBook book={book} />
        </div>
      ))}

      <AddBookForm />
    </div>
  );
};

export default Books;
