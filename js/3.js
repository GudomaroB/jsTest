"use strict";

console.log(4 / 0); //! infinity
console.log(-5 / 0); //! -infinity

console.log("stroka" * 5); //! Nan

let undef;
console.log(undef); //! undefined Переменная не определена

//  Объект
const objectA = {
  name: "Vassilyi",
  age: 27,
  id: 2,
};

console.log(objectA);
objectA.age = 28; //! изменили свойство объекта
console.log(objectA);
objectA.popular = true; //! добовляем свойство в объект
console.log(objectA);
delete objectA.id; //! удаляем свойство id
console.log(objectA);

const massiv = [
  1,
  2,
  3,
  "stroka",
  {
    name: "Gudo",
  },
];

console.log(massiv);
console.log(massiv[1]); //! индекст начинается с 0
