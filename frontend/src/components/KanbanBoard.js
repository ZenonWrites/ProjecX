// frontend/src/components/KanbanBoard.js
import React from 'react';
import { Box, Paper, Typography, Grid, Card, CardContent } from '@mui/material';

// A simple card for displaying a task
function TaskCard({ task }) {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Due: {task.due_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Priority: {task.priority}
                </Typography>
            </CardContent>
        </Card>
    );
}

// A simple card for displaying a module
function ModuleCard({ module }) {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{module.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {/* This fix makes sure .length is safe */}
                    {(module.tasks || []).length} Tasks
                </Typography>
            </CardContent>
        </Card>
    );
}

// The main column component
function KanbanColumn({ title, children }) {
    return (
        <Paper sx={{ p: 2, height: '100%', backgroundColor: (theme) => theme.palette.grey[200] }}>
            <Typography variant="h6" sx={{ mb: 2 }}>{title}</Typography>
            {children}
        </Paper>
    );
}

function KanbanBoard({ modules = [] }) {
    // 1. Extract all tasks and filter out any null/undefined entries
    const allTasks = modules.flatMap(module => module.tasks || []).filter(Boolean);

    // 2. Filter tasks into their respective columns
    const todoTasks = allTasks.filter(task => task.status === 'TO_DO');
    const inProgressTasks = allTasks.filter(task => task.status === 'IN_PROGRESS');
    const doneTasks = allTasks.filter(task => task.status === 'DONE');

    return (
        <Grid container spacing={3}>
            {/* 3. Render the columns */}
            <Grid item xs={12} md={3}>
                <KanbanColumn title="To Do">
                    {/* Make sure the key prop is here */}
                    {todoTasks.map(task => <TaskCard key={task.id} task={task} />)}
                </KanbanColumn>
            </Grid>
            <Grid item xs={12} md={3}>
                <KanbanColumn title="In Progress">
                    {/* Make sure the key prop is here */}
                    {inProgressTasks.map(task => <TaskCard key={task.id} task={task} />)}
                </KanbanColumn>
            </Grid>
            <Grid item xs={12} md={3}>
                <KanbanColumn title="Done">
                    {/* Make sure the key prop is here */}
                    {doneTasks.map(task => <TaskCard key={task.id} task={task} />)}
                </KanbanColumn>
            </Grid>
            <Grid item xs={12} md={3}>
                <KanbanColumn title="Modules">
                    {/* Make sure the key prop is here */}
                    {modules.map(module => <ModuleCard key={module.id} module={module} />)}
                </KanbanColumn>
            </Grid>
        </Grid>
    );
}

export default KanbanBoard;