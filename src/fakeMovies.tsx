import inception from "./assets/inception.jpg";
import batman from "./assets/batman.jpg";
import parasite from "./assets/parasite.jpg";
import interstellar from "./assets/interstellar.jpg";
import actorImg from "./assets/actor.jpg";

export const fakeMovies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Science Fiction",
    description: "Un voleur infiltre les rêves pour dérober des secrets.",
    poster: inception,
    actors: [
      {
        id: 1,
        name: "Leonardo DiCaprio",
        photo: actorImg,
        birthYear: 1974,
        nationality: "Américain",
        bio: "Acteur oscarisé, connu pour ses rôles dans Titanic, Inception et The Revenant.",
      },
      {
        id: 2,
        name: "Joseph Gordon-Levitt",
        photo: actorImg,
        birthYear: 1981,
        nationality: "Américain",
        bio: "Acteur et réalisateur, célèbre pour 500 Days of Summer et Looper.",
      },
      {
        id: 3,
        name: "Elliot Page",
        photo: actorImg,
        birthYear: 1987,
        nationality: "Canadien",
        bio: "Connu pour Juno, Inception et la série The Umbrella Academy.",
      },
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
      {
        id: 4,
        name: "Christian Bale",
        photo: actorImg,
        birthYear: 1974,
        nationality: "Britannique",
        bio: "Acteur caméléon, célèbre pour ses transformations physiques dans ses rôles.",
      },
      {
        id: 5,
        name: "Heath Ledger",
        photo: actorImg,
        birthYear: 1979,
        nationality: "Australien",
        bio: "Acteur acclamé pour son interprétation légendaire du Joker.",
      },
      {
        id: 6,
        name: "Aaron Eckhart",
        photo: actorImg,
        birthYear: 1968,
        nationality: "Américain",
        bio: "Acteur connu pour Thank You for Smoking et The Dark Knight.",
      },
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
      {
        id: 7,
        name: "Matthew McConaughey",
        photo: actorImg,
        birthYear: 1969,
        nationality: "Américain",
        bio: "Oscar du meilleur acteur pour Dallas Buyers Club, connu pour son rôle dans Interstellar.",
      },
      {
        id: 8,
        name: "Anne Hathaway",
        photo: actorImg,
        birthYear: 1982,
        nationality: "Américaine",
        bio: "Actrice polyvalente ayant joué dans Les Misérables, The Devil Wears Prada et Interstellar.",
      },
      {
        id: 9,
        name: "Jessica Chastain",
        photo: actorImg,
        birthYear: 1977,
        nationality: "Américaine",
        bio: "Actrice engagée, connue pour Zero Dark Thirty et The Eyes of Tammy Faye.",
      },
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
      {
        id: 10,
        name: "Song Kang-ho",
        photo: actorImg,
        birthYear: 1967,
        nationality: "Sud-coréen",
        bio: "Figure emblématique du cinéma coréen, présent dans Snowpiercer et Parasite.",
      },
      {
        id: 11,
        name: "Lee Sun-kyun",
        photo: actorImg,
        birthYear: 1975,
        nationality: "Sud-coréen",
        bio: "Acteur reconnu pour ses rôles dans Coffee Prince et Parasite.",
      },
      {
        id: 12,
        name: "Cho Yeo-jeong",
        photo: actorImg,
        birthYear: 1981,
        nationality: "Sud-coréenne",
        bio: "Actrice et mannequin, célèbre pour son rôle dans Parasite.",
      },
    ],
  },
];
