import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectForm from '../components/ProjectForm';
import { Button, Box, Typography } from '@mui/material';

function ProjectDetailPage() {
    const { id } = useParams();

    const [project, setProect] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/projects/${id}/`)
            .then(response => response.json())
            .then(data => setProect(data));
    }, [id]); // this line ensures that this runs again, if Id changes

    if (!project){
        return <Layout pageTitle="Loading ..."></Layout>
    }

    return (
        <Layout pageTitle={project.name} headerAction={null}>
            <Typography variant="h6">Description:</Typography>
            <Typography variant="body1">{project.description}</Typography>
            {/* here is the nested data from our API */}
            <pre>{JSON.stringify(project.modules, null, 2)}</pre>
        </Layout>
    );
}

export default ProjectDetailPage;