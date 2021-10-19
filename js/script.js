//functionality for navbar menu
let menuBtn = document.querySelector("#menu-btn");
let closerBtn = document.querySelector("#closer-btn");
let navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  closerBtn.style.display = "block";
  navbar.classList.toggle("active");
};

closerBtn.onclick = () => {
  closerBtn.style.display = "none";
  navbar.classList.remove("active");
};
