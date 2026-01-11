import Navbar from "@/components/Navbar"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const contributors = [
    {name: "shubham", score: 48, prs: 6},
    {name: "ananya", score: 42, prs: 5},
];

const MentorDashboard = () => {
    return (
        <>
        <Navbar/>

        <main className="mx-auto max-w-7xl px-6 py-10 space-y-6">
            <h2 className="text-2xl font-semibold">
                Mentor Dashboard
            </h2>

            <Card className="p-4">
                <Table>
                    <TableHeader> 
                        <TableRow>
                            <TableHead> Contributor</TableHead>
                            <TableHead> Score</TableHead>
                            <TableHead> Accepted PRs</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {contributors.map((c) => (
                            <TableRow key={c.name}>
                                <TableCell>{c.name}</TableCell>
                                <TableCell>{c.score}</TableCell>
                                <TableCell>{c.prs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </main>
        </>
    )
}