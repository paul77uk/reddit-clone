import { cookies } from "next/headers.js";
import jwt from "jsonwebtoken";
import { prisma } from "./prisma.js";

export const fetchUser = async () => {
  try {
    const cookieStore = cookies();
    const userCookie = cookieStore.get("token");

    if (!userCookie) {
      return {};
    }

    const { userId } = jwt.verify(userCookie.value, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (user) {
      delete user.password;
    }
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return {};
  }
};
