import { LauderGroups } from "@lib/lauderLessons/lauderGroups";
import { connectMongoDB } from "@lib/mongodb/mongodb";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request | NextRequest, res: NextApiResponse) {
  await connectMongoDB();
  const lauderGroups = await LauderGroups.find();
  return NextResponse.json(lauderGroups);
}

// export default async function POST(req: NextApiRequest, res: NextApiResponse) {
//   await connectMongoDB();
//   const { name, year } = req.body;
//   const lauderGroup = await LauderGroups.create({ name, year });
//   return res.status(200).json(lauderGroup);
// }
