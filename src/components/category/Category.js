import React from 'react';
import './Category.css';

const Category = ({ category, handleClick, currentCategory }) => {
  return (
    <div
      className={`category-name ${
        currentCategory === category.title ? 'selected' : ''
      }`}
    >
      <div onClick={() => handleClick(category)}>{category.title}</div>
    </div>
  );
};

export default Category;
