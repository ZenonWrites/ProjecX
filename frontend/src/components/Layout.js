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



function Layout({ children, headerAction, pageTitle  }) {

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed"
                    sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: "#fff", //header bg color
                color: "#000" // black text
            }}
                    elevation={1} >
                <Toolbar>
                    {/*{using pageTitle props}*/}
                 <Box sx={{ display: 'flex', alignItems: 'center', width: drawerWidth }}>
                <Box
                    component="img"
                    sx={{ height: '40px' }}
                    alt="PROJEX Logo"
                    src={logo}
                />
                 </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ fontWeight: 'bold', ml: 2 }} // small breathing space after the drawer offset
                >
                    {pageTitle}
                </Typography>

                    {/* This Box pushes the other items to the right */}
                    <Box sx={{ flexGrow: 1 }} /> 

                    {/* Right-side Icons */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {/*{Search and Notifications}*/}
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

                        {/*{Rendering prop}*/}
                        {headerAction}
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
                                        //Active projects tab highlighted
                                        ...(item.text === 'Projects' && {
                                            backgroundColor: 'primary.main',
                                            color: 'primary.contrastText',
                                            '&:hover': { backgroundColor: 'primary.dark' },
                                            '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
                                        })
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            ...(item.text === 'Projects' && {
                                                color: 'primary.contrastText',
                                            })
                                        }}
                                    >
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
                    backgroundColor: (theme) => theme.palette.grey[100], //Light gray background
                    minHeight: '100vh'
                }}
                >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default Layout;