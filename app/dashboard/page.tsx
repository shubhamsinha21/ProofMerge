import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-10 space-y-8">
        <h2 className="text-2xl font-semibold">Contributor Dashboard</h2>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          {["Accepted PRs", "Score", "Rank", "Active Repos"].map((item) => (
            <Card key={item} className="p-4">
              <p className="text-sm text-muted foreground">{item}</p>
              <p className="text-2xl font-bold mt-2">－</p>
            </Card>
          ))}
        </div>

        {/* Progress */}
        <Card className="p-6">
          <p className="mb-2 text-sm">Weekly Contribution Progress</p>
          <Progress value={60} />
        </Card>
      </main>
    </>
  );
};

export default Dashboard;
