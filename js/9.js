"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ? ТЕМА УРОКА ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// ! пример с использованием логического &&
const humburger = 3;
const fries = 1;
const fanta = 0;
if (humburger === 3 && fanta && fries === 1) {
  console.log("Все сыты!");
} else {
  console.log("Условие не выполнилось");
}
console.log(humburger === 3 && fanta && fries === 1); //  ! '0' в консоле получаекм ноль ЗНАЧЕНИЕ ПОСЛЕДНЕГО АРГУМЕНТА

// ! пример с использованием логического ||
const cola = true;
const morojennoe = false;
if (cola || morojennoe) {
  console.log("Я сыт!");
} else {
  console.log("Условие не выполнилось");
}
console.log(cola || morojennoe);
// ! ПРИМЕР С ИСПОЛЬЗОВАНИЕМ НЕСКОЛЬКИХ ЛОГИЧЕСКИХ ОПЕРАТОРОВ
const tire = 10,
  absorber = 1,
  spring = 0;
if (tire === 10 && absorber && spring) {
  console.log("У вас все есть мы будем заказывать у Вас!");
} else {
  console.log("Снабженец, пожалуйста обновите ретендер заявки");
}
console.log(tire === 10 && absorber && spring); // ! получаем в консоле ноль

// ! пример с оператором ||
const cars = 2,
  plug = 0,
  bulb = 0;
if (cars || plug || bulb) {
  console.log("Условие выполнилось!!!!");
} else {
  console.log("Условие не выполнилось!");
}
console.log(cars || plug || bulb);

// ! ПРИМЕР ДРУГОГО ТИПА
let John,
  Alex,
  Nikola,
  Debian = "ГОТОВО ОТЧЕТ СДАН";
console.log(Alex || John || Debian || Nikola);

// ! усложняем пример с логическими операторами
const pepsi = 0,
  nuggets = 2,
  frees = 3,
  burger = 3;
if ((burger === 3 && pepsi === 2) || (frees === 3 && nuggets)) {
  console.log("Условие правдиво, оно выполнилось!!");
} else {
  console.log("НЕ ПРАВДА");
}
console.log((burger === 3 && pepsi === 2) || (frees === 3 && nuggets));

const test = 1,
  test1 = 2,
  test2 = 3,
  test3 = 0;
if ((test === 1 && test3) || (test1 === 2 && test2)) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
console.log((test === 1 && test3) || (test1 === 2 && test2));
