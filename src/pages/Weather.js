import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState('New York'); // Default location
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const API_KEY = '825fc0cfbeda4589b0832321233010'; // Replace with your WeatherAPI key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [location]);

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-md border ">
      <h1 className="text-3xl text-center font-semibold">Weather App</h1>
      <input
        type="text"
        className="w-full px-4 py-2 mt-4 rounded-md"
        placeholder="Enter location"
        onChange={(e) => setLocation(e.target.value)}
      />
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{weather.location.name}, {weather.location.country}</h2>
          <p className="text-lg">{weather.current.condition.text}</p>
          <p className="text-2xl font-bold">{weather.current.temp_c}°C | {weather.current.temp_f}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
