import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "../../../../middleware/mongoose";
import { NextApiResponse } from "next";
import User from "@/models/user";
import mongoose from "mongoose";

export async function GET() {
  return NextResponse.json({ hello: "login" });
}

export async function POST(
  request: Request,
  response: Response
) {
  // connectDb();
  connectDB().catch((err) => console.log(err));

  let data;
  let body;
  function hashPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  }
  try {
    body = await request.json();
    data = {
      username: body.username,
      email: body.email,
      password: body.password,
    };
    const userExists = await User.findOne({
      email: body.email,
    });
    if (userExists) {
      return new NextResponse(
        JSON.stringify({ message: "User already exists" }),
        { status: 409 }
      );
    } else {
      if (body.password.length < 6)
        return new NextResponse(
          JSON.stringify({
            message: "Password is too short",
          }),
          { status: 409 }
        );

      User.create({
        username: body.username,
        email: body.email,
        password: hashPassword(body.password),
      })
        .then(() => {
          console.log("user created");
          console.log("here");
          new NextResponse(
            JSON.stringify({ message: "User Created" }),
            { status: 201 }
          );
        })
        .catch((err) => {
          new NextResponse(
            JSON.stringify({ message: err }),
            { status: 500 }
          );
          console.log("here", err);
        });
    }
    console.log("here");
  } catch (e) {
    console.log(e, "err");
    return new NextResponse(
      JSON.stringify({ message: e }),
      {
        status: 500,
      }
    );
  }
}
