"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Poppins } from "next/font/google";
import { LoaderCircle, X } from "lucide-react";
import { DataEntity, HotelsResponse } from "../../../data";

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

interface toggleHotelsModalFtnType {
  toggleHotelsModalFtn: (data: string) => void;
  setHotels: (data: HotelsResponse) => void;
}

function UserHotelInputs({
  toggleHotelsModalFtn,
  setHotels
}: toggleHotelsModalFtnType) {
  const [suggestions, setSuggestions] = useState<DataEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [destId, setDestId] = useState<string>("");
  const [typeSearch, setTypeSearch] = useState<string>("");
  const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<Inputs>();

  const searchCityValue = watch("searchCity");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchQuery(searchCityValue || "");
    }, 500); 

    return () => {
      clearTimeout(timerId);
    };
  }, [searchCityValue]);

  // Fetch suggestions when searchQuery changes
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.trim().length < 2) {
        setSuggestions([]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/searchdestid?query=${encodeURIComponent(searchQuery)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch suggestions");
        }

        const data = await response.json();
        setSuggestions(data.data || data || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, [searchQuery]);

  const handleSelectSuggestion = (suggestion: DataEntity) => {
    setValue("searchCity", suggestion.name);
    setSuggestions([]);
    setShowSuggestions(false);
    setDestId(suggestion.dest_id);
    setTypeSearch(suggestion.search_type);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("Form submitted:", data);

    const queryParams = new URLSearchParams({
      dest_id: destId,
      search_type: typeSearch,
      arrival_date: data.arrival_date,
      departure_date: data.departureDate,
      adults: String(data.adults),
      room_qty: String(data.roomQty)
    });

    setIsBtnLoading(true);

    try {
      const response = await fetch(`/api/hotels?${queryParams.toString()}`);
      const res = await response.json();
      console.log(res?.data, "reeees.data");
      console.log(res?.data?.hotels, "hotels.data");
      setHotels(res?.data.hotels || data || []);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setSuggestions([]);
    } finally {
      setIsBtnLoading(false);
      setIsLoading(false);
      toggleHotelsModalFtn("Hotels");
    }
  };

  // console.log(destId, "dest_id");
  return (
    <div
      className={`${poppins.className} fixed z-20 top-0 right-0 left-0 bottom-0 bg-black/35 flex justify-center items-center flex-col`}>
      <div className="bg-white rounded-[4px] px-[6%] py-[7%] relative">
        <div className="text-center flex flex-col justify-center items-center">
          <div className="w-[67px] h-[67px] bg-black rounded-full">
            <img
              src="/svg/roof.svg"
              className="w-[100%]"
              alt="a hotel icon-pic"
            />
          </div>

          <h2 className="text-[64px] font-extrabold capitalize">
            Search For Hotels
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 pt-[4vh]">
          <div className="flex flex-wrap justify-center gap-4 max-w-[90vw]">
            {/* Search City with suggestions dropdown */}
            <div className="relative flex flex-col gap-1">
              <input
                className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer border border-gray-300"
                type="text"
                placeholder="Search City"
                {...register("searchCity", { required: true })}
                autoComplete="off"
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              {errors.searchCity && (
                <span className="text-red-500 text-[8px]">
                  This field is required
                </span>
              )}

              {/* Suggestions dropdown */}
              {showSuggestions && searchQuery && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-10 mt-1 max-h-60 overflow-y-auto">
                  {isLoading ? (
                    <div className="p-2 text-center text-gray-500">
                      Loading...
                    </div>
                  ) : suggestions.length > 0 ? (
                    suggestions.map((suggestion) => (
                      <div
                        key={suggestion.dest_id}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onMouseDown={() => handleSelectSuggestion(suggestion)}>
                        {suggestion.name}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-center text-gray-500">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Other form fields remain the same */}
            <label className="flex flex-col gap-1">
              <input
                className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer border border-gray-300"
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
                className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer border border-gray-300"
                type="date"
                {...register("departureDate", { required: true })}
              />
              {errors.departureDate && (
                <span className="text-red-500 text-[8px]">
                  This field is required
                </span>
              )}
            </label>

            <label className="flex flex-col gap-1">
              <input
                className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer border border-gray-300"
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

            <label className="flex flex-col gap-1">
              <input
                className="bg-white outline-none hover:ring-1 ring-[#0D6EFD] p-2 rounded cursor-pointer border border-gray-300"
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
              className="bg-[#0D6EFD]   w-[120px] h-[40px] rounded-[4px] font-medium text-[12px] leading-[22px] tracking-[-0.5px] text-white cursor-pointer">
              {isBtnLoading ? (
                <div className="flex justify-center items-center">
                  <LoaderCircle className="animate-spin" />
                </div>
              ) : (
                "Search Now!"
              )}
            </button>
          </div>
        </form>

        <div
          onClick={() => toggleHotelsModalFtn("Hotels")}
          className="absolute top-[4vh] right-[3vw] cursor-pointer">
          <X />
        </div>
      </div>
    </div>
  );
}

export default UserHotelInputs;
