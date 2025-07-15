const Visibility = ({ value }: { value: number }) => {
  return (
    <div className="flex flex-col bg-[#2a2a2a] rounded-2xl p-4">
      <h2 className="text-gray-200">VISIBILITY</h2>
      <h1 className="text-gray-200 text-4xl">{value} km</h1>
    </div>
  );
};

export default Visibility;
