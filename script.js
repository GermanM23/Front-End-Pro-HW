const userName = prompt("Яке Ваше імʼя?");
const userSurname = prompt("Яке Ваше прізвище?");
const userFavNum = +prompt("Яке Ваше улюблене число?");
console.log(
  `Вітаю, ${userName} ${userSurname}! Ваше улюблене число - ${userFavNum}`
);

const firstNum = +prompt("Введіть перше число");
const secondNum = +prompt("Введіть друге число");
const tot = firstNum + secondNum;
const subtraction = firstNum - secondNum;
const multiplication = firstNum * secondNum;
const degree = firstNum / secondNum;
console.log(
  `Результати розрахунків!
Сума: ${firstNum} + ${secondNum} = ${tot}
Різниця: ${firstNum} - ${secondNum} = ${subtraction}
Добуток: ${firstNum} * ${secondNum} = ${multiplication}
Частка: ${firstNum} / ${secondNum} = ${degree}
`
);

const UserDateOfBirth = +prompt("В якому році Ви народились?");
const UserAge = 2022 - UserDateOfBirth;
console.log(
  `Ви народились у ${UserDateOfBirth} році - ваш вік становить ${UserAge}`
);

const thirdNum = +prompt("Визначте число для визначення остатку");
const fourthNum = +prompt("Визначте ще одне число для визначення остатку");
const remnant = thirdNum % fourthNum;
console.log(
  `Остача від ділення чисел ${thirdNum} та ${fourthNum} становить - ${remnant}`
);

const lastNum = +prompt("Введіть число для визначення парності");
const pairOrNo = lastNum % 2 ? true : false;
console.log(`Вказане вами число не парне - ${pairOrNo}`);
