const newTeam = (TeamName, driver, birthYear, car, sponsor, driverStatus) => {
  return {
    TeamName,
    driver,
    birthYear,
    car,
    sponsor,
    driverStatus,
  };
};
const FirstTeam = newTeam(
  "Red Bull-Racing",
  "Max Verstappen",
  "1997",
  "Red Bull Racing RB18",
  "Aston Martin",
  true
);
console.log(FirstTeam);

const isValid = (x) => {
  return x === null || x === undefined;
};

const userLogin = prompt("enter your login");
const userPassword = prompt("enter your password");
const userCity = prompt("enter your city.");
const userCountry = prompt("enter your country");
const userGender = prompt("enter your sex");
const userAge = prompt("enter your age");
let userData;

if (
  isValid(userLogin) ||
  userLogin === "" ||
  isValid(userPassword) ||
  userPassword === "" ||
  isValid(userCity) ||
  userCity === "" ||
  isValid(userCountry) ||
  userCountry === "" ||
  isValid(userGender) ||
  userGender === "" ||
  isValid(userAge) ||
  userAge === ""
) {
  console.log("Wrong number of arguments, try again");
} else {
  userData = {
    userLogin,
    userPassword,
    userCity,
    userCountry,
    userGender,
    userAge,
  };
}
// console.log(userData);
const changeUserData = (userData, key, value) => {
  userData[key] = value;
};

changeUserData(userData, "userCity", "Kherson");
changeUserData(userData, "userCountry", "USA");
// console.log(userData);

const newStudent = {
  studentName: "Ivan",
  studentSurname: "Alexeev",
  studentAge: 17,
  studentCourse: 1,
  studentCity: "Odesa",
  addHomework: () => {
    console.log("Sending my homework... Please, wait");
  },
  greeting: () => {
    console.log("Hi everyone!");
  },
};
newStudent.greeting();
newStudent.addHomework();

const isEmptyObj = (obj) => {
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return true;
  } else {
    return false;
  }
};

const teamRevenue = {
  Taras: 2000,
  Marta: 10,
  Ivan: 1200,
  Petro: 400,
  Roma: 366,
  Alina: 829,
};

//7
const calculateSum = (obj) => {
  const revenueArray = Object.values(obj);
  const callback = (revenue, sum) => {
    return revenue + sum;
  };
  const result = revenueArray.reduce(callback, 0);
  return result;
};
console.log(`Total revenue - ${calculateSum(teamRevenue)}`);

//8
const calculateMin = (obj) => {
  const revenueArray = Object.entries(obj);
  const callback = (revenue, min) => {
    if (revenue[1] < min[1]) {
      return revenue;
    } else {
      return min;
    }
  };
  const result = revenueArray.reduce(callback, revenueArray[0]);
  return result[0];
};
console.log(
  `Employee with the liest revenue rate - ${calculateMin(teamRevenue)}`
);

//9
const calculateMax = (obj) => {
  const revenueArray = Object.entries(obj);
  const callback = (revenue, max) => {
    if (revenue[1] > max[1]) {
      return revenue;
    } else {
      return max;
    }
  };
  const result = revenueArray.reduce(callback, revenueArray[0]);
  return result[0];
};
console.log(
  `Employee with the highest revenue rate - ${calculateMax(teamRevenue)}`
);

//10
const calculateRandom = (obj) => {
  const teamRevenueArray = Object.entries(obj);
  const randomIndex = Math.floor(Math.random() * teamRevenueArray.length);
  return teamRevenueArray[randomIndex][0];
};
console.log(`The employee of the month - ${calculateRandom(teamRevenue)}`);
