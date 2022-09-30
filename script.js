const firstArrayCreate = () => {
  const arrayLenght = +prompt(
    "Specify the number of positions in the array by entering a number from 1 to 10"
  );
  const firstArray = [];
  if (!Number.isInteger(arrayLenght)) {
    console.log("Wrong value, please select another array lenght");
    return "Wrong value, please select another array lenght";
  }
  for (let i = 1; i <= arrayLenght; i++) {
    const userValue = +prompt(`Enter a numeric value №${i}`);
    if (!Number.isInteger(userValue)) {
      console.log("Wrong value, please select another argument");
      i--;
    } else {
      firstArray.push(userValue);
    }
  }
  // console.log(firstArray);
};
firstArrayCreate();

const productsList = [
  { productName: "bread", productPrice: 14, productQuantity: 2 },
  { productName: "potatoes", productPrice: 32, productQuantity: 6 },
  { productName: "tomato", productPrice: 51, productQuantity: 8 },
  { productName: "garlic", productPrice: 12, productQuantity: 10 },
  { productName: "apple", productPrice: 44, productQuantity: 7 },
  { productName: "wattermelon", productPrice: 100, productQuantity: 1 },
];

let total = 0;
productsList.forEach((el) => (total += el.productPrice * el.productQuantity));
// console.log(`total - ${total}`);

const minQuantity = productsList.sort(
  (el1, el2) => el1.productQuantity - el2.productQuantity
)[0];
// console.log(
//   `The mmin quantity ${minQuantity.productName}: ${minQuantity.productQuantity} items`
// );

let totalQuantity = 0;
productsList.forEach((el) => (totalQuantity += el.productQuantity));
// console.log(`total Quantity - ${totalQuantity}`);

const maxPrice = productsList.sort(
  (el1, el2) => el2.productPrice - el1.productPrice
)[0];
// console.log(
//   `Most expensive product - ${maxPrice.productName}, it costs ${maxPrice.productPrice}`
// );

const error = "Wrong number of arguments, try again";
const isValid = (x) => {
  if (x !== undefined || x !== null) {
    return x;
  }
};

const addNewItem = () => {
  const newItem = {
    productName: "",
    productPrice: 0,
    productQuantity: 0,
  };
  for (let key in newItem) {
    const userValue = prompt(key);

    if (!isValid(userValue)) {
      return console.log("error");
    }
    if (key === "productPrice" || key === "productQuantity") {
      newItem[key] = Math.abs(userValue) ? Math.abs(userValue) : 0;
    } else {
      newItem[key] = userValue;
    }
  }
  productsList.push(newItem);
  return productsList;
};
addNewItem();
console.log(productsList);

const deleteItem = () => {
  const userDeleteItem = prompt("ENTER NAME OF DELETED ITEM");
  if (isValid(userDeleteItem)) {
    const elemetIndex = productsList.findIndex(
      (el) => el.productName === userDeleteItem
    );
    if (elemetIndex === -1) {
      return "Wrong name! There are no such products.";
    }
    productsList.splice(elemetIndex, 1);
    // console.log(productsList);
    return productsList;
  } else {
    return console.log(error);
  }
};

deleteItem();

const numbersArray = [
  16, -3, 54, -4, -72, -56, 47, -12, 4, -16, 25, -37, 46, 4, -51, 27, -8, 4,
  -54, 76, -4, 12, 6, -35,
];

let positiveSum = 0;
const positiveNumbers = numbersArray.filter((num) => num >= 0);
positiveNumbers.forEach((num) => (positiveSum += num));
// console.log(
//   `number of positive values - ${positiveNumbers.length} their sum - ${positiveSum}`
// );

const minItem = Math.min(...numbersArray);
const minItemIndex = numbersArray.findIndex((num) => num === minItem);
// console.log(`Min item - ${minItem} his index - ${minItemIndex}`);

const maxItem = Math.max(...numbersArray);
const maxItemIndex = numbersArray.findIndex((num) => num === maxItem);
// console.log(`Max item - ${maxItem} his index - ${maxItemIndex}`);

const negativeNumbers = numbersArray.filter((num) => num < 0);
// console.log(`number of negative values - ${negativeNumbers.length}`);

const positiveOddNumbers = positiveNumbers.filter((num) => num % 2 !== 0);
// console.log(`Quantity of positive odd numbers - ${positiveOddNumbers.length}`);

const positiveEvenNumbers = positiveNumbers.filter((num) => num % 2 === 0);
let positiveEvenSum = 0;
positiveEvenNumbers.forEach((num) => (positiveEvenSum += num));
// console.log(`Sum of even nums: ${positiveEvenSum}`);

let mult = 1;
positiveNumbers.forEach((num) => (mult *= num));
// console.log(`Mult of even nums: ${mult}`);
