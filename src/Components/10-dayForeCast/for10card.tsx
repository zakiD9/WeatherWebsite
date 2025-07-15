const For10Card = ({
  date,
  max,
  min,
  icon,
  isToday
}: {
  date: string;
  max: number;
  min: number;
  icon: string;
  isToday: boolean;
}) => {
  const displayDate = new Date(date);
  const formattedDate = `${displayDate.getDate().toString().padStart(2, '0')}/${(displayDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}`;

  return (
    <div className="min-w-[110px] bg-[#2a2a2a] p-2 rounded-lg text-center text-white">
      <h1 className="text-sm text-gray-300">{isToday ? "Today" : displayDate.toLocaleDateString('en-US', { weekday: 'short' })}</h1>
      <h2 className="text-xs text-gray-400">{formattedDate}</h2>
      <img src={`https:${icon}`} alt="weather" className="w-10 h-10 mx-auto" />
      <h2 className="text-sm font-bold text-white">{Math.round(max)}° / <span className="text-gray-400">{Math.round(min)}°</span></h2>
    </div>
  );
};

export default For10Card;
