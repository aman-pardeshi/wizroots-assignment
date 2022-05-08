import React from 'react';
import Card from '../../components/card/Card';
import './HomeScreen.css';

const HomeScreen = ({ articles }) => {
  return (
    <>
      {articles ? (
        articles.map((element) => (
          <a
            href={element.url}
            target='_blank'
            rel='noreferrer'
            className='link-tag'
            key={element.url}
          >
            <Card
              title={element.title}
              urlToImage={element.urlToImage}
              author={element.author}
              publishedAt={element.publishedAt}
              description={element.description}
            />
          </a>
        ))
      ) : (
        <h1 style={{ textAlign: 'center' }}>
          Oops! There seems to be some problem
        </h1>
      )}
    </>
  );
};

export default HomeScreen;
