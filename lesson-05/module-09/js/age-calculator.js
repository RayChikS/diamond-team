const btnEl = document.querySelector(".js-form-btn");
const inputEl = document.querySelector(".js-input");
const resultEl = document.querySelector(".js-form-result");

function calculateAge() {
  const date = new Date(inputEl.value);
  const currentDate = new Date();
  const diff = currentDate - date;
  const result = getAge(diff);
  if (result < 0 || isNaN(result)) {
    return alert("Please enter your birthday");
  }

  resultEl.textContent = `Your age is ${result} years old`;
}

function getAge(birthdayValue) {
  return Math.floor(birthdayValue / (1000 * 60 * 60 * 24 * 365.25));
}

btnEl.addEventListener("click", calculateAge);