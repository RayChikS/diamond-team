//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.

const user = {
  firstName: "Sergiy",
  lastName: "Gusar",
  age: 41,
  email: "qwer@gmail.com",


  info() {
    return this.firstName;
  }

}

// user.info();
// console.log(user.info());

// const employee = Object.create(user);
// employee.firstName = 'Vlad';
// employee.info();

// console.log(employee.info());

//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)

//? user.modify('firstName', 'Vlad');
//? console.log(user.info());

//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:

// user.addProperty('friends', [
//   {
//     firstName: 'Mary',
//     lastName: 'Smith',
//     age: 32,
//     email: 'marysmith@hotmail.com',
//   },
//   {
//     firstName: 'Alex',
//     lastName: 'Johnson',
//     age: 45,
//     email: 'alex.johnson@yahoo.com',
//   },
//   {
//     firstName: 'Emily',
//     lastName: 'Davis',
//     age: 19,
//     email: 'emilydavis@gmail.com',
//   },
// ]);

//? console.log(user);

//TODO:=========task-04=================
//  Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lastName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const obj = {
//   name: 'Bob',
//   lastName: 'Lasso',
//   age: 50,
//   email: 'BodLasso@gmail.com',
// };

//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, number) {
//   console.log(`${message} ${this.firstName} ${this.lastName} ${number}`);
// };

//TODO:=========task-06=================
// Виправте помилки, щоб код працював

// const product = {
//   price: 5000,

//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(callback) {
//   callback();
// }

// callAction(product.showPrice);

//* Прототипи та класи
//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// const res = calculator
//   .number(10)
//   .add(10)
//   .divide(2)
//   .multiply(4)
//   .subtract(5)
//   .getResult();

// console.log(res);

// const res2 = calculator
//   .number(20)
//   .subtract(40)
//   .multiply(-8)
//   .divide(160)
//   .add(20)
//   .getResult();

// console.log(res2);
//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

// const client = new Client('mango', 'mango@gmail.com');

// client.changeEmail = 'mango555@gmail.com';
// console.log(client.getClientData.email);
// client.changeLogin = '12345';
// console.log(client.getClientData.login);

//! Статичний метод
//TODO:=========task-03=================
/**
 * Напиши клас Notes який управляє колекцією нотаток у властивості items.
 * Нотатка - це об'єкт із властивостями text і priority.
 * Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
 * Додай методи
 * - addNote(note),
 * - removeNote(text)
 * - updatePriority(text, newPriority)
 */

// const note1 = new Notes();

// note1.addNote({ text: 'Note1', priority: Notes.Priority().LOW });
// note1.addNote({ text: 'Note2', priority: Notes.Priority().LOW });
// console.table(note1.items);

// note1.removeNote('Note1');
// console.table(note1.items);

// note1.updatePriority({ text: 'Note2', newPriority: Notes.Priority().HIGHT });
// console.table(note1.items);
