//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

function greet() {
  return "hello world";
}

const greet2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("hello world"), 2000);
  });

greet2()
.then((responce) => console.log(responce));

//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      console.log(data);
      res(data);
    }, 1000);
  });

const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      console.log(data);
      res(data);
    }, 1000);
  });

const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      console.log(data);
      res(data);
    }, 1000);
  });

//TODO:====================03==========================
/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

//TODO:====================04==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */


// prompt("Enter data")

function checkValue(value) {
  return new Promise((resolve, reject) => {
    if (!value || isNaN(value)) {
      reject("error")
    } 
    if(value % 2 === 0) {
      setTimeout(() => {
        resolve("even")
      }, 1000)
    } 
    setTimeout(() => {
      resolve("odd")
    }, 2000)
  }) 
}

const value = prompt("Enter data");

checkValue(value)
.then(res => console.log(res))
.catch(err => console.log(err))