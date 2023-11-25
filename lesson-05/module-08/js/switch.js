const refs = {
  body: document.body,
  checkBox: document.querySelector("#theme-switch"),
};
refs.checkBox.addEventListener("click", onCheckBoxChange);
document.addEventListener("DOMContentLoaded", setThemeOnLoad);
// light theme is default, that's why themeSwitcher is unchecked
// themeSwitcher.checked = false;

const LS_KEY = "switcher";

function onCheckBoxChange() {
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
  if (refs.checkBox.checked) {
    changeDarkTheme();
  } else {
    changelightTheme();
  }
}

function setThemeOnLoad() {
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // don't forget about themeSwitcher, if current theme is dark, it should be checked
  const saveData = localStorage.getItem(LS_KEY);
  if (saveData === "dark") {
    changeDarkTheme();
    refs.checkBox.checked = true;
  } else {
    changelightTheme();
  }
}

function changeDarkTheme() {
  refs.body.classList.replace("light", "dark");
  localStorage.setItem(LS_KEY, "dark");
}

function changelightTheme() {
  refs.body.classList.replace("dark", "light");
  localStorage.setItem(LS_KEY, "light");
}
