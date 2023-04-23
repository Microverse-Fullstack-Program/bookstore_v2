import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateBook, EditBook } from '../redux/books/booksSlice';

const EditBookForm = ({ book }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [category, setCategory] = useState(book.category);

  const editingBook = () => {
    const updatedBook = {
      item_id: book.item_id,
      title,
      author,
      category,
    };
    dispatch(EditBook(updatedBook)).then(() => dispatch(updateBook(updatedBook)));
  };

  return (
    <form className="book-form">
      <div>
        <p>Title:</p>
        <input
          className="edit-title"
          type="text"
          name="title"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <p>Author:</p>
        <input
          className="author-input"
          type="text"
          name="author"
          placeholder="Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <p>Genre</p>
        <select
          className="genre-input"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Unknown"> Select Book Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non Fiction">Non Fiction</option>
          <option value="Narrative">Narrative</option>
          <option value="Short Story">Short Story</option>
          <option value="Novel">Novel</option>
          <option value="Poetry">Poetry</option>
          <option value="Mystery">Mystery</option>
          <option value="Drama">Drama</option>
          <option value="History">History</option>
          <option value="Legend">Legend</option>
        </select>
      </div>
      <div style={{ marginTop: '15px' }}>
        <span />
        <button
          className="addBtn"
          type="button"
          onClick={editingBook}
        >
          Update Book
        </button>
      </div>
    </form>
  );
};

EditBookForm.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};

export default EditBookForm;
