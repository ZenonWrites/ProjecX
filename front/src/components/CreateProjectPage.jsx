import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
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
import React, { useState } from "react"; // Import useState

// 1. We add our 'initialState' object
const initialState = {
  name: "",
  domain: "",
  description: "",
  start_date: "",
  due_date: "",
  no_of_hours: "", // Added this from your form
  priority: "LOW",
  status: "TO DO",
  client: null,
  SRS: null,
};

// 2. We update the props to accept 'onProjectCreated' and 'clients'
export function CreateProjectModal({
  open,
  onOpenChange,
  onProjectCreated,
  clients = [], // Give 'clients' a default empty array value
}) {
  // 3. We add all our state and handler logic
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      SRS: e.target.files[0],
    }));
  };

  // This is a new handler specifically for the Select components
  const handleSelectChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Must be the first line

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "SRS" && formData[key]) {
        formDataToSend.append("SRS", formData[key]);
      } else if (formData[key] !== null && formData[key] !== undefined) {
        formDataToSend.append(key, formData[key]);
      }
    });

    // 4. This is our real fetch logic
    fetch("http://127.0.0.1:8000/api/projects/", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Project created successfully:", data);
        onProjectCreated(data); // Refresh the list on the main page
        setFormData(initialState); // Reset the form
        onOpenChange(false); // Close the modal *after* success
      })
      .catch((error) => {
        console.error("Error creating project:", error);
        // We could add an error message to the user here
      });
  };

  // 5. The JSX is now fully wired up
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl rounded-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-gray-900">Create New Project</DialogTitle>
          <DialogDescription className="text-gray-500">
            Fill the details to create a new project
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="projectName" className="text-gray-700">
                Project Name<span className="text-red-500">*</span>
              </Label>
              <Input
                id="projectName"
                type="text"
                placeholder="Enter the project name"
                className="border-gray-200 rounded-lg"
                required
                name="name" // Wired up
                value={formData.name} // Wired up
                onChange={handleChange} // Wired up
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
                name="domain" // Wired up
                value={formData.domain} // Wired up
                onChange={handleChange} // Wired up
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
              className="min-h-24 resize-none border-gray-200 rounded-lg"
              required
              name="description" // Wired up
              value={formData.description} // Wired up
              onChange={handleChange} // Wired up
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
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
                  required
                  name="start_date" // Wired up
                  value={formData.start_date} // Wired up
                  onChange={handleChange} // Wired up
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
                  placeholder="Select start date"
                  className="border-gray-200 rounded-lg"
                  required
                  name="due_date" // Wired up
                  value={formData.due_date} // Wired up
                  onChange={handleChange} // Wired up
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="hours" className="text-gray-700">
                No. of Hours
              </Label>
              <Input
                id="hours"
                type="text"
                placeholder="Enter the no. of hours"
                className="border-gray-200 rounded-lg"
                name="no_of_hours" // Wired up
                value={formData.no_of_hours} // Wired up
                onChange={handleChange} // Wired up
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority" className="text-gray-700">
                Priority<span className="text-red-500">*</span>
              </Label>
              <Select
                required
                value={formData.priority} // Wired up
                onValueChange={(newValue) =>
                  handleSelectChange("priority", newValue)
                } // Wired up
              >
                <SelectTrigger
                  id="priority"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  {/* Values match backend model */}
                  <SelectItem value="HIGH">High</SelectItem>
                  <SelectItem value="MEDIUM">Medium</SelectItem>
                  <SelectItem value="LOW">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="status" className="text-gray-700">
                Status
              </Label>
              <Select
                value={formData.status} // Wired up
                onValueChange={(newValue) =>
                  handleSelectChange("status", newValue)
                } // Wired up
              >
                <SelectTrigger
                  id="status"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {/* Values match backend model */}
                  <SelectItem value="TO DO">To Do</SelectItem>
                  <SelectItem value="ON_GOING">On Going</SelectItem>
                  <SelectItem value="COMPLETED">Completed</SelectItem>
                  <SelectItem value="DUE">Due</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectLeader" className="text-gray-700">
                Project Leader
              </Label>
              {/* This is still static, as we don't have a 'users' endpoint yet */}
              <Select>
                <SelectTrigger
                  id="projectLeader"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select project leader" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john-doe">John Doe</SelectItem>
                  <SelectItem value="jane-smith">Jane Smith</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="clientName" className="text-gray-700">
                Client Name<span className="text-red-500">*</span>
              </Label>
              <Select
                required
                value={formData.client} // Wired up
                onValueChange={(newValue) =>
                  handleSelectChange("client", newValue)
                } // Wired up
              >
                <SelectTrigger
                  id="clientName"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select client" />
                </SelectTrigger>
                <SelectContent>
                  {/* Now dynamic! */}
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="files" className="text-gray-700">
                Files
              </Label>
              <Input
                id="files"
                type="file"
                className="border-gray-200 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                name="SRS" // Wired up
                onChange={handleFileChange} // Wired up
                // Removed the 'value' prop as it's uncontrolled
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Create Project
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </Button>
            <span className="text-xs text-gray-400 ml-2">
              <span className="text-red-500">*</span> make field are important
            </span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}