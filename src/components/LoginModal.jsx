"use client";

import { useGenerationStore } from "@/state/idea-generation.js";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

const LoginModal = () => {
  const { setOpenSignUpModal } = useGenerationStore();
  const { setOpenLoginModal } = useGenerationStore();
  const { setUser } = useGenerationStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.error) {
      return setError(data.error);
    }
    setUsername("");
    setPassword("");
    router.refresh();
    setOpenLoginModal(false);
    setUser(data.user);
  };

  return (
    <main id="login-modal">
      <div id="cancel-btn-container">
        <div id="cancel-btn" onClick={() => setOpenLoginModal(false)}>
          X
        </div>
      </div>
      <h2 id="login-text">Log In</h2>
      {/* <button>Continue with Google</button> */}
      <form onSubmit={handleSubmit} className="auth-flex">
        <div>
          <div onSubmit={handleSubmit}>
            <input
              className="auth-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />

            <input
              className="auth-input"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="signed-in-text">
            New to Reddit?{" "}
            <span
              className="login-link"
              onClick={() => {
                setOpenSignUpModal(true);
                setOpenLoginModal(false);
              }}
            >
              Sign Up
            </span>
          </div>
        </div>
        <button id="sign-up-btn" type="submit">
          Log In
        </button>
      </form>
    </main>
  );
};
export default LoginModal;
