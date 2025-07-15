type UVIndexProps = {
  value: number; 
  level: string; 
  until: string; 
};

const UVIndexCard = ({ value, level, until }: UVIndexProps) => {
  return (
    <div className="bg-[#1e1e1e] rounded-xl p-4 w-full text-white transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-500/30">
      <h2 className="text-sm text-gray-400 mb-3">🌤️ UV INDEX</h2>
      <p className="text-4xl font-bold">{value}</p>
      <p className="text-sm text-gray-300">{level}</p>

      <div className="mt-4 h-2 w-full rounded-full bg-gray-700 overflow-hidden">
        <div
          className="h-full"
          style={{
            width: `${(value / 11) * 100}%`,
            background: "linear-gradient(to right, yellow, red, magenta)",
          }}
        />
      </div>

      <p className="text-xs text-gray-400 mt-2">Use sun protection until {until}</p>
    </div>
  );
};

export default UVIndexCard;
