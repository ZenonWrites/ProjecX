import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const mockChangeRequests = [
  {
    id: "CR-001",
    projectName: "E-Commerce Platform",
    crDate: "Oct 28, 2025",
    clientName: "Tech Solutions Inc.",
    status: "In Process",
  },
  {
    id: "CR-002",
    projectName: "Mobile Banking App",
    crDate: "Oct 25, 2025",
    clientName: "Finance Corp",
    status: "In Process",
  },
  {
    id: "CR-003",
    projectName: "CRM Dashboard",
    crDate: "Oct 22, 2025",
    clientName: "Sales Pro Ltd",
    status: "In Process",
  },
];

export function ChangeRequestTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6">
        <h2 className="text-gray-900 mb-4">Change Request List</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>CR ID</TableHead>
              <TableHead>Project Name</TableHead>
              <TableHead>CR Date</TableHead>
              <TableHead>Client Name</TableHead>
              <TableHead>Approve</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockChangeRequests.map((cr) => (
              <TableRow key={cr.id}>
                <TableCell className="text-gray-900">{cr.id}</TableCell>
                <TableCell className="text-gray-700">{cr.projectName}</TableCell>
                <TableCell className="text-gray-600">{cr.crDate}</TableCell>
                <TableCell className="text-gray-700">{cr.clientName}</TableCell>
                <TableCell>
                  <button className="text-green-600 hover:text-green-700 hover:underline">
                    Approve
                  </button>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-600 hover:bg-gray-100"
                  >
                    {cr.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Add To Project
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
