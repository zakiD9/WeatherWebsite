import { useEffect } from "react";
import Fore10cast from "../Components/10-dayForeCast/For10Cast";
import DayWeather from "../Components/DayWeatherCard/DayWeatherCard";
import HourlyForecast from "../Components/HourlyForcast/HourlyForcastComponent";
import UVIndexCard from "../Components/UvindexComponent";
import WindCard from "../Components/WindComponent";
import { useWeatherStore } from "../Stores/WeatherStore";
import SearchBar from "../Components/SearchComponent/SearchBar";

const Home = () => {
 const { city, setCity, weather, loading, fetchWeatherData } = useWeatherStore();

  useEffect(() => {
  fetchWeatherData(city);
}, [city]);


  if (loading || !weather) return <p className="text-white p-4">Loading...</p>;

   const uv = weather.current.uv;
  const wind = {
    speed: weather.current.wind_kph,
    gusts: weather.current.gust_kph
  };

  return (
    <div className="bg-black h-full flex p-5 space-x-5">
        <div className="flex flex-col">
        <SearchBar city={city} onCityChange={(newCity) => setCity(newCity)} />
         <DayWeather current={weather.current} />
         </div>
        <div className="w-7/12 flex flex-col space-y-5">
            <HourlyForecast hours={weather.forecast.forecastday[0].hour} />
            <Fore10cast days={weather.forecast.forecastday} />
            <div className="grid grid-cols-2 gap-4">
                <UVIndexCard value={uv} level="Moderate" until="16:00" />
                <WindCard speed={wind.speed} gusts={wind.gusts} />
            </div>
        </div>
    </div>
  )
};

export default Home;
