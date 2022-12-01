const API_KEY = "2d96005slFCxdVgRl064tCb7gAGj5Slo";
const citys = {
  lviv: 324561,
  kyiv: 324505,
  kharkiv: 323903,
  chernihiv: 322162,
  odesa: 325343,
  mariupol: 323037,
  poltava: 325523,
  zhytomyr: 326609,
  cherkasy: 321985,
  london: 328328,
  warsaw: 274663,
  newYork: 349727,
};
const cityInput = document.getElementById("city-input");
const forecastResult = document.getElementById("forecast-result");
const searchBtn = document.getElementById("add-forecast");
function createForecast(x) {
  x.DailyForecasts.forEach((forecast) => {
    const dayItem = document.createElement("div");
    dayItem.classList.add("day-item");
    const dateItem = document.createElement("h3");
    dateItem.classList.add("forecast-date");
    const forecastDate = new Date(forecast.Date);
    dateItem.innerText = `${forecastDate.getDate()}.${forecastDate.getMonth()}`;

    const img = new Image(50, 50);
    img.classList.add("weather-icon");
    if (
      forecast.Day.Icon === 1 ||
      forecast.Day.Icon === 2 ||
      forecast.Day.Icon === 3 ||
      forecast.Day.Icon === 4 ||
      forecast.Day.Icon === 5
    ) {
      img.src =
        "https://developer.accuweather.com/sites/default/files/01-s.png";
    } else if (
      forecast.Day.Icon === 6 ||
      forecast.Day.Icon === 7 ||
      forecast.Day.Icon === 8 ||
      forecast.Day.Icon === 11
    ) {
      img.src =
        "https://developer.accuweather.com/sites/default/files/07-s.png";
    } else if (
      forecast.Day.Icon === 12 ||
      forecast.Day.Icon === 13 ||
      forecast.Day.Icon === 14 ||
      forecast.Day.Icon === 15 ||
      forecast.Day.Icon === 16 ||
      forecast.Day.Icon === 17 ||
      forecast.Day.Icon === 18
    ) {
      img.src =
        "https://developer.accuweather.com/sites/default/files/12-s.png";
    } else if (
      forecast.Day.Icon === 19 ||
      forecast.Day.Icon === 20 ||
      forecast.Day.Icon === 21 ||
      forecast.Day.Icon === 22 ||
      forecast.Day.Icon === 23 ||
      forecast.Day.Icon === 26 ||
      forecast.Day.Icon === 29
    ) {
      img.src =
        "https://developer.accuweather.com/sites/default/files/22-s.png";
    }
    const temp = document.createElement("div");
    temp.classList.add("temp-div");
    const minTemp = document.createElement("p");
    minTemp.classList.add("min-temp");
    minTemp.innerText = `${forecast.Temperature.Minimum.Value.toFixed(0)}`;
    const maxTemp = document.createElement("p");
    maxTemp.classList.add("max-temp");
    maxTemp.innerText = `${forecast.Temperature.Maximum.Value.toFixed(0)}`;
    forecastResult.appendChild(dayItem);
    dayItem.appendChild(dateItem);
    dayItem.appendChild(img);
    dayItem.appendChild(temp);
    temp.appendChild(maxTemp);
    temp.appendChild(minTemp);
  });
}
function addForecast(cityCode) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("loadend", () => {
    createForecast(JSON.parse(xhr.response));
  });
  xhr.open(
    "GET",
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${API_KEY}&metric=true`
  );
  xhr.send();
}
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.toLowerCase();
  const cityCode = citys[city];
  if (!cityCode) {
    forecastResult.innerText = "Unfortunately entered city are not in the list";
  } else {
    addForecast(cityCode);
  }
});
