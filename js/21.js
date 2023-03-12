"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ! ТЕМА УРОКА ООП

//! пример 1
const solder = {
  healt: 500,
  armor: 100,
  seyHello: function () {
    console.log("Привет");
  },
};
const Vassilyi = {
  healt: 100,
};
Object.setPrototypeOf(Vassilyi, solder);
Vassilyi.seyHello();

//! пример 1
const solders = {
  healt: 500,
  armor: 100,
  seyHelloO: function () {
    console.log("Привет");
  },
};
const vassilyi = Object.create(solders);
vassilyi.seyHelloO();
