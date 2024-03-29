import { useGenerationStore } from "@/state/idea-generation.js";
import img from "../../public/reddit-care.png";
import { useState } from "react";

const CreateCommunityModal = () => {
  const { setOpenCreateCommunityModal } = useGenerationStore();
  const [text, setText] = useState("");
  const { user } = useGenerationStore();

  const createCommunity = async () => {
    await fetch("/api/subreddits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: text, userId: user.id }),
    });
    setOpenCreateCommunityModal(false);
  };

  return (
    <main id="create-community-modal">
      <img id="reddit-care-img" src={img.src} alt="" width="50px" />
      <button
        id="create-community-cancel-btn"
        onClick={() => setOpenCreateCommunityModal(false)}
      >
        X
      </button>
      <h2 id="create-community-text">Create a Community</h2>
      <div id="create-community-text-description">
        Build and grow a community about something you care about. We'll Help
        you set things up.
      </div>

      <input id="create-community-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Name"
      />
      <button id="create-community-submit-btn" onClick={createCommunity}>Create your community</button>
    </main>
  );
};
export default CreateCommunityModal;
