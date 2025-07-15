type WindProps = {
  speed: number;
  gusts: number;
};

const WindCard = ({ speed, gusts }: WindProps) => {
  return (
    <div className="bg-[#1e1e1e] rounded-xl p-4 w-full text-white flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-500/30">
      <h2 className="text-sm text-gray-400 mb-3">👁️ WIND</h2>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">{speed} <span className="text-sm">MPH</span></p>
          <p className="text-sm text-gray-300">Wind</p>

          <p className="mt-4 text-xl font-bold">{gusts} <span className="text-sm">MPH</span></p>
          <p className="text-sm text-gray-300">Gusts</p>
        </div>

        <div>
          <img
            src="Weather-app/src/assets/221772-P1X0W9-146.jpg"
            alt="Compass"
            className="w-16 h-16 opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default WindCard;
