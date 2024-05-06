import { NextResponse } from "next/server";
import countries from "@/data/data.json";

export async function GET(req, { params }) {
  try {
    const country = countries.find((item) => item.name === params.country);
    if (!country) {
      return new NextResponse("Failed to find country", { status: 404 });
    }
    return NextResponse.json({ country: country });
  } catch (error) {
    return new NextResponse("Internal Server error", { status: 500 });
  }
}
