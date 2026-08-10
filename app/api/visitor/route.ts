import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET(request: NextRequest) {
  try {
    const shouldIncrement = request.nextUrl.searchParams.get("increment") !== "false";

    const count = shouldIncrement
      ? await redis.incr("visitor_count")
      : await redis.get<number>("visitor_count");

    return NextResponse.json({ count: count ?? 0 });
  } catch (error) {
    console.error("[Visitor Counter] Redis error:", error);
    return NextResponse.json({ count: null });
  }
}