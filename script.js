let result, a, b;

a = 1, b = 2;

result = a + b;

result < 4 ? console.log(`Условие выполняется ${result} < 4`) : console.log(`Условие не выполняется ${result} > 4`)


// Бонус

const first = prompt("Введите число a", "");

const second = prompt("Введите число b", "");

let result1 = +first + +second;

result1 < 4 ? alert(`Сумма а и б (${result1}) удовлетворяет условие `) : alert(`Сумма а и б (${result1}) > 4 (условие не выполняется)`);