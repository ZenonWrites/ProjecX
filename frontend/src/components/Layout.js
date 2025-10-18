// frontend/src/components/Layout.js
import React, { useState } from 'react';
import { 
    AppBar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, 
    ListItemText, Toolbar, Typography, CssBaseline, TextField, InputAdornment, 
    IconButton, Avatar 
} from '@mui/material';
import ProjectForm from './ProjectForm';


import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

import logo from "../assets/PROJEX-logo.png";

const drawerWidth = 240;

const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Projects', icon: <AccountTreeIcon /> },
    { text: 'To Do List', icon: <ListAltIcon /> },
    { text: 'Clients', icon: <PeopleIcon /> },
];



function Layout({ children, onProjectCreated }) {
    const [open, setOpen] = useState(false);
    // Modal state logic will go here
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ 
                    zIndex: (theme) => theme.zIndex.drawer + 1, 
                    backgroundColor: '#fff',
                    color: '#000'
                }}
                elevation={1}
            >
                <Toolbar>
                    {/* 1. MOVE THE PAGE TITLE HERE */}
                   <Box
                        component="img"
                        sx={{ height: '40px' }} // Adjust height as needed
                        alt="PROJEX Logo"
                        src={logo}
                    />
                    
                    {/* This Box pushes the other items to the right */}
                    <Box sx={{ flexGrow: 1 }} /> 

                    {/* Right-side Icons */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="Search here..."
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                        <Button variant="contained" disableElevation onClick={handleOpen}>+ New Project</Button>
                        <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { 
                        width: drawerWidth, 
                        boxSizing: 'border-box',
                        borderRight: 'none'
                    },
                }}
            >
                <Toolbar /> 
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                     <Typography variant="h5" fontWeight="bold">PROJEX</Typography>
                </Box>

                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding sx={{ p: 1 }}>
                                <ListItemButton
                                    sx={{
                                        borderRadius: '8px',
                                        ...(item.text === 'Projects' && {
                                            backgroundColor: 'primary.main',
                                            color: 'primary.contrastText',
                                            '&:hover': { backgroundColor: 'primary.dark' },
                                            '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
                                        })
                                    }}
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Main Content Area */}
            <Box 
                component="main" 
                sx={{ 
                    flexGrow: 1, 
                    p: 3, 
                    backgroundColor: (theme) => theme.palette.grey[100],
                    minHeight: '100vh'
                }}
            >
                <Toolbar /> 
                
                {/* 2. REMOVE THE TITLE FROM HERE */}
                {children}
            </Box>

            <ProjectForm
                open={open}
                handleClose={handleClose}
                onProjectCreated={onProjectCreated}
            />

        </Box>
    );
}

export default Layout;