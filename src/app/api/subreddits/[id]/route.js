import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const GET = async (req, res) => {
  try {
    const { id } = res.params;
    const subreddit = await prisma.subreddit.findMany({
      where: { userId: id }
    });
    return NextResponse.json({ success: true, subreddit, user });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};
