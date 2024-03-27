import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server";

export const GET = () => {
  try {
    const posts = prisma.post.findMany();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

export const POST = async (req, res) => {
  try {
    const { title, message, userId, subredditId } = await req.json();
    const post = await prisma.post.create({
      data: { title, message, userId, subredditId },
    });
    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};
