const phones = [
  {
    model: "iPhone 13",
    price: 900,
    ozu: [
      {
        name: "16GB",
        price: 100,
      },
      {
        name: "32GB",
        price: 200,
      },
      {
        name: "64GB",
        price: 500,
      },
    ],
    memory: [
      {
        name: "128GB",
        price: 100,
      },
      {
        name: "256GB",
        price: 200,
      },
      {
        name: "512GB",
        price: 325,
      },
      {
        name: "1TB",
        price: 500,
      },
    ],
  },
  {
    model: "Samsung Galaxy A12",
    price: 400,
    ozu: [
      {
        name: "16GB",
        price: 40,
      },
      {
        name: "32GB",
        price: 100,
      },
    ],
    memory: [
      {
        name: "128GB",
        price: 50,
      },
      {
        name: "256GB",
        price: 150,
      },
      {
        name: "1TB",
        price: 200,
      },
    ],
  },
];

const modelSelector = document.querySelector('select[name="model"]');
const ozuSelector = document.querySelector('select[name="ozu"]');
const memorySelector = document.querySelector('select[name="memory"]');
const form = document.getElementById("phone-form");
const error = document.getElementById("error");
const result = document.getElementById("result");

modelSelector.onchange = (e) => {
  ozuSelector.innerText = "";
  memorySelector.innerText = "";
  const name = e.target.value;
  for (i = 0; i < phones.length; i++) {
    if (phones[i].model === name) {
      for (j = 0; j < phones[i].ozu.length; j++) {
        let option = document.createElement("option");
        option.value = phones[i].ozu[j].name;
        option.innerText = phones[i].ozu[j].name;
        ozuSelector.appendChild(option);
      }
      for (j = 0; j < phones[i].memory.length; j++) {
        let option = document.createElement("option");
        option.value = phones[i].memory[j].name;
        option.innerText = phones[i].memory[j].name;
        memorySelector.appendChild(option);
      }
    }
  }
};

form.onsubmit = (e) => {
  e.preventDefault();
  const name = modelSelector.value;
  const ozu = ozuSelector.value;
  const memory = memorySelector.value;

  if (!ozu || !memory) {
    error.innerText = "Please choose all fields";
    setTimeout(() => (error.innerText = ""), 5000);
  }

  let result = 0;
  for (i = 0; i < phones.length; i++) {
    if (phones[i].model === name) {
      result += phones[i].price;
    }
    for (j = 0; j < phones[i].ozu.length; j++) {
      if (phones[i].ozu[j].name === ozu) {
        result += phones[i].ozu[j].price;
      }
    }
    for (j = 0; j < phones[i].memory.length; j++) {
      if (phones[i].memory[j].name === memory) {
        result += phones[i].memory[j].price;
      }
    }
  }
  document.getElementById("result").innerText = `${result}$`;
};

const timerInput = document.getElementById("secondsToBum");
const startButton = document.getElementById("start");
const timerResult = document.getElementById("timer-result");
startButton.addEventListener("click", () => {
  const remainingTime = timerInput.value;
  if (timerInput.value === "" || timerInput.value <= 0) {
    timerResult.innerText = "You must choose any time exept 0";
  } else {
    setTimeout(() => {
      timerResult.innerText = "Terakt on Makeevsky Rodnichek - done";
    }, remainingTime * 1000);
  }
});
const yearInSec = 1000 * 60 * 60 * 24 * 365;
const dayInSec = 1000 * 60 * 60 * 24;
const hourInSec = 1000 * 60 * 60;

const dateInput = document.getElementById("date-input");
const campaignStart = document.getElementById("campaign-button-start");
const campaignResult = document.getElementById("campaign-result");

campaignStart.addEventListener("click", () => {
  setInterval(() => {
    const currentTime = Date.now();
    const deadline = new Date(dateInput.value).getTime();
    const diff = deadline - currentTime;
    if (dateInput.value === "") {
      campaignResult.innerText = "You must choose any date in future";
    } else if (diff <= 0) {
      campaignResult.innerText = "Wrong Date";
    } else {
      const years = Math.floor(diff / yearInSec);
      const days = Math.floor((diff / dayInSec) % 365);
      const hours = Math.floor((diff / hourInSec) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      campaignResult.innerText = `You mast vait ${years} years ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
  }, 1000);
});
