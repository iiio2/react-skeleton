import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await res.json();
    console.log(articles);
    setArticles(articles);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div>
      <h5>Articles</h5>

      {articles.length === 0 && <Skeleton height={500} />}

      {articles.slice(0, 4).map((article) => (
        <div className='card' key={article.id}>
          <h4>{article.title.slice(0, 10)}</h4>
          <h5>{article.body.slice(0, 22)}</h5>
        </div>
      ))}
    </div>
  );
};

export default Articles;
