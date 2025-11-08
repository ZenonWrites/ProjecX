var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ProjectsSidebar } from "./ProjectsSidebar";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectCard } from "./ProjectCard";
import { CreateProjectModal } from "./CreateProjectModal";
var mockProjects = [
    // ... your mockProjects array (unchanged)
    {
        title: "Slack And Projex",
        subtitle: "Team management website",
        status: "In Process",
        progress: 65,
        clientName: "Hertzsoft",
        projectId: "1234",
        domainName: "Web Dev",
        startingDate: "3 June 2025",
    },
    {
        title: "E-Commerce Platform",
        subtitle: "Online shopping portal",
        status: "In Process",
        progress: 45,
        clientName: "RetailCo",
        projectId: "1235",
        domainName: "E-Commerce",
        startingDate: "10 June 2025",
    },
    {
        title: "Mobile Banking App",
        subtitle: "Cross-platform banking solution",
        status: "In Process",
        progress: 80,
        clientName: "FinanceHub",
        projectId: "1236",
        domainName: "FinTech",
        startingDate: "1 May 2025",
    },
    {
        title: "CRM Dashboard",
        subtitle: "Customer relationship management",
        status: "In Process",
        progress: 30,
        clientName: "SalesPro",
        projectId: "1237",
        domainName: "CRM",
        startingDate: "15 June 2025",
    },
];
export function ProjectsPage() {
    var _a = useState(false), isModalOpen = _a[0], setIsModalOpen = _a[1];
    return (_jsxs("div", { className: "flex min-h-screen bg-gray-50", children: [_jsx(ProjectsSidebar, {}), _jsxs("div", { className: "flex-1", children: [_jsx(ProjectsHeader, { onNewProjectClick: function () { return setIsModalOpen(true); } }), _jsx("main", { className: "p-8", children: _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center", children: mockProjects.map(function (project, index) { return (
                            // We removed the 'flex justify-center' wrapper
                            _jsx(ProjectCard, __assign({}, project), index)); }) }) })] }), _jsx(CreateProjectModal, { open: isModalOpen, onOpenChange: setIsModalOpen })] }));
}
