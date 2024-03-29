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

export const POST = async (req, res) => {
  try {
    const { name, userId } = await req.json();
    const subreddit = await prisma.subreddit.create({
      data: { name, userId },
    });
    return NextResponse.json({ success: true, subreddit });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
