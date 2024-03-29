import { FaReddit } from "react-icons/fa";
import SearchBar from "./SearchBar.jsx";
import LoginButton from "./LoginButton.jsx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi2";
import { useGenerationStore } from "@/state/idea-generation.js";
import ProfileImg from "./ProfileImg.jsx";
import Link from "next/link";
import HamburgerBtn from "./HamburgerBtn.jsx";

const Navbar = () => {
  const { user } = useGenerationStore();
  const { setOpenHamburgerMenu } = useGenerationStore();

  return (
    <main id="navbar-container">
      <div id="navbar">
        <HamburgerBtn />
        <Link href="/" onClick={() => setOpenHamburgerMenu(false)}>
          <FaReddit size={"38px"} color="#FF4500" />
        </Link>
        <SearchBar />
        {/* <Link href={"/"}>Home</Link>
        <Link href={"/subreddits"}>Subreddit</Link> */}
        {!user.id && (
          <>
            {" "}
            <LoginButton />
            <HiOutlineDotsHorizontal size={"22px"} color={"#5e5e5e"} />
            {/* <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link> */}
          </>
        )}
        {user.id && (
          <>
            <Link id="create-btn" href={"/submit"}>
              <HiOutlinePlus size={"28px"} color={"#5e5e5e"} />
            </Link>
            <ProfileImg />
            {/* <Logout /> */}
            {/* <span>Welcome {user.username}</span> */}
          </>
        )}
      </div>
      <div>
        <hr />
      </div>
    </main>
  );
};
export default Navbar;
