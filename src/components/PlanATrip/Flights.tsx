import Image from "next/image";
import React from "react";
import { flightDetails, FlightDetailsType } from "../../../data";
import {
  Clapperboard,
  Luggage,
  PlaneLanding,
  PlaneTakeoff,
  Usb,
  Utensils,
  X
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});



function Flights() {
  return (
    <div>
      <div
        className={`${poppins.className} bg-[#F0F2F5] pb-[5vh] pt-[3vh] px-[2vw] rounded-[4px]`}>
        <div className="flex items-center justify-between pb-[2vh]">
          <div className="flex items-center py-2 gap-2">
            <Image
              src="/svg/AirplaneInFlight.svg"
              width={17}
              height={17}
              alt="plane-pic"
            />
            <h2 className="font-semibold text-[15px] tracking-[-4%] text-[#1D2433] leading-[26px]">
              Flights
            </h2>
          </div>
          <button className="cursor-pointer w-[153px] h-[46px]  font-semibold text-[14px] tracking-[-4%] leading-[22px] bg-white text-[#0D6EFD] rounded-[4px]">
            Add Flights
          </button>
        </div>
        <div className="flex flex-col pt-3 gap-5">
          {flightDetails.map((obj: FlightDetailsType) => {
            return (
              <div key={obj.id} className="flex bg-white  rounded-[4px]">
                <div className="  flex-1">
                  <div className="grid grid-cols-[24%_11%_33%_10%_19%] py-4 ">
                    <div className="flex items-center bg-amber-200 gap-3 py-1 px-4">
                      <Image
                        src="/svg/american_airlines_symbol.svg.svg"
                        alt="plane-tail-pic"
                        width={20}
                        height={20}
                      />
                      <div className="flex flex-col gap-2 ">
                        <p className="text-[16px] font-bold text-[#1D2433] tracking-[-2%] leading-[28px]">
                          {obj.airline}
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="text-[12px] leading-[24px] tracking-[-4%] text-[#676E7E] font-medium">
                            {obj.seatCode}{" "}
                          </p>
                          <div className="w-[3px] h-[3px] rounded-full bg-[#667185]"></div>
                          <button className="py-[4px] font-medium tracking-[-4%]   px-[8px] bg-[#0A369D] text-white text-[12px] leading-[22px] rounded-[4px]">
                            {obj.class}{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-200 px-3 text-right flex flex-col gap-2 py-1">
                      <p className="text-[#1D2433] text-[19px] font-medium leading-[32px] tracking-[-2%]">
                        {obj.flightTime}{" "}
                      </p>
                      <p className="text-[#676E7E] tracking-[-4%] leading-[22px] text-[12px] font-medium">
                        {obj.flightDate}{" "}
                      </p>
                    </div>

                    <div className=" bg-red-500 flex flex-col gap-2 px-[2vw] py-1">
                      <div className="flex items-center gap-[2vw]">
                        <PlaneTakeoff />
                        <p className="text-[13px] text-[#676E7E] leading-[24px] tracking-[-4%] font-medium">
                          Duration: {obj.flightDuration}
                        </p>
                        <PlaneLanding/>
                      </div>
                      <div>
                        <div className="w-[80%] flex items-center justify-center">
                          <div className="w-[97%] max-w-md h-2 bg-[#E7F0FF] rounded-full relative">
                            <div className="absolute left-1/3 w-1/3 h-2 bg-[#0D6EFD] rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[4.5vw] text-[14px]">
                        {" "}
                        <p className="text-[#1D2433] text-[14px] font-semibold leading-[24px] tracking-[-4%]">
                          {obj.from}
                        </p>
                        <p className="text-[13px] font-medium leading-[24px] tracking-[-4%] text-[#676E7E] ">
                          Direct
                        </p>
                        <p className="text-[#1D2433] text-[14px] font-semibold leading-[24px] tracking-[-4%]">
                          {obj.to}
                        </p>{" "}
                      </div>
                    </div>

                    <div className="bg-purple-400 py-1">
                      <p className="text-[#1D2433] text-[19px] font-medium leading-[32px] tracking-[-2%]">
                        {obj.flightDateArrival}{" "}
                      </p>
                      <p className="text-[#676E7E] tracking-[-4%] leading-[22px] text-[12px] font-medium">
                        {obj.flightDateArrival}{" "}
                      </p>
                    </div>

                    <div className="flex items-center bg-purple-800 justify-center gap-1 py-1">
                      <Image
                        src="/svg/naira.svg"
                        width={20}
                        height={20}
                        alt="naira-pic"
                      />
                      <p className="text-[#1D2433] tracking-[-2%] font-semibold text-[22px] leading-[36px]">
                        {obj.amount}{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-[#E4E7EC] border-t-2 border-b-2 px-4 py-4 text-[#647995] tracking-[-1%] font-medium text-[12px] leading-[26px]">
                    <p>Facilities: </p>
                    <div className="flex items-center gap-1">
                      <Luggage size={16} />

                      <p>
                        Baggage: {obj.baggage}, Cabin Baggage:{" "}
                        {obj.cabinBaggage}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clapperboard size={16} />
                      <p>{obj.media}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Utensils size={16} />
                      <p>{obj.meal}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Usb size={16} />

                      <p>{obj.port}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-4 py-5 text-[#0D6EFD] text-[13px] font-medium tracking-[-1%] leading-[26px]">
                    <div className="flex items-center gap-8">
                      <p>Flight details</p>
                      <p>Price details</p>
                    </div>
                    <p>Edit Price</p>
                  </div>
                </div>
                <div className="bg-[#FBEAE9]  flex items-center justify-center  px-[1vw] cursor-pointer rounded-tr-[4px] rounded-br-[4px]">
                  <X className="text-[#9E0A05]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Flights;
