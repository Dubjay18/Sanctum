import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
  return NextResponse.json({ hello: "login" });
}

export async function POST(request: Request) {
  // connectDb();
  let client;
  let data;
  let body;
  try {
    body = await request.json();

    console.log("Dbconnected");
  } catch (e) {
    console.log(e);
  }
  data = {
    hello: body.name,
    pass: hashPassword(body.password),
  };
  function hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  return NextResponse.json(data);
}

// mongodb://localhost:27017
