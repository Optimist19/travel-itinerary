"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

type Inputs = {
  searchCity: string;
  arrival_date: string;
  departureDate: string;
  adults: number;
  roomQty: number;
};

function UserFlightInputs() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <div>
        <div className="pt-[19vh]">
          <div className="text-center flex flex-col justify-center items-center ">
            <div className="w-[67px] h-[67px] bg-black rounded-full">
              <img
                src="/svg/roof.svg"
                className="w-[100%]"
                alt="a hotel icon-pic"
              />
            </div>

            <h2
              className={`${poppins.className}  text-[64px] font-extrabold capitalize`}>
              Search For Hotels
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-4 pt-[4vh]">
            <div className="flex flex-wrap justify-center gap-4 max-w-[90vw]">
              <label className="flex flex-col gap-1">
                <input
                  className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer"
                  type="text"
                  placeholder="Search City"
                  {...register("searchCity", { required: true })}
                />
                {errors.searchCity && (
                  <span className="text-red-500 text-[8px]">
                    This field is required
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-1">
                <input
                  className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer"
                  type="date"
                  {...register("arrival_date", { required: true })}
                />
                {errors.arrival_date && (
                  <span className="text-red-500 text-[8px]">
                    This field is required
                  </span>
                )}
              </label>

              <label className="flex flex-col gap-1">
                <input
                  className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer"
                  type="date"
                  {...register("departureDate", { required: true })}
                />
                {errors.departureDate && (
                  <span className="text-red-500 text-[8px]">
                    This field is required
                  </span>
                )}
              </label>

              {/* Adults */}
              <label className="flex flex-col gap-1">
                <input
                  className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer"
                  type="number"
                  placeholder="Adults"
                  {...register("adults", { required: true, min: 1 })}
                />
                {errors.adults && (
                  <span className="text-red-500 text-[8px]">
                    Must be at least 1 adult
                  </span>
                )}
              </label>

              {/* Room Quantity */}
              <label className="flex flex-col gap-1">
                <input
                  className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer"
                  type="number"
                  placeholder="Room Quantity"
                  {...register("roomQty", { required: true, min: 1 })}
                />
                {errors.roomQty && (
                  <span className="text-red-500 text-[8px]">
                    Must be at least 1 room
                  </span>
                )}
              </label>
            </div>

            <div className="pt-[6vh]">
              <button
                type="submit"
                className={`${poppins.className} submit-btn text-[#6d6d6d] py-4 px-[5vw] rounded-full font-bold cursor-pointer hover:text-white transition ease-in`}>
                Book Now!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserFlightInputs;
