"use client";

import Link from "next/link";
import { useRouter } from "next/navigation.js";

const Logout = () => {
  const router = useRouter();
  return (
    <main>
      <Link
        onClick={async () => {
          const response = await fetch("/api/users/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          console.log(data);
          router.refresh();
        }}
        href="/"
      >
        Logout
      </Link>
    </main>
  );
};
export default Logout;
