import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddBook, addNewBook } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const addingBook = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(AddBook(newBook)).then(() => dispatch(addNewBook(newBook)));
    setAuthor('');
    setTitle('');
    setCategory('');
  };

  return (
    <div className="form-wrapper">
      <h3>ADD NEW BOOK</h3>
      <form className="book-form">
        <input
          className="title-input"
          type="text"
          name="title"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author-input"
          type="text"
          name="author"
          placeholder="Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
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
        <span />
        <button
          className="addBtn"
          type="button"
          onClick={addingBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
