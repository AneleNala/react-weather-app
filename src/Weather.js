import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  

  function handleSubmit(event) {
    event.preventDefault();
    getWeather(city);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function getWeather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${props.apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <div className="Weather">
      <h1>WeatherApp</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} placeholder="Enter a city" id="search-city" name="city-weather" />
        <input type="submit" value="Search" />
      </form>
       {weather.temperature && (
        <div>
          <p>Temperature: {Math.round(weather.temperature)} Celsius</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Description:{weather.description}</p>
        </div>
      )}
      <footer>
        This is coded by Anele Nala, <a href="https://github.com/AneleNala/react-weather-app" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </footer>
    </div>
  );
}
