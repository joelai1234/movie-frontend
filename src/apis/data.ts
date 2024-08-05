import { CreateCrewPayload } from "./model/crew";
import { CreateVideoPayload } from "./model/video";

export const defaultData: {
  createCrewsPayload: CreateCrewPayload[];
  createVideoPayload: Omit<
    CreateVideoPayload,
    | "videoDirectorCrewIds"
    | "videoWriterCrewIds"
    | "videoCastCrewIds"
    | "videoSubtitles"
  >;
}[] = [
  // The Lord Of The Rings: The Fellowship Of The Ring
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/the-lord-of-the-rings.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      name: "The Lord Of The Rings: The Fellowship Of The Ring",
      releaseYear: 2001,
      duration: 178,
      categories: ["ACTION", "ADVENTURE", "FANTASY"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "The Lord Of The Rings: The Fellowship Of The Ring",
          description:
            "A young hobbit, Frodo, is tasked with destroying a powerful ring.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "fantasy",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Peter Jackson",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Peter Jackson is a New Zealand film director, screenwriter, and producer.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Peter_Jackson_SDCC_2014.jpg/440px-Peter_Jackson_SDCC_2014.jpg",
        born: "1961-10-31",
        education: "NA",
        nickname: "PJ",
        spouse: "Fran Walsh",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/sir_peterjackson/",
          },
        ],
      },
      {
        name: "Fran Walsh",
        roles: ["WRITER"],
        introduction:
          "Fran Walsh is a screenwriter, film producer, and composer from New Zealand.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Fran_Walsh_DNZM_%28cropped%29.jpg/440px-Fran_Walsh_DNZM_%28cropped%29.jpg",
        born: "1959-01-10",
        education: "Victoria University of Wellington",
        nickname: "Fran",
        spouse: "Peter Jackson",
        websites: [],
      },
      {
        name: "Elijah Wood",
        roles: ["CAST"],
        introduction:
          "Elijah Wood is an American actor best known for his role as Frodo Baggins in The Lord of the Rings.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Elijah_Wood_%2847955397556%29_%28cropped%29.jpg/440px-Elijah_Wood_%2847955397556%29_%28cropped%29.jpg",
        born: "1981-01-28",
        education: "NA",
        nickname: "Elwood",
        spouse: "NA",
        websites: [
          {
            name: "Twitter",
            url: "https://twitter.com/elijahwood",
          },
        ],
      },
      {
        name: "Ian McKellen",
        roles: ["CAST"],
        introduction:
          "Sir Ian McKellen is an English actor known for his roles in The Lord of the Rings and X-Men.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/SDCC13_-_Ian_McKellen.jpg/440px-SDCC13_-_Ian_McKellen.jpg",
        born: "1939-05-25",
        education: "St Catharine's College, Cambridge",
        nickname: "Serena",
        spouse: "NA",
        websites: [
          {
            name: "Official Website",
            url: "http://www.mckellen.com/",
          },
        ],
      },
    ],
  },
  // Star Wars: The Empire Strikes Back
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/star-wars-the-empire-strikes-back.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      name: "Star Wars: The Empire Strikes Back",
      releaseYear: 1980,
      duration: 124,
      categories: ["ACTION", "ADVENTURE", "SCI_FI"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "Star Wars: The Empire Strikes Back",
          description:
            "The Rebel Alliance battles the Galactic Empire and Luke Skywalker confronts Darth Vader.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "sci-fi",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Irvin Kershner",
        roles: ["DIRECTOR"],
        introduction:
          "Irvin Kershner was an American director and producer known for his work on 'Star Wars: The Empire Strikes Back'.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/98/Irvin_Kershner.jpg",
        born: "1923-04-29",
        education: "University of Southern California",
        nickname: "Kersh",
        spouse: "Jean Kershner",
        websites: [
          {
            name: "IMDb",
            url: "https://www.imdb.com/name/nm0449984/",
          },
        ],
      },
      {
        name: "Leigh Brackett",
        roles: ["WRITER"],
        introduction:
          "Leigh Brackett was an American writer known for her work on 'Star Wars: The Empire Strikes Back'.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1f/Leigh_Brackett.jpg",
        born: "1915-12-07",
        education: "NA",
        nickname: "Leigh",
        spouse: "Edmond Hamilton",
        websites: [
          {
            name: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Leigh_Brackett",
          },
        ],
      },
      {
        name: "Lawrence Kasdan",
        roles: ["WRITER"],
        introduction:
          "Lawrence Kasdan is an American screenwriter and director known for his work on 'Star Wars: The Empire Strikes Back'.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/98/Lawrence_Kasdan.jpg",
        born: "1949-01-14",
        education: "University of Michigan",
        nickname: "Larry",
        spouse: "Meg Kasdan",
        websites: [
          {
            name: "IMDb",
            url: "https://www.imdb.com/name/nm0001410/",
          },
        ],
      },
      {
        name: "Mark Hamill",
        roles: ["CAST"],
        introduction:
          "Mark Hamill is an American actor known for his role as Luke Skywalker in the 'Star Wars' series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/85/Mark_Hamill.jpg",
        born: "1951-09-25",
        education: "Los Angeles City College",
        nickname: "Mark",
        spouse: "Marilou York",
        websites: [
          {
            name: "Twitter",
            url: "https://twitter.com/HamillHimself",
          },
        ],
      },
      {
        name: "Harrison Ford",
        roles: ["CAST"],
        introduction:
          "Harrison Ford is an American actor known for his role as Han Solo in the 'Star Wars' series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/32/Harrison_Ford.jpg",
        born: "1942-07-13",
        education: "Ripon College",
        nickname: "Harry",
        spouse: "Calista Flockhart",
        websites: [
          {
            name: "IMDb",
            url: "https://www.imdb.com/name/nm0000148/",
          },
        ],
      },
      {
        name: "Carrie Fisher",
        roles: ["CAST"],
        introduction:
          "Carrie Fisher was an American actress and writer known for her role as Princess Leia in the 'Star Wars' series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/72/Carrie_Fisher.jpg",
        born: "1956-10-21",
        education: "Central School of Speech and Drama",
        nickname: "Carrie",
        spouse: "NA",
        websites: [
          {
            name: "Twitter",
            url: "https://twitter.com/carrieffisher",
          },
        ],
      },
    ],
  },
  // The Godfather
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/the-godfather.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      name: "The Godfather",
      releaseYear: 1972,
      duration: 175,
      categories: ["CRIME", "DRAMA"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "The Godfather",
          description:
            "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "crime",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Francis Ford Coppola",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Francis Ford Coppola is an American film director, producer, and screenwriter.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Francis_Ford_Coppola_2011_CC.jpg/440px-Francis_Ford_Coppola_2011_CC.jpg",
        born: "1939-04-07",
        education: "UCLA School of Theater, Film and Television",
        nickname: "Francis",
        spouse: "Eleanor Coppola",
        websites: [
          {
            name: "Official Website",
            url: "http://www.ffcoppola.com/",
          },
        ],
      },
      {
        name: "Mario Puzo",
        roles: ["WRITER"],
        introduction:
          "Mario Puzo was an American author, screenwriter, and journalist.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mario_Puzo_1972.jpg/440px-Mario_Puzo_1972.jpg",
        born: "1920-10-15",
        education: "City College of New York",
        nickname: "Mario",
        spouse: "Erika Puzo",
        websites: [],
      },
      {
        name: "Marlon Brando",
        roles: ["CAST"],
        introduction: "Marlon Brando was an American actor and film director.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Marlon_Brando_Streetcar_1951.jpg/440px-Marlon_Brando_Streetcar_1951.jpg",
        born: "1924-04-03",
        education: "Stella Adler Studio of Acting",
        nickname: "Brando",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Al Pacino",
        roles: ["CAST"],
        introduction: "Al Pacino is an American actor and filmmaker.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Al_Pacino_2016.jpg/440px-Al_Pacino_2016.jpg",
        born: "1940-04-25",
        education: "Actors Studio",
        nickname: "Al",
        spouse: "NA",
        websites: [
          {
            name: "Official Website",
            url: "http://www.alpacino.com/",
          },
        ],
      },
    ],
  },
  // The Dark Knight
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/the-dark-knight.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      name: "The Dark Knight",
      releaseYear: 2008,
      duration: 152,
      categories: ["ACTION", "CRIME", "DRAMA"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "The Dark Knight",
          description:
            "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "superhero",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Christopher Nolan",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Christopher Nolan is a British-American film director, producer, and screenwriter.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Christopher_Nolan_Cannes_2018.jpg/440px-Christopher_Nolan_Cannes_2018.jpg",
        born: "1970-07-30",
        education: "University College London",
        nickname: "Chris",
        spouse: "Emma Thomas",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/chrisnolan_official/",
          },
        ],
      },
      {
        name: "Jonathan Nolan",
        roles: ["WRITER"],
        introduction:
          "Jonathan Nolan is a British-American screenwriter, television producer, director, and author.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Jonathan_Nolan_Cannes_2018.jpg/440px-Jonathan_Nolan_Cannes_2018.jpg",
        born: "1976-06-06",
        education: "Georgetown University",
        nickname: "Jonah",
        spouse: "Lisa Joy",
        websites: [],
      },
      {
        name: "Christian Bale",
        roles: ["CAST"],
        introduction:
          "Christian Bale is an English actor known for his versatility and intensive method acting.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Christian_Bale-7834.jpg/440px-Christian_Bale-7834.jpg",
        born: "1974-01-30",
        education: "NA",
        nickname: "Chris",
        spouse: "Sibi Blazic",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/christianbale_/",
          },
        ],
      },
      {
        name: "Heath Ledger",
        roles: ["CAST"],
        introduction:
          "Heath Ledger was an Australian actor and music video director.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Heath_Ledger_%28251894110%29.jpg/440px-Heath_Ledger_%28251894110%29.jpg",
        born: "1979-04-04",
        education: "NA",
        nickname: "Heath",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Aaron Eckhart",
        roles: ["CAST"],
        introduction:
          "Aaron Eckhart is an American actor known for his role as Harvey Dent in The Dark Knight.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Aaron_Eckhart_2013.jpg/440px-Aaron_Eckhart_2013.jpg",
        born: "1968-03-12",
        education: "Brigham Young University",
        nickname: "Aaron",
        spouse: "NA",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/aaroneckhart/",
          },
        ],
      },
      {
        name: "Maggie Gyllenhaal",
        roles: ["CAST"],
        introduction:
          "Maggie Gyllenhaal is an American actress and film producer.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Maggie_Gyllenhaal_2014.jpg/440px-Maggie_Gyllenhaal_2014.jpg",
        born: "1977-11-16",
        education: "Columbia University",
        nickname: "Maggie",
        spouse: "Peter Sarsgaard",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/mgyllenhaal/",
          },
        ],
      },
    ],
  },
  // The Shawshank Redemption
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/the-shawshank-redemption.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      name: "The Shawshank Redemption",
      releaseYear: 1994,
      duration: 142,
      categories: ["DRAMA"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "The Shawshank Redemption",
          description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "drama",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Frank Darabont",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Frank Darabont is a Hungarian-American film director, screenwriter, and producer.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Frank_Darabont_by_Gage_Skidmore.jpg/440px-Frank_Darabont_by_Gage_Skidmore.jpg",
        born: "1959-01-28",
        education: "Hollywood High School",
        nickname: "Frank",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Stephen King",
        roles: ["WRITER"],
        introduction:
          "Stephen King is an American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stephen_King%2C_Comicon.jpg/440px-Stephen_King%2C_Comicon.jpg",
        born: "1947-09-21",
        education: "University of Maine",
        nickname: "King",
        spouse: "Tabitha King",
        websites: [
          {
            name: "Official Website",
            url: "http://www.stephenking.com/",
          },
        ],
      },
      {
        name: "Tim Robbins",
        roles: ["CAST"],
        introduction:
          "Tim Robbins is an American actor, screenwriter, director, producer, and musician.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tim_Robbins_Cannes_2011.jpg/440px-Tim_Robbins_Cannes_2011.jpg",
        born: "1958-10-16",
        education: "UCLA School of Theater, Film and Television",
        nickname: "Tim",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Morgan Freeman",
        roles: ["CAST"],
        introduction:
          "Morgan Freeman is an American actor, director, and narrator.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Morgan_Freeman%2C_2006.jpg/440px-Morgan_Freeman%2C_2006.jpg",
        born: "1937-06-01",
        education: "Los Angeles City College",
        nickname: "Morgan",
        spouse: "NA",
        websites: [
          {
            name: "Official Website",
            url: "http://www.morganfreeman.com/",
          },
        ],
      },
    ],
  },
  // Jaws
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/jaws.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
      name: "Jaws",
      releaseYear: 1975,
      duration: 124,
      categories: ["THRILLER", "ADVENTURE", "HORROR"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "Jaws",
          description:
            "A giant great white shark arrives on the shores of a New England beach resort and wreaks havoc with bloody attacks on swimmers until a local sheriff, a marine biologist, and an old seafarer team up to hunt the monster down.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "thriller",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Steven Spielberg",
        roles: ["DIRECTOR"],
        introduction:
          "Steven Spielberg is an American film director, producer, and screenwriter.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Steven_Spielberg_by_Gage_Skidmore.jpg/440px-Steven_Spielberg_by_Gage_Skidmore.jpg",
        born: "1946-12-18",
        education: "California State University, Long Beach",
        nickname: "Steve",
        spouse: "Kate Capshaw",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/stevenspielberg_official/",
          },
        ],
      },
      {
        name: "Peter Benchley",
        roles: ["WRITER"],
        introduction:
          "Peter Benchley was an American author and screenwriter, best known for writing the novel Jaws and co-writing its film adaptation.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Peter_Benchley.jpg/440px-Peter_Benchley.jpg",
        born: "1940-05-08",
        education: "Harvard University",
        nickname: "Peter",
        spouse: "Wendy Benchley",
        websites: [],
      },
      {
        name: "Carl Gottlieb",
        roles: ["WRITER"],
        introduction:
          "Carl Gottlieb is an American screenwriter, actor, comedian, and director, known for co-writing the screenplay for Jaws.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Carl_Gottlieb_by_Gage_Skidmore.jpg/440px-Carl_Gottlieb_by_Gage_Skidmore.jpg",
        born: "1938-03-18",
        education: "Syracuse University",
        nickname: "Carl",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Roy Scheider",
        roles: ["CAST"],
        introduction:
          "Roy Scheider was an American actor and amateur boxer, known for his leading role as Chief Martin Brody in Jaws.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Roy_Scheider_offshore_in_The_French_Connection_trailer.jpg/440px-Roy_Scheider_offshore_in_The_French_Connection_trailer.jpg",
        born: "1932-11-10",
        education: "Rutgers University",
        nickname: "Roy",
        spouse: "Brenda Siemer Scheider",
        websites: [],
      },
      {
        name: "Robert Shaw",
        roles: ["CAST"],
        introduction:
          "Robert Shaw was an English actor, novelist, and playwright, known for his role as Quint in Jaws.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Robert_Shaw_in_Harper_%281966%29.jpg/440px-Robert_Shaw_in_Harper_%281966%29.jpg",
        born: "1927-08-09",
        education: "Royal Academy of Dramatic Art",
        nickname: "Bob",
        spouse: "Virginia Jansen",
        websites: [],
      },
      {
        name: "Richard Dreyfuss",
        roles: ["CAST"],
        introduction:
          "Richard Dreyfuss is an American actor known for starring in popular films during the 1970s, 1980s, and 1990s.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Richard_Dreyfuss_cropped_2.jpg/440px-Richard_Dreyfuss_cropped_2.jpg",
        born: "1947-10-29",
        education: "San Fernando Valley State College",
        nickname: "Rick",
        spouse: "Svetlana Erokhin",
        websites: [
          {
            name: "Twitter",
            url: "https://twitter.com/RichardDreyfuss",
          },
        ],
      },
      {
        name: "Lorraine Gary",
        roles: ["CAST"],
        introduction:
          "Lorraine Gary is an American actress best known for her role as Ellen Brody in Jaws.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lorraine_Gary_Jaws_2_1978.JPG/440px-Lorraine_Gary_Jaws_2_1978.JPG",
        born: "1937-08-16",
        education: "Columbia University",
        nickname: "Lorraine",
        spouse: "Sidney Sheinberg",
        websites: [],
      },
    ],
  },
  // Pulp Fiction
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/pulp-fiction.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      name: "Pulp Fiction",
      releaseYear: 1994,
      duration: 154,
      categories: ["CRIME", "DRAMA"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "Pulp Fiction",
          description:
            "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "crime",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Quentin Tarantino",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Quentin Tarantino is an American filmmaker and screenwriter known for his stylistic and nonlinear narratives.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Quentin_Tarantino_by_Gage_Skidmore.jpg/440px-Quentin_Tarantino_by_Gage_Skidmore.jpg",
        born: "1963-03-27",
        education: "NA",
        nickname: "Quentin",
        spouse: "Daniella Pick",
        websites: [
          {
            name: "Official Website",
            url: "http://www.tarantino.info/",
          },
        ],
      },
      {
        name: "Roger Avary",
        roles: ["WRITER"],
        introduction:
          "Roger Avary is a Canadian filmmaker, director, and screenwriter known for his work on Pulp Fiction.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Roger_Avary_at_a_screening_of_Lucky_Day.jpg/440px-Roger_Avery_at_a_screening_of_Lucky_Day.jpg",
        born: "1965-08-23",
        education: "NA",
        nickname: "Roger",
        spouse: "Gretchen Avary",
        websites: [],
      },
      {
        name: "John Travolta",
        roles: ["CAST"],
        introduction:
          "John Travolta is an American actor and singer, known for his roles in Saturday Night Fever and Pulp Fiction.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/John_Travolta_%28cropped%29.jpg/440px-John_Travolta_%28cropped%29.jpg",
        born: "1954-02-18",
        education: "Dwight Morrow High School",
        nickname: "John",
        spouse: "Kelly Preston",
        websites: [
          {
            name: "Official Website",
            url: "http://www.travolta.com/",
          },
        ],
      },
      {
        name: "Uma Thurman",
        roles: ["CAST"],
        introduction:
          "Uma Thurman is an American actress and model, known for her roles in Pulp Fiction and Kill Bill.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uma_Thurman_Cannes_2017.jpg/440px-Uma_Thurman_Cannes_2017.jpg",
        born: "1970-04-29",
        education: "Northfield Mount Hermon School",
        nickname: "Uma",
        spouse: "NA",
        websites: [
          {
            name: "Official Website",
            url: "http://www.umathurman.com/",
          },
        ],
      },
      {
        name: "Samuel L. Jackson",
        roles: ["CAST"],
        introduction:
          "Samuel L. Jackson is an American actor and producer, known for his distinctive voice and roles in numerous films.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Samuel_L_Jackson_2014.jpg/440px-Samuel_L_Jackson_2014.jpg",
        born: "1948-12-21",
        education: "Morehouse College",
        nickname: "Sam",
        spouse: "LaTanya Richardson",
        websites: [
          {
            name: "Official Website",
            url: "http://www.samuelljackson.com/",
          },
        ],
      },
    ],
  },
  // Avengers: Infinity War
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/avengers-infinity-war.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
      name: "Avengers: Infinity War",
      releaseYear: 2018,
      duration: 149,
      categories: ["ACTION", "ADVENTURE", "FANTASY"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "Avengers: Infinity War",
          description:
            "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "superhero",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Anthony Russo",
        roles: ["DIRECTOR"],
        introduction:
          "Anthony Russo is an American film and television director, producer, screenwriter, and editor.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Anthony_Russo_2019.jpg/440px-Anthony_Russo_2019.jpg",
        born: "1970-02-03",
        education: "University of Pennsylvania",
        nickname: "Tony",
        spouse: "Ann Russo",
        websites: [],
      },
      {
        name: "Joe Russo",
        roles: ["DIRECTOR"],
        introduction:
          "Joe Russo is an American film and television director, producer, screenwriter, and editor.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Joe_Russo_2019.jpg/440px-Joe_Russo_2019.jpg",
        born: "1971-07-18",
        education: "Case Western Reserve University",
        nickname: "Joe",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Christopher Markus",
        roles: ["WRITER"],
        introduction:
          "Christopher Markus is an American screenwriter and producer, known for his collaborations with Stephen McFeely.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Christopher_Markus_by_Gage_Skidmore.jpg/440px-Christopher_Markus_by_Gage_Skidmore.jpg",
        born: "1970-01-02",
        education: "Rutgers University",
        nickname: "Chris",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Stephen McFeely",
        roles: ["WRITER"],
        introduction:
          "Stephen McFeely is an American screenwriter and producer, known for his collaborations with Christopher Markus.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Stephen_McFeely_by_Gage_Skidmore.jpg/440px-Stephen_McFeely_by_Gage_Skidmore.jpg",
        born: "1970-11-12",
        education: "University of Notre Dame",
        nickname: "Steve",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Robert Downey Jr.",
        roles: ["CAST"],
        introduction:
          "Robert Downey Jr. is an American actor and producer, known for his role as Iron Man in the Marvel Cinematic Universe.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/440px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg",
        born: "1965-04-04",
        education: "Santa Monica High School",
        nickname: "RDJ",
        spouse: "Susan Downey",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/robertdowneyjr/",
          },
        ],
      },
      {
        name: "Chris Hemsworth",
        roles: ["CAST"],
        introduction:
          "Chris Hemsworth is an Australian actor, known for his role as Thor in the Marvel Cinematic Universe.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Chris_Hemsworth_by_Gage_Skidmore_2.jpg/440px-Chris_Hemsworth_by_Gage_Skidmore_2.jpg",
        born: "1983-08-11",
        education: "Heathmont College",
        nickname: "Chris",
        spouse: "Elsa Pataky",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/chrishemsworth/",
          },
        ],
      },
      {
        name: "Mark Ruffalo",
        roles: ["CAST"],
        introduction:
          "Mark Ruffalo is an American actor and producer, known for his role as Hulk in the Marvel Cinematic Universe.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mark_Ruffalo_2017.jpg/440px-Mark_Ruffalo_2017.jpg",
        born: "1967-11-22",
        education: "Stella Adler Studio of Acting",
        nickname: "Mark",
        spouse: "Sunrise Coigney",
        websites: [
          {
            name: "Twitter",
            url: "https://twitter.com/MarkRuffalo",
          },
        ],
      },
    ],
  },
  // Raiders Of The Lost Ark
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/raiders-of-the-lost-ark.mp4",
      coverPictureUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/a6/Raiders_of_the_Lost_Ark_Theatrical_Poster.jpg",
      name: "Raiders Of The Lost Ark",
      releaseYear: 1981,
      duration: 115,
      categories: ["ACTION", "ADVENTURE"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "Raiders Of The Lost Ark",
          description:
            "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Raiders_of_the_Lost_Ark_Theatrical_Poster.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "adventure",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Steven Spielberg",
        roles: ["DIRECTOR"],
        introduction:
          "Steven Spielberg is an American film director, producer, and screenwriter.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Steven_Spielberg_by_Gage_Skidmore.jpg/440px-Steven_Spielberg_by_Gage_Skidmore.jpg",
        born: "1946-12-18",
        education: "California State University, Long Beach",
        nickname: "Steve",
        spouse: "Kate Capshaw",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/stevenspielberg_official/",
          },
        ],
      },
      {
        name: "George Lucas",
        roles: ["WRITER"],
        introduction:
          "George Lucas is an American filmmaker, philanthropist, and entrepreneur.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/George_Lucas_Cannes_2011_%28cropped%29.jpg/440px-George_Lucas_Cannes_2011_%28cropped%29.jpg",
        born: "1944-05-14",
        education: "University of Southern California",
        nickname: "George",
        spouse: "Mellody Hobson",
        websites: [],
      },
      {
        name: "Lawrence Kasdan",
        roles: ["WRITER"],
        introduction:
          "Lawrence Kasdan is an American screenwriter, director, and producer.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lawrence_Kasdan_Deauville_2015.jpg/440px-Lawrence_Kasdan_Deauville_2015.jpg",
        born: "1949-01-14",
        education: "University of Michigan",
        nickname: "Larry",
        spouse: "Meg Kasdan",
        websites: [],
      },
      {
        name: "Harrison Ford",
        roles: ["CAST"],
        introduction:
          "Harrison Ford is an American actor. He gained worldwide fame for his starring roles as Han Solo in the Star Wars trilogy and as the title character of the Indiana Jones film series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Harrison_Ford_by_Gage_Skidmore_2.jpg/440px-Harrison_Ford_by_Gage_Skidmore_2.jpg",
        born: "1942-07-13",
        education: "Ripon College",
        nickname: "Harry",
        spouse: "Calista Flockhart",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/iamharrisonford/",
          },
        ],
      },
      {
        name: "Karen Allen",
        roles: ["CAST"],
        introduction:
          "Karen Allen is an American actress. She is best known for her role as Marion Ravenwood in Raiders of the Lost Ark.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Karen_Allen_Indy_2018.jpg/440px-Karen_Allen_Indy_2018.jpg",
        born: "1951-10-05",
        education: "George Washington University",
        nickname: "Karen",
        spouse: "Kale Browne",
        websites: [],
      },
      {
        name: "Paul Freeman",
        roles: ["CAST"],
        introduction:
          "Paul Freeman is an English actor who has appeared in theatre, television, and film.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Paul_Freeman.JPG/440px-Paul_Freeman.JPG",
        born: "1943-01-18",
        education: "Royal Academy of Dramatic Art",
        nickname: "Paul",
        spouse: "Maggie Scott",
        websites: [],
      },
      {
        name: "John Rhys-Davies",
        roles: ["CAST"],
        introduction:
          "John Rhys-Davies is a Welsh actor and voice actor, known for his roles as Gimli in The Lord of the Rings trilogy and Sallah in the Indiana Jones franchise.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/John_Rhys-Davies_by_Gage_Skidmore.jpg/440px-John_Rhys-Davies_by_Gage_Skidmore.jpg",
        born: "1944-05-05",
        education: "Royal Academy of Dramatic Art",
        nickname: "John",
        spouse: "Suzanne Wilkinson",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/john_rhys_davies/",
          },
        ],
      },
    ],
  },
  // Goodfellas
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/goodfellas.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      name: "Goodfellas",
      releaseYear: 1990,
      duration: 146,
      categories: ["CRIME", "DRAMA"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "Goodfellas",
          description:
            "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "crime",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Martin Scorsese",
        roles: ["DIRECTOR"],
        introduction:
          "Martin Scorsese is an American film director, producer, screenwriter, and actor.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg/440px-Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg",
        born: "1942-11-17",
        education: "New York University",
        nickname: "Marty",
        spouse: "Helen Morris",
        websites: [],
      },
      {
        name: "Nicholas Pileggi",
        roles: ["WRITER"],
        introduction:
          "Nicholas Pileggi is an American screenwriter and author, known for his crime novels and films.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Nicholas_Pileggi.jpg/440px-Nicholas_Pileggi.jpg",
        born: "1933-02-22",
        education: "Fordham University",
        nickname: "Nick",
        spouse: "Nora Ephron",
        websites: [],
      },
      {
        name: "Robert De Niro",
        roles: ["CAST"],
        introduction:
          "Robert De Niro is an American actor, producer, and director, known for his roles in numerous critically acclaimed films.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Robert_De_Niro_Cannes_2016.jpg/440px-Robert_De_Niro_Cannes_2016.jpg",
        born: "1943-08-17",
        education: "Stella Adler Studio of Acting",
        nickname: "Bobby",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Ray Liotta",
        roles: ["CAST"],
        introduction:
          "Ray Liotta was an American actor and film producer, known for his roles in Goodfellas and Field of Dreams.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ray_Liotta_Deauville_2014.jpg/440px-Ray_Liotta_Deauville_2014.jpg",
        born: "1954-12-18",
        education: "University of Miami",
        nickname: "Ray",
        spouse: "Jacy Nittolo",
        websites: [],
      },
      {
        name: "Joe Pesci",
        roles: ["CAST"],
        introduction:
          "Joe Pesci is an American actor and musician, known for his roles in Goodfellas, Casino, and Home Alone.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Joe_Pesci_2009_%28cropped%29.jpg/440px-Joe_Pesci_2009_%28cropped%29.jpg",
        born: "1943-02-09",
        education: "Belleville High School",
        nickname: "Joe",
        spouse: "Claudia Haro",
        websites: [],
      },
    ],
  },
  // Star Wars
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/star-wars.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
      name: "Star Wars",
      releaseYear: 1977,
      duration: 121,
      categories: ["ACTION", "ADVENTURE", "SCI_FI"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "Star Wars",
          description:
            "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_FMjpg_UX1000_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "sci_fi",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "George Lucas",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "George Lucas is an American filmmaker, philanthropist, and entrepreneur.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/George_Lucas_Cannes_2011_%28cropped%29.jpg/440px-George_Lucas_Cannes_2011_%28cropped%29.jpg",
        born: "1944-05-14",
        education: "University of Southern California",
        nickname: "George",
        spouse: "Mellody Hobson",
        websites: [],
      },
      {
        name: "Mark Hamill",
        roles: ["CAST"],
        introduction:
          "Mark Hamill is an American actor, voice actor, and writer. He is known for playing Luke Skywalker in the Star Wars films.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mark_Hamill_San_Diego_Comic-Con_2019.jpg/440px-Mark_Hamill_San_Diego_Comic-Con_2019.jpg",
        born: "1951-09-25",
        education: "Los Angeles City College",
        nickname: "Mark",
        spouse: "Marilou York",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/hamillhimself/",
          },
        ],
      },
      {
        name: "Harrison Ford",
        roles: ["CAST"],
        introduction:
          "Harrison Ford is an American actor. He gained worldwide fame for his starring roles as Han Solo in the Star Wars trilogy and as the title character of the Indiana Jones film series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Harrison_Ford_by_Gage_Skidmore_2.jpg/440px-Harrison_Ford_by_Gage_Skidmore_2.jpg",
        born: "1942-07-13",
        education: "Ripon College",
        nickname: "Harry",
        spouse: "Calista Flockhart",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/iamharrisonford/",
          },
        ],
      },
      {
        name: "Carrie Fisher",
        roles: ["CAST"],
        introduction:
          "Carrie Fisher was an American actress and writer, best known for playing Princess Leia in the Star Wars films.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Carrie_Fisher_2013.jpg/440px-Carrie_Fisher_2013.jpg",
        born: "1956-10-21",
        education: "Central School of Speech and Drama",
        nickname: "Carrie",
        spouse: "Paul Simon",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/thecarriefisher/",
          },
        ],
      },
      {
        name: "Peter Cushing",
        roles: ["CAST"],
        introduction:
          "Peter Cushing was an English actor known for his many appearances in Hammer Films, in which he played the title role in Dracula and Frankenstein.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Peter_Cushing_1957.jpg/440px-Peter_Cushing_1957.jpg",
        born: "1913-05-26",
        education: "Purley County Grammar School",
        nickname: "Pete",
        spouse: "Helen Beck",
        websites: [],
      },
      {
        name: "Alec Guinness",
        roles: ["CAST"],
        introduction:
          "Sir Alec Guinness was an English actor. He is known for his roles in The Bridge on the River Kwai, Lawrence of Arabia, Doctor Zhivago, and Star Wars.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Alec_Guinness_An_Inspector_Calls_1959.jpg/440px-Alec_Guinness_An_Inspector_Calls_1959.jpg",
        born: "1914-04-02",
        education: "NA",
        nickname: "Alec",
        spouse: "Merula Salaman",
        websites: [],
      },
    ],
  },
  // Mad Max: Fury Road
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/mad-max-fury-road.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      name: "Mad Max: Fury Road",
      releaseYear: 2015,
      duration: 120,
      categories: ["ACTION", "ADVENTURE", "SCI_FI"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "Mad Max: Fury Road",
          description:
            "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a warlord and his army.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "action",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "George Miller",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "George Miller is an Australian filmmaker known for his work on the Mad Max franchise.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/George_Miller_%28cropped%29.jpg/440px-George_Miller_%28cropped%29.jpg",
        born: "1945-03-03",
        education: "University of New South Wales",
        nickname: "George",
        spouse: "Margaret Sixel",
        websites: [],
      },
      {
        name: "Brendan McCarthy",
        roles: ["WRITER"],
        introduction:
          "Brendan McCarthy is a British artist and writer, known for his work on Mad Max: Fury Road.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Brendan_McCarthy_%28cropped%29.jpg/440px-Brendan_McCarthy_%28cropped%29.jpg",
        born: "1959-02-15",
        education: "Ealing Art College",
        nickname: "Brendan",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Nico Lathouris",
        roles: ["WRITER"],
        introduction:
          "Nico Lathouris is an Australian actor and writer, known for his work on Mad Max: Fury Road.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nico_Lathouris.jpg/440px-Nico_Lathouris.jpg",
        born: "1946-02-02",
        education: "NA",
        nickname: "Nico",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Tom Hardy",
        roles: ["CAST"],
        introduction:
          "Tom Hardy is an English actor and producer, known for his roles in Mad Max: Fury Road and Inception.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tom_Hardy_by_Gage_Skidmore.jpg/440px-Tom_Hardy_by_Gage_Skidmore.jpg",
        born: "1977-09-15",
        education: "Drama Centre London",
        nickname: "Tom",
        spouse: "Charlotte Riley",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/tomhardy/",
          },
        ],
      },
      {
        name: "Charlize Theron",
        roles: ["CAST"],
        introduction:
          "Charlize Theron is a South African-American actress and producer, known for her roles in Mad Max: Fury Road and Monster.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Charlize_Theron_Cannes_2015_2_%28cropped%29.jpg/440px-Charlize_Theron_Cannes_2015_2_%28cropped%29.jpg",
        born: "1975-08-07",
        education: "NA",
        nickname: "Charlie",
        spouse: "NA",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/charlizeafrica/",
          },
        ],
      },
    ],
  },

  // Back To The Future
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/back-to-the-future.mp4",
      coverPictureUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Back_to_the_Future_Part_II.jpg/220px-Back_to_the_Future_Part_II.jpg",
      name: "Back To The Future",
      releaseYear: 1985,
      duration: 116,
      categories: ["ADVENTURE", "COMEDY", "SCI_FI"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "Back To The Future",
          description:
            "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Back_to_the_Future_Part_II.jpg/220px-Back_to_the_Future_Part_II.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "sci_fi",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Robert Zemeckis",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Robert Zemeckis is an American film director, producer, and screenwriter.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Robert_Zemeckis_BTVF.jpg/440px-Robert_Zemeckis_BTVF.jpg",
        born: "1951-05-14",
        education: "University of Southern California",
        nickname: "Bob",
        spouse: "Leslie Harter",
        websites: [],
      },
      {
        name: "Bob Gale",
        roles: ["WRITER"],
        introduction:
          "Bob Gale is an American screenwriter, comic book writer, and film producer, known for co-writing Back to the Future with Robert Zemeckis.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bob_Gale_2010_Comic_Con_%28crop%29.jpg/440px-Bob_Gale_2010_Comic_Con_%28crop%29.jpg",
        born: "1951-05-25",
        education: "University of Southern California",
        nickname: "Bob",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Michael J. Fox",
        roles: ["CAST"],
        introduction:
          "Michael J. Fox is a Canadian-American actor, author, producer, and advocate.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Michael_J_Fox_2012.jpg/440px-Michael_J_Fox_2012.jpg",
        born: "1961-06-09",
        education: "NA",
        nickname: "Mike",
        spouse: "Tracy Pollan",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/realmikejfox/",
          },
        ],
      },
      {
        name: "Christopher Lloyd",
        roles: ["CAST"],
        introduction:
          "Christopher Lloyd is an American actor best known for his roles as Dr. Emmett 'Doc' Brown in the Back to the Future trilogy.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Christopher_Lloyd_2015.jpg/440px-Christopher_Lloyd_2015.jpg",
        born: "1938-10-22",
        education: "Neighborhood Playhouse School of the Theatre",
        nickname: "Chris",
        spouse: "Lisa Loiacono",
        websites: [],
      },
      {
        name: "Lea Thompson",
        roles: ["CAST"],
        introduction:
          "Lea Thompson is an American actress, director, and television producer.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lea_Thompson_2015.jpg/440px-Lea_Thompson_2015.jpg",
        born: "1961-05-31",
        education: "NA",
        nickname: "Lea",
        spouse: "Howard Deutch",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/leakthompson/",
          },
        ],
      },
      {
        name: "Crispin Glover",
        roles: ["CAST"],
        introduction:
          "Crispin Glover is an American actor, filmmaker, musician, and author.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Crispin_Hellion_Glover_2008.jpg/440px-Crispin_Hellion_Glover_2008.jpg",
        born: "1964-04-20",
        education: "Beverly Hills High School",
        nickname: "Cris",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Thomas F. Wilson",
        roles: ["CAST"],
        introduction:
          "Thomas F. Wilson is an American actor, comedian, and podcaster, known for playing Biff Tannen in the Back to the Future trilogy.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tom_Wilson_at_Comic_Con_2011.jpg/440px-Tom_Wilson_at_Comic_Con_2011.jpg",
        born: "1959-04-15",
        education: "Arizona State University",
        nickname: "Tom",
        spouse: "Caroline Thomas",
        websites: [
          {
            name: "Twitter",
            url: "https://twitter.com/tomwilsonusa",
          },
        ],
      },
    ],
  },
  // The Godfather Part II
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/the-godfather-part-ii.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      name: "The Godfather Part II",
      releaseYear: 1974,
      duration: 202,
      categories: ["CRIME", "DRAMA"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "The Godfather Part II",
          description:
            "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "crime",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Francis Ford Coppola",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Francis Ford Coppola is an American film director, producer, and screenwriter.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Francis_Ford_Coppola_2011_CC.jpg/440px-Francis_Ford_Coppola_2011_CC.jpg",
        born: "1939-04-07",
        education: "UCLA School of Theater, Film and Television",
        nickname: "Francis",
        spouse: "Eleanor Coppola",
        websites: [
          {
            name: "Official Website",
            url: "http://www.ffcoppola.com/",
          },
        ],
      },
      {
        name: "Mario Puzo",
        roles: ["WRITER"],
        introduction:
          "Mario Puzo was an American author, screenwriter, and journalist.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Mario_Puzo_1972.jpg/440px-Mario_Puzo_1972.jpg",
        born: "1920-10-15",
        education: "City College of New York",
        nickname: "Mario",
        spouse: "Erika Puzo",
        websites: [],
      },
      {
        name: "Al Pacino",
        roles: ["CAST"],
        introduction:
          "Al Pacino is an American actor and filmmaker, known for his role as Michael Corleone in The Godfather series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Al_Pacino_2016.jpg/440px-Al_Pacino_2016.jpg",
        born: "1940-04-25",
        education: "Actors Studio",
        nickname: "Al",
        spouse: "NA",
        websites: [
          {
            name: "Official Website",
            url: "http://www.alpacino.com/",
          },
        ],
      },
      {
        name: "Robert De Niro",
        roles: ["CAST"],
        introduction:
          "Robert De Niro is an American actor, producer, and director, known for his role as a young Vito Corleone in The Godfather Part II.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Robert_De_Niro_Cannes_2016.jpg/440px-Robert_De_Niro_Cannes_2016.jpg",
        born: "1943-08-17",
        education: "Stella Adler Studio of Acting",
        nickname: "Bobby",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Diane Keaton",
        roles: ["CAST"],
        introduction:
          "Diane Keaton is an American actress and filmmaker, known for her role as Kay Adams-Corleone in The Godfather series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Diane_Keaton_2011_%28cropped%29.jpg/440px-Diane_Keaton_2011_%28cropped%29.jpg",
        born: "1946-01-05",
        education: "Santa Ana College",
        nickname: "Diane",
        spouse: "NA",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/diane_keaton/",
          },
        ],
      },
    ],
  },
  // Jurassic Park
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/jurassic-park.mp4",
      coverPictureUrl:
        "https://play-lh.googleusercontent.com/BVSejbKFir0thw8OmJKsWL-uDexGT9LDwSOcDuGE7vTC13b2JxjBHGzby7suSzvzziI",
      name: "Jurassic Park",
      releaseYear: 1993,
      duration: 127,
      categories: ["ACTION", "ADVENTURE", "SCI_FI"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "Jurassic Park",
          description:
            "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://play-lh.googleusercontent.com/BVSejbKFir0thw8OmJKsWL-uDexGT9LDwSOcDuGE7vTC13b2JxjBHGzby7suSzvzziI",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "sci_fi",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Steven Spielberg",
        roles: ["DIRECTOR"],
        introduction:
          "Steven Spielberg is an American film director, producer, and screenwriter.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Steven_Spielberg_by_Gage_Skidmore.jpg/440px-Steven_Spielberg_by_Gage_Skidmore.jpg",
        born: "1946-12-18",
        education: "California State University, Long Beach",
        nickname: "Steve",
        spouse: "Kate Capshaw",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/stevenspielberg_official/",
          },
        ],
      },
      {
        name: "Michael Crichton",
        roles: ["WRITER"],
        introduction:
          "Michael Crichton was an American author and filmmaker, best known for his work in the science fiction, medical fiction, and thriller genres.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Crichton%2C_Michael_%28cropped%29.jpg/440px-Crichton%2C_Michael_%28cropped%29.jpg",
        born: "1942-10-23",
        education: "Harvard University",
        nickname: "Mike",
        spouse: "Sherri Alexander",
        websites: [],
      },
      {
        name: "David Koepp",
        roles: ["WRITER"],
        introduction:
          "David Koepp is an American screenwriter and director. He is known for writing the screenplays of Jurassic Park, Mission: Impossible, and Spider-Man.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/David_Koepp_by_Gage_Skidmore.jpg/440px-David_Koepp_by_Gage_Skidmore.jpg",
        born: "1963-06-09",
        education: "University of California, Los Angeles",
        nickname: "Dave",
        spouse: "Melissa Thomas",
        websites: [],
      },
      {
        name: "Sam Neill",
        roles: ["CAST"],
        introduction:
          "Sam Neill is a New Zealand actor, writer, producer, and director. He is known for his roles in Jurassic Park, The Hunt for Red October, and Peaky Blinders.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sam_Neill_by_Gage_Skidmore.jpg/440px-Sam_Neill_by_Gage_Skidmore.jpg",
        born: "1947-09-14",
        education: "University of Canterbury",
        nickname: "Sam",
        spouse: "Noriko Watanabe",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/samneilltheprop/",
          },
        ],
      },
      {
        name: "Laura Dern",
        roles: ["CAST"],
        introduction:
          "Laura Dern is an American actress, director, and producer. She is known for her roles in Jurassic Park, Wild, and Big Little Lies.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Laura_Dern_%28cropped%29.jpg/440px-Laura_Dern_%28cropped%29.jpg",
        born: "1967-02-10",
        education: "Lee Strasberg Theatre and Film Institute",
        nickname: "Laura",
        spouse: "Ben Harper",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/lauradern/",
          },
        ],
      },
      {
        name: "Jeff Goldblum",
        roles: ["CAST"],
        introduction:
          "Jeff Goldblum is an American actor and musician. He is known for his roles in Jurassic Park, Independence Day, and The Fly.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Jeff_Goldblum_by_Gage_Skidmore_2.jpg/440px-Jeff_Goldblum_by_Gage_Skidmore_2.jpg",
        born: "1952-10-22",
        education: "Neighborhood Playhouse School of the Theatre",
        nickname: "Jeff",
        spouse: "Emilie Livingston",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/jeffgoldblum/",
          },
        ],
      },
      {
        name: "Richard Attenborough",
        roles: ["CAST"],
        introduction:
          "Richard Attenborough was an English actor, filmmaker, and entrepreneur. He is best known for his roles in Jurassic Park and The Great Escape.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/RichardAttenborough2007_%28cropped%29.jpg/440px-RichardAttenborough2007_%28cropped%29.jpg",
        born: "1923-08-29",
        education: "Royal Academy of Dramatic Art",
        nickname: "Dickie",
        spouse: "Sheila Sim",
        websites: [],
      },
    ],
  },
  // Blade Runner
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/blade-runner.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      name: "Blade Runner",
      releaseYear: 1982,
      duration: 117,
      categories: ["SCI_FI", "THRILLER"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "Blade Runner",
          description:
            "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "sci-fi",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Ridley Scott",
        roles: ["DIRECTOR"],
        introduction:
          "Ridley Scott is an English film director and producer, known for his work on Blade Runner and Alien.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ridley_Scott_by_Gage_Skidmore.jpg/440px-Ridley_Scott_by_Gage_Skidmore.jpg",
        born: "1937-11-30",
        education: "Royal College of Art",
        nickname: "Ridley",
        spouse: "Giannina Facio",
        websites: [],
      },
      {
        name: "Hampton Fancher",
        roles: ["WRITER"],
        introduction:
          "Hampton Fancher is an American actor, screenwriter, and director, known for his work on Blade Runner.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hampton_Fancher_cropped_2014.jpg/440px-Hampton_Fancher_cropped_2014.jpg",
        born: "1938-07-18",
        education: "NA",
        nickname: "Hampton",
        spouse: "NA",
        websites: [],
      },
      {
        name: "David Peoples",
        roles: ["WRITER"],
        introduction:
          "David Peoples is an American screenwriter, known for his work on Blade Runner and Unforgiven.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/David_Peoples.jpg/440px-David_Peoples.jpg",
        born: "1940-02-09",
        education: "University of California, Berkeley",
        nickname: "David",
        spouse: "Janet Peoples",
        websites: [],
      },
      {
        name: "Harrison Ford",
        roles: ["CAST"],
        introduction:
          "Harrison Ford is an American actor, known for his roles in Star Wars and Blade Runner.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Harrison_Ford_by_Gage_Skidmore_2.jpg/440px-Harrison_Ford_by_Gage_Skidmore_2.jpg",
        born: "1942-07-13",
        education: "Ripon College",
        nickname: "Harry",
        spouse: "Calista Flockhart",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/officialharrisonford/",
          },
        ],
      },
      {
        name: "Rutger Hauer",
        roles: ["CAST"],
        introduction:
          "Rutger Hauer was a Dutch actor, known for his role as Roy Batty in Blade Runner.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Rutger_Hauer_%28Berlin_Film_Festival_1982%29.jpg/440px-Rutger_Hauer_%28Berlin_Film_Festival_1982%29.jpg",
        born: "1944-01-23",
        education: "Academy for Theatre and Dance",
        nickname: "Rutger",
        spouse: "Ineke ten Cate",
        websites: [],
      },
      {
        name: "Sean Young",
        roles: ["CAST"],
        introduction:
          "Sean Young is an American actress, known for her role as Rachael in Blade Runner.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Sean_Young_%2814520948925%29.jpg/440px-Sean_Young_%2814520948925%29.jpg",
        born: "1959-11-20",
        education: "School of American Ballet",
        nickname: "Sean",
        spouse: "Robert Lujan",
        websites: [],
      },
    ],
  },
  // Aliens
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/aliens.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BOGJkY2EyOWYtYWRmNy00ZTEzLTllMDAtYzYzYjA0ZjFhZWJjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
      name: "Aliens",
      releaseYear: 1986,
      duration: 137,
      categories: ["ACTION", "SCI_FI", "THRILLER"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "Aliens",
          description:
            "Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost. This time, colonial marines have impressive firepower, but will that be enough?",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BOGJkY2EyOWYtYWRmNy00ZTEzLTllMDAtYzYzYjA0ZjFhZWJjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "sci_fi",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "James Cameron",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "James Cameron is a Canadian filmmaker and environmentalist. He is best known for making science fiction films such as The Terminator, Aliens, and Avatar.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/James_Cameron_by_Gage_Skidmore.jpg/440px-James_Cameron_by_Gage_Skidmore.jpg",
        born: "1954-08-16",
        education: "Fullerton College",
        nickname: "Jim",
        spouse: "Suzy Amis Cameron",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/jamescameronofficial/",
          },
        ],
      },
      {
        name: "Gale Anne Hurd",
        roles: ["WRITER"],
        introduction:
          "Gale Anne Hurd is an American film producer and screenwriter. She is one of the most successful producers in the action and science fiction genres.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gale_Anne_Hurd_by_Gage_Skidmore.jpg/440px-Gale_Anne_Hurd_by_Gage_Skidmore.jpg",
        born: "1955-10-25",
        education: "Stanford University",
        nickname: "Gale",
        spouse: "Jonathan Hensleigh",
        websites: [],
      },
      {
        name: "Sigourney Weaver",
        roles: ["CAST"],
        introduction:
          "Sigourney Weaver is an American actress. She is considered a pioneer of action heroines in science fiction films.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sigourney_Weaver_2016.jpg/440px-Sigourney_Weaver_2016.jpg",
        born: "1949-10-08",
        education: "Yale University",
        nickname: "Siggy",
        spouse: "Jim Simpson",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/sigourney.weaver/",
          },
        ],
      },
      {
        name: "Michael Biehn",
        roles: ["CAST"],
        introduction:
          "Michael Biehn is an American actor. He is best known for his roles in The Terminator, Aliens, and The Abyss.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Michael_Biehn_San_Diego_Comic-Con_2016.jpg/440px-Michael_Biehn_San_Diego_Comic-Con_2016.jpg",
        born: "1956-07-31",
        education: "University of Arizona",
        nickname: "Mike",
        spouse: "Jennifer Blanc",
        websites: [],
      },
      {
        name: "Paul Reiser",
        roles: ["CAST"],
        introduction:
          "Paul Reiser is an American actor, comedian, writer, and musician. He is best known for his roles in Mad About You, Aliens, and Stranger Things.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Paul_Reiser_by_Gage_Skidmore.jpg/440px-Paul_Reiser_by_Gage_Skidmore.jpg",
        born: "1956-03-30",
        education: "Binghamton University",
        nickname: "Paul",
        spouse: "Paula Ravets",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/paulreiserofficial/",
          },
        ],
      },
      {
        name: "Lance Henriksen",
        roles: ["CAST"],
        introduction:
          "Lance Henriksen is an American actor and artist. He is best known for his roles in Aliens, The Terminator, and Millennium.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Lance_Henriksen_Avengers_Age_of_Ultron_premiere.jpg/440px-Lance_Henriksen_Avengers_Age_of_Ultron_premiere.jpg",
        born: "1940-05-05",
        education: "Actor's Studio",
        nickname: "Lance",
        spouse: "Jane Pollack",
        websites: [],
      },
      {
        name: "Bill Paxton",
        roles: ["CAST"],
        introduction:
          "Bill Paxton was an American actor and director. He is known for his roles in Aliens, Twister, and Titanic.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bill_Paxton_2014_Comic-Con_%28cropped%29.jpg/440px-Bill_Paxton_2014_Comic-Con_%28cropped%29.jpg",
        born: "1955-05-17",
        education: "New York University",
        nickname: "Bill",
        spouse: "Louise Newbury",
        websites: [],
      },
    ],
  },
  // Parasite
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/parasite.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      name: "Parasite",
      releaseYear: 2019,
      duration: 132,
      categories: ["DRAMA", "THRILLER"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "Parasite",
          description:
            "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "thriller",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Bong Joon-ho",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Bong Joon-ho is a South Korean film director, producer, and screenwriter. His films include 'The Host,' 'Snowpiercer,' and 'Parasite.'",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bong_Joon-ho_at_the_2017_Vienna_International_Film_Festival.jpg/440px-Bong_Joon-ho_at_the_2017_Vienna_International_Film_Festival.jpg",
        born: "1969-09-14",
        education: "Korean Academy of Film Arts",
        nickname: "Bongtail",
        spouse: "NA",
        websites: [
          {
            name: "X",
            url: "https://twitter.com/bongjoonho",
          },
        ],
      },
      {
        name: "Han Jin-won",
        roles: ["WRITER"],
        introduction:
          "Han Jin-won is a South Korean screenwriter known for his work on 'Parasite.'",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Han_Jin-won_%282020%29.jpg/440px-Han_Jin-won_%282020%29.jpg",
        born: "1986-01-01",
        education: "Korean Academy of Film Arts",
        nickname: "Jin-won",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Song Kang-ho",
        roles: ["CAST"],
        introduction:
          "Song Kang-ho is a South Korean actor known for his roles in 'Memories of Murder,' 'The Host,' and 'Parasite.'",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Song_Kang-ho.jpg/440px-Song_Kang-ho.jpg",
        born: "1967-01-17",
        education: "NA",
        nickname: "Kang-ho",
        spouse: "Hwang Jang-suk",
        websites: [],
      },
      {
        name: "Lee Sun-kyun",
        roles: ["CAST"],
        introduction:
          "Lee Sun-kyun is a South Korean actor known for his roles in 'Pasta,' 'Golden Time,' and 'Parasite.'",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Lee_Sun-kyun_in_January_2020.png/440px-Lee_Sun-kyun_in_January_2020.png",
        born: "1975-03-02",
        education: "Korea National University of Arts",
        nickname: "Sun-kyun",
        spouse: "Jeon Hye-jin",
        websites: [],
      },
      {
        name: "Cho Yeo-jeong",
        roles: ["CAST"],
        introduction:
          "Cho Yeo-jeong is a South Korean actress known for her roles in 'The Concubine' and 'Parasite.'",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/191125_%EC%A1%B0%EC%97%AC%EC%A0%95.jpg/440px-191125_%EC%A1%B0%EC%97%AC%EC%A0%95.jpg",
        born: "1981-02-10",
        education: "Dongguk University",
        nickname: "Yeo-jeong",
        spouse: "NA",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/yeo_jeong_cho",
          },
        ],
      },
    ],
  },

  // Inception
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/inception.mp4",
      coverPictureUrl:
        "https://3.bp.blogspot.com/_d32gQRg1iTk/TD5p-IamLqI/AAAAAAAAAvE/FkTcqOES88g/s1600/inception+movie+poster.jpg",
      name: "Inception",
      releaseYear: 2010,
      duration: 148,
      categories: ["ACTION", "SCI_FI", "THRILLER"],
      rating: "PG",
      videoDetails: [
        {
          languageCode: "en",
          title: "Inception",
          description:
            "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://3.bp.blogspot.com/_d32gQRg1iTk/TD5p-IamLqI/AAAAAAAAAvE/FkTcqOES88g/s1600/inception+movie+poster.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "sci_fi",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Christopher Nolan",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Christopher Nolan is a British-American film director, producer, and screenwriter.",
        pictureUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEx-whpG-CKUwinnff_qHckCxxkJYkmXxNw&s",
        born: "1970-07-30",
        education: "University College London",
        nickname: "Chris",
        spouse: "Emma Thomas",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/chrisnolan_official/",
          },
        ],
      },
      {
        name: "Leonardo DiCaprio",
        roles: ["CAST"],
        introduction:
          "Leonardo DiCaprio is an American actor and film producer. He is known for his work in biopics and period films.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Leonardo_DiCaprio_October_2016.jpg/440px-Leonardo_DiCaprio_October_2016.jpg",
        born: "1974-11-11",
        education: "Los Angeles Center for Enriched Studies",
        nickname: "Leo",
        spouse: "NA",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/leonardodicaprio/",
          },
        ],
      },
      {
        name: "Joseph Gordon-Levitt",
        roles: ["CAST"],
        introduction:
          "Joseph Gordon-Levitt is an American actor, filmmaker, singer, and entrepreneur.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Joseph_Gordon-Levitt_by_Gage_Skidmore.jpg/440px-Joseph_Gordon-Levitt_by_Gage_Skidmore.jpg",
        born: "1981-02-17",
        education: "Columbia University",
        nickname: "Joe",
        spouse: "Tasha McCauley",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/hitrecordjoe/",
          },
        ],
      },
      {
        name: "Ellen Page",
        roles: ["CAST"],
        introduction:
          "Elliot Page is a Canadian actor and producer. He is known for his roles in Juno, Inception, and The Umbrella Academy.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Elliot_Page_%282013%29.jpg/440px-Elliot_Page_%282013%29.jpg",
        born: "1987-02-21",
        education: "Shambhala School",
        nickname: "Elliot",
        spouse: "Emma Portner",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/elliotpage/",
          },
        ],
      },
      {
        name: "Tom Hardy",
        roles: ["CAST"],
        introduction:
          "Tom Hardy is an English actor and producer. He is known for his roles in films such as Inception, Mad Max: Fury Road, and The Dark Knight Rises.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Hardy_by_Gage_Skidmore.jpg/440px-Tom_Hardy_by_Gage_Skidmore.jpg",
        born: "1977-09-15",
        education: "Drama Centre London",
        nickname: "Tom",
        spouse: "Charlotte Riley",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/tomhardy/",
          },
        ],
      },
      {
        name: "Ken Watanabe",
        roles: ["CAST"],
        introduction:
          "Ken Watanabe is a Japanese actor. He is known for his roles in The Last Samurai, Inception, and Godzilla.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ken_Watanabe_2007.jpg/440px-Ken_Watanabe_2007.jpg",
        born: "1959-10-21",
        education: "NA",
        nickname: "Ken",
        spouse: "Kaho Minami",
        websites: [],
      },
      {
        name: "Marion Cotillard",
        roles: ["CAST"],
        introduction:
          "Marion Cotillard is a French actress, singer, and songwriter. She is known for her roles in Inception, La Vie en Rose, and The Dark Knight Rises.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Marion_Cotillard_Cannes_2019.jpg/440px-Marion_Cotillard_Cannes_2019.jpg",
        born: "1975-09-30",
        education: "Conservatoire d'art dramatique in Orléans",
        nickname: "Marion",
        spouse: "Guillaume Canet",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/marioncotillard/",
          },
        ],
      },
    ],
  },
  // The Matrix
  {
    createVideoPayload: {
      sourceType: "URL",
      source: "https://example.com/the-matrix.mp4",
      coverPictureUrl:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      name: "The Matrix",
      releaseYear: 1999,
      duration: 136,
      categories: ["ACTION", "SCI_FI"],
      rating: "R",
      videoDetails: [
        {
          languageCode: "en",
          title: "The Matrix",
          description:
            "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        },
      ],
      videoAttachments: [
        {
          type: "PICTURE",
          url: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          order: 1,
        },
      ],
      videoTags: [
        {
          type: "genre",
          value: "sci-fi",
        },
      ],
    },
    createCrewsPayload: [
      {
        name: "Lana Wachowski",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Lana Wachowski is an American filmmaker, director, writer, and producer, best known for The Matrix series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Lana_Wachowski%2C_2012_%28cropped%29.jpg/440px-Lana_Wachowski%2C_2012_%28cropped%29.jpg",
        born: "1965-06-21",
        education: "Bard College",
        nickname: "Lana",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Lilly Wachowski",
        roles: ["DIRECTOR", "WRITER"],
        introduction:
          "Lilly Wachowski is an American filmmaker, director, writer, and producer, best known for The Matrix series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Lilly_Wachowski_at_Toronto_International_Film_Festival_2015.jpg/440px-Lilly_Wachowski_at_Toronto_International_Film_Festival_2015.jpg",
        born: "1967-12-29",
        education: "Emerson College",
        nickname: "Lilly",
        spouse: "NA",
        websites: [],
      },
      {
        name: "Keanu Reeves",
        roles: ["CAST"],
        introduction:
          "Keanu Reeves is a Canadian actor known for his roles in The Matrix, John Wick, and Speed.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Keanu_Reeves_by_Gage_Skidmore_2.jpg/440px-Keanu_Reeves_by_Gage_Skidmore_2.jpg",
        born: "1964-09-02",
        education: "De La Salle College",
        nickname: "Keanu",
        spouse: "NA",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/keanureevesofficial_/",
          },
        ],
      },
      {
        name: "Laurence Fishburne",
        roles: ["CAST"],
        introduction:
          "Laurence Fishburne is an American actor, playwright, producer, screenwriter, and film director, known for his roles in The Matrix, Apocalypse Now, and John Wick.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Laurence_Fishburne_by_Gage_Skidmore.jpg/440px-Laurence_Fishburne_by_Gage_Skidmore.jpg",
        born: "1961-07-30",
        education: "Lincoln Square Academy",
        nickname: "Larry",
        spouse: "Gina Torres",
        websites: [],
      },
      {
        name: "Carrie-Anne Moss",
        roles: ["CAST"],
        introduction:
          "Carrie-Anne Moss is a Canadian actress, best known for her role as Trinity in The Matrix series.",
        pictureUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Carrie-Anne_Moss_%2835925158283%29.jpg/440px-Carrie-Anne_Moss_%2835925158283%29.jpg",
        born: "1967-08-21",
        education: "American Academy of Dramatic Arts",
        nickname: "Carrie",
        spouse: "Steven Roy",
        websites: [
          {
            name: "ig",
            url: "https://www.instagram.com/carrieanne_moss/",
          },
        ],
      },
    ],
  },
];
