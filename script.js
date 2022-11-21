const yearInput = document.getElementById("year-input");
const convertButton = document.getElementById("convert");
const centuryResult = document.getElementById("century");
convertButton.addEventListener("click", () => {
  const yearValue = yearInput.value;
  function centuryFromYear(yearValue) {
    return Math.floor((yearValue - 1) / 100) + 1;
  }
  if (yearValue === "") {
    centuryResult.innerText = "Select any year";
  } else if (yearValue < 0) {
    centuryResult.innerText = `${yearValue} = ${centuryFromYear(
      yearValue
    )} century BC`;
  } else {
    centuryResult.innerText = `${yearValue} = ${centuryFromYear(
      yearValue
    )} century`;
  }
});

// 4
const input = document.getElementById("array-nums-input");
const btn = document.getElementById("select");
const result = document.getElementById("nums-result");

function removeExtraSpaces(string) {
  string = string.trim();
  string = string.replace(/\s\s+/g, " ");
  return string;
}

btn.addEventListener("click", () => {
  let numbersString = input.value;
  numbers = removeExtraSpaces(numbersString).split(" ");
  numbers = numbers.map((x) => parseInt(x, 10));
  let max = Math.max.apply(Math, numbers);
  let min = Math.min.apply(Math, numbers);
  result.innerText = `min: ${min}, max: ${max}`;
});

// 5
const phoneInput = document.getElementById("phone-input");
const btnPhone = document.getElementById("create");
const phoneResult = document.getElementById("phone-result");

function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}
btnPhone.addEventListener("click", () => {
  let phoneString = phoneInput.value;
  let phone = removeExtraSpaces(phoneString).split(" ");
  phone = phone.map((x) => parseInt(x, 10));
  phoneNumber = createPhoneNumber(phone);
  phoneResult.innerText = `Tel = ${phoneNumber}`;
});

// 3
const wordsInput = document.getElementById("words-input");
const btnRevers = document.getElementById("revers");
const wordsResult = document.getElementById("words-result");

function spinWords(sentence) {
  const sentenceArray = sentence.split(" ");
  let resultS = "";
  sentenceArray.map((str, i) => {
    if (str.length >= 5) {
      sentenceArray[i] = str.split("").reverse().join("");
    } else {
      sentenceArray[i] = str;
    }
    resultS = sentenceArray.join(" ");
  });
  return resultS;
}

btnRevers.addEventListener("click", () => {
  let wordsString = wordsInput.value;
  let sentence = removeExtraSpaces(wordsString);
  let words = spinWords(sentence);
  wordsResult.innerText = `${wordsString} = ${words}`;
});

// 2
const lettersInput = document.getElementById("letters-input");
const btnMagic = document.getElementById("magic");
const letterResult = document.getElementById("letters-result");

function vowelOne(letters) {
  let withoutVowels = "";
  const vowel = "aeiuoAEIUO";
  for (let i = 0; i < letters.length; i++) {
    if (vowel.includes(letters[i])) {
      withoutVowels += "1";
    } else {
      withoutVowels += "0";
    }
  }
  return withoutVowels;
}

btnMagic.addEventListener("click", () => {
  let lettersInputValue = lettersInput.value;
  // let letters = removeExtraSpaces(lettersInputValue).split(" ");
  let lettersConvert = vowelOne(lettersInputValue);
  letterResult.innerText = `${lettersInputValue} = ${lettersConvert}`;
});
