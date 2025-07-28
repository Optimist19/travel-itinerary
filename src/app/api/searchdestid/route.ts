import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const searchdestid = searchParams.get("query");
  try {
    console.log(searchdestid, "searchdestid");

    const response = await fetch(
      `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${searchdestid}`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com"
        }
      }
    );

    const data = await response.json();
    // console.log(data, "daaaaa")
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in search destination API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
