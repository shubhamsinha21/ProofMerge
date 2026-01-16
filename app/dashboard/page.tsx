"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";
import ContributionTable from "@/components/ContributionTable";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 🔐 Auth protection
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // ⏳ While session is loading
  if (status === "loading") {
    return (
      <div className="p-10 text-center text-muted-foreground">
        Loading dashboard...
      </div>
    );
  }

  // 🚫 Safety check
  if (!session) return null;

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10 space-y-8">
        <h2 className="text-2xl font-semibold">Contributor Dashboard</h2>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          {["Accepted PRs", "Score", "Rank", "Active Repos"].map((item) => (
            <Card key={item} className="p-4">
              <p className="text-sm text-muted-foreground">{item}</p>
              <p className="text-2xl font-bold mt-2">－</p>
            </Card>
          ))}
        </div>

        {/* Progress */}
        <Card className="p-6">
          <p className="mb-2 text-sm">Weekly Contribution Progress</p>
          <Progress value={60} />
        </Card>

        {/* Contribution Table */}
        <ContributionTable />
      </main>
    </>
  );
};

export default Dashboard;
