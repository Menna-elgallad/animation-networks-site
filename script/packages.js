let btn1 = document.querySelector(".up-btn1");
let list1 = document.querySelector(".intenrnal-ul1");

btn1.onclick = function () {
  list1.classList.toggle("hidden");
  this.classList.toggle("rotate");
};
let btn2 = document.querySelector(".up-btn2");
let list2 = document.querySelector(".intenrnal-ul2");

btn2.onclick = function () {
  list2.classList.toggle("hidden");
  this.classList.toggle("rotate");
};
let btn3 = document.querySelector(".up-btn3");
let list3 = document.querySelector(".intenrnal-ul3");

btn3.onclick = function () {
  list3.classList.toggle("hidden");
  this.classList.toggle("rotate");
};
let btn4 = document.querySelector(".up-btn4");
let list4 = document.querySelector(".intenrnal-ul4");

btn4.onclick = function () {
  list4.classList.toggle("hidden");
  this.classList.toggle("rotate");
};
let btn = document.querySelector(".up-btn");
let list = document.querySelector(".intenrnal-ul");

btn.onclick = function () {
  list.classList.toggle("hidden");
  this.classList.toggle("rotate");
};

let inputs = document.querySelectorAll("input");
let reset = document.querySelector(".reset");
console.log(reset);
console.log(inputs);
reset.onclick = function () {
  for (input of inputs) {
    input.checked = false;
    input.value = "";
  }
};
let sidemenu = document.querySelector(".sidemenu");
let ul = document.querySelector(".options");
sidemenu.onclick = function () {
  ul.classList.toggle("hide");
};

// dark theme

const checkbox = document.getElementById("checkbox");
let a = document.querySelectorAll("a");
let p = document.querySelectorAll("p");
let h2 = document.querySelectorAll("h2");
let h1 = document.querySelectorAll("h1");
let box = document.querySelectorAll(".darkbox");
let li = document.querySelectorAll("li");

let label = document.querySelector("label");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
  console.log(a);
  [...a].forEach(function (ele) {
    ele.classList.toggle("dark-theme-light");
  });
  [...li].forEach(function (ele) {
    ele.classList.toggle("dark-theme-light");
  });
  [...p].forEach(function (ele) {
    ele.classList.toggle("dark-theme-light");
  });
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
