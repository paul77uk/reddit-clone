"use client";

import { useGenerationStore } from "@/state/idea-generation.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { user } = useGenerationStore();
  const router = useRouter();

  const [communities, setCommunities] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [communityId, setCommunityId] = useState("");

  useEffect(() => {
    getCommunities();
  }, []);

  const getCommunities = async () => {
    const response = await fetch(`api/subreddits/${user.id}`);
    const data = await response.json();
    setCommunities(data.subreddit);
    console.log(data.subreddit);
  };

  const createPost = async () => {
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        message: text,
        userId: user.id,
        subredditId: communityId,
      }),
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
    router.refresh();
  };

  return (
    <main>
      <select name="" id="" onChange={(e) => setCommunityId(e.target.value)}>
        <option>Select a community</option>
        {communities.map((community) => (
          <option key={community.id} value={community.id}>
            {community.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add an interesting title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add your text..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={createPost}>Post</button>
    </main>
  );
};
export default page;
