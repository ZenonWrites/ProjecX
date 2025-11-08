import {useEffect, useState} from "react";
import { ProjectsSidebar } from "./ProjectsSidebar";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectCard } from "./ProjectCard";
import { CreateProjectModal } from "./CreateProjectModal";


export  function ProjectsPage() {

  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
        .then(response => response.json())
        .then(data => setProjects(data));


    fetch('http://127.0.0.1:8000/api/clients/')
        .then(response => response.json())
        .then(data => setClients(data));
    }, []);

  const handleProjectCreated = (newProject) => {
    setProjects(prevProjects => [...prevProjects, newProject]);
  };



  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProjectsSidebar />

      <div className="flex-1">
        <ProjectsHeader
              onNewProjectClick={() => {
                console.log("Button clicked! Setting modal to true."); // <-- Add this line
                setIsModalOpen(true);
                console.log("isModalOpen state is now:", true); // <-- And this line
              }}
            />

        <main className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} clients={clients} />
            ))}
          </div>
        </main>
      </div>

      <CreateProjectModal
      open={isModalOpen}
      handleClose={() => setIsModalOpen(false)}
      onProjectCreated={handleProjectCreated}
      onOpenChange={setIsModalOpen}
      clients={clients}
       />
    </div>
  );
}
