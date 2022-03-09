async function getWeather() {
  let cityName = document.querySelector(".search-bar").value.trim();
  console.log({ cityName });
  const apiKey = "dbada8d9e2a8bcd08cd3e9cf8efebe93";
  try {
    const getApi = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    let weatherData = getApi.data;
    localStorage.setItem("item", JSON.stringify(weatherData));
    console.log(weatherData);
    let text = `
                
                    <h2 class="city">Weather in ${cityName}</h2>
                    <div class="temp">${weatherData.main.temp}°C</div>
                    <img class="image" src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="" class="icon">
                    <div class="description">${weatherData.weather[0].description}</div>
                    <div class="humidity">Humidity: ${weatherData.main.humidity}%</div>
                    <div class="wind">Wind speed: ${weatherData.wind.speed} km/h</div>
                
            `;
    let middleSection = document.getElementById("weather_ditails");
    middleSection.innerHTML = text;
  } catch (error) {
    console.log(error);
  }
}

let searchButton = document.querySelector(".search");
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  let cityName = document.querySelector(".search-bar").value.trim();

  let middleSection = document.getElementById("weather_ditails");
  if (cityName) {
    getWeather();
    let pageBody = document.querySelector("body");
    pageBody.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?landscape=${cityName.toUpperCase()}")`;
    
  } else {
    middleSection.innerHTML = `<p class= "error">Add a city</p>`;
  }
});

let input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    let cityName = document.querySelector(".search-bar").value.trim();

    let middleSection = document.getElementById("weather_ditails");
    if (cityName) {
      getWeather();
      let pageBody = document.querySelector("body");
      pageBody.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?landscape=${cityName.toUpperCase()}")`;
      
    } else {
      middleSection.innerHTML = `<p class= "error">Add a city</p>`;
    }
  }
});
