import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <div className="form-wrapper">
      <h2>Add a new book</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addBook({ title, author }));
          setAuthor('');
          setTitle('');
        }}
        className="book-form"
      >
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
        <span />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default AddBookForm;
