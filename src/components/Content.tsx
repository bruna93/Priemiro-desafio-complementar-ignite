import '../styles/content.scss';
import { MovieCard } from './MovieCard';


interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  GenreId: string;
  movies: MovieProps[];
}

export function Content ({movies, GenreId}:ContentProps) {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {GenreId}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.Title}
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
  )
}
