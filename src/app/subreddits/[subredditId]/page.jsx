import SubredditPosts from "@/components/SubredditPosts.jsx";
import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";

const page = async ({ params }) => {
  const user = await fetchUser();
  const { subredditId } = params;
  const subreddit = await prisma.subreddit.findUnique({
    where: { id: subredditId },
  });

  const posts = await prisma.post.findMany({
    where: { subredditId },
  });

  return (
    <main>
      <SubredditPosts posts={posts} subreddit={subreddit} user={user}/>
    </main>
  );
};
export default page;
