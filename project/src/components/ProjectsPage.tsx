import { useState } from "react";
import { ProjectsSidebar } from "./ProjectsSidebar";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectCard } from "./ProjectCard";
import { CreateProjectModal } from "./CreateProjectModal";

const mockProjects = [
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProjectsSidebar />

      <div className="flex-1">
        <ProjectsHeader onNewProjectClick={() => setIsModalOpen(true)} />

        <main className="p-8">
          {/*
            - We're back to 'lg:grid-cols-2' to match your goal image.
            - We're using 'justify-items-center' to center the cards in the columns.
            - We can use 'gap-6' or 'gap-4' (I'll use 6 as in your original file).
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
            {mockProjects.map((project, index) => (
              // We removed the 'flex justify-center' wrapper
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </main>
      </div>

      <CreateProjectModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}