"use strict";

const arr = [1, 2, 3, 4, "stroka"];
console.log(arr[3]);

const obj = {
  Vassilyi: 1000,
  zarplata: 10000000,
};
console.log(obj);

obj.country = "Atyrau";
console.log(obj);
console.log(obj["country"]);

const popular = false;

obj["popular"] = true;

console.log(obj);

const massivTest = [1, 2, 3, 4, "Vassilyi"];
massivTest[15] = true;
console.log(massivTest[15]);
console.log(massivTest);
