import { prisma } from "@/lib/prisma.js";

const page = async ({ params }) => {
  const { subredditId } = params;
  const subreddit = await prisma.subreddit.findUnique({
    where: { id: subredditId },
  });

  const posts = await prisma.post.findMany({
    where: { subredditId },
  });

  return (
    <main>
      <h3>{subreddit.name}</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.message}</p>
        </div>
      ))}
    </main>
  );
};
export default page;
