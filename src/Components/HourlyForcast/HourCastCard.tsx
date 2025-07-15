import { motion } from "framer-motion";



const HourlyCastCard = ({
  time,
  temp,
  icon,
  isNow
}: {
  time: string;
  temp: number;
  icon: string;
  isNow: boolean;
})=>{
   const displayTime = isNow ? "Now" : time.split(" ")[1];
    return(
        <div className="min-w-[110px] bg-[#2a2a2a] p-2 rounded-lg text-center text-white"> 
      <h1 className="text-sm text-gray-200">{displayTime}</h1>
      <h2 className="text-xl font-bold">{temp}°</h2>
      <img src={`https:${icon}`} alt="icon" className="mx-auto w-10 h-10" />
        </div>
    )
}

export default HourlyCastCard;