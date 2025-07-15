import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default async function fetchWeather(city: string) {
  try {
    const response = await axios.get("https://api.weatherapi.com/v1/forecast.json", {
      params: {
        key: API_KEY,
        q: city,
        days: 7,
        aqi: "no",
        alerts: "no",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
