import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const destId = searchParams.get("dest_id");
  const searchType = searchParams.get("search_type");
  const arrivalDate = searchParams.get("arrival_date");
  const departureDate = searchParams.get("departure_date");
  const adults = searchParams.get("adults");
  const roomQty = searchParams.get("room_qty");

  if (
    !destId ||
    !searchType ||
    !arrivalDate ||
    !departureDate ||
    !adults ||
    !roomQty
  ) {
    return NextResponse.json(
      { error: "Missing required query parameters" },
      { status: 400 }
    );
  }

  try {
    const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${destId}&search_type=${searchType}&arrival_date=${arrivalDate}&departure_date=${departureDate}&adults=${adults}&room_qty=${roomQty}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com"
      }
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in hotels API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
