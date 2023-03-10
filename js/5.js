const result = confirm("Вы уходите ?");
console.log(result);

const answer = +prompt("Вам есть 18 лет?", ""); //! +promt значение будет Number, а если просто prompt тогда  будет строка всегда
console.log(answer);

const answers = [];
answers[0] = prompt("Как Вас зовут ?", "");
answers[1] = prompt("В каком городе вы живете ?", "");
answers[2] = +prompt("Ваш телефон ?", "");

document.write(answers);
