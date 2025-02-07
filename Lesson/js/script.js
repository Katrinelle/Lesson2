// оператори

// const b = null;
// console.log(typeof b); // "object"

// const c = 5;
// console.log(typeof c); // "number"

// const d = "JavaScript is awesome!";
// console.log(typeof d); // "string"

// const e = false;
// console.log(typeof e); // "boolean"

// ----------------------------------//
// Вивід данних/ Ввід данних
// ----------------------------------//
// ----------------------------------//

// const message = "JavaScript is awesome!";

// Виведення

// alert - виводе повідомлення у вспливаючому вікні

// alert(message);
// console.log(message); // вспливло повідомлення

// prompt - виводе вспливаюче модальне вікно для вводу даних

// let age = prompt("Скільки вам років?"); // вспливло вікно з полем для вводу
// console.log(age); // виведе в консоль цифру, яку ввели у вспливаючому вікні

// Отримання

// confirm - виводе вспливаюче модальне вікно з питанням question
// та кнопкамі Ок та Скасувати

// const isConfirm = confirm("Please confirm reservation"); // вспливло вікно з питанням і
// //кнопками отмена та ок
// console.log(isConfirm); // якщо нажму отмена - false
// // ok - true

// console.log("Hello"); // Hello

// const test = confirm("Yes or no?");
// console.log(test); // жму ok - true

// prompt
// const userName = prompt("Please enter your name:");
// console.log(userName);

// const number = prompt("Please enter number");
// console.log(number);

// ----------------------------------//
// ----------------------------------//
// Перетворення типу
// ----------------------------------//
// ----------------------------------//

// const value = prompt("Please enter a number!");
// console.log(typeof value); // ok - string отмена - object
// console.log(value); // якщо ввожу у вспліваючому вікні 5 - отрімую 5

// let value;

// newНазвазмінної перетворення з boolean на string

// value = false;
// console.log(typeof value); // boolean
// const newValue = String(value);
// console.log(typeof newValue); // string

// перетворення з string на Number--- //

// value = "123";
// console.log(typeof value); // string

// const newValue = Number(value);
// console.log(typeof newValue); // number
// console.log(newValue); // 123

// const test = Number("qwerty");
// console.log(test); // NaN
// console.log(typeof test); // number

// перетворення на Boolean--- //

// Правила перетворення:

// Значення, які інтуїтивно “порожні”, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean("вітаю")); // true
// console.log(Boolean("")); // false

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false

// ----------------------------------//
// ----------------------------------//
// Оператори
// ----------------------------------//
// ----------------------------------//

//Терміни: “унарний”, “бінарний”, “операнд”

//Операнд – це те, до чого застосовуються оператори.
//Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2.
//Іноді їх називають “аргументами”

//Оператор є унарним, якщо він має один операнд
// let x = 1;

// x = -x;

//Оператор є бінарним, якщо він має два операнди

// let x = 1,
//   y = 3;
// alert(y - x);

//JavaScript підтримує такі математичні операції:

// Додавання +,
// Віднімання -,
// Множення *,
// Ділення /,
// Остача від ділення %,
// Піднесення до степеня **.

// // // Додавання
// console.log(2 + 2); //4

// // // // Віднімання
// console.log(10 - 4); //6

// // // // Множення
// console.log(5 * 5); //25

// // // // Ділення
// console.log(6 / 2); //3

// //Остача від ділення %

// console.log(8 % 3); //2
// console.log(10 % 3); //1
// console.log(10 % 2); //0

//Піднесення до степеня **

// console.log(5 ** 2); //25
// console.log(4 ** 4); // 256 - це 4 у 4-й степені, тобто 4*4*4*4=256

// -------Оператори порівняння------//

// результатом вертають буль

// a > b и a < b //- більше/меньше
// a >= b и a <= b  //- більше/меньше або дорівнює
// a == b //- дорівнює
// a != b //- не дорівнює
// a === b //- строго дорівнює
// a !== b //- строго не дорівнює

// console.log("5>10", 5 > 10); // false
// console.log("5<10", 5 < 10); // true

// console.log(5 > 3); //true
// console.log(5 < 3); // false
// console.log(5 >= 5); //true
// console.log(7 <= 3); // false

// let value = 0; //number
// console.log(value == 0); // true
// console.log(typeof value); //number

// let value = "0"; //string
// console.log(value === 0); // false, тому що змінна string

// let value = "0"; //string
// console.log(value == 0); // true == порівнює різні типи змінних

// == приведення до типу

// console.log(5 != 5); // false 5 не дорівнює 5
// console.log(5 !== 5); // false 5 строго не дорівнює 5

// ----------------------------------//
// ----------------------------------//
// or (||) and(&&) not (!) null (??) //
// ----------------------------------//
// ----------------------------------//

//   -----and (&&)------  // повинні бути виконені обидві умови
// true або false

// console.log(5 == 5 && 6 > 3); //true
// console.log(5 === 6 && 6 > 3); //false
// console.log(6 + 3 >= 9 && 8 + 1 === 9); //true

// console.log(5 === 6 && 6 > 3);
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

//   -----or (||)------ // або повинна бути виконана хоча б одна умова
// лише для булевих значень true або false

// console.log(5 + 5 === 25 || 2 * 2 === 6); //false
// console.log(5 * 5 === 25 || 2 * 2 === 6); //true

//   -----not (!) ------ // НЕ

// alert(!true); // false
// alert(!0); // true

// alert(!!"не пустий рядок"); // true
// alert(!!null); // false

// console.log(5 !== 4); //true

// console.log(true); // true
// console.log(!true); // false
// console.log(!false); //true

// ----------------------------------//
// ----------------------------------//
// Умови if/else якщо/ще
// if(...) {} обчислює умову в дужках, ш якщо true - виконує блок коду//
// ----------------------------------//

//--- одинарні

// if (5 + 5 === 10) {
//   console.log("Hello");
// } //Helo

// if (5 * 5 === 10) {
//   console.log("Hello");
// } //не виконується, тому що 5*5 = 25

// if (5 + 5 === 25) {
//   console.log("1");
// } //не виконується, тому що 5+5 = 10

// if (5 + 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");
// } //2 якщо if не виконується, тому що 5+5 = 10, переходе до виконання else

// if (5 * 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");
// } //1 if виконується, тож не переходе до виконання else

// if (2 + 2 === 4) {
//   console.log("Hello");
// } else {
//   console.log("No Hello");
// } //Hello

// if (2 + 2 === 6) {
//   console.log("Hello");
// } else {
//   console.log("No Hello");
// } // No Hello

// багато

/// ------Тернарний оператор------/// той же самий if/else тільки в скороченій версії

// 2 + 2 === 4 ? console.log("1") : console.log("2"); // 1
// 5 * 5 === 24 ? console.log(true) : console.log(false); // false
// 3 * 8 === 20 ? console.log("Si") : console.log("Not"); //Not

// якщо багато додатковиї умов:

// if (5 + 5 === 7) {
//   console.log("SomethingYes");
// } else if (2 + 2 === 4) {
//   console.log("SomethingNo");
// } else {
//   console.log("NothingNo"); //SomethingNo
// }

// if (5 + 5 === 7) {
//   console.log("SomethingYes");
// } else if (2 + 2 === 6) {
//   console.log("SomethingNo");
// } else {
//   console.log("NothingNo"); //NothingNo
// }

// if (5 + 5 === 10) {
//   console.log("SomethingYes");
// } else if (2 + 2 === 6) {
//   console.log("SomethingNo");
// } else {
//   console.log("NothingNo"); //SomethingYes
// }

// if (5 + 5 === 10) {
//   console.log("5+5 ===10");
// } else if (2 + 2 === 4) {
//   console.log("2+2 ===4");
// } else {
//   console.log("no");
// }

// let leng = "ua";
// if (leng === "ua") {
//   console.log("Monday");
// } else if (leng === "en") {
//   console.log("Tuesday");
// } else {
//   console.log("Reset");
// } // Monday

// let leng = "en";

// if (leng === "ua") {
//   console.log("Monday");
// } else if (leng === "en") {
//   console.log("Tuesday");
// } else {
//   console.log("Reset");
// } // Tuesday

// let leng = "fr";
// if (leng === "ua") {
//   console.log("Monday");
// } else if (leng === "en") {
//   console.log("Tuesday");
// } else {
//   console.log("Reset");
// } // Reset

// ----------------------------------//
// ----------------------------------//
// switch/case аналог if/else
// switch (змінна) {
//   case 0:
//     console.log(0);
//     break;
// ----------------------------------//
// ----------------------------------//

// let num = 10;

// switch (num) {
//   case 0:
//     console.log(0);
//     break;

//   case 5:
//     console.log(5);
//     break;

//   case 10:
//     console.log(10);
//     break;
// } //10

// такеж саме

// switch (5) {
//   case 0:
//     console.log(0);
//     break;

//   case 5:
//     console.log(5);
//     break;

//   case 10:
//     console.log(10);
//     break;
// } //5

// let cost = null;
// const sub = "premium";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;
//   case "pro":
//     cost = 100;
//     break;
//   case "premium":
//     cost = 500;

//   default:
//     console.log("Invalid sub");
// }

// console.log(cost); //500

// ----------------------------------//
// ----------------------------------//
// Вирішення логічних задач та побудова алгоритмів
// ----------------------------------//
// ----------------------------------//

// const min = prompt("ВВедіть хвилину");

// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 45 && min <= 59) {
//   console.log("Четверта чверть");
// } else {
//   console.log("Введіть іншу ціфру");
// }

// const value = prompt("Введіть назву товару").toLowerCase(); //для того, щоб не
// //реагувало на регістр вводимих даних

// let cost;

// switch (value) {
//   case "яблуко":
//     cost = 10;
//     alert(`${value} коштує ${cost} грівень`);
//     break;
//   case "вишня":
//     cost = 50;
//     alert(`${value} коштує ${cost} грівень`);
//     break;
//   case "груша":
//     cost = 45;
//     alert(`${value} коштує ${cost} грівень`);
//     break;
//   case "кавун":
//     cost = 70;
//     alert(`${value} коштує ${cost} грівень`);
//     break;
//   case "чорниця":
//     cost = 110;
//     alert(`${value} коштує ${cost} грівень`);
//     break;
//   case "диня":
//     cost = 150;
//     alert(`${value} коштує ${cost} грівень`);
//     break;

//   default:
//     alert(`Товару ${value}, немає в наявності`);
// }

// const num = 8;

// num % 2 === 0 ? console.log(true) : console.log(false);
