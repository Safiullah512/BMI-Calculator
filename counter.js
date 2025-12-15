// 1️⃣ Count variable
let count = 0;

// 2️⃣ Elements select karna
const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

// 3️⃣ Update function
function updateDisplay() {
  countDisplay.textContent = count;
}

// 4️⃣ Event listeners
incBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
