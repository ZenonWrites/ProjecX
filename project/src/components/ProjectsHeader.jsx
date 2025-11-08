import { Search, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";



export function ProjectsHeader({ onNewProjectClick }: ProjectsHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900">Projects</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search here..."
              className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-lg hover:bg-gray-50"
          >
            <Bell className="w-5 h-5 text-gray-600" />
          </Button>

          <Button
            onClick={onNewProjectClick}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4"
          >
            + New Project
          </Button>

          <Avatar className="w-10 h-10">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
