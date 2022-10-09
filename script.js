function Person(name, age, gender, nationality, country, countryToVisit) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.nationality = nationality;
  this.country = country;
  this.countryToVisit = countryToVisit;
}
const person = new Person("null", 22, "male", "ukrainian", "Ukraine", [
  "France",
  "Netherlands",
  "Tailand",
]);
const person2 = new Person("Tanya", 41, "female", "pole", "Poland", [
  "Italy",
  "Spain",
  "Tanzania",
]);
const person3 = new Person("Oleg", 56, "male", "kazah", "Moldova", [
  "Maldives",
  "India",
  "Mexica",
]);

console.log(person);

function greet() {
  console.log(`Hi ${this.name}`);
}
function wakeUp() {
  console.log(`Wake up ${this.name} you are ${this.age} today. Happy Birthday`);
}
function timeToSleep() {
  console.log(`${this.name} in ${this.country} 24:00 . Its time to sleep`);
}
function visitedCountry() {
  console.log(
    `${this.name} in this year you must visit next countries ${this.countryToVisit}`
  );
}

greet.apply(person2);
wakeUp.apply(person3);
timeToSleep.apply(person);
visitedCountry.apply(person2);

function isObjEqual(object1, object2) {
  const props1 = Object.getOwnPropertyNames(object1);
  const props2 = Object.getOwnPropertyNames(object2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i += 1) {
    const prop = props1[i];
    const bothAreObjects =
      typeof object1[prop] === "object" && typeof object2[prop] === "object";

    if (
      (!bothAreObjects && object1[prop] !== object2[prop]) ||
      (bothAreObjects && !isEqual(object1[prop], object2[prop]))
    ) {
      return console.log(false);
    }
  }

  return console.log(true);
}
isObjEqual(
  { nick: "alex", id: "11332200dd" },
  { nick: "alex", id: "11332200d" }
);

const newUser = { userName: "german", userPassword: "1234" };
const userData = function (userEmail) {
  console.log(
    `user name - ${this.userName}  , user password - ${this.userPassword} , user e-mail -${userEmail}`
  );
};
Function.prototype.myOwnBind = function (fn, context, ...rest) {
  return function (...args) {
    return fn.call(context, ...rest.concat(args));
  };
};
const myBind = Function.prototype.myOwnBind;
myBind(userData, newUser)("german@icloud.com");

function Calculator(x, y) {
  this.enterData = function () {
    this.x = x;
    this.y = y;
    if (typeof x !== "number" || typeof y !== "number") {
      return console.log("Wrong number of arguments, please try again");
    } else {
      this.calculateSum = function () {
        // console.log(this.x + this.y);
        return this.x + this.y;
      };
      this.gcd = function () {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        while (this.y) {
          let t = this.y;
          this.y = this.x % this.y;
          this.x = t;
        }
        // console.log(this.x);
        return this.x;
      };
      this.nok = function () {
        // console.log((x * y) / this.gcd());
        return (x * y) / this.gcd();
      };
    }
  };
}

let newCalc = new Calculator(+prompt("enter x"), +prompt("enter y"));
newCalc.enterData();
newCalc.calculateSum();
newCalc.gcd();
newCalc.nok();
// Var2
// function gcd(x, y) {
// 	if (!y) {
// 		return x;
// 	}
// 	return gcd(y, x % y);
// }

// function lcm(x, y) {
// 	return x * y / gcd(x, y);
// }

// function Calculator() {
// 	this.enterData = function () {
// 		this.a = parseInt(prompt('Enter a'));
// 		this.b = parseInt(prompt('Enter b'));
// 	}

// 	this.calculateSum = function () {
// 		return this.a + this.b;
// 	}

// 	this.calculateNSD = function () {
// 		return gcd(this.a, this.b);
// 	}

// 	this.calculateNSK = function () {
// 		return lcm(this.a, this.b);
// 	}
// }

// const calc = new Calculator();
// calc.enterData();
// console.log("Sum: " + calc.calculateSum());
// console.log("NSD: " + calc.calculateNSD());
// console.log("NSK: " + calc.calculateNSK());
