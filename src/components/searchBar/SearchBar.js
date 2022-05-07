import React, { useState } from 'react';
import './SearchBar.css';
import { Form } from 'react-bootstrap';

const SearchBar = ({ setCurrentCategory }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (keyword.length > 3) setCurrentCategory(keyword);
  };

  const handleSubmit = () => {
    if (keyword.length > 3) setCurrentCategory(keyword);
  };
  return (
    <Form onSubmit={handleSubmit} className='search-container'>
      <input
        className='search-bar'
        type='text'
        placeholder='Search for keyword or author'
        value={keyword}
        onChange={(e) => handleChange(e)}
      ></input>
    </Form>
  );
};

export default SearchBar;
