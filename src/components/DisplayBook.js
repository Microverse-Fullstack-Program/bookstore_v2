import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const DisplayBook = ({ book }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div className="book-details">
      <p className="bk-title">
        {' '}
        {book.title}
        {' '}
      </p>
      <p className="bk-author">
        {' '}
        {book.author}
        {' '}
      </p>
      <button type="button" onClick={handleRemoveBook}>
        Remove
      </button>
    </div>
  );
};

DisplayBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};

export default DisplayBook;
