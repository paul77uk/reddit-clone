import { prisma } from "@/lib/prisma.js";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import img from "../../public/reddit-post.svg";
import Link from "next/link";

export default async function Home() {
  TimeAgo.addDefaultLocale(en);
  const posts = await prisma.post.findMany();

  const getSubreddit = async (post) => {
    const subreddit = await prisma.subreddit.findUnique({
      where: { id: post.subredditId },
    });
    const timeAgo = new TimeAgo("en-US");
    return `r/${subreddit.name} • ${timeAgo.format(post.createdAt)}`;
  };

  return (
    <main>
      {posts.map((post) => (
        <div key={post.id}>
          <div id="subreddit-details">
            <img src={img.src} width={"25px"} />
            {getSubreddit(post)}
          </div>
          <Link href={`posts/${post.id}`} id="post-title">
            {post.title}
          </Link>
          <hr />
        </div>
      ))}
    </main>
  );
}
