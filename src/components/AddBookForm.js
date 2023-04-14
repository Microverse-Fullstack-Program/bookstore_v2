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
      <h2>Add a new book</h2>
      <form className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non Fiction">Non-Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <span />
        <button
          type="button"
          onClick={addingBook}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
