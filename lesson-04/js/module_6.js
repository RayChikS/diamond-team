//TODO:=========task-01=================
// 3. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

const words = text.split(/\s+/); // Розбиваємо текст на слова за допомогою роздільників (пробіли, коми, крапки і т.д.)

const pEl = document.createElement("p");

words.forEach((word) => {
  if (word.length >= 8) {
    const spanEl = document.createElement("span");
    spanEl.style.backgroundColor = "yellow";
    spanEl.textContent = word + " ";
    pEl.appendChild(spanEl);
  } else {
    pEl.innerHTML += word + " ";
  }
});

const linkEl = document.querySelector("a");

linkEl.before(pEl);

//TODO:=========task-03=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const BLOCKS = 100;

const divCon = document.createElement("div");
divCon.classList.add("number-container");
const divArr = [];

for (let i = 0; i < BLOCKS; i++) {
  const div = document.createElement("div");
  div.classList.add("number");
  div.textContent = randomNumber();

  if (div.textContent % 2 === 0) {
    div.classList.add("even");
  } else {
    div.classList.add("odd");
  }
  divArr.push(div);
}

divCon.append(...divArr);
linkEl.after(divCon);

//TODO:=========task-04=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

** 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
 */

// find refs

// const inputEl = document.querySelector(".js-username-input");
// const formEl = document.querySelector(".js-contact-form");
// const spanEl = document.querySelector(".js-username-output");
// //TODO:===========1===============

// // inputEl.addEventListener('input', handleInput )

// // function handleInput (event){

// // const input = event.target;

// // if(input.value.trim().length > 6 ){
// //     input.classList.add('success');
// //     input.classList.remove('error');
// // } else {
// //     input.classList.remove('success');
// //     input.classList.add('error');
// // }

// // }

// //TODO:===========2===============

// // inputEl.addEventListener("focus", (event) => {
// //   const input = event.target;
// //   !input.value.trim()
// //     ? (input.style.outline = "3px solid red")
// //     : (input.style.outline = "3px solid green");
// // });

// //TODO:===========3===============

// // inputEl.addEventListener("blur", (event) => {
// //       const input = event.target;
// //       !input.value.trim()
// //         ? (input.style.outline = "3px solid red")
// //         : (input.style.outline = "3px solid lime");
// //     });

// //TODO:===========4===============

// formEl.addEventListener("submit", (event) => {

//     event.preventDefault();

// let formData = new FormData(event.target);

// // console.log(formData);

// const userName = formData.get('userName');
// const acceptEl = formData.get ('accept');

// if ( !userName || !acceptEl ){

//         return alert ("Заповніть поля")
//     }

// console.log({userName:userName});

// // formData = new FormData();
// event.target.elements.userName.value = '';
// event.target.elements.accept.checked = false;

// spanEl.textContent = "Anonymous";

// console.log(userName);

// const {accept, userName} = event.target.elements;

// if ( !userName.value.trim() || !accept.checked ){
//     return alert ("Заповніть поля")
// }
// console.log({userName:userName.value});

// event.target.reset();
// spanEl.textContent = "Anonymous";
//  });

// inputEl.addEventListener('input', (event) => {
//  spanEl.textContent = event.target.value.trim() || 'Anonymous' ;
// })

//TODO:=========task-05=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити"
// - робить більшим на 10 пікселів.

// const boxEl = document.querySelector(".box");
const btnsEl = document.querySelector(".js-btn-wrapper");
// btnsEl.addEventListener("click", onClick);

// function onClick(event) {
//   console.dir(event.currentTarget);
//   console.log(event.target);

//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const boxEl = btnsEl.querySelector(".box");
//   const { offsetWidth } = boxEl;

//   const id = event.target.id;
//   if (id === "increase") {
//     boxEl.style.width = `${offsetWidth + 20}px`;
//     boxEl.style.height = `${offsetWidth + 20}px`;
//     return;
//   }
//   if (id === "decrease") {
//     boxEl.style.width = `${offsetWidth - 20}px`;
//     boxEl.style.height = `${offsetWidth - 20}px`;
//     return;
//   }
// }
const textEl = document.querySelector(".text");
console.dir(textEl);
