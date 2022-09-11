// dark theme

const checkbox = document.getElementById("checkbox");
let a = document.querySelectorAll("a");
let p = document.querySelector("p");
let h2 = document.querySelectorAll("h2");
let h1 = document.querySelectorAll("h1");
let box = document.querySelectorAll(".darkbox");

let label = document.querySelector("label");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
  console.log(a);
  [...a].forEach(function (ele) {
    ele.classList.toggle("dark-theme-light");
  });
  p.classList.toggle("dark-theme-text");
  [...h2].forEach(function (ele) {
    ele.classList.toggle("dark-theme-text");
  });
  [...h1].forEach(function (ele) {
    ele.classList.toggle("dark-theme-text");
  });
  [...box].forEach(function (ele) {
    ele.classList.toggle("dark-box");
  });
  label.classList.toggle("dark-theme-text");
});

// dark theme
