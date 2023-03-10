const submit = document.querySelector("form");
const modal = document.querySelector(".modal");
const form = document.querySelector(".forms");
const holder = document.querySelector("#name");
const cardName = document.querySelector(".card-name");
const cvc = document.querySelector("#cvc");
const cvcNum = document.querySelector(".cvc-num");
const input = document.querySelectorAll("input");
const num = document.querySelector("#card-num");
const cardNum = document.querySelector(".num");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cardMonth = document.querySelector(".left");
const cardYear = document.querySelector(".right");
const numErr = document.querySelector(".err1");
const dateErr = document.querySelector(".err2");
const cvcErr = document.querySelector(".err3");

//Modal to display
submit.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  form.style.display = "none";
});

input.forEach((el) => {
  el.addEventListener("focusin", function () {
    el.style.borderColor = "hsl(278, 94%, 30%)";
    el.style.color = "hsl(278, 68%, 11%)";
  });
  el.addEventListener("focusout", function () {
    el.style.borderColor = "hsl(282, 8%, 76%)";
  });
});

//Cardholder name input
holder.addEventListener("input", function () {
  cardName.innerHTML = holder.value.toUpperCase();
  if (holder.value === "") {
    cardName.innerHTML = "OLANRE YUSUF";
  }
});

//Card number input
num.addEventListener("input", function () {
  // add space to string input
  num.value = num.value
    .replace(/[^0-9A-Za-z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

  cardNum.innerHTML = num.value;
  if (num.value === "") {
    cardNum.innerHTML = "0000 0000 0000 0000";
  }
  // display error if input includes letter
  if (/[A-Za-z]/.test(num.value)) {
    num.style.borderColor = "hsl(0, 100%, 66%)";
    numErr.style.display = "block";
  } else {
    num.style.borderColor = "hsl(270, 3%, 87%)";
    numErr.style.display = "none";
  }
});

//Month and Year input functions
month.addEventListener("input", function () {
  cardMonth.innerHTML = month.value;
  if (month.value === "") {
    cardMonth.innerHTML = "00";
    month.style.borderColor = "hsl(0, 100%, 66%)";
    dateErr.style.display = "block";
  } else {
    month.style.borderColor = "hsl(278, 94%, 30%)";
    dateErr.style.display = "none";
  }
});
month.addEventListener("focusout", function () {
  month.style.borderColor = "hsl(278, 94%, 30%)";
  if (month.value === "") {
    month.style.borderColor = "hsl(0, 100%, 66%)";
    dateErr.style.display = "block";
  } else {
    month.style.borderColor = "hsl(270, 3%, 87%)";
    dateErr.style.display = "none";
  }
});

year.addEventListener("input", function () {
  cardYear.innerHTML = year.value;
  if (year.value === "") {
    cardYear.innerHTML = "00";
    year.style.borderColor = "hsl(0, 100%, 66%)";
    dateErr.style.display = "block";
  } else {
    year.style.borderColor = "hsl(278, 94%, 30%)";
    dateErr.style.display = "none";
  }
});
year.addEventListener("focusout", function () {
  if (year.value === "") {
    year.style.borderColor = "hsl(0, 100%, 66%)";
    dateErr.style.display = "block";
  } else {
    year.style.borderColor = "hsl(270, 3%, 87%)";
    dateErr.style.display = "none";
  }
});

//cvc number input function
cvc.addEventListener("input", function () {
  cvcNum.innerHTML = cvc.value;
  if (cvc.value === "") {
    cvcNum.innerHTML = "000";
    cvc.style.borderColor = "hsl(0, 100%, 66%)";
    cvcErr.style.display = "block";
  } else {
    cvc.style.borderColor = "hsl(278, 94%, 30%)";
    cvcErr.style.display = "none";
  }
});

cvc.addEventListener("focusout", function () {
  if (cvc.value === "") {
    cvc.style.borderColor = "hsl(0, 100%, 66%)";
    cvcErr.style.display = "block";
  } else {
    cvc.style.borderColor = "hsl(270, 3%, 87%)";
    cvcErr.style.display = "none";
  }
});
