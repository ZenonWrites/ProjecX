import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectForm from '../components/ProjectForm';
import { Button, Box, Typography } from '@mui/material';
import PrimaryButton from '../components/PrimaryButton';
import ProjectHeader from '../components/ProjectHeader';
import KanbanBoard from '../components/KanbanBoard';
import ModuleForm from '../components/ModuleForm';

function ProjectDetailPage() {
    const { id } = useParams();

    const [project, setProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [moduleModalOpen,setModuleModalOpen] = useState(false)
    const [taskModalOpen,setTaskModalOpen] = useState(false)

    //Resuable function for fetching the data
    const fetchProject = () => {
        fetch(`http://127.0.0.1:8000/api/projects/${id}/`)
            .then(response => response.json())
            .then(data => setProject(data));
    }

    useEffect(() => {
        fetchProject();

    }, [id]);

    const handleModuleCreated = () => {
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
            <ModuleForm open={moduleModalOpen} handleClose={() => setModuleModalOpen(false)} project={project} onModuleCreated={fetchProject} />
        </Layout>
    );
}

export default ProjectDetailPage;