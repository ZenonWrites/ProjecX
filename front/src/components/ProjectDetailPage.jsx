import { useState } from "react";
import { ProjectsSidebar } from "./ProjectsSidebar";
import { ProjectsHeader } from "./ProjectsHeader";
import { RefreshCw, Settings, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function ProjectDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProjectsSidebar />

      <div className="flex-1">
        <ProjectsHeader onNewProjectClick={() => setIsModalOpen(true)} />

        <main className="p-8">
          {/* Sub-Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900">Projects</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-lg hover:bg-gray-100">
                <RefreshCw className="w-4 h-4 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-lg hover:bg-gray-100">
                <Settings className="w-4 h-4 text-gray-600" />
              </Button>
            </div>
          </div>

          {/* Project Summary Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-gray-900 mb-1">Projexs</h1>
                  <p className="text-gray-500">Management Tool</p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    In progress
                  </Badge>
                  <Badge className="bg-red-50 text-red-700 hover:bg-red-50">
                    High Priority
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900">89%</span>
                  </div>
                  <Progress value={89} className="h-2.5 bg-gray-100">
                    <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: '89%' }} />
                  </Progress>
                  <p className="text-gray-500 text-sm">0 tasks (0 completed)</p>
                </div>

                <div className="space-y-3">
                  <span className="text-gray-600">Team</span>
                  <div className="flex items-center -space-x-2">
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
                      <AvatarFallback>SE</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="grid grid-cols-2 gap-6 content-start">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Deadline</p>
                  <p className="text-gray-900">2025-07-30</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Started</p>
                  <p className="text-gray-900">2025-07-04</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Modules</p>
                  <p className="text-gray-900">12</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Tasks</p>
                  <p className="text-gray-900">24</p>
                </div>
                <div className="col-span-2">
                  <Badge variant="outline" className="text-gray-700 border-gray-300">
                    client-Hml
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="overview" className="w-full">
            <div className="flex items-center justify-between mb-6 border-b border-gray-200">
              <TabsList className="bg-transparent h-auto p-0 space-x-8">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent px-0 pb-3"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="tasks" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent px-0 pb-3 text-gray-600"
                >
                  Tasks
                </TabsTrigger>
                <TabsTrigger 
                  value="team" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent px-0 pb-3 text-gray-600"
                >
                  Team
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent px-0 pb-3 text-gray-600"
                >
                  Analytics
                </TabsTrigger>
                <TabsTrigger 
                  value="test-report" 
                  className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none bg-transparent px-0 pb-3 text-gray-600"
                >
                  Test Report
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-3 pb-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Module
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Task
                </Button>
              </div>
            </div>

            <TabsContent value="overview" className="mt-0">
              {/* Kanban Board */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* To Do Column */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="text-gray-900 mb-4">To Do</h3>
                  <div className="space-y-3">
                    {/* Task Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <span className="text-gray-500 text-sm">Title</span>
                          <span className="text-gray-900 text-sm">1234</span>
                        </div>
                        <div className="flex items-start justify-between">
                          <span className="text-gray-500 text-sm">Task Name</span>
                          <span className="text-gray-900 text-sm">Projex</span>
                        </div>
                        <div className="flex items-start justify-between">
                          <span className="text-gray-500 text-sm">Status</span>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-xs">
                            In Progress
                          </Badge>
                        </div>
                        <div className="flex items-start justify-between">
                          <span className="text-gray-500 text-sm">Due Date</span>
                          <span className="text-gray-900 text-sm">7th Jul 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* In Progress Column */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="text-gray-900 mb-4">In Progress</h3>
                  <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                    <p className="text-gray-400 text-sm">No tasks</p>
                  </div>
                </div>

                {/* Done Column */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="text-gray-900 mb-4">Done</h3>
                  <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
                    <p className="text-gray-400 text-sm">No tasks</p>
                  </div>
                </div>

                {/* Modules Column */}
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="text-gray-900 mb-4">Modules</h3>
                  <div className="space-y-3">
                    {/* Module Card */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="space-y-2">
                        <p className="text-gray-900">Modules</p>
                        <div className="flex items-start justify-between">
                          <span className="text-gray-500 text-sm">Total no of tasks</span>
                          <span className="text-gray-900 text-sm">12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tasks">
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <p className="text-gray-500">Tasks content coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="team">
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <p className="text-gray-500">Team content coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <p className="text-gray-500">Analytics content coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="test-report">
              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <p className="text-gray-500">Test Report content coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
