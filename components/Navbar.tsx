import { nav } from "framer-motion/client";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
            <h1 className="text-xl font-semibold">ProofMerge</h1>

            <div className="flex gap-3">
                <Button variant="ghost">Docs</Button>
                <Button variant="ghost">Github</Button>
                <Button>Get Started</Button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar