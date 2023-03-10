"use strict";
const userName = "Василий Гудомаров";
alert(`Привет мой повелитель, ${userName}`);

let incr = 20,
  decr = 20;
incr++; // постфиксная запись
decr--; // постфиксная запись

/*
++incr ПРЕФИКСНАЯ ЗАПИСЬ
++decr ПРЕФИКСНАЯ ЗАПИСЬ
*/
console.log(incr);
console.log(decr);

console.log(5 * 5 == "25"); //?: true
console.log(5 * 5 == 25); //? true
console.log(5 * 5 === "25"); //! false

/* 
&& оператор И лапинаеться на лжи
|| оператор ИЛИ запинаеться на правде
*/

console.log(true && 10 && !false && "string"); // ! "string"
console.log(!!NaN || !10 || false || String); // ! string

console.log(3 + 2 * 4 != 11); //! false
console.log(3 + 2 * 4 == 11); //* true
