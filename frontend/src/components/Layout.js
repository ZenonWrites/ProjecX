import React from 'react';
import { AppBar, Box, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';

const drawerWidth = 240; 

function Layout({ children }) { 
  return (
    <Box sx={{ display: 'flex' }}>
      {/* 1. The Top Header Bar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            PROJEX
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 2. The Left Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar /> 
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Dashboard', 'Projects', 'To Do List', 'Clients'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* 3. The Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> 
        {children} {/* This is where our page content will go */}
      </Box>
    </Box>
  );
}

export default Layout;
