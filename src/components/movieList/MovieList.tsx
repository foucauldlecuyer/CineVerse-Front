import "./MovieList.css";
import MovieCard from "../movieCard/MovieCard";

const fakeMovies = [
  {
    title: "Inception",
    year: 2010,
    genre: "Science Fiction",
    poster: "src/assets/exemple.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    poster: "src/assets/exemple.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Science Fiction",
    poster: "src/assets/exemple.jpg",
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    poster: "src/assets/exemple.jpg",
  },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {fakeMovies.map((movie, index) => (
        <MovieCard
          key={index}
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
