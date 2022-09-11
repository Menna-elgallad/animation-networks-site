let t_letters = document.querySelector(".T-l");
for (let i = 0; i <= 11; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter2 ";
  t_letter2.className = "t-letter";
  t_letters.appendChild(t_letter);
  t_letters.appendChild(t_letter2);
}

let half_tringles = document.querySelector(".half-tringles");
for (let i = 0; i <= 40; i++) {
  let tringle = document.createElement("div");
  tringle.className = "tringle";
  half_tringles.appendChild(tringle);
}

let t_letters2 = document.querySelector(".T-l2");
for (let i = 0; i <= 11; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter2 ";
  t_letter2.className = "t-letter";
  t_letters2.appendChild(t_letter);
  t_letters2.appendChild(t_letter2);
}

let half_cirlces = document.querySelector(".h-c");

for (let i = 0; i <= 2; i++) {
  let halfC = document.createElement("div");
  halfC.className = "halfC";
  half_cirlces.appendChild(halfC);
}

let t_letters3 = document.querySelector(".T-l3");
for (let i = 0; i <= 11; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter2 ";
  t_letter2.className = "t-letter";
  t_letters3.appendChild(t_letter);
  t_letters3.appendChild(t_letter2);
}

let t_letters4 = document.querySelector(".T-l4");
for (let i = 0; i <= 11; i++) {
  let t_letter = document.createElement("div");
  let t_letter2 = document.createElement("div");
  t_letter.className = "t-letter2 ";
  t_letter2.className = "t-letter";
  t_letters4.appendChild(t_letter);
  t_letters4.appendChild(t_letter2);
}

let border_cir = document.querySelector(".border-cir");

for (let i = 0; i <= 11; i++) {
  let borderc = document.createElement("div");
  borderc.className = "borderc";
  border_cir.appendChild(borderc);
}

let solidc = document.querySelector(".solidc");

for (let i = 0; i <= 29; i++) {
  let solid_c = document.createElement("div");
  solid_c.className = "solid-c";
  solidc.appendChild(solid_c);
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
