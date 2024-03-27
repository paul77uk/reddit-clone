import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers"

export const POST = async (req, res) => {
  
  try {
    const cookieStore = cookies();
    const { username, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findFirst({
      where: { username },
    });
    if (existingUser) {
      return NextResponse.json({
        success: false,
        error: "User already exists",
      });
    }

    const user = await prisma.user.create({
      data: { username, password: hashedPassword },
    });
    delete user.password;

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    cookieStore.set("token", token);

    return NextResponse.json({ success: true, user, token });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};
