let select = document.querySelector(".select");
let choosen = document.querySelectorAll(".choosen");
let content = document.querySelector("#content");
let options = document.getElementById("list");
console.log(select);
console.log(choosen);

for (option of choosen) {
  option.onclick = function () {
    content.innerHTML = this.innerHTML;
    options.classList.toggle("hidden");
  };
}
select.onclick = function () {
  options.classList.toggle("hidden");
};

let t_letters = document.querySelector(".t-letters");
for (let i = 0; i <= 11; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter2 ";
  t_letter2.className = "t-letter";
  t_letters.appendChild(t_letter);
  t_letters.appendChild(t_letter2);
}

let tringles = document.querySelector(".tringles");
for (let i = 0; i <= 4; i++) {
  let shape = document.createElement("div");
  shape.className = "shape";
  tringles.appendChild(shape);
}

// dark theme

const checkbox = document.getElementById("checkbox");
let a = document.querySelectorAll("a");
let p = document.querySelectorAll("p");
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
