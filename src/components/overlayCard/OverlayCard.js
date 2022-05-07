import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './OverlayCard.css';

const OverlayCard = ({
  category,
  overlay,
  setOverlay,
  setCurrentCategory,
  setCurrentUrl,
}) => {
  const [categoryName, setCategoryName] = useState('');
  const [url, setUrl] = useState('');
  if (!overlay) return null;

  const submitHandler = (e) => {
    e.preventDefault();

    if (categoryName === ' ') {
      return null;
    }

    if (category.length === 5) {
      alert('You can only add 5 categories');
    } else {
      category.push({ title: categoryName, url: url });
      setCurrentCategory(categoryName);
      setCurrentUrl(url);
      setCategoryName('');
      setUrl('');
      setOverlay(false);
    }
  };

  return overlay ? (
    <div className='popup'>
      <button onClick={() => setOverlay(false)} className='close-button '>
        Close
      </button>
      <div className='popup-inner'>
        <h1>Add Category</h1>

        <Form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='Category Name'
            value={categoryName}
            className='field'
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <br />
          <input
            type='text'
            placeholder='API URL'
            value={url}
            className='field'
            onChange={(e) => setUrl(e.target.value)}
          />
          <br />
          <button type='submit' varient='primary' className='button'>
            + Add
          </button>
        </Form>
      </div>
    </div>
  ) : null;
};

export default OverlayCard;
