import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { useNavigate } from 'react-router-dom';
import { CalendarDays } from "lucide-react";
import React from "react";


export function ProjectCard({ ...project  }) {
  const navigate = useNavigate();


  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow max-w-sm">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-gray-900">{project.name}</h3>
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
          {project.status}
        </Badge>
      </div>

      <p className="text-gray-500 text-sm mb-4">{project.description}</p>

      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          <span>Deadline: {project.due_date}</span>
        </div>
        <span>Priority: {project.priority}</span>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm text-gray-900">{project.progress}%</span>
        </div>
        <Progress value={project.progress} className="h-2" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="text-sm">
          <span className="text-gray-500">Client Name:</span>
          <div className="text-gray-900">{project.client.name}</div>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Project ID:</span>
          <div className="text-gray-900">{project.id}</div>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Domain Name:</span>
          <div className="text-gray-900">{project.domain}</div>
        </div>
        <div className="text-sm">
          <span className="text-gray-500">Starting Date:</span>
          <div className="text-gray-900">{project.start_date}</div>
        </div>
      </div>
    </div>
  );
}
