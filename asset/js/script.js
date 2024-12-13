//! login page js codes

var a = document.getElementById("login");
var b = document.getElementById("register");
var c = document.getElementById("ae-btn1");

function register() {
  a.style.left = "-400px";
  b.style.left = "50px";
  c.style.left = "110px";
}
function login() {
  a.style.left = "50px";
  b.style.left = "450px";
  c.style.left = "0";
}

function togglePassword(inputId) {
  var passwordInput = document.getElementById(inputId);
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
//! login page js codes

//! timer codes

let timer;
const totalTime = 172800;
let timeLeft;
let startTime;
let endTime;

if (localStorage.getItem("endTime")) {
  endTime = parseInt(localStorage.getItem("endTime"), 10);
  const now = Math.floor(Date.now() / 1000);
  timeLeft = endTime - now;
} else {
  timeLeft = totalTime;
  startTime = Math.floor(Date.now() / 1000);
  endTime = startTime + timeLeft;
  localStorage.setItem("endTime", endTime);
}

function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    localStorage.getItem("endTime", endTime);
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      localStorage.removeItem("endTime");
      document.getElementById("aetimer").textContent = "زمان به اتمام رسید";
    }
  }, 1000);
}

function updateDisplay() {
  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  document.getElementById(
    "aetimer"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}
window.onload = function () {
  updateDisplay();
  startTimer();
};
//! timer codes

//! item page codes
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
const itemSet = getQueryParameter("set");

if (itemSet) {
  const items = document.querySelectorAll(`.${itemSet}`);
  items.forEach((item) => {
    item.style.display = "block";
  });
}
//! item page codes

//! cart codes
function addToCart(productName, productPrice, productImage) {
  const product = {
    name: productName,
    price: productPrice,
    image: productImage,
  };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
}
function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsDiv = document.getElementById("cartItems");

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>cart is empty</p>";
  } else {
    cartItemsDiv.innerHTML = cart
      .map(
        (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>${item.price}</p>
    </div>
    `
      )
      .join("");
  }
}
function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
}
window.onload = displayCart;
//! cart codes
