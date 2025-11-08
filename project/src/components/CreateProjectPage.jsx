import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "lucide-react";



export function CreateProjectPage({ onCancel }: CreateProjectPageProps) {
  const [formData, setFormData] = useState({
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
    files: null | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project Created:", formData);
    // Handle form submission
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, files: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-blue-900 mb-2">Create New Project</h1>
          <p className="text-gray-500">Fill the details to create a new project</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="projectName" className="text-gray-700">
                Project Name<span className="text-red-500">*</span>
              </Label>
              <Input
                id="projectName"
                type="text"
                placeholder="Enter the project name"
                className="border-gray-200 rounded-lg"
                value={formData.projectName}
                onChange={(e) =>
                  setFormData({ ...formData, projectName: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="domain" className="text-gray-700">
                Domain
              </Label>
              <Input
                id="domain"
                type="text"
                placeholder="Enter the domain"
                className="border-gray-200 rounded-lg"
                value={formData.domain}
                onChange={(e) =>
                  setFormData({ ...formData, domain: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-700">
              Description<span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Enter description here ........"
              className="min-h-32 resize-none border-gray-200 rounded-lg"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-gray-700">
                Start Date<span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="startDate"
                  type="date"
                  placeholder="Select start date"
                  className="border-gray-200 rounded-lg"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  required
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueDate" className="text-gray-700">
                Due Date<span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="dueDate"
                  type="date"
                  placeholder="Select due date"
                  className="border-gray-200 rounded-lg"
                  value={formData.dueDate}
                  onChange={(e) =>
                    setFormData({ ...formData, dueDate: e.target.value })
                  }
                  required
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="hours" className="text-gray-700">
                No. of Hours
              </Label>
              <Input
                id="hours"
                type="text"
                placeholder="Enter the no. of hours"
                className="border-gray-200 rounded-lg"
                value={formData.hours}
                onChange={(e) =>
                  setFormData({ ...formData, hours: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority" className="text-gray-700">
                Priority<span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.priority}
                onValueChange={(value) =>
                  setFormData({ ...formData, priority: value })
                }
                required
              >
                <SelectTrigger
                  id="priority"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="status" className="text-gray-700">
                Status
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger id="status" className="border-gray-200 rounded-lg">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-process">In Process</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on-hold">On Hold</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectLeader" className="text-gray-700">
                Project Leader
              </Label>
              <Select
                value={formData.projectLeader}
                onValueChange={(value) =>
                  setFormData({ ...formData, projectLeader: value })
                }
              >
                <SelectTrigger
                  id="projectLeader"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select project leader" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john-doe">John Doe</SelectItem>
                  <SelectItem value="jane-smith">Jane Smith</SelectItem>
                  <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
                  <SelectItem value="sarah-williams">Sarah Williams</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="clientName" className="text-gray-700">
                Client Name<span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.clientName}
                onValueChange={(value) =>
                  setFormData({ ...formData, clientName: value })
                }
                required
              >
                <SelectTrigger
                  id="clientName"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hertzsoft">Hertzsoft</SelectItem>
                  <SelectItem value="retailco">RetailCo</SelectItem>
                  <SelectItem value="financehub">FinanceHub</SelectItem>
                  <SelectItem value="salespro">SalesPro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="files" className="text-gray-700">
                Files
              </Label>
              <div className="relative">
                <Input
                  id="files"
                  type="file"
                  className="border-gray-200 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6"
            >
              Create Project
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 px-6"
            >
              Cancel
            </Button>
            <span className="text-sm text-gray-400 ml-2">
              <span className="text-red-500">*</span> make field are important
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
