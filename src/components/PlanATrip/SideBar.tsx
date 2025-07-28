import Image from "next/image";
import React from "react";
import { sideBarElement } from "../../../data";
import { Poppins } from "next/font/google";
import { ChevronDown, ChevronUp } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
function SideBar() {
  return (
    <div className={`${poppins.className} bg-white w-[270px] h-[700px] p-4 grid gap-[8vh]`}>
      <ul className="grid gap-4 ">
        {sideBarElement.map((obj) => {
          return (
            <li
              key={obj.title}
              className="text-[#647995] text-[13px] tracking-[-1%] leading-[24px] font-medium flex items-center gap-2 cursor-pointer px-2 rounded-[4px] py-2 hover:bg-[#F0F2F5]">
              <Image src={obj.icon} width={15} height={15} alt={obj.title} />
              <span>{obj.title}</span>
            </li>
          );
        })}
      </ul>

      <div className="text-[#647995] text-[10px] tracking-[-1%] leading-[24px] font-medium flex items-center gap-2 cursor-pointer px-2 rounded-[4px] py-2 h-[56px] bg-[#F0F2F5]">
        <div className="flex items-center gap-2">
          <div className="bg-[#0D6EFD] rounded-[4px]h-[30xp] w-[30px] p-2">
            <Image
              src="/svg/Go.svg"
              width={20}
              height={20}
              alt="web-logo"
              className="w-full"
            />
          </div>
          <p>Personal Account</p>
        </div>

        <div>
          <ChevronUp className="w-3 h-3 text-gray-600" />

          <ChevronDown className="w-3 h-3 text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
