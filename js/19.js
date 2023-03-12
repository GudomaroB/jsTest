"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ! ТЕМА УРОКА МАССИВЫ

const arr = [1, 2, 3, 6, 9, 11, 10, "stroka"];
//? arr.pop(); //! удаляет последний элемент
//? arr.push("Gudomarov"); //! добовляет в конец массива заданный элемент
//! console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//* пример 2
const arrUpdate = [1, 2, 3, 6, 9, 11, "stroka"];
for (let name of arrUpdate) {
  //! можно использовать цикл или вот такой пример результат один
  console.log(name);
}
//* пример 3
const testMassiv = [1, 2, 3, "Gudo", "Devops", 4];
testMassiv[100] = "VASYA";
console.log(testMassiv.length);
console.log(testMassiv);

//* пример 4
const testM = [1, 2, 3, 4, 5];
testM.forEach(function (index, height, testM) {
  console.log(` ${index}: ${height} в массиве ${testM}`);
});

//* пример 5
const testA = [1, 2, 3, 4, 5];
