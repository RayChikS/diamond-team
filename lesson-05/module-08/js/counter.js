const ref = {
  display: document.querySelector(".js-counter-value"),
  controlsButton: document.querySelector(".js-counter-controls"),
  saveButton: document.querySelector(".js-save"),
};

ref.controlsButton.addEventListener("click", onControlsBtnClick);
ref.saveButton.addEventListener("click", onSaveBtnClick);
document.addEventListener("DOMContentLoaded", renderPage)

let currentCounter = Number(ref.display.textContent);
const COUNTER_KEY = "counter";

function onControlsBtnClick(event) {
  const clkBtn = event.target;
  if (clkBtn.nodeName !== "BUTTON") {
    return;
  }
  if (clkBtn.dataset.action === "decrease") {
    currentCounter -= 1;
  }
  if (clkBtn.dataset.action === "increase") {
    currentCounter += 1;
  }
  if (clkBtn.dataset.action === "reset") {
    currentCounter = 0;
  }
  ref.display.textContent = currentCounter;
}

function onSaveBtnClick(event) {
  const clkBtn = event.target;
  if (clkBtn.nodeName !== "BUTTON") {
    return;
  }
  if (clkBtn.dataset.action === "save") {
    localStorage.setItem(COUNTER_KEY, currentCounter);
  }
  if (clkBtn.dataset.action === "clear-save") {
    localStorage.removeItem(COUNTER_KEY);
    currentCounter = 0;
  }
}

function renderPage() {
    const saveData = localStorage.getItem(COUNTER_KEY)
    if (saveData) {
        currentCounter  = Number(saveData);
        ref.display.textContent = currentCounter;
    }
}
