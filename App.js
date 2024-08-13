import React, { useState } from 'react';
import './App.css';

const mockWeatherData = {
  city: 'Noida',
  weather: {
    description: 'Cloudy',
    temperature: 32,
    humidity: 71,
    windSpeed: 19.4,
  },
};

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = (city) => {
    if (city.toLowerCase() === mockWeatherData.city.toLowerCase()) {
      setWeather(mockWeatherData.weather);
    } else {
      setWeather(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="weather-app">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather ? (
        <div className="weather-details">
          <h2>{mockWeatherData.city}</h2>
          <p>{weather.description}</p>
          <p>Temperature: {weather.temperature} °C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.windSpeed} km/h</p>
        </div>
      ) : (
        city && <p>Planning to go out!?</p>
      )}
    </div>
  );
}

export default WeatherApp;