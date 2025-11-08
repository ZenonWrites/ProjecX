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
import React,{ useState } from "react";

const initialState = {
    name: '',
    domain:'',
    description:'',
    start_date:'',
    due_date:'',
    no_of_hours:'',
    priority:'LOW',
    status:'TO DO',
    client: null,
    SRS: null,
  };

export function CreateProjectModal({ open, handleClose, onProjectCreated, onOpenChange , clients}) {

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      SRS: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.keys(formData).forEach(key => {
      if (key === 'SRS' && formData[key]) {
        formDataToSend.append('SRS', formData[key]);
      } else if (formData[key] !== null && formData[key] !== undefined){
        formDataToSend.append(key, formData[key]);
      }
    });

    fetch('http://localhost:8000/api/projects', {
      method: 'POST',
      body: formDataToSend,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Project created successfully:', data);
      onProjectCreated(data);
      handleClose();
      setFormData(initialState)
    })
    // .then(() => {
    //   onOpenChange(false);
    // })
    .catch(error => {
      console.error('Error creating project:', error);
    });
  };

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
                name = "name"
                value= {formData.name}
                onChange={handleChange}
                className="border-gray-200 rounded-lg"
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
                name = "domain"
                value= {formData.domain}
                onChange={handleChange}
                className="border-gray-200 rounded-lg"
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
              name = "description"
              value= {formData.description}
              onChange={handleChange}
              aria-multiline="true"
              rows="4"
              className="min-h-24 resize-none border-gray-200 rounded-lg"
              required
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
                  name = "start_date"
                  value= {formData.start_date}
                  onChange={handleChange}
                  className="border-gray-200 rounded-lg"
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
                  placeholder="Select start date"
                  name = "due_date"
                  value= {formData.due_date}
                  onChange={handleChange}
                  className="border-gray-200 rounded-lg"
                  required
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
                name = "no_of_hours"
                value= {formData.no_of_hours}
                onChange={handleChange}
                className="border-gray-200 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority" className="text-gray-700">
                Priority<span className="text-red-500">*</span>
              </Label>
              <Select
              required
              value={formData.priority}
              onValueChange={(newValue) => {
                setFormData(prevState => ({
                  ...prevState,
                  priority: newValue
                }));
              }}
              >
                <SelectTrigger
                  id="priority"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
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
                value={formData.status}
                onValueChange={(newValue) => {
                  setFormData(prevState => ({
                    ...prevState,
                    status: newValue
                  }));
                }}
              >
                <SelectTrigger id="status" className="border-gray-200 rounded-lg">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ON_GOING">In Process</SelectItem>
                  <SelectItem value="COMPLETED">Completed</SelectItem>
                  <SelectItem value="DUE">On Hold</SelectItem>
                  <SelectItem value="TO DO">Planning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectLeader" className="text-gray-700">
                Project Leader
              </Label>
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
                  <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
                  <SelectItem value="sarah-williams">Sarah Williams</SelectItem>
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
              value={formData.client}
              onValueChange={(newValue) => {
                setFormData(prevState => ({
                  ...prevState,
                  client: newValue
                }));
              }}
              >
                <SelectTrigger
                  id="clientName"
                  className="border-gray-200 rounded-lg"
                >
                  <SelectValue placeholder="Select client" />
                </SelectTrigger>
                <SelectContent>
                  {clients.map(client => (
                    <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="files" className="text-gray-700">
                Files
              </Label>
              <Input
                accept=".pdf,.doc,.docx"
                id="srs"
                type="file"
                name="files"
                onChange={handleFileChange}
                className="border-gray-200 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
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
