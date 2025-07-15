import HourlyCastCard from "./HourCastCard";

interface Hour {
  time: string;
  temp_c: number;
  condition: {
    icon: string;
    text: string;
  };
}


function HourlyForecast({ hours }: { hours: Hour[] }) {
    const now = new Date();
const currentHour = now.getHours();

const upcomingHours = hours.filter((hourObj) => {
  const hour = parseInt(hourObj.time.split(" ")[1].split(":")[0], 10);
  return hour >= currentHour;
});

  return (
    <div className="p-4 rounded-xl w-full bg-[#1e1e1e] transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-500/30">
      <div className="flex">
        <h1 className="uppercase text-gray-200">Hourly forecast</h1>
      </div>
      <hr className="mt-3 text-gray-200"/>
     <div className="flex gap-3 mt-5 overflow-x-auto pr-2 scrollbar-none">
       {upcomingHours.map((hour, idx) => {
  const hourValue = parseInt(hour.time.split(" ")[1].split(":")[0], 10);
  const isNow = hourValue === currentHour;

  return (
    <HourlyCastCard
      key={idx}
      time={hour.time}
      temp={hour.temp_c}
      icon={hour.condition.icon}
      isNow={isNow}
    />
  );
})}
      </div>
    </div>
  );
}
export default HourlyForecast;