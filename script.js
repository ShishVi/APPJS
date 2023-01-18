
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();


function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i} ?`);
    }
}
writeYourGenres ();
showMyDB(personalMovieDB.privat);



