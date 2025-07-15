import FeelsLike from "./FeelsLikeComponent";
import Humidity from "./HumidityComponent";
import Precipitation from "./PrecipitationComponent";
import Visibility from "./VisibilityComponent";

const DayWeather = ({ current }: { current: any }) => {
  const temp = Math.round(current.temp_c);
  const condition = current.condition.text;
  const feelsLike = Math.round(current.feelslike_c);
  const humidity = current.humidity;
  const precip = current.precip_mm;
  const visibility = current.vis_km;

  return (
    <div className="mt-5 bg-[#1e1e1e] h-screen py-8 px-5 rounded-3xl overflow-y-auto transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-500/30">
      <div className="flex flex-col items-center space-y-5 mt-16">
        <h1 className="text-white text-8xl">{temp}°</h1>
        <h2 className="text-white text-4xl">{condition}</h2>
        <h3 className="text-white text-center text-sm">
          Today is a good day, just keep smiling. You'll be good inshallah ✨
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-20">
        <FeelsLike value={feelsLike} />
        <Precipitation value={precip} />
        <Visibility value={visibility} />
        <Humidity value={humidity} />
      </div>
    </div>
  );
};

export default DayWeather;
