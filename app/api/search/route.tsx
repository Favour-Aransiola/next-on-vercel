import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    // const a = new URL(request.url);
    return NextResponse.json({ hello: "cccc" })
}