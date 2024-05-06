import countries from "@/data/data.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ countries: countries });
}
