import { useGenerationStore } from "@/state/idea-generation.js";
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerBtn = () => {
  const { openHamburgerMenu, setOpenHamburgerMenu } = useGenerationStore();
  return (
    <main>
      <RxHamburgerMenu
        size={"24px"}
        color={"#5e5e5e"}
        onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}
      />
    </main>
  );
};
export default HamburgerBtn;
