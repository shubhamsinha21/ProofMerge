"use client";
import { signIn } from "next-auth/react";

const GithubLoginButton = () => {
  return (
    <button
      onClick={() => signIn("github")}
      className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
    >
      Sign in with GitHub
    </button>
  );
};

export default GithubLoginButton;
