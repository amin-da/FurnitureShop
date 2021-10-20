//functionality for navbar menu
let menuBtn = document.querySelector("#menu-btn");
let closerBtn = document.querySelector("#closer-btn");
let navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  closerBtn.style.display = "block";
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

//close button functionality
closerBtn.onclick = () => {
  closerBtn.style.display = "none";
  navbar.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
};

//functionality for Shopping Cart

let cart = document.querySelector(".shopping-cart");
let cartBtn = document.querySelector("#cart-btn");

cartBtn.onclick = () => {
  closerBtn.style.display = "block";
  cart.classList.toggle("active");
  searchForm.classList.remove("active");
};

//functionality for Login
let loginForm = document.querySelector(".login-form");
let loginBtn = document.querySelector("#login-btn");

loginBtn.onclick = () => {
  closerBtn.style.display = "block";
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
};

//functionality for search input in Responsive mode

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
};
