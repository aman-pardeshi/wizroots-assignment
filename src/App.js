import './App.css';
import { useEffect, useState } from 'react';

import Category from './components/category/Category';
import OverlayCard from './components/overlayCard/OverlayCard';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/homeScreen/HomeScreen';
import Spinner from './components/spinner/Spinner';
import SearchBar from './components/searchBar/SearchBar';

const category = [
  {
    title: 'TechCrunch',
    url: `https://newsapi.org/v2/everything?sources=techcrunch&language=en&apiKey=${process.env.REACT_APP_API_KEY}`,
  },
];

function App() {
  const [newsArticle, setNewsArticle] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('TechCrunch');
  const [currentUrl, setCurrentUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchingArticles = async (url) => {
      let data = await fetch(url);
      setLoading(true);
      let parsedData = await data.json();
      setNewsArticle(parsedData.articles);
      setLoading(false);
    };

    let url = '';

    if (currentCategory === 'TechCrunch') {
      url = category[0].url;
    } else {
      url = `https://newsapi.org/v2/everything?q=${currentCategory}&language=en&apiKey=${process.env.REACT_APP_API_KEY}`;
    }

    fetchingArticles(url);
  }, [currentCategory, currentUrl]);

  const handleClick = (categoryObject) => {
    setCurrentCategory(categoryObject.title);
    setCurrentUrl(categoryObject.url);
  };

  return (
    <div className='App'>
      <h1 className='title'>News Today</h1>

      <OverlayCard
        category={category}
        overlay={overlay}
        setOverlay={setOverlay}
        setCurrentCategory={setCurrentCategory}
        setCurrentUrl={setCurrentUrl}
      />

      <div className='category-container'>
        <div className='category-subcontainer'>
          {category.map((element) => (
            <Category
              key={element.title}
              category={element}
              className='category'
              currentCategory={currentCategory}
              handleClick={handleClick}
            />
          ))}
        </div>
        <button
          className='add-button'
          onClick={() => setOverlay(!overlay)}
          disabled={category.length === 5}
        >
          +
        </button>
      </div>

      <SearchBar
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />

      {loading && <Spinner />}

      <Routes>
        <Route path='/' element={<HomeScreen articles={newsArticle} />} />
      </Routes>
    </div>
  );
}

export default App;
