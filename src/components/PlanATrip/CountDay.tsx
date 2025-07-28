"use client";

import { Poppins } from "next/font/google";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
export default function Counday() {
  const [day, setDay] = useState(1);

  const incrementDay = () => {
    setDay((prevDay) => prevDay + 1);
  };

  const decrementDay = () => {
    setDay((prevDay) => Math.max(1, prevDay - 1));
  };

  return (
    <div className={`${poppins.className} flex items-center gap-4`}>
      <div className="bg-[#0A369D] text-white px-[8px] py-[4px] rounded-[4px] font-medium text-[11px] tracking-[-4%] leading-[22px]">
        Day {day}
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={incrementDay}
          className="w-4 h-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors border border-gray-300">
          <ChevronUp className="w-3 h-3 text-gray-600" />
        </button>

        <button
          onClick={decrementDay}
          className="w-4 h-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors border border-gray-300"
          aria-label="Decrease day">
          <ChevronDown className="w-3 h-3 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
