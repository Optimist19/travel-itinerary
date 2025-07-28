import Image from "next/image";
import React from "react";

function ActivitiesRequest() {
  return (
    <div className="bg-[#0054E4] px-4 pt-3 pb-5  rounded-[4px]">
      <div className="flex items-center py-2 gap-2 ">
        <Image
          src="/svg/RoadHorizon.svg"
          width={17}
          height={17}
          alt="plane-pic"
        />
        <h2 className="font-semibold text-[15px] tracking-[-4%] text-white leading-[26px]">
          Activities
        </h2>
      </div>
      <div className=" w-[100%] rounded-[4px] bg-white">
        <div className="flex flex-col gap-2 items-center justify-center  h-[274px]">
          <Image
            src="/svg/airplane1.svg"
            width={20}
            height={20}
            alt="aeroplan-pic"
            className="w-[100px] h-[52px]"
          />
          <p className="text-[#1D2433] tracking-[-1%] text-[11px] leading-[22px] font-medium">
            No Request Yet
          </p>
          <button className="bg-[#0D6EFD] py-[12px] px-[24px] rounded-[4px] font-medium text-[11px] leading-[22px] tracking-[-0.5px] text-white cursor-pointer">
            Add Activities
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesRequest;
