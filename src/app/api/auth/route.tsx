import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ hello: "login" });
}

export async function POST(request: Request) {
  const body = await request.json();
  const data = { hello: body.name };

  return NextResponse.json(data);
}
