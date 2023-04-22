import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus, filterBooks } from '../redux/categories/categoriesSlice';
import DisplayBook from './DisplayBook';

const Categories = () => {
  const { books } = useSelector((state) => state.books);
  const status = useSelector((state) => state.categories.status);
  const filteredBooks = useSelector((state) => state.categories.filteredBooks);
  const dispatch = useDispatch();

  const bookGenre = [...new Map(books.map((book) => [book.category, book])).values()];

  const filterHandler = (category) => {
    dispatch(filterBooks({ books, category }));
  };

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <div>
        {books.length ? (
          <>
            <div className="filter-input">
              <p>Filter Books:</p>
              <select
                className="cat-input"
                onChange={(e) => filterHandler(e.target.value)}
              >
                <option value="Unknown">Select Genre</option>
                {bookGenre.map((genre) => (
                  <option value={genre.category} key={genre.item_id}>
                    {' '}
                    {genre.category}
                  </option>
                ))}
              </select>
            </div>
            <ul className="books-wrapper">
              {filteredBooks && filteredBooks.map((book) => (
                <li key={book.item_id} className="book">
                  {' '}
                  <DisplayBook book={book} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="btn-categories">
            <button type="button" onClick={handleCheckStatus}>Check Status</button>
            <p className="error">{status}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
