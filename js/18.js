"use strict";

// ! ЦВЕТ ТЕКСТА КРАСНЫЙ
//  TODO ЦВЕТ ТЕКСТА
// ? ЦВЕТ ТЕКСТА
// * ЦВЕТ ТЕКСТА

// ! ТЕМА УРОКА ОБЪЕКТЫ

const options = {
  name: "test",
  width: 1024,
  height: 200,
  colors: {
    border: "black",
    background: "red",
  },
};
const { border, background } = options.colors; //! ДЕСТРУКТУРИЗАЦИЯ
console.log(background);

//? console.log(options);
//? delete options.colors["border"];
//? console.log(options.colors);
//! FOR IN СЛУЖИТ ТОЛЬКО ДЛЯ ПЕРЕБОРА ОБЪЕКТА
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`КЛЮЧ ${i} ЗНАЧЕНИЕ ${options[key][i]}`);
    }
  } else {
    console.log(`КЛЮЧ ${key} ЗНАЧЕНИЕ ${options[key]}`); //! ВЛОЖЕННЫЙ ОБЪЕК НЕ ПЕРЕБИРАЕТЬСЯ
  }
}
// * пример 2

console.log(Object.keys(options).length); // ! ЗАПОМНИТЬ
