const FeelsLike = ({ value }: { value: number }) => {
  return (
    <div className="flex flex-col bg-[#2a2a2a] rounded-2xl p-4">
      <h2 className="text-gray-200">FEELS LIKE</h2>
      <h1 className="text-gray-200 text-4xl">{value}°</h1>
      <h3 className="text-gray-200 mt-10 text-sm">Humidity is making it feel warmer</h3>
    </div>
  );
};

export default FeelsLike;
