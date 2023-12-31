import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'services/getMoviesApi';

import FilmsList from 'components/FilmList/FilmList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Trending today</h1>
      <FilmsList movies={movies} />
    </>
  );
};

export default Home;
