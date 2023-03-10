"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ? ТЕМА УРОКА ЦИКЛЫ

for (let i = 5; i < 8; i++) {
  // ! ВЛОЖЕННЫЙ ЦИКЛ
  console.log(i);
  for (let j = 0; j < 4; j++) {
    console.log(j);
  }
}

// TODO ЗАДАЧА С ИСПОЛЬЗОВАНИЕМ ЦИКЛОВ

let result = "";
const length = 7;
for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

// TODO ЗАДАЧА С ИСПОЛЬЗОВАНИЕМ ТРОЙНЫХ ВЛОЖЕННЫХ ЦИКЛОВ

for (let i = 0; i < 3; i++) {
  console.log(`первая строка ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`вторая строка ${j}`);
  }
  for (let k = 0; k < 3; k++) {
    console.log(`третья строка ${k}`);
  }
}

// ? ЗАДАЧА С ИСПОЛЬЗОВАНИЕМ ТРОЙНЫХ ВЛОЖЕННЫХ ЦИКЛОВ С МЕТКОЙ

metka: for (let i = 0; i < 3; i++) {
  console.log(`первая строка ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`вторая строка ${j}`);
  }
  for (let k = 0; k < 3; k++) {
    if (k === 2) continue metka; // ! метка
    console.log(`третья строка ${k}`);
  }
}

// ! ЗАДАЧА С ИСПОЛЬЗОВАНИЕМ ТРОЙНЫХ ВЛОЖЕННЫХ ЦИКЛОВ С МЕТКОЙ И ИСПОЛЬЗОВАНИЕМ BREAK
metka: for (let i = 0; i < 3; i++) {
  console.log(`первая строка ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`вторая строка ${j}`);
  }
  for (let k = 0; k < 3; k++) {
    if (k === 2) break metka; // ! метка
    console.log(`третья строка ${k}`);
  }
}

let stroka = "";
const lenght = 7;
for (let i = 1; i < lenght; i++) {
  for (let j = 0; j < i; j++) {
    stroka += "*";
  }
  stroka += "\n";
}
console.log(stroka);
