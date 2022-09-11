let solidc = document.querySelector(".solidc");

for (let i = 0; i <= 62; i++) {
  let solid_c = document.createElement("div");
  solid_c.className = "solid-c";
  solidc.appendChild(solid_c);
}
let t_letters = document.querySelector(".t-letters");
for (let i = 0; i <= 11; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter2 ";
  t_letter2.className = "t-letter";
  t_letters.appendChild(t_letter);
  t_letters.appendChild(t_letter2);
}
let half_cirlces = document.querySelector(".half-cicles");

for (let i = 0; i <= 2; i++) {
  let halfC = document.createElement("div");
  halfC.className = "halfC";
  half_cirlces.appendChild(halfC);
}
let border_cir = document.querySelector(".border-cir");

for (let i = 0; i <= 14; i++) {
  let borderc = document.createElement("div");
  borderc.className = "borderc";
  border_cir.appendChild(borderc);
}
let halfcirc = document.querySelector(".halfcirc");

for (let i = 0; i <= 2; i++) {
  let halfC = document.createElement("div");
  halfC.className = "halfC";
  halfcirc.appendChild(halfC);
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
