"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ! ТЕМА УРОКА ФУНКЦИИ RETURN

// * ПРИМЕР 1
usdCurr = 28;
function testFunction(header, main) {
  return header * main;
}
testFunction(usdCurr, 500);
//!
dicsound = 28;
function UpdateFunction(result) {
  console.log(dicsound * result);
}
const res = testFunction(usdCurr, 500);
UpdateFunction(res);
//! пример 2
function testNewUpdate() {
  for (let i = 1; i < 7; i++) {
    console.log(i);
    if (i === 3) return;
  }
  console.log("Готово!!");
}
testNewUpdate();
