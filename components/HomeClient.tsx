"use client";

import { useSession } from "next-auth/react";
import GithubLoginButton from "./GithubLoginButton";
import { Button } from "@/components/ui/button";

const HomeClient = () => {
  const { data: session } = useSession();

  if (!session) {
    return <GithubLoginButton />;
  }

  return (
    <Button size="lg" onClick={() => (window.location.href = "/dashboard")}>
      Go to Dashboard
    </Button>
  );
};

export default HomeClient;
