"use strict";
// *TODO  УСЛОВИЯ

if (5 == 4) {
  console.log("Условие выполнилось!!!"); // *! условие не выполниться так как 5 не ровно 4
}

if (10 == 10) {
  console.log("Условие выполнилось!!!"); // *! условие  выполниться так как 10  ровно 10
}

if (10 == 11) {
  console.log("Условие выполнилось!!!");
} else {
  console.log("Условие не выполнилось"); // *! выполниться этот блок кода так как первый блок не верный
}

const num = 20;

if (num < 19) {
  console.log(" Это не правда!");
} else if (num > 20) {
  console.log("Много");
} else if (num === 20) {
  // ! выполняеться этот блок кода, так как он самый верный.
  console.log("Условие выполнилось все верно!!!");
} else {
  console.log("Ни одно условие не выпаолнилось!");
}

const num = 20;

if (num < 19) {
  console.log(" Это не правда!");
} else if (num > 20) {
  console.log("Много");
} else if (num === 21) {
  console.log("Условие выполнилось все верно!!!");
} else {
  console.log("Ни одно условие не выполнилось!"); // ! выполняеться этот блок кода, так как ни один блок не верен.
}

const numTest = 50;
numTest === 51
  ? console.log("условие выполнилось")
  : console.log("Условие не выполнилось!"); // ! ТЕРНАРНЫЙ ОПЕРАТОР

testProverka = 100;
switch (
  testProverka // ! КОНСТРУКЦИЯ SWITCH ИДЕТ НА СТРОГОЕ СРАВНЕНИЕ
) {
  case 99:
    console.log("МАЛО");
    break;
  case 101:
    console.log("МНОГО");
    break;
  case 100:
    console.log("ВСЕ ВЕРНО УСЛОВИЕ ВЫПОЛНИЛОСЬ!!"); // ! ВЫПОЛНИТЬСЯ ЭТОТ ПРОВЕРЯЕМЫЙ БЛОК
    break;
  default:
    console.log("НЕ ВЫПОЛНИЛСЯ НЕ ОДИН ПРОВЕРЯЕМЫЙ БЛОК");
}

testProverka = 100;
switch (
  testProverka // ! КОНСТРУКЦИЯ SWITCH ИДЕТ НА СТРОГОЕ СРАВНЕНИЕ
) {
  case 99:
    console.log("МАЛО");
    break;
  case 101:
    console.log("МНОГО");
    break;
  case 1001:
    console.log("ВСЕ ВЕРНО УСЛОВИЕ ВЫПОЛНИЛОСЬ!!");
    break;
  default:
    console.log("НЕ ВЫПОЛНИЛСЯ НЕ ОДИН ПРОВЕРЯЕМЫЙ БЛОК"); // ! ВЫПОЛНИТЬСЯ ЭТОТ ПРОВЕРЯЕМЫЙ БЛОК
}
