import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectForm from '../components/ProjectForm';
import { Button, Box, Typography } from '@mui/material';
import PrimaryButton from '../components/PrimaryButton';
import ProjectHeader from '../components/ProjectHeader';
import KanbanBoard from '../components/KanbanBoard';
import ModuleForm from '../components/ModuleForm';
import TaskForm from "../components/Taskform";
import TaskModal from "../components/TaskModal";


function ProjectDetailPage() {
    const { id } = useParams();

    const [project, setProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [moduleModalOpen,setModuleModalOpen] = useState(false)
    const [taskModalOpen,setTaskModalOpen] = useState(false)

    //Resuable function for fetching the data
    const fetchProject = () => {
        fetch(`https://projecx-it5e.onrender.com/api/projects/${id}/`)
            .then(response => response.json())
            .then(data => setProject(data));
    }

    useEffect(() => {
        fetchProject();

    }, [id]);

    const handleDataCreated = () => {
        fetchProject();
    };

    if (!project) {
        return <Layout pageTitle="Loading..."></Layout>
    }

    const newProjectButton = (
        <PrimaryButton onClick={() => setModalOpen(true)}>
            + New Project
        </PrimaryButton>
    );

    if (!project){
        return <Layout pageTitle="Loading ..." headerAction={newProjectButton}></Layout>
    }

    return (
        <Layout pageTitle={project.name} headerAction={newProjectButton}>
            <ProjectHeader project={project} />

            <Box sx={{ mb:2, display: 'flex', gap: 2}}>
                <Button variant="contained" onClick={() => setModuleModalOpen(true) }>
                    + Add Module
                </Button>
                <Button variant="contained" onClick={() => setTaskModalOpen(true) }>
                    + Add Task
                </Button>

            </Box>

            <KanbanBoard modules={project.modules} />
            {/*Adding modal component */}
            <ModuleForm
            open={moduleModalOpen}
            handleClose={() => setModuleModalOpen(false)}
            project={project}
            onModuleCreated={handleDataCreated} />
            {/*Adding the task form*/}
            <TaskForm
            open={taskModalOpen}
            handleClose={() => setTaskModalOpen(false)}
            modules={project.modules}
            onTaskCreated={handleDataCreated}
            />
        </Layout>
    );
}

export default ProjectDetailPage;