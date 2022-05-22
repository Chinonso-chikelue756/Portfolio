const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});
// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
var first=prompt('enter first name');
var second=prompt('enter second name');
var sum=(first)+(second);
alert("Your name is:"+ sum);
alert('Chinonso Chikelue Proudly Welcome you to his portfolio')
console.log('Chinonso Chikelue Proudly Welcome You To His portfolio')
