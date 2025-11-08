import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
var mockChangeRequests = [
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
    return (_jsx("div", { className: "bg-white rounded-lg border border-gray-200", children: _jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-gray-900 mb-4", children: "Change Request List" }), _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "CR ID" }), _jsx(TableHead, { children: "Project Name" }), _jsx(TableHead, { children: "CR Date" }), _jsx(TableHead, { children: "Client Name" }), _jsx(TableHead, { children: "Approve" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, {})] }) }), _jsx(TableBody, { children: mockChangeRequests.map(function (cr) { return (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "text-gray-900", children: cr.id }), _jsx(TableCell, { className: "text-gray-700", children: cr.projectName }), _jsx(TableCell, { className: "text-gray-600", children: cr.crDate }), _jsx(TableCell, { className: "text-gray-700", children: cr.clientName }), _jsx(TableCell, { children: _jsx("button", { className: "text-green-600 hover:text-green-700 hover:underline", children: "Approve" }) }), _jsx(TableCell, { children: _jsx(Badge, { variant: "secondary", className: "bg-gray-100 text-gray-600 hover:bg-gray-100", children: cr.status }) }), _jsx(TableCell, { children: _jsx(Button, { size: "sm", className: "bg-blue-600 hover:bg-blue-700 text-white rounded-lg", children: "Add To Project" }) })] }, cr.id)); }) })] })] }) }));
}
