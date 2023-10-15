import { useLocation, Link } from 'react-router-dom';
import { ListFilms, ItemFilms } from './FilmList.styled';
import Placeholder from '../Placeholder/Palceholder';

const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListFilms>
      {movies.map(({ id, title, name, poster_path }) => (
        <ItemFilms key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt={title ? title : name}
                width="200"
              />
            ) : (
              <Placeholder title={`${title} poster`} />
            )}

            <title>{title ? title : name}</title>
          </Link>
        </ItemFilms>
      ))}
    </ListFilms>
  );
};

export default FilmsList;

// <ListFilms>
//   {movies.map(({ id, original_title }) => (
//     <ItemFilms key={id}>
//       <Link state={{ from: location }} to={`/movies/${id}`}>
//         {original_title}
//       </Link>
//     </ItemFilms>
//   ))}
// </ListFilms>;
