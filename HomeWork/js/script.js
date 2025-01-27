// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// const num = 1;

// if (num > 0) {
//   console.log("true");
// } else if ("<0") {
//   console.log("false");
// } // true

// const num = 0;

// if (num > 0) {
//   console.log("true");
// } else if ("<0") {
//   console.log("false");
// } // false

// const num = -3;

// if (num > 0) {
//   console.log("true");
// } else if ("<0") {
//   console.log("false");
// } // false

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let value = "test";
// if (value === "test") {
//   console.log("true");
// } // true

// let value = "test";
// if (value === "qwerty") {
//   console.log("true");
// }

// let value = "test";
// if (value === true) {
//   console.log("true");
// }

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let num = 1;

// if (num > 10) {
//   console.log("num - 5");
// } else if (num < 10) {
//   console.log(num + 5);
// } // 6

// let num = 10;

// if (num > 10) {
//   console.log(num - 5);
// } else if (num < 10) {
//   console.log(num + 5);
// }

// let num = 13;

// if (num > 10) {
//   console.log(num - 5);
// } else if (num < 10) {
//   console.log(num + 5);
// } //8

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = prompt("Введіть чісло від 1 до 12");

// switch (month) {
//   case "1":
//     console.log("Січень");
//     break;
//   case "2":
//     console.log("Лютий");
//     break;
//   case "3":
//     console.log("Березень");
//     break;
//   case "4":
//     console.log("Квітень");
//     break;
//   case "5":
//     console.log("Травень");
//     break;
//   case "6":
//     console.log("Червень");
//     break;
//   case "7":
//     console.log("Липень");
//     break;
//   case "8":
//     console.log("Серпень");
//     break;
//   case "9":
//     console.log("Вересень");
//     break;
//   case "10":
//     console.log("Жовтень");
//     break;
//   case "11":
//     console.log("Листопад");
//     break;
//   case "12":
//     console.log("Грудень");
//     break;
//   default:
//     alert(`ВВедіть чісло від 1 до 12!`);
// } // Жовтень

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = prompt("Введіть тризначне число");
// if (number >= 100 && number <= 999) {
//   const firstNum = Math.floor(number / 100);
//   const secondNum = Math.floor(Math.floor(number % 100) / 10);
//   const thirdNum = Math.floor(number % 10);
//   alert(firstNum + secondNum + thirdNum);
// } else {
//   alert("Введіть тризначне число!");
// } // ввожу 123 - повертає 6
