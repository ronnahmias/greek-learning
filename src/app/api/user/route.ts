import { connectMongoDB } from "@/lib/mongodb/mongodb";
import { User } from "@/lib/users/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, name } = await request.json();
  await connectMongoDB();
  await User.create({ email, name });

  return NextResponse.json({ message: "User registered" }, { status: 201 });
}
