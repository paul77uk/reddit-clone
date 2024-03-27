import { prisma } from "@/lib/prisma.js";
import Link from "next/link";

const page = async () => {
  const subreddits = await prisma.subreddit.findMany();
  return (
    <main>
      <h1>Subreddits</h1>
      {subreddits.map((subreddit) => (
        <div key={subreddit.id}>
          <Link href={`/subreddits/${subreddit.id}`}>{subreddit.name}</Link>
          
        </div>
      ))}
    </main>
  );
};
export default page;
