"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ! ТЕМА УРОКА Объекты ссылки

//! пример 1
const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    x: 4,
  },
};
function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}
const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);
//! пример 2
const add = {
  d: 17,
  e: 20,
};
// console.log(Object.assign(numbers, add)); //! соединяем два Объекта
const clone = Object.assign({}, add);
clone.d = 20;
// console.log(add);
// console.log(clone);
//! МУТАЦИЯ С МАССИВАМИ
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();
newArray.push("Gudomarov");
console.log(oldArray);
console.log(newArray);

//! пример 3
const video = ["Youtube", "rutube", "vimeo"],
  blogs = ["wordpress", "kotlin", "tilda"],
  internet = [...video, ...blogs, "gudomarov", "Vassilyi"];
console.log(internet);
//!

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 7];
log(...num);
