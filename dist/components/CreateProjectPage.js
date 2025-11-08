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
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "./ui/select";
import { Calendar } from "lucide-react";
export function CreateProjectPage(_a) {
    var onCancel = _a.onCancel;
    var _b = useState({
        projectName: "",
        domain: "",
        description: "",
        startDate: "",
        dueDate: "",
        hours: "",
        priority: "",
        status: "",
        projectLeader: "",
        clientName: "",
        files: null,
    }), formData = _b[0], setFormData = _b[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log("Project Created:", formData);
        // Handle form submission
    };
    var handleFileChange = function (e) {
        if (e.target.files && e.target.files[0]) {
            setFormData(__assign(__assign({}, formData), { files: e.target.files[0] }));
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-white p-8", children: _jsxs("div", { className: "max-w-5xl mx-auto", children: [_jsxs("div", { className: "mb-8", children: [_jsx("h1", { className: "text-blue-900 mb-2", children: "Create New Project" }), _jsx("p", { className: "text-gray-500", children: "Fill the details to create a new project" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: "projectName", className: "text-gray-700", children: ["Project Name", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx(Input, { id: "projectName", type: "text", placeholder: "Enter the project name", className: "border-gray-200 rounded-lg", value: formData.projectName, onChange: function (e) {
                                                return setFormData(__assign(__assign({}, formData), { projectName: e.target.value }));
                                            }, required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "domain", className: "text-gray-700", children: "Domain" }), _jsx(Input, { id: "domain", type: "text", placeholder: "Enter the domain", className: "border-gray-200 rounded-lg", value: formData.domain, onChange: function (e) {
                                                return setFormData(__assign(__assign({}, formData), { domain: e.target.value }));
                                            } })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: "description", className: "text-gray-700", children: ["Description", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx(Textarea, { id: "description", placeholder: "Enter description here ........", className: "min-h-32 resize-none border-gray-200 rounded-lg", value: formData.description, onChange: function (e) {
                                        return setFormData(__assign(__assign({}, formData), { description: e.target.value }));
                                    }, required: true })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: "startDate", className: "text-gray-700", children: ["Start Date", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsxs("div", { className: "relative", children: [_jsx(Input, { id: "startDate", type: "date", placeholder: "Select start date", className: "border-gray-200 rounded-lg", value: formData.startDate, onChange: function (e) {
                                                        return setFormData(__assign(__assign({}, formData), { startDate: e.target.value }));
                                                    }, required: true }), _jsx(Calendar, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: "dueDate", className: "text-gray-700", children: ["Due Date", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsxs("div", { className: "relative", children: [_jsx(Input, { id: "dueDate", type: "date", placeholder: "Select due date", className: "border-gray-200 rounded-lg", value: formData.dueDate, onChange: function (e) {
                                                        return setFormData(__assign(__assign({}, formData), { dueDate: e.target.value }));
                                                    }, required: true }), _jsx(Calendar, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "hours", className: "text-gray-700", children: "No. of Hours" }), _jsx(Input, { id: "hours", type: "text", placeholder: "Enter the no. of hours", className: "border-gray-200 rounded-lg", value: formData.hours, onChange: function (e) {
                                                return setFormData(__assign(__assign({}, formData), { hours: e.target.value }));
                                            } })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: "priority", className: "text-gray-700", children: ["Priority", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsxs(Select, { value: formData.priority, onValueChange: function (value) {
                                                return setFormData(__assign(__assign({}, formData), { priority: value }));
                                            }, required: true, children: [_jsx(SelectTrigger, { id: "priority", className: "border-gray-200 rounded-lg", children: _jsx(SelectValue, { placeholder: "Select priority" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "high", children: "High" }), _jsx(SelectItem, { value: "medium", children: "Medium" }), _jsx(SelectItem, { value: "low", children: "Low" })] })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "status", className: "text-gray-700", children: "Status" }), _jsxs(Select, { value: formData.status, onValueChange: function (value) {
                                                return setFormData(__assign(__assign({}, formData), { status: value }));
                                            }, children: [_jsx(SelectTrigger, { id: "status", className: "border-gray-200 rounded-lg", children: _jsx(SelectValue, { placeholder: "Select status" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "in-process", children: "In Process" }), _jsx(SelectItem, { value: "completed", children: "Completed" }), _jsx(SelectItem, { value: "on-hold", children: "On Hold" }), _jsx(SelectItem, { value: "planning", children: "Planning" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "projectLeader", className: "text-gray-700", children: "Project Leader" }), _jsxs(Select, { value: formData.projectLeader, onValueChange: function (value) {
                                                return setFormData(__assign(__assign({}, formData), { projectLeader: value }));
                                            }, children: [_jsx(SelectTrigger, { id: "projectLeader", className: "border-gray-200 rounded-lg", children: _jsx(SelectValue, { placeholder: "Select project leader" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "john-doe", children: "John Doe" }), _jsx(SelectItem, { value: "jane-smith", children: "Jane Smith" }), _jsx(SelectItem, { value: "mike-johnson", children: "Mike Johnson" }), _jsx(SelectItem, { value: "sarah-williams", children: "Sarah Williams" })] })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs(Label, { htmlFor: "clientName", className: "text-gray-700", children: ["Client Name", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsxs(Select, { value: formData.clientName, onValueChange: function (value) {
                                                return setFormData(__assign(__assign({}, formData), { clientName: value }));
                                            }, required: true, children: [_jsx(SelectTrigger, { id: "clientName", className: "border-gray-200 rounded-lg", children: _jsx(SelectValue, { placeholder: "Select client" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "hertzsoft", children: "Hertzsoft" }), _jsx(SelectItem, { value: "retailco", children: "RetailCo" }), _jsx(SelectItem, { value: "financehub", children: "FinanceHub" }), _jsx(SelectItem, { value: "salespro", children: "SalesPro" })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "files", className: "text-gray-700", children: "Files" }), _jsx("div", { className: "relative", children: _jsx(Input, { id: "files", type: "file", className: "border-gray-200 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100", onChange: handleFileChange }) })] })] }), _jsxs("div", { className: "flex items-center gap-3 pt-4", children: [_jsx(Button, { type: "submit", className: "bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6", children: "Create Project" }), _jsx(Button, { type: "button", variant: "outline", onClick: onCancel, className: "border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 px-6", children: "Cancel" }), _jsxs("span", { className: "text-sm text-gray-400 ml-2", children: [_jsx("span", { className: "text-red-500", children: "*" }), " make field are important"] })] })] })] }) }));
}
