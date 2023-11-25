# Модуль 9.

## 1. Напиши скрипт для віджета календаря. В кінцевому результаті повинна відображатися сьогоднішня дата у календарику. Використовуй `new Date()` для отримання поточного року, місяця, дня тижня та самого дня. Задай відповідні дані у відповідні елементи на html сторінці.

### Викоритовуй шаблон календаря з файлу [index.html](./index.html).

```js
const monthNameEl = document.querySelector('.js-month');
const dayNameEl = document.querySelector('.js-day');
const dayNumEl = document.querySelector('.js-day-number');
const yearEl = document.querySelector('.js-year');
```

## 2. Потрібно створити калькулятор віку. Є контейнер з заголовком "калькулятором віку" і input з введенням дати. Якщо ми натиснемо на input дати, ми зможемо вибрати дату нашого дня народження. Наприклад, якщо ми виберемо дату 17.06.1998 року і натиснемо на "Розрахувати вік", побачимо, що вік розраховується на основі цієї дати і нам у результаті покажеться, що `Your age is 25 years old`; Якщо нічого не введено, то виводь `alert("Please enter your birthday")`Використовуй доповіжні функції для роботи.

### Викоритовуй шаблон форми з файлу [ageCalculator.html](./ageCalculator.html).

```js
const btnEl = document.querySelector('.js-form-btn');
const inputEl = document.querySelector('.js-input');
const resultEl = document.querySelector('.js-form-result');

function calculateAge() {}

function getAge(birthdayValue) {}

btnEl.addEventListener('click', calculateAge);
```

## 3. Напишіть changeBackground() встановлює фонове зображення на body. Викоритовуй масив картинок, які повинні кожні 5 секунд змінюватися, тобто через кожні 5 секунд має викликатися функція changeBackground. Якщо ми дійшли до кінця масива, то починай спочатку. Для цього створи лічильник, аби слідкувати, яка картинка зараз показується.

Стиль для body для плавного переходу

```css
body {
  background-repeat: no-repeat;
  transition: background-image 1s ease-in-out;

  background-position: top;
  background-size: cover;
}
```

```js
const images = [
  'url("https://picsum.photos/id/1015/1920/1080")',
  'url("https://picsum.photos/id/1018/1920/1080")',
  'url("https://picsum.photos/id/1025/1920/1080")',
];

function changeBackground() {}
```
