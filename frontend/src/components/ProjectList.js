// frontend/src/components/ProjectList.js
import React from 'react';
import { 
    Card, 
    CardContent, 
    Typography, 
    Grid, 
    Box, 
    Chip, 
    LinearProgress,
    Button,
    CardActions,
    Divider
} from '@mui/material';

// Helper function to get chip color based on status
const getStatusColor = (status) => {
    switch (status) {
        case 'TO DO':
            return 'default';
        case 'ON_GOING':
            return 'primary';
        case 'COMPLETED':
            return 'success';
        case 'DUE':
            return 'error';
        default:
            return 'default'; // For 'TO DO' etc.
    }
};

function ProjectList({ projects }) {
  return (
    <Grid container spacing={3}>
      {projects.map(project => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          {/* Use sx prop for custom styling like border radius and shadow */}
          <Card sx={{ borderRadius: '16px', boxShadow: 3 }}>
            <CardContent>
              {/* Card Header: Title and Status Chip */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" component="div">
                  {project.name}
                </Typography>
                <Chip 
                  label={project.status.replace('_', ' ')} 
                  color={getStatusColor(project.status)} 
                  size="small" 
                />
              </Box>

              {/* Progress Bar */}
              <Typography variant="body2" color="text.secondary">Progress</Typography>
              <LinearProgress 
                variant="determinate" 
                value={project.progress} 
                sx={{ height: 8, borderRadius: 5, mb: 2 }} 
              />

              {/* Project Details Grid */}
              <Grid container spacing={1} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                  <Typography variant="caption" color="text.secondary">
                    Deadline: {project.due_date}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" color="text.secondary">
                    Priority: {project.priority}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" color="text.secondary">
                    Domain: {project.domain}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption" color="text.secondary">
                    Tasks: {project.tasks}
                  </Typography>
                </Grid>
              </Grid>

            </CardContent>
            <Divider />
            {/* Card Footer: View Details Button */}
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small">View Details</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectList;