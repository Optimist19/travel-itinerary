"use client";

import Image from "next/image";
import React, { useState } from "react";
import { addActivities, HotelsResponse } from "../../../data";
import { Poppins } from "next/font/google";
import { Ellipsis, Settings } from "lucide-react";
import Flights from "./Flights";
import Hotels from "./Hotels";
import Activities from "./Activities";
// import UserInputs from "../form/UserHotelInputs";
import UserHotelInputs from "../form/UserHotelInputs";
// import UserFlightInputs from "../form/UserFlightInputs";
// import UserActivitiesInputs from "../form/UserActivitiesInputs";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
function PlanATrip() {
  const [toggleHotelsModal, setToggleHotelsModal] = useState<boolean>(false);
  const [toggleFlightsModal, setToggleFlightsModal] = useState<boolean>(false);
  const [toggleActivitiesModal, setToggleActivitiesModal] =
    useState<boolean>(false);
      const [hotels, setHotels] = useState<HotelsResponse>([]);

      console.log(hotels, "yes")

  function toggleHotelsModalFtn(title: string) {
    if (title === "Hotels") {
      console.log("first.");
      setToggleHotelsModal(!toggleHotelsModal);
    }
  }

  function toggleFlightsModalFtn(title: string) {
    if (title === "Flights") {
      console.log("first..");
      setToggleFlightsModal(!toggleFlightsModal);
    }
  }

  function toggleActivitiesModalFtn(title: string) {
    if (title === "Activities") {
      console.log("first...");
      setToggleActivitiesModal(!toggleActivitiesModal);
    }
  }

  return (
    <main className="px-[2vw] py-4 bg-white relative">
      <div className={` ${poppins.className} `}>
        <div className="">
          <img src="/svg/sky.svg" alt="sky-pic" />
        </div>
        <div className="cursor-pointer">
          <Image
            src="/svg/arrow.svg"
            alt="arrow-pic"
            width={30}
            height={30}
            className="absolute top-[6vh] left-[3.5vw]"
          />
        </div>
      </div>

      <div className="flex items-center justify-between  pt-3">
        <div>
          <div className="flex items-center gap-1 text-[12px] text-[#7A4504] w-[16vw] bg-[#FEF4E6] px-2 py-2 font-medium tracking-[-4%] leading-[22px]">
            <Image
              src="/svg/CalendarBlank.svg"
              alt="calendar-pic"
              width={16}
              height={16}
              className=""
            />
            <p>21 March 2024</p>
            <Image
              src="/svg/ArrowRight.svg"
              alt="Arror-right-pic"
              width={16}
              height={16}
              className=""
            />
            <p>21 April 2024</p>
          </div>
          <div className="">
            <p className="font-semibold text-[20px] tracking-[-2%] leading-[32px]">
              Bahamas Family Trip
            </p>
            <div
              className="text-[13px] font-medium text-[#676E7E] flex items-center gap-2 tracking-[-4%] leading-[24px]
">
              <p>New York, United States of America </p>
              <div className="h-5 bg-[#D0D5DD] w-[3px]"></div>
              <p>Solo Trip</p>
            </div>
            <div className="absolute right-0 bottom-[34vh]">
              <div className="flex items-center  p-6">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden  ">
                    <Image
                      src="/svg/box.svg"
                      alt="User profile"
                      width={28}
                      height={28}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="h-1 w-[4vw] bg-[#E7F0FF]"></div>
                <div className="w-10 h-10 bg-white rounded-full ring-2 ring-[#E7F0FF] shadow-sm flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                  <Settings className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/svg/supplementary buttons.svg"
            alt="add-button"
            width={100}
            height={80}
            className="cursor-pointer"
          />
          <Ellipsis className="cursor-pointer" />
        </div>
      </div>

      <div className="tracking-[-4%] flex items-center gap-3 pt-[3vh]">
        {addActivities.map((activity) => (
          <div
            key={activity.id}
            className={`
        ${
          activity.id === 1
            ? "bg-[#000031]"
            : activity.id === 2
            ? "bg-[#E7F0FF]"
            : activity.id === 3
            ? "bg-[#0D6EFD]"
            : "bg-white"
        }
        w-[270px] h-[193px] grid gap-2 p-4 rounded-md
      `}>
            <p
              className={`text-[14px] leading-[24px]  font-semibold ${
                activity.id === 1
                  ? "text-white"
                  : activity.id === 2
                  ? "text-black"
                  : activity.id === 3
                  ? "text-white"
                  : ""
              } `}>
              {activity.title}
            </p>
            <p
              className={`text-[11px] font-normal ${
                activity.id === 1
                  ? "text-white"
                  : activity.id === 2
                  ? "text-black"
                  : activity.id === 3
                  ? "text-white"
                  : ""
              } leading-[22px] `}>
              {activity.description}
            </p>
            <button
              className={` 
			${
        activity.id === 1
          ? "bg-[#0D6EFD]"
          : activity.id === 2
          ? "bg-[#0D6EFD]"
          : activity.id === 3
          ? "bg-white"
          : "bg-white"
      }    
			${
        activity.id === 1
          ? "hover:bg-white"
          : activity.id === 2
          ? "hover:bg-white"
          : activity.id === 3
          ? "hover:bg-[#0D6EFD]"
          : ""
      }    
			${
        activity.id === 1
          ? "hover:text-[#0D6EFD]"
          : activity.id === 2
          ? "hover:text-[#0D6EFD]"
          : activity.id === 3
          ? "hover:text-white"
          : ""
      }    
			${
        activity.id === 1
          ? "text-white"
          : activity.id === 2
          ? "text-white"
          : activity.id === 3
          ? "text-[#0D6EFD]"
          : ""
      }    
				  
				 
				 
				 text-[14px] font-medium w-[242px] px-[24px] py-[12px] cursor-pointer leading-[22px]  rounded-[4px] mt-4`}
              onClick={() => {
                toggleHotelsModalFtn(activity.title);
                toggleFlightsModalFtn(activity.title);
                toggleActivitiesModalFtn(activity.title);
              }}>
              {activity.action}
            </button>
          </div>
        ))}
      </div>
      <div className="grid gap-3">
        <div>
          <h1 className="tracking-[-2%] font-semibold text-[17px] text-[#1D2433] pt-[6vh] leading-[28px] ">
            Trip itineraries
          </h1>
          <p className="text-[14px] text-[#647995] tracking-[-1%] pb-[6vh]">
            Your trip itineraries are placed here
          </p>
          <Flights />
        </div>

        <Hotels />
        <Activities />
      </div>

      <div>
        {toggleHotelsModal && <UserHotelInputs toggleHotelsModalFtn={toggleHotelsModalFtn} setHotels={setHotels} />}
        {/* {toggleFlightsModal && <UserFlightInputs />}
        {toggleActivitiesModal && <UserActivitiesInputs />} */}
      </div>
    </main>
  );
}

export default PlanATrip;
