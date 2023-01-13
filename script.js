
let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    scoreFilm = prompt('На сколько оцените его?', ''),
    lastFilmTwo= prompt('Один из последних просмотренных фильмов?', ''),
    scoreFilmTwo= prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = scoreFilm;
personalMovieDB.movies[lastFilmTwo] = scoreFilmTwo;

console.log(personalMovieDB);