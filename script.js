for (let i = 10; i <= 25; i += 0.5) {
  console.log(i);
}

const numberToChek = +prompt("Enter any namber");
let primeOrNot = "is prime";

for (let i = 2; i < numberToChek; i++) {
  if (numberToChek % i === 0) primeOrNot = "is not prime";
}
console.log(`${numberToChek} ${primeOrNot}`);

const itemPrice = +prompt("Enter price of your purhase to calculate discount");
if (itemPrice > 0) {
  let discount;
  if (itemPrice < 100) {
    discount = 3;
  } else if (itemPrice < 200) {
    discount = 5;
  } else {
    discount = 7;
  }
  const discountAmount = (itemPrice / 100) * discount;
  console.log(
    `Your discount is ${discount}% You will save ${+discountAmount.toFixed(2)}`
  );
} else {
  console.log("Wrong number of arguments !");
}

for (let i = 2; i <= 9; i++) {
  for (let j = 2; j <= 9; j++) {
    console.log(`${j} * ${i} = `, j * i);
  }
}

const usdRate = 36.76;
for (let i = 10; i <= 100; i += 10) {
  const usdToUah = i * usdRate;
  console.log(`${i} USD = ${usdToUah.toFixed(2)} UAH`);
}

const numbers = prompt(" enter 15 numbers");
const arrayNum = numbers.split(" ");

let positiveNum = 0;
let negativeNum = 0;
let zeroNum = 0;
let evenNum = 0;
let oddNum = 0;

for (let i = 0; i < arrayNum.length; i++) {
  const selectedNum = Number(arrayNum[i]);
  if (selectedNum > 0) {
    positiveNum++;
  }
  if (selectedNum < 0) {
    negativeNum++;
  }
  if (selectedNum === 0) {
    zeroNum++;
  }
  if (selectedNum % 2 === 0) {
    evenNum++;
  }
  if (selectedNum % 2 !== 0) {
    oddNum++;
  }
}

console.log(`${positiveNum} - positive numbers`);
console.log(`${negativeNum} - negative numbers`);
console.log(`${zeroNum} - zero numbers`);
console.log(`${evenNum} - even numbers`);
console.log(`${oddNum} - odd numbers`);
