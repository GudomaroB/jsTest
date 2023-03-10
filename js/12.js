"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ? ДОМ РАБОТА С УСЛОВИЯМИ И ЦИКЛАМИ

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 1; i++) {
  const vopros1 = prompt("Один из последних просмотренных фильмов ?", ""),
    vopros2 = prompt("На сколько оцените его ?", "");
  if (
    vopros1 != null &&
    vopros2 != null &&
    vopros1 != "" &&
    vopros2 != "" &&
    vopros1.length < 50
  ) {
    console.log("dONE");
    personalMovieDB.movies[vopros1] = vopros2;
  } else {
    console.log("Error");
    i--;
  }
}
if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("ПРОИЗОШЛА ОШИБКА!!");
}
console.log(personalMovieDB);
