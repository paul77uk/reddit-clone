"use client";

import { useGenerationStore } from "@/state/idea-generation.js";
import { useEffect } from "react";
import img from "../../public/reddit-post.svg";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const SubredditPosts = ({ subreddit, posts, user }) => {
  const { setUser } = useGenerationStore();
  TimeAgo.addDefaultLocale(en);
   const timeAgo = new TimeAgo("en-US");

  useEffect(() => {
    setUser(user);
  }, []);

  return (
    <main>
      <div id="subreddit-title">
        <img src={img.src} width="45px" />
        <h3>{`r/${subreddit.name}`}</h3>
      </div>

      {posts.map((post) => (
        <div key={post.id}>
          <div id="username">
            {`u/${post.user.username}`}
             <span id="time-ago"> {`• ${timeAgo.format(post.createdAt)}`}</span>
          </div>
          <div id="subreddit-post-title">{post.title}</div>
          
        </div>
      ))}
    </main>
  );
};
export default SubredditPosts;
