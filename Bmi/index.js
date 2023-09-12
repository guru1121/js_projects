const buttons = document.querySelectorAll(".btn");
console.log(buttons);
const body = document.querySelector("body");
const reset = document.querySelector(".reset");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";
      body.style.fontFamily = "cursive";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";
      body.style.fontFamily = "serif";
    }
    if (e.target.id === "white") {
      body.style.color = "black";
      body.style.backgroundColor = e.target.id;
      body.style.fontFamily = "sans-serif";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "black";
      body.style.fontFamily = "Gill Sans Extrabold";
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "white";
      body.style.fontFamily = "Gill Sans Extrabold";
    }
  });
});

// bmi calculator

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const results = document.querySelector("#result_s");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `<span style="color:red;">please give a valid height ${height}</span>`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span style="color:red;">Please give a valid weight ${weight}</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span class="bmi_result" >${bmi}</span>`;

    if (bmi < 18) {
      results.innerHTML = `<h3 style="color:purple; font-weight: 400;">You are Underweight</h3>`;
    } else if (bmi > 18 && bmi < 24.9) {
      results.innerHTML = `<h3 style="color:orange; font-weight: 400;" >You are Fit</h3>`;
    } else {
      results.innerHTML = `<h3 style="color:violet; font-weight: 400;">You are Overweight</h3>`;
    }
  }
});

reset.addEventListener("click", function () {
  let h1 = document.querySelector("#height");
  let w1 = document.querySelector("#weight");
  let r1 = document.querySelector("#result_s");
  h1.value = "";
  w1.value = "";
  result.innerHTML = "";
  r1.innerHTML = "";
});

//Local time displayer

const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleString();
}, 500);

