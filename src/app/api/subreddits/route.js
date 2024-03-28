import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (req, res) => {
  try {
    const subreddits = await prisma.subreddit.findMany();
    return NextResponse.json({ success: true, subreddits });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};
