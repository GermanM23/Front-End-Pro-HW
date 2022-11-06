let a = "";
let b = "";
let operator = "";
let finish = false;

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

const result = document.querySelector(".calc-screen p");

function cA() {
  a = "";
  b = "";
  operator = "";
  finish = false;
  result.innerText = 0;
}

document.querySelector(".ac").onclick = cA;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) {
    return;
  }
  if (event.target.classList.contains("ac")) {
    return;
  }
  result.innerText = "";
  const key = event.target.innerText;
  if (nums.includes(key)) {
    if (b === "" && operator === "") {
      a += key;
      result.innerText = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      result.innerText = b;
    } else {
      b += key;
      result.innerText = b;
    }
    return;
  }
  if (action.includes(key)) {
    operator = key;
    result.innerText = operator;
    return;
  }

  if (key === "=") {
    if (b === "") b = a;
    switch (operator) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.innerText = "Error";
          a = "";
          b = "";
          operator = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    result.innerText = a;
  }
};
