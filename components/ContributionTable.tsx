import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge"

const mockData = [
    {
        repo:"open-source/project",
        title:"Fix auth edge case",
        status: "Merged",
        score: 12
    },
    {
        repo:"oss/toolkit",
        title:"Improve README docs",
        status: "Merged",
        score: 6
    }
];

const ContributionTable = () => {
  return <div className="border rounded-lg">
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Repository</TableHead>
                <TableHead>PR Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Score</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {mockData.map((row, i) => (
                <TableRow key={i}>
                    <TableCell>{row.repo}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>
                        <Badge>{row.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium">
                        {row.score}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  </div>;
};

export default ContributionTable;
