const minSearch = (firstNum, secondNum, thirdNum, fourthNum) => {
  if (typeof (firstNum && secondNum && thirdNum && fourthNum) === "number") {
    // console.log(Math.min(firstNum, secondNum, thirdNum, fourthNum));
    return Math.min(firstNum, secondNum, thirdNum, fourthNum);
  } else {
    // console.log("Wrong number of arguments");
    return "false";
  }
};
minSearch(6, 8, 11, 0);

const gcd = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    // console.log("false");
    return false;
  } else {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
      let t = y;
      y = x % y;
      x = t;
    }
    // console.log(x);
    return x;
  }
};

gcd(8, 22);

const isPerfect = (num1) => {
  if (typeof num1 === "number") {
    let temp = 0;
    for (let i = 1; i <= num1 / 2; i++) {
      if (num1 % i === 0) {
        temp += i;
      }
    }
    if (temp === num1 && temp !== 0) {
      // console.log(true);
      return true;
    } else {
      // console.log(false);
      return false;
    }
  } else {
    // console.log("eror");
    return "Error occured, please try again";
  }
};
isPerfect(21);

const sumTo = (number1, number2) => {
  if (typeof (number1 && number2) === "number") {
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
      sum += i;
    }
    // console.log(sum);
    return sum;
  } else {
    // console.log("error");
    return "Error occured, please try again";
  }
};
sumTo(null, 11);

const convetCtoF = (celsius) => {
  if (typeof celsius === "number") {
    // console.log(celsius * (9 / 5) + 32);
    return celsius * (9 / 5) + 32;
  } else {
    return "Error occured, please try again";
  }
};
convetCtoF(22);

const getRandomNum = (min, max) => {
  if (typeof (min && max) === "number") {
    min = Math.ceil(min);
    max = Math.floor(max);
    // console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    // console.log("error");
    return "Error occured, please try again";
  }
};
getRandomNum(0, 40);
