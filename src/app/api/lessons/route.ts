// GET /api/lessons

import { firestore } from "@/firebase";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<any> {
  const lessons = await firestore.collection("lessons").get();
}
