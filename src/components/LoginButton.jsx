'use client'

import { useGenerationStore } from "@/state/idea-generation.js";

const LoginButton = () => {
  const { setOpenLoginModal} = useGenerationStore();

  return (
    <main>
      <button id="login" onClick={() => setOpenLoginModal(true)}>
        Log In
      </button>
    </main>
  );
};
export default LoginButton;
