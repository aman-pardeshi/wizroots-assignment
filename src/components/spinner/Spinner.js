import React from 'react';
import loading from './loading.gif';
import './Spinner.css';

const Spinner = () => {
  return (
    <div>
      <img src={loading} alt='spinner' className='spinner' />
    </div>
  );
};

export default Spinner;
