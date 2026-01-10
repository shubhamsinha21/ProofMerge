import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Measure real open-source contributions.
              <br />
              Fairly. Transarently.
            </h2>
            <p className="mt-4 text-muted-foreground">
              ProofMerge helps open-source programs track quality contributions
              and reduce noise using real GitHub data.
            </p>

            <div className="mt-6 flex gap-4">
              <Button size="lg">Create Program</Button>
              <Button size="lg" variant="outline">
                Join Program
              </Button>
            </div>
          </div>

          <Card className="p-6 text-sm text-muted-foreground">
            Github → ProofMerge → Dashboards
          </Card>
        </section>
      </main>
    </>
  );
};

export default Home;
