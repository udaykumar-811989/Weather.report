const apiKey = "32bc08958052334a3cdd779dcd21dc7e"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("time").textContent = `Local time: ${new Date().toLocaleTimeString()}`;
    document.getElementById("temp").textContent = `${data.main.temp}°C`;
    document.getElementById("desc").textContent = data.weather[0].description;
    document.getElementById("wind").textContent = `${data.wind.speed} km/h`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("visibility").textContent = `${data.visibility / 1000} km`;
    document.getElementById("pressure").textContent = `${data.main.pressure} mb`;

    document.getElementById("weatherBox").style.display = "block";
  } catch (error) {
    alert("City not found or API error");
    console.error(error);
  }
}
