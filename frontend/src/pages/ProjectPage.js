import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";
import {Button} from "@mui/material";

function ProjectPage() {

    const [projects, setProjects] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/projects/')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    const handleProjectCreated = (newProject) => {
        setProjects(prevProjects => [...prevProjects, newProject]);
    };

    const newProjectButton = (
        <Button
            variant="contained"
            disabledElevation
            onClick={() => setModalOpen(true)}
            >
            + New Project
        </Button>
    );

    return (
        // Passing the project creation button to layout component
        <Layout pageTitle="Projects" headerAction={newProjectButton}>
            {/*{Project component will be rendered here}*/}
            <ProjectList projects={projects} />
            <ProjectForm
                open={modalOpen}
                handleClose={() => setModalOpen(false)}
                onProjectCreated={handleProjectCreated}
                />
            </Layout>
                    );
}

export default ProjectPage;