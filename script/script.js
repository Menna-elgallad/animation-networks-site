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

// shapes

let half_cirlces = document.querySelector(".half-circles");

for (let i = 0; i <= 2; i++) {
  let halfC = document.createElement("div");
  halfC.className = "halfC";
  half_cirlces.appendChild(halfC);
}

let shapes = document.querySelector(".shapes");
for (let i = 0; i <= 2; i++) {
  let shape = document.createElement("div");
  shape.className = "shape";
  shapes.appendChild(shape);
}
let shapes2 = document.querySelector(".shapes2");
for (let i = 0; i <= 2; i++) {
  let shape = document.createElement("div");
  shape.className = "shape";
  shapes2.appendChild(shape);
}
let shapes3 = document.querySelector(".shapes3");
for (let i = 0; i <= 4; i++) {
  let shape = document.createElement("div");
  shape.className = "shape";
  shapes3.appendChild(shape);
}

let bshapes2 = document.querySelector(".b-shapes2");
for (let i = 0; i <= 2; i++) {
  let shape = document.createElement("div");
  shape.className = "shape";
  bshapes2.appendChild(shape);
}

let t_letters = document.querySelector(".t-letters");
for (let i = 0; i <= 5; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter";
  t_letter2.className = "t-letter2";
  t_letters.appendChild(t_letter);
  t_letters.appendChild(t_letter2);
}
let t_letters2 = document.querySelector(".t-letters2");
for (let i = 0; i <= 11; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter2 ";
  t_letter2.className = "t-letter";
  t_letters2.appendChild(t_letter);
  t_letters2.appendChild(t_letter2);
}
let t_letters3 = document.querySelector(".t-letters3");
for (let i = 0; i <= 5; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter";
  t_letter2.className = "t-letter2";
  t_letters3.appendChild(t_letter);
  t_letters3.appendChild(t_letter2);
}

let t_letters4 = document.querySelector(".t-letters4");
for (let i = 0; i <= 5; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter";
  t_letter2.className = "t-letter2";
  t_letters4.appendChild(t_letter);
  t_letters4.appendChild(t_letter2);
}

let half_cirlces2 = document.querySelector(".half-circles2");

for (let i = 0; i <= 2; i++) {
  let halfC = document.createElement("div");
  halfC.className = "halfC";
  half_cirlces2.appendChild(halfC);
}
let rectangles = document.querySelector(".rectangles");
for (let i = 0; i <= 2; i++) {
  let rec = document.createElement("div");
  rec.className = "rec";
  rectangles.appendChild(rec);
}
let circles = document.querySelector(".circles");
for (let i = 0; i <= 26; i++) {
  let circ = document.createElement("div");
  circ.className = "circ";
  circles.appendChild(circ);
}
// shapes
//form
