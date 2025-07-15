import { useState } from "react";
import { Dialog } from "@headlessui/react";

const countries = {
  Algeria: ["Algiers", "Oran", "Constantine"],
  Morocco: ["Casablanca", "Rabat", "Marrakech"],
  France: ["Paris", "Lyon", "Marseille"],
};

const CityPickerModal = ({
  open,
  onClose,
  onCitySelect,
}: {
  open: boolean;
  onClose: () => void;
  onCitySelect: (city: string) => void;
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleCityClick = (city: string) => {
    onCitySelect(city); 
    onClose(); 
    setSelectedCountry(null); 
  };

  return (
    <Dialog open={open} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="bg-[#1e1e1e] text-white p-6 rounded-xl max-w-md w-full z-50">
        <Dialog.Title className="text-lg font-bold mb-4">
          {selectedCountry ? `Select a city in ${selectedCountry}` : "Select a country"}
        </Dialog.Title>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {selectedCountry && countries[selectedCountry]
  ? countries[selectedCountry].map((city) => (
      <button
        key={city}
        onClick={() => handleCityClick(city)}
        className="w-full text-left px-4 py-2 rounded hover:bg-[#2a2a2a]"
      >
        {city}
      </button>
    ))
  : Object.keys(countries).map((country) => (
      <button
        key={country}
        onClick={() => setSelectedCountry(country)}
        className="w-full text-left px-4 py-2 rounded hover:bg-[#2a2a2a]"
      >
        {country}
      </button>
    ))}

        </div>
      </div>
    </Dialog>
  );
};

export default CityPickerModal;
