"use client";

import { useEffect, useState } from "react";
import img from "../../public/community-icon.svg";
import Link from "next/link";

const HamburgerMenu = () => {
  const [subreddits, setSubreddits] = useState([]);
  const [setOpenHamburgerMenu] = useState(false);

  useEffect(() => {
    fetchSubreddits();
  }, []);

  const fetchSubreddits = async () => {
    const response = await fetch("/api/subreddits");
    const data = await response.json();
    setSubreddits(data.subreddits);
  };

  return (
    <main id="hamburger-modal-container">
      <div id="hamburger-menu">
        <div id="communities-title">Communities</div>

        {subreddits.map((subreddit) => (
          <Link
            key={subreddit.id}
            href={`/subreddits/${subreddit.id}`}
            className="community-item"
            onClick={() => setOpenHamburgerMenu(false)}
          >
            <img src={img.src} alt="" />
            <div>{subreddit.name}</div>
          </Link>
        ))}
        <div className="line" />
      </div>
    </main>
  );
};
export default HamburgerMenu;
