const sumFix = 0.1 + 0.2;
console.log(`Result - ${sumFix.toFixed(1)}`);

const login = prompt("Введіть логін");
const password = prompt("Введіть пароль");

const corectLogin = "admin";
const corectPassword = "12pass33210";

if (login !== corectLogin && password !== corectPassword) {
  console.log("Відмовлено в авторизації");
} else if (login !== corectLogin || password !== corectPassword) {
  console.log("Помилка в логіні або паролі");
} else {
  console.log("Вдала авторизація !");
}

const userFunds = prompt("Вкажіть ваш баланс!");

const wmPrice = 21;
const carrotPrice = 8;
const potatoPrice = 12;

console.log(`Асортимент :
Кавун - ${wmPrice} гривня
Морква - ${carrotPrice} гривень
Картопля - ${potatoPrice} гривнень`);
console.log(`Ваш баланс - ${userFunds} гривень`);

const selectedItem = prompt("Оберіть продукт");
console.log(`Обраний товар - ${selectedItem}`);

const wmTotal = userFunds / wmPrice;
const carrotTotal = userFunds / carrotPrice;
const potatoTotal = userFunds / potatoPrice;

if (selectedItem === "Кавун") {
  console.log(
    `Ви можете придбати ${Math.floor(wmTotal)} кавун . Ваша решта - ${
      userFunds % wmPrice
    } гривень`
  );
} else if (selectedItem === "Морква") {
  console.log(
    `Ви можете придбати ${Math.floor(carrotTotal)} морква . Ваша решта - ${
      userFunds % carrotPrice
    } гривень`
  );
} else if (selectedItem === "Картопля") {
  console.log(
    `Ви можете придбати ${Math.floor(potatoTotal)} кортопля . Ваша решта - ${
      userFunds % potatoPrice
    } гривень`
  );
} else {
  console.log("Обраний вами продукт відсутній в Асоритменті !");
}

const firstSide = +prompt("Вкажіть довжину першої сторони!");
const secondSide = +prompt("Вкажіть другої сторони!");
const thirdSide = +prompt("Вкажіть довжину третьої сторони!");
if (
  firstSide + secondSide > thirdSide &&
  secondSide + thirdSide > firstSide &&
  thirdSide + firstSide > secondSide
) {
  console.log("Такий трикутник існує");
} else {
  console.log("Такий трикутник не існує");
}

// 2 && 0 && 3 || true && false = false
// false || " " || 3 && true = false (0)
// 1 && 1000 && '0' || 0 && 'Bob' = false(" ")
// -1 || 0 || 0 && "" || 1010 = true (-1)
