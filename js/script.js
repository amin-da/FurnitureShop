//functionality for navbar menu
let menuBtn = document.querySelector("#menu-btn");
let closerBtn = document.querySelector("#closer-btn");
let navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  closerBtn.style.display = "block";
  navbar.classList.toggle("active");
};

//close button functionality
closerBtn.onclick = () => {
  closerBtn.style.display = "none";
  navbar.classList.remove("active");
  cart.classList.remove("active");
};

//functionality for Shopping Cart

let cart = document.querySelector(".shopping-cart");
let cartBtn = document.querySelector("#cart-btn");

cartBtn.onclick = () => {
  closerBtn.style.display = "block";
  cart.classList.toggle("active");
};
