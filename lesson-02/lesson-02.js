//! Object and function - module 3
//TODO:==========Task-1=============
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'
// 3 замінити значення premium на false
// 4 виводити вміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 30,
//   hobby: "reading",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keysArray = Object.keys(user);
// for (const key of keysArray) {
//   console.log(`${key} : ${user[key]}`);
// }

// Додати поле mood зі значенням 'happy'

// Замінити hobby на 'skydiving'

// Замінити значення premium на false

// Вивести вміст об'єкта user у форматі ключ:значення

//TODO:============task-2==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.

// const square = {
//   height: 200,
//   weight: 300,
//   calculateArea() {
//     return this.height * this.weight;
//   },
// };

// const square2 = Object.create(square);
// square2.height = 500;
// square2.weight = 500;
// console.log(square2);
// console.log(square.calculateArea());
// console.log(square2.calculateArea());

//TODO:============task-3==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// console.log(store.hasProduct('apple'));

//TODO:============task-4==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// console.log(cart.calculateTotal());

//TODO:==========task-5=============
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };

//TODO:==========task-6=============
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a')); // {c: 3}

//TODO:============task-7================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu',
// };

// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
// width: 400,
// height: 600,
// title: "My menu"
// };

//TODO:=========task-8==============
// Потрібно перебрати об'єкти та вивести ім'я кращого співробітника

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// ! module 4

//TODO:============task-01========Callback=================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [2, 3, 5, 7, 9, 20];
// const words = ['apple', 'banana', 'orange', 'pear'];

//! Зауважте, що використання методу forEach не дозволяє прямо вийти з циклу після знаходження першого підходящого елемента. Тому ми використовуємо додаткову змінну result, щоб зберегти перший підходящий елемент та перевіряти, чи він вже був знайдений. forEach нічого не повертає, а просто перебирає масив!

// Перший колбек: перше парне число

// Другий колбек: перше слово, що починається з літери "O" у будь-якому регістрі

// const res1 = findElement(numbers, isEven);
// console.log(res1);

// const res2 = findElement(words, startsWithO);
// console.log(res2);

//!array methods
//TODO:=========task-02=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// console.log(getNewArray(numbers));

//TODO:=========task-03=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-04=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-05=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-06=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// console.log("numbers: ", numbers);
// console.log("oddNumber: ", oddNumberInArray(numbers));

//TODO:=========task-07=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const res = sortedArray(numbersArray);
// console.log(res);
// console.log(numbersArray);
//TODO:===============task-08===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const res = sortedArray(stringArray);
// console.log(res);

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const res = getAge(user);
// console.log("object :>> ", res);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const res = sum(numbers);
// console.log(res);

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5];

// const res = averageValue(arr);
// console.log(res);
