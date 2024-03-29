"use client";

import { useGenerationStore } from "@/state/idea-generation.js";
import { useEffect } from "react";

const SubredditPosts = ({ subreddit, posts, user }) => {
  const { setUser } = useGenerationStore();
  
  useEffect(() => {
    setUser(user);
  }, []);

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
export default SubredditPosts;
