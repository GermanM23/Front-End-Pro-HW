const productsList = [
  {
    productName: "bread",
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: "21/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 9.75,
  },
  {
    productName: "pasta",
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: "20/10/2022",
      sugarFree: false,
    },
    productProvider: "Tov SSD",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 67.1,
  },
  {
    productName: "eggs",
    productData: {
      weight: 200,
      certificate: false,
      date0fExpiry: "26/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Alex",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 100,
  },
  {
    productName: "Sugar",
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: "20/10/2027",
      sugarFree: false,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 30,
  },
  {
    productName: "apple",
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: "21/12/2022",
      sugarFree: true,
    },
    productProvider: "FOP Fer",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 25,
  },
  {
    productName: "cherry",
    productData: {
      weight: 200,
      certificate: false,
      date0fExpiry: "21/11/2022",
      sugarFree: true,
    },
    productProvider: "TOV CHHERRY",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 124,
  },
  {
    productName: "Pork",
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: "11/11/2022",
      sugarFree: true,
    },
    productProvider: "FOP Piggy",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 232,
  },
  {
    productName: "wattermelon",
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: "20/10/2022",
      sugarFree: true,
    },
    productProvider: "TOV Herson-Ukraine",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 77,
  },
  {
    productName: "Salt",
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: "21/10/2023",
      sugarFree: true,
    },
    productProvider: "FOP Artem",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 7,
  },
  {
    productName: "potato",
    productData: {
      weight: 200,
      certificate: false,
      date0fExpiry: "04/11/2022",
      sugarFree: true,
    },
    productProvider: "FOP Potato",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 12,
  },
  {
    productName: "Lamb",
    productData: {
      weight: 100,
      certificate: true,
      date0fExpiry: "26/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP Skyba R.R.",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 300,
  },
  {
    productName: "Onion",
    productData: {
      weight: 400,
      certificate: false,
      date0fExpiry: "21/12/2022",
      sugarFree: true,
    },
    productProvider: "FOP ON I ON",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 3,
  },
  {
    productName: "Carrot",
    productData: {
      weight: 220,
      certificate: true,
      date0fExpiry: "29/11/2022",
      sugarFree: true,
    },
    productProvider: "FOP CAR",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 21,
  },
  {
    productName: "Paprika",
    productData: {
      weight: 200,
      certificate: true,
      date0fExpiry: "02/10/2022",
      sugarFree: true,
    },
    productProvider: "FOP PAP",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 19,
  },
  {
    productName: "Juice",
    productData: {
      weight: 100,
      certificate: true,
      date0fExpiry: "11/12/2023",
      sugarFree: true,
    },
    productProvider: "Tov SANDORA",
    productCountry: "https://www.worldometers.info/img/flags/up-flag.gif",
    productPrice: 50,
  },
];
console.log(productsList);

const productsRoll = document.createElement("ul");
function createProduct(productsList) {
  const itemsList = document.createElement("li");
  const productInfo = document.createElement("p");
  const productIMG = document.createElement("img");
  itemsList.classList.add("list");
  productInfo.innerText = `${productsList.productName} - ${productsList.productData.weight}kg -- Expiration Date ${productsList.productData.date0fExpiry} -- ${productsList.productPrice} UAH -- Provider ${productsList.productProvider} -- Sugar free: ${productsList.productData.sugarFree} -- Certificate Status ${productsList.productData.certificate}`;
  productIMG.src = productsList.productCountry;
  itemsList.appendChild(productInfo);
  itemsList.appendChild(productIMG);
  productsRoll.appendChild(itemsList);

  if (!productsList.productData.certificate) {
    itemsList.classList.add("uncertified");
  }
}
productsList.forEach(createProduct);
const htmlList = document.getElementById("product-card");
htmlList.appendChild(productsRoll);

function totalSum(currentSum, productsList) {
  return currentSum + productsList.productPrice;
}
function maxPrice(currentMAX, productsList) {
  if (currentMAX.productPrice > productsList.productPrice) {
    return currentMAX;
  }
  return productsList;
}
const total = productsList.reduce(totalSum, 0);
const highestPrice = productsList.reduce(maxPrice, 0);
const averagePrice = total / productsList.length;

const calculations = document.createElement("h2");
const totalProdPrice = document.createElement("p");
const maxProdPrice = document.createElement("p");
const averageProdPrice = document.createElement("p");

totalProdPrice.innerText = `Total Amount - ${total} UAH`;
maxProdPrice.innerText = `Highest price product - ${highestPrice.productName}`;
averageProdPrice.innerText = `Average price - ${+averagePrice.toFixed(2)} UAH`;

calculations.appendChild(totalProdPrice);
calculations.appendChild(maxProdPrice);
calculations.appendChild(averageProdPrice);
const div = document.getElementById("product-card");
div.appendChild(calculations);
// productsRoll.appendChild(calculations);
productsRoll.classList.add("roll-class");
calculations.classList.add("calc-class");
