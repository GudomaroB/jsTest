"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ! ТЕМА УРОКА МЕТОДЫ

// * ПРИМЕР 1
const str = "text";
console.log(str);
console.log(str.length); //! показывает сколько количсетво букв
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

//* ПРМИЕР 2
const fruit = "Это строка для проверки!!";
console.log(fruit.indexOf("з")); //! в консоле будет -1 так как такой буквы или слова нет
console.log(fruit.indexOf("о")); //! проверяем с какого индекса начинается буква или слово!

//* ПРМИЕР 3
const logg = "Hello world Class";
console.log(logg.slice(5, 11)); //! в аргументах указываем начало и конец вырезки!!!

//* ПРМИЕР 4 c ЧМСЛАМИ
const num = 13.4;
console.log(Math.round(num)); //! округляем число

//* ПРМИЕР 5
const test = "13.3px";
console.log(typeof test);
console.log(typeof parseInt(test));
console.log(parseInt(test)); //! превращает строку в целое число!!
console.log(parseFloat(test)); //! возращает значения с точкой!
