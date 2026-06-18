import { NextResponse } from "next/server";

let count = 0;

export async function GET() {
  count++;
  return NextResponse.json({ count });
}
