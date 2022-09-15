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

if (userFunds >= Math.min(wmPrice, carrotPrice, potatoPrice)) {
  const selectedItem = prompt("Оберіть продукт");
  let itemsAmount = 0;
  let fundsRest = 0;
  switch (selectedItem) {
    case "Кавун":
      itemsAmount = userFunds / wmPrice;
      fundsRest = userFunds % wmPrice;
    case "Морква":
      itemsAmount = userFunds / carrotPrice;
      fundsRest = userFunds % carrotPrice;
    case "Картопля":
      itemsAmount = userFunds / potatoPrice;
      fundsRest = userFunds % potatoPrice;
    default:
      console.log("Обраний вами продукт відсутній в Асоритменті !");
  }
  if (itemsAmount >= 1) {
    console.log(
      `Ви можете придбати ${Math.floor(
        itemsAmount
      )} ${selectedItem} . Ваша решта - ${fundsRest} гривень`
    );
  } else {
    console.log(`В вас недостатньо коштів для покупки ${selectedItem}`);
  }
} else if (userFunds == 0) {
  console.log("В вас недостатньо коштів для покупки будь якого товару");
} else {
  console.log("Коллектори вже виїхали за вами )))");
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
