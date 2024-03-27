import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = () => {
  // delete cookie called token
  const cookieStore = cookies();
  cookieStore.delete("token");

  return NextResponse.json({ success: true, message: "Logged out" });
};
