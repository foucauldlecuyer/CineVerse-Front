import "./MovieList.css";
import MovieCard from "../movieCard/MovieCard";

const fakeMovies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Science Fiction",
    poster: "src/assets/exemple.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    poster: "src/assets/exemple.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Science Fiction",
    poster: "src/assets/exemple.jpg",
  },
  {
    id: 4,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    poster: "src/assets/exemple.jpg",
  },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {fakeMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.year}
          genre={movie.genre}
          poster={movie.poster}
        />
      ))}
    </div>
  );
};

export default MovieList;
