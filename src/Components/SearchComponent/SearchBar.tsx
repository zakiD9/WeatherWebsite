import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import CityPickerModal from "./SearchModal";


const SearchBar = ({
  city,
  onCityChange,
}: {
  city: string;
  onCityChange: (city: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center gap-2 bg-[#2a2a2a] text-white px-4 py-2 rounded-xl cursor-pointer hover:shadow-md transition"
        onClick={() => setOpen(true)}
      >
        <FaMapMarkerAlt className="text-red-400" />
        <span>{city}</span>
      </div>

      <CityPickerModal
        open={open}
        onClose={() => setOpen(false)}
        onCitySelect={(city) => {
          onCityChange(city);
        }}
      />
    </>
  );
};

export default SearchBar;
