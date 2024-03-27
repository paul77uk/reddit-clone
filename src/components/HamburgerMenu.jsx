import img from "../../public/community-icon.svg";

const HamburgerMenu = async () => {
  // const subreddits = await prisma.subreddit.findMany();

  return (
    <main id="hamburger-modal-container">
      <div id="hamburger-menu">
        <div className="community-item">
          <img src={img.src} alt="" />
          <div>Communities</div>
        </div>
        {/* {subreddits.map((subreddit) => (
          <div key={subreddit.id} className="community-item">
            <img src={img.src} alt="" />
            <div>{subreddit.name}</div>
          </div>
        ))}  */}
      </div>
    </main>
  );
};
export default HamburgerMenu;
