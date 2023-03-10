"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ? ТЕМА УРОКА ЦИКЛЫ

let sum = 20;
do {
  console.log(sum);
  sum++;
} while (sum < 25);

// ! цикл FOR часто используемый
for (let i = 1; i < 5; i++) {
  console.log(i);
}

// ! еще пример
let sumUpdate = 20;
for (let i = 1; i < 5; i++) {
  console.log(sumUpdate);
  sumUpdate++;
}
// ! завершаем цикл досрочно при помощи BREAk
// TODO СВОЙСТВО BREAK ПОЛНОСТЬЮ ПРЕРЫВАЕТ ЦИКЛ
for (let i = 1; i < 7; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// ! завершаем цикл досрочно при помощи CONTINUE
// TODO СВОЙСТВО CONTINUE ПРОПУСКАЕТ ШАГ В УСЛОВИИ НО НЕ ПРЕРЫВАЕТ ЦИКЛ
for (let i = 1; i < 7; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
