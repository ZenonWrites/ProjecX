import React from 'react';
import {Card, CardContent, Typography, Grid} from '@mui/material';


function ProjectList (props) {
      return (
          <div>
              {/*Grid Container to manage all cards*/}
              <Grid container spacing={3}>
                {props.projects.map(project => (
                  <Grid item xs={12} sm={6} md={4} key={project.id}>
                      <Card>
                          <CardContent>
                              <Typography variant="h5" component="h2">
                                  {project.name}
                              </Typography>
                              <Typography variant="body2" component="p">
                                  {project.description}
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
            ))}
          </Grid>
          </div>

         );
        }

export default ProjectList