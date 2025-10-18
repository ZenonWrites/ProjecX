import React from 'react';
import {Card, CardContent, Typography, Grid, Box, Chip, LinearProgress, Button, CardActions, Divider} from '@mui/material';


const getStatusColor = (status) => {
    switch(status) {
        case 'TO_DO':
            return 'primary';
        case 'ON_GOING':
            return 'primary';
        case 'COMPLETED':
            return 'success';
        case 'DUE':
            return 'error';
        default:
            return 'default';
    }
}

function ProjectList (props) {
      return (
          <div>
               {/*Grid Container to manage all cards*/}
              <Grid container spacing={3}>
                {props.projects.map(project => (
                  <Grid item xs={12} sm={6} md={4} key={project.id}>
                      <Card sx={{ borderRadius: '16px', boxShadow: 3 }}>
                          <CardContent>
                              {/*Card header title and status chip*/}
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                  <Typography variant="h6" component="div">
                                      {project.name}
                                  </Typography>
                                  <Chip 
                                      label={project.status ? project.status.replace('_', ' ') : 'N/A'} 
                                      color={getStatusColor(project.status)} 
                                      size="small"
                                  />
                              </Box>
                              {/*Progress bar*/}
                              <Typography variant="body2" color="text.secondary">Progress</Typography>
                              <LinearProgress variant="determinate" value={project.progress} sx={{ height: 8, borderRadius: 5, mb: 2, backgroundColor: "#D3D3D3","& .MuiLinearProgress-bar": {backgroundColor: "#000"} }} />
                              {/* 4. Project Details Grid */}
                              <Grid container spacing={1} sx={{ mb: 2 }}>
                                <Grid item xs={6}>
                                  <Typography variant="caption" color="text.secondary">Deadline: {project.due_date}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="caption" color="text.secondary">Priority: {project.priority}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="caption" color="text.secondary">Domain: {project.domain}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="caption" color="text.secondary">Tasks: {project.tasks}</Typography>
                                </Grid>
                              </Grid>
                          </CardContent>
                         <Divider />
                         <CardActions sx={{ justifyContent: 'center'}}>
                             <Button size="small">View Details</Button>
                         </CardActions>
                      </Card>
                  </Grid>
            ))}
          </Grid>
          </div>

         );
        }

export default ProjectList