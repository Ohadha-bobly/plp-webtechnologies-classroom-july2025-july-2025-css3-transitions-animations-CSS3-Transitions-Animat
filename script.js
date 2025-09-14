// Part 2: Functions demo
function calculateArea(width, height) {
  // local scope variables
  let area = width * height;
  return area; // return value
}

function logArea() {
  let result = calculateArea(5, 10); // reusing function
  console.log("Area is:", result);
}
logArea();

// Global vs Local scope demo
let globalMessage = "Hello from Global Scope!";
function showMessage() {
  let localMessage = "Hello from Local Scope!";
  console.log(globalMessage);
  console.log(localMessage);
}
showMessage();

// Part 3: Combining CSS + JS
const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");

function toggleBoxAnimation(element) {
  element.classList.toggle("animate");
}

animateBtn.addEventListener("click", () => toggleBoxAnimation(box));

// Modal logic
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

function toggleModal(show) {
  modal.style.display = show ? "flex" : "none";
}

openModal.addEventListener("click", () => toggleModal(true));
closeModal.addEventListener("click", () => toggleModal(false));
