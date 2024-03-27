import { useGenerationStore } from "@/state/idea-generation.js";
import avatar from "../../public/avatar.png";

const ProfileImg = () => {
  const { setOpenLogoutModal } = useGenerationStore();
  return (
    <img
      src={avatar.src}
      alt="avatar"
      id="avatar"
      onClick={() => setOpenLogoutModal(true)}
    />
  );
};
export default ProfileImg;
