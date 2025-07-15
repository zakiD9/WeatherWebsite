import For10Card from "./for10card";

function Fore10cast({ days }: { days: any[] }) {
  return (
    <div className="p-4 rounded-xl w-full bg-[#1e1e1e] transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-500/30">
      <h1 className="uppercase text-gray-200">10-day forecast</h1>
      <hr className="mt-3 text-gray-200" />
     <div className="flex gap-3 mt-5 overflow-x-auto pr-2 scrollbar-none">
        {days.map((day, index) => (
          <For10Card
            key={index}
            date={day.date}
            max={day.day.maxtemp_c}
            min={day.day.mintemp_c}
            icon={day.day.condition.icon}
            isToday={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
export default Fore10cast;
