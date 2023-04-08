import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="btn-categories">
      <button type="button" onClick={handleCheckStatus}>Check Status</button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
