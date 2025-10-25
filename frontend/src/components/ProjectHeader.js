// frontend/src/components/ProjectHeader.js
import React from 'react';
import { Box, Paper, Typography, Grid, LinearProgress, Chip } from '@mui/material';

// We'll reuse this from ProjectList
const getStatusColor = (status) => {
    switch (status) {
        case 'ON_GOING': return 'primary';
        case 'COMPLETED': return 'success';
        case 'DUE': return 'error';
        default: return 'default';
    }
};

function ProjectHeader({ project }) {
    return (
        <Paper elevation={2} sx={{ p: 3, mb: 3, borderRadius: '16px' }}>
            <Grid container spacing={2}>
                {/* Left Side: Title, Status, Progress */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" fontWeight="bold">{project.name}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Chip label={project.status.replace('_', ' ')} color={getStatusColor(project.status)} size="small" />
                        <Chip label={project.priority} color="warning" size="small" />
                    </Box>
                    <Typography variant="body2" color="text.secondary">Progress</Typography>
                    <LinearProgress variant="determinate" value={project.progress} sx={{ height: 8, borderRadius: 5, mb: 2 }} />
                    <Typography variant="caption">{project.progress}% Complete</Typography>
                </Grid>
                
                {/* Right Side: Dates and Stats */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: { md: 'right' } }}>
                        <Typography variant="body2" color="text.secondary">
                            Deadline: {project.due_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Started: {project.start_date}
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h5">{project.module_count}</Typography>
                            <Typography variant="body2" color="text.secondary">Total Modules</Typography>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <Typography variant="h5">{project.tasks}</Typography>
                            <Typography variant="body2" color="text.secondary">Total Tasks</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ProjectHeader;