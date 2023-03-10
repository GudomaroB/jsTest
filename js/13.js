"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ? ТЕМА УРОКА ФУНКЦИИ

//! ПРИМЕР 1
function showFirstMessage() {
  console.log("Hello Wrold-class!!");
}
showFirstMessage(); //! ВЫЗОВ ФУНКЦИИ

//! ПРИМЕР 2
function showFirstMessage(text) {
  console.log(text);
}
showFirstMessage("Hello World class"); //! ВЫЗОВ ФУНКЦИИ

//! ПРИМЕР 3
function showFirstMessage(a, b) {
  console.log(a * b);
}
showFirstMessage(5, 10); //! ВЫЗОВ ФУНКЦИИ  в результате 50

//! ПРИМЕР 4
function clac(a, b) {
  return a + b;
}
console.log(clac(10, 20));
console.log(clac(1, 256));
console.log(clac(15, 265));
console.log(clac(5, 20));
console.log(clac(10, 72));

//! ПРИМЕР 5
function reckt() {
  let num = 50;
  return num;
}
const updateNum = reckt();
console.log(updateNum);

//! ПРИМЕР 6 ЗАПИСЬ ФУНКЦИЙ EXSPRESSION
const test = function () {
  console.log("HELLO");
};
test();

//! ПРИМЕР 7 ЗАПИСЬ ФУНКЦИЙ EXSPRESSION
const logger = function () {
  const name = "Gudomarov";
  alert(`Привет Василий ${name}`);
};
logger();

//! ПРИМЕР 8 ЗАПИСЬ СТРЕЛОЧНЫХ ФУНКЦИЙ
// TODO У СТРЕЛОЧНЫХ ФУНКЦИЙ ЕСТЬ СВОИ ОСОБЕННОСТИ, НАДО ПРО ЭТО ПОМНИТЬ
const calcS = (a, b) => {
  console.log("GUDOMAROV");
  return a + b;
};
calcS();

const calc = (a, b) => a + b; //! ЕСЛИ ФУНКЦИЯ В ОДНО СТРОЧКУ ТОГДА ФИГУРНЫЕ СКОБКИ МОЖНО ОПУСТИТЬ
