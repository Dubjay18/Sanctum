import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "../../../../middleware/mongoose";
import { NextApiResponse } from "next";
import User from "@/models/user";
import mongoose from "mongoose";

interface IUser {
  _id?: string;
  email: string;
  username: string;
}
export async function GET() {
  return NextResponse.json({ hello: "login" });
}

export async function POST(
  request: Request,
  response: NextApiResponse
) {
  // connectDb();
  connectDB().catch((err) => response.json(err));
  let client;
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
      return NextResponse.json({
        error: "User Already exists",
      });
    } else {
      if (body.password.length < 6)
        return NextResponse.json({
          error: "Password should be 6 characters long",
        });

      User.create({
        username: body.username,
        email: body.email,
        password: hashPassword(body.password),
      })
        .then(() => {
          console.log("user created");
          console.log("here");
          NextResponse.json({ message: "user created" });
        })
        .catch((err) => {
          NextResponse.json({ error: err });
          console.log("here", err);
        });
    }
    console.log("here");
  } catch (e) {
    console.log(e, "err");
    return NextResponse.json({ error: e });
  }
}
