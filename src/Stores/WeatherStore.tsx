import { create } from 'zustand';
import fetchWeather from '../Services/WeatherService';

interface WeatherData {
  current: any;
  forecast: any;
}

interface WeatherStore {
  city: string;
  weather: WeatherData | null;
  loading: boolean;
  setCity: (city: string) => void;
  fetchWeatherData: (city: string) => Promise<void>;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  city: "Algiers", 
  weather: null,
  loading: true,

  setCity: (city) => set({ city }),

  fetchWeatherData: async (city: string) => {
    try {
      set({ loading: true });
      const data = await fetchWeather(city);
      set({
        weather: { current: data.current, forecast: data.forecast },
        loading: false,
        city, 
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
      set({ loading: false });
    }
  },
}));
