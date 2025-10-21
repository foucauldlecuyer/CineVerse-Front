import inception from "./assets/inception.jpg";
import batman from "./assets/batman.jpg";
import parasite from "./assets/parasite.jpg";
import interstellar from "./assets/interstellar.jpg";
import actorImg from "./assets/actorExemple.png";

export const fakeMovies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Science Fiction",
    description: "Un voleur infiltre les rêves pour dérober des secrets.",
    poster: inception,
    actors: [
      { id: 1, name: "Leonardo DiCaprio", photo: actorImg },
      { id: 2, name: "Joseph Gordon-Levitt", photo: actorImg },
      { id: 3, name: "Elliot Page", photo: actorImg },
    ],
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    description:
      "Batman affronte le Joker dans un Gotham plongé dans le chaos.",
    poster: batman,
    actors: [
      { id: 4, name: "Christian Bale", photo: actorImg },
      { id: 5, name: "Heath Ledger", photo: actorImg },
      { id: 6, name: "Aaron Eckhart", photo: actorImg },
    ],
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Science Fiction",
    description:
      "Des astronautes explorent un trou de ver pour sauver l’humanité.",
    poster: interstellar,
    actors: [
      { id: 7, name: "Matthew McConaughey", photo: actorImg },
      { id: 8, name: "Anne Hathaway", photo: actorImg },
      { id: 9, name: "Jessica Chastain", photo: actorImg },
    ],
  },
  {
    id: 4,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    description:
      "Une famille pauvre s’infiltre dans la vie d’une famille aisée.",
    poster: parasite,
    actors: [
      { id: 10, name: "Song Kang-ho", photo: actorImg },
      { id: 11, name: "Lee Sun-kyun", photo: actorImg },
      { id: 12, name: "Cho Yeo-jeong", photo: actorImg },
    ],
  },
];
