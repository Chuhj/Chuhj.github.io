const API_KEY = 'b4ecdaab18ca70de2ad2d6f669ef262a';

function getWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather');
      const temperature = data.main.temp;
      const city = data.name;
      weather.innerText = `${data.weather[0].main} / ${city} / ${temperature}`;
    });
}

function onGeoError() {
  alert('No weather');
}

navigator.geolocation.getCurrentPosition(getWeather, onGeoError);
