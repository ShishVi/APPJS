
let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i =0; i < 2 ; i++) {
    let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        scoreFilm = prompt('На сколько оцените его?', '');
    
    if (lastFilm != null && scoreFilm != null && lastFilm != '' && scoreFilm != '' && lastFilm.length < 50 ) {
        
        personalMovieDB.movies[lastFilm] = scoreFilm;
        console.log('done');

    } else { 
        console.log('error');
        i --;
    }    
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if(personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

