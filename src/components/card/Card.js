import React from 'react';
import './Card.css';

const Card = ({ title, author, publishedAt, urlToImage, description }) => {
  const time = publishedAt.split('T');
  let temp = time[1].split(':');
  temp.pop();
  if (+temp[0] > 12) {
    temp[0] = String(+temp[0] - 12);
    time.push('PM');
  } else {
    time.push('AM');
  }
  time[1] = temp.join(':');

  return (
    <div className='card-container'>
      <div className='content'>
        <div className='card-title'>{title}</div>
        <div className='author'>
          <span>{author}</span>
          <span className='dot'></span>
          <span>{time[0]}</span>
          <span>{time[1]}</span>
          <span>{time[2]}</span>
        </div>
        <div className='desc'>{description}</div>
      </div>

      <img src={urlToImage} alt='' className='imageDiv' />
    </div>
  );
};

export default Card;
