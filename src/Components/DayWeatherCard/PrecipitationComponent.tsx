const Precipitation = ({ value }: { value: number }) => {
  return (
    <div className="flex flex-col bg-[#2a2a2a] rounded-2xl p-4">
      <h2 className="text-gray-200 uppercase">Precipitation</h2>
      <h1 className="text-gray-200 text-4xl">{value}"</h1>
      <h2 className="text-gray-400 text-sm">in last 24h</h2>
      <h3 className="text-gray-200 mt-6 text-sm">Chance of rain today</h3>
    </div>
  );
};

export default Precipitation;
