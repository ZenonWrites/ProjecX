import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export function ProjectsHeader(_a) {
    var onNewProjectClick = _a.onNewProjectClick;
    return (_jsx("div", { className: "bg-white border-b border-gray-200 px-8 py-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { children: _jsx("h1", { className: "text-gray-900", children: "Projects" }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "relative w-80", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }), _jsx(Input, { type: "text", placeholder: "Search here...", className: "pl-10 bg-gray-50 border-gray-200 rounded-lg" })] }), _jsx(Button, { variant: "ghost", size: "icon", className: "relative rounded-lg hover:bg-gray-50", children: _jsx(Bell, { className: "w-5 h-5 text-gray-600" }) }), _jsx(Button, { onClick: onNewProjectClick, className: "bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4", children: "+ New Project" }), _jsxs(Avatar, { className: "w-10 h-10", children: [_jsx(AvatarImage, { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" }), _jsx(AvatarFallback, { children: "JD" })] })] })] }) }));
}
