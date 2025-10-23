import inception from "./assets/inception.jpg";
import batman from "./assets/batman.jpg";
import parasite from "./assets/parasite.jpg";
import interstellar from "./assets/interstellar.jpg";
import actorImg from "./assets/actor.jpg";
import titanic from "./assets/titanic.jpg";
import grimm from "./assets/grimm.jpg";
import aaron from "./assets/aaron.jpg";
import bale from "./assets/bale.jpg";
import heath from "./assets/heath.jpg";
import dicaprio from "./assets/dicaprio.jpg";

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
        photo: dicaprio,
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
        photo: bale,
        birthYear: 1974,
        nationality: "Britannique",
        bio: "Acteur caméléon, célèbre pour ses transformations physiques dans ses rôles.",
      },
      {
        id: 5,
        name: "Heath Ledger",
        photo: heath,
        birthYear: 1979,
        nationality: "Australien",
        bio: "Acteur acclamé pour son interprétation légendaire du Joker.",
      },
      {
        id: 6,
        name: "Aaron Eckhart",
        photo: aaron,
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
  {
    id: 5,
    title: "Titanic",
    year: 1997,
    genre: "Drame / Romance",
    description:
      "Une romance tragique entre deux passagers de classes sociales différentes à bord du célèbre paquebot.",
    poster: titanic,
    actors: [
      {
        id: 1,
        name: "Leonardo DiCaprio",
        photo: dicaprio,
        birthYear: 1974,
        nationality: "Américain",
        bio: "Acteur oscarisé, connu pour ses rôles dans Titanic, Inception et The Revenant.",
      },
      {
        id: 14,
        name: "Kate Winslet",
        photo: actorImg,
        birthYear: 1975,
        nationality: "Britannique",
        bio: "Actrice reconnue pour Titanic, The Reader et Eternal Sunshine of the Spotless Mind.",
      },
      {
        id: 15,
        name: "Billy Zane",
        photo: actorImg,
        birthYear: 1966,
        nationality: "Américain",
        bio: "Connu pour son rôle de Cal Hockley dans Titanic et dans la série The Phantom.",
      },
    ],
  },
  {
    id: 6,
    title: "Les Frères Grimm",
    year: 2005,
    genre: "Fantastique / Aventure",
    description:
      "Deux frères escrocs sont contraints d'affronter une véritable malédiction dans une forêt enchantée.",
    poster: grimm,
    actors: [
      {
        id: 16,
        name: "Matt Damon",
        photo: actorImg,
        birthYear: 1970,
        nationality: "Américain",
        bio: "Acteur et scénariste, célèbre pour la série Jason Bourne, Good Will Hunting et Seul sur Mars.",
      },
      {
        id: 5,
        name: "Heath Ledger",
        photo: heath,
        birthYear: 1979,
        nationality: "Australien",
        bio: "Acteur acclamé pour son interprétation légendaire du Joker.",
      },
      {
        id: 18,
        name: "Lena Headey",
        photo: actorImg,
        birthYear: 1973,
        nationality: "Britannique",
        bio: "Actrice célèbre pour son rôle de Cersei Lannister dans Game of Thrones et dans 300.",
      },
    ],
  },
];
