import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "49e40408653bd12bd866616e0148bd27";
  const CITY = "Mumbai";

  const fetchWeather = async () => {
    try{
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
      );

      if(!response.ok){
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message || "Something went Wrong");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchWeather();

    // Auto-refresh every 5 minutes (300000ms)
    const interval = setInterval(fetchWeather, 300000);

    return() => clearInterval(interval);
  }, []);

  // Update document title with current temperature

  useEffect(() => {
    if(weather) {
      document.title = `Temp: ${weather.main.temp}°C`;
    }
  },[weather]);


  return (
    <>
      <div>
        <h1>Weather Dashbord</h1>

        {
          loading && (
            <>
            <h3>Loading weather...</h3>
            <div></div>
            </>
          )
        }

        {/* Error Message  */}

          {error && <h3>{error}</h3> }

          {!loading && weather && (
            <div>
              <h2>{weather.name}</h2>
              <p>Temperature: {weather.main.temp}</p>
              <p>Description: {weather.weather[0].description}</p>
            </div>
          )}


      </div>
    </>
  )
}

export default App
