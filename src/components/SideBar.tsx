import '../styles/sidebar.scss';
import { Button } from './Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedGenreId: number;
  genres: GenreResponseProps[];
  setGenreId: Function;
}

export function SideBar({selectedGenreId, genres, setGenreId}: SideBarProps) {
  return (

  <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => setGenreId(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

  </nav>
  )
}
