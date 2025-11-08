import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LayoutDashboard, FolderKanban, GitPullRequest, KanbanSquare, ListTodo, CheckSquare, Calendar, Users, UserCircle, FolderOpen, BarChart3, } from "lucide-react";
var navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: FolderKanban, label: "Projects" },
    { icon: GitPullRequest, label: "Change Request" },
    { icon: KanbanSquare, label: "Kanban Board" },
    { icon: ListTodo, label: "Tasks List" },
    { icon: CheckSquare, label: "To Do List" },
    { icon: Calendar, label: "Calendar", },
    { icon: Users, label: "Clients" },
    { icon: UserCircle, label: "Team Member" },
    { icon: FolderOpen, label: "File Manager" },
    { icon: BarChart3, label: "Reports" },
];
export function Sidebar(_a) {
    var activeItem = _a.activeItem;
    return (_jsxs("div", { className: "w-60 bg-white border-r border-gray-200 min-h-screen", children: [_jsx("div", { className: "p-6", children: _jsx("h1", { className: "text-blue-600 tracking-wide", children: "PROJEX" }) }), _jsx("nav", { className: "px-3 space-y-1", children: navigationItems.map(function (item) {
                    var Icon = item.icon;
                    var isActive = item.label === activeItem;
                    return (_jsxs("a", { href: "#", className: "\n                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors\n                ".concat(isActive
                            ? "bg-blue-600 text-white"
                            : "text-gray-600 hover:bg-gray-50", "\n              "), children: [_jsx(Icon, { className: "w-5 h-5" }), _jsx("span", { className: "text-sm", children: item.label })] }, item.label));
                }) })] }));
}
