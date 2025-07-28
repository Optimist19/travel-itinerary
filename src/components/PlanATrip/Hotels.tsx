import {
  Bed,
  Calendar,
  MapPin,
  Star,
  WavesLadder,
  Wine,
  X
} from "lucide-react";
import Image from "next/image";
import React from "react";

import { Poppins } from "next/font/google";
import { hotelDetails } from "../../../data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

function Hotels() {
  return (
    <div
      className={` ${poppins.className} bg-[#344054] px-7 py-6 rounded-[4px]`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/svg/roof.svg"
            width={20}
            height={20}
            alt="a hotel icon-pic"
          />
          <h3 className="text-white">Hotels</h3>
        </div>
        <div className="">
          <button className="cursor-pointer w-[153px] h-[46px]   font-semibold text-[14px] tracking-[-4%] leading-[22px] bg-white text-[#1D2433] rounded-[4px] ">
            Add Hotels
          </button>
        </div>
      </div>
      <div className="grid gap-4 pt-8">
        {
          hotelDetails.map((obj) => {
            return (
              <div key={obj.id} className=" grid grid-cols-[96%_4%] ">
                <div className="grid grid-cols-[21%_79%] gap-2 px-3 py-4 rounded-tl-[4px] rounded-bl-[4px] bg-white">
                  <div className=" ">
                    <Image
                      width={50}
                      height={50}
                      src="/svg/showResort.svg"
                      alt="a beautiful-resort-picture"
                      className="w-[100%]"
                    />
                  </div>
                  <div>
                    <div className="flex pt-1 pb-2 justify-between bg-amber-700">
                      <div className="grid gap-1">
                        <p className="font-semibold text-[16px] tracking-[-2%] leading-[28px]">
                          Riviera Resort, Lekki
                        </p>

                        <p className="text-[#1D2433] font-medium text-[12px] tracking-[-1%] leading-[24px] w-[28vw]">
                          18, Kenneth Agbakuru Street, Off Access Bank Admiralty
                          Way, Lekki Phase1
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="text-[#0D6EFD] flex items-center gap-1 font-medium">
                            <MapPin className=" w-3 h-3" />
                            <p className="text-[12px] tracking-[-1%] leading-[24px]">
                              Show in map
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 stroke-yellow-500 fill-yellow-500" />
                            <p className="text-[#676E7E] text-[12px] tracking-[-1%] leading-[24px]">
                              8.5 (436)
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bed className="w-3 h-3" />
                            <p className="text-[#676E7E] text-[12px] tracking-[-1%] leading-[24px]">
                              Kind size room
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-1">
                        <div className="flex items-center ">
                          <Image
                            src="/svg/naira.svg"
                            width={16}
                            height={16}
                            alt="naira-pic"
                          />
                          <p className="text-[#1D2433] tracking-[-2%] font-semibold text-[22px] leading-[36px]">
                            123,450.00
                          </p>
                        </div>
                        <p className="text-[#1D2433] tracking-[-1%] font-semibold text-[12px] leading-[24px]">
                          Total Price: NGN 560,000
                        </p>
                        <p className="text-[#1D2433] tracking-[-1%] font-semibold text-[12px] leading-[24px]">
                          1 room x 10 nights incl. taxes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[#647995] border-[#E4E7EC] border-t-2 border-b-2 py-2">
                      <div className="flex items-center gap-2 tracking-[-1%] font-medium text-[14px] leading-[26px]">
                        <p className=" ">
                          Facilities:
                        </p>
                        <div className="flex items-center gap-1">
                          <WavesLadder className="w-[20px] h-[20px]"/>
                          <p>Pool</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Wine className="w-[20px] h-[20px]"/>
                          <p>Bar</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 tracking-[-1%] font-medium text-[14px] leading-[26px]">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-[20px] h-[20px]"/>
                          <p>Check In: 20-04-2024</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-[20px] h-[20px]" />
                          <p>Check Out: 29-04-2024</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between  py-2 text-[#0D6EFD] text-[13px] font-medium tracking-[-1%] leading-[26px]">
                      <div className="flex items-center gap-8">
                        <p>Flight details</p>
                        <p>Price details</p>
                      </div>
                      <p>Edit Price</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FBEAE9]  flex items-center justify-center  px-[1vw] cursor-pointer  rounded-tr-[4px] rounded-br-[4px]">
                  <X className="text-[#9E0A05]" />
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Hotels;
