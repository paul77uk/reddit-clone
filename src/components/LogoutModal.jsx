import { useGenerationStore } from "@/state/idea-generation.js";
import avatar from "../../public/avatar.png";
import { GrLogout } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/navigation.js";

const LogoutModal = () => {
  const { user, setUser } = useGenerationStore();
  const { setOpenLogoutModal } = useGenerationStore();
  const router = useRouter();

  return (
    <main id="logout-modal-container">
      <div id="logout-modal">
        <div id="cancel-btn-container">
          <div id="cancel-btn" onClick={() => setOpenLogoutModal(false)}>
            X
          </div>
        </div>
        <div id="profile">
          <img src={avatar.src} alt="avatar" id="avatar" />
          {user.username}
        </div>
        <Link
          id="logout-btn"
          onClick={async () => {
            const response = await fetch("/api/users/logout", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            console.log(data);
            router.refresh();
            setOpenLogoutModal(false);
            setUser({});
          }}
          href="/"
        >
          <GrLogout size="23px" color="#5e5e5e" />
          Log Out
        </Link>
      </div>
    </main>
  );
};
export default LogoutModal;
