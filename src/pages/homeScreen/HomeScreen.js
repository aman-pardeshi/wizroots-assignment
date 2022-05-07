import React from 'react';
import Card from '../../components/card/Card';
import './HomeScreen.css';

const HomeScreen = ({ articles }) => {
  return (
    <>
      {articles.map((x) => (
        <a
          href={x.url}
          target='_blank'
          rel='noreferrer'
          className='link-tag'
          key={x.url}
        >
          <Card
            title={x.title}
            urlToImage={x.urlToImage}
            author={x.author}
            publishedAt={x.publishedAt}
            description={x.description}
          />
        </a>
      ))}
    </>
  );
};

export default HomeScreen;
