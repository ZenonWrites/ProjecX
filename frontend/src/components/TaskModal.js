// frontend/src/components/Taskform.js
import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    DialogTitle,
    Typography,
    Box
} from "@mui/material";

const initialState = {
    title: '',
    description: '',
    due_date: '',
    priority: 'MEDIUM',
    module: '',
};

function TaskModal({ open, handleClose, modules = [], onTaskCreated }) {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formData.module || !formData.title || !formData.due_date || !formData.priority) {
            alert('Please fill in all required fields: Module, Task Title, Due Date, and Priority.');
            return;
        }

        fetch('https://projecx-it5e.onrender.com/api/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Task created:', data);
            onTaskCreated();
            handleClose();
            setFormData(initialState);
        })
        .catch((error) => console.error('Error creating task:', error));
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogContent>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Fill the details to create a new task
                </Typography>

                <Grid container spacing={3}>

                    {/* Module Selection (Left Column) - FIX #1 */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth required>
                            <InputLabel id="module-select-label">Module Name*</InputLabel>
                            <Select
                                labelId="module-select-label"
                                name="module"
                                value={formData.module}
                                label="Module Name*"
                                onChange={handleChange}
                            > {/* <-- The '>' goes HERE */}
                                <MenuItem value=""><em>None</em></MenuItem>
                                {modules.map((module) => (
                                    <MenuItem key={module.id} value={module.id}>
                                        {module.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Task Title (Right Column) - This was correct */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label='Task Title*'
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    {/* Description (Full Width Below) - This was correct */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label='Description'
                            name="description"
                            multiline rows={3}
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Due Date (Left Column) - This was correct */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label='Due Date*'
                            name="due_date"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.due_date}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    {/* Priority (Right Column) - FIX #2 */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth required>
                            <InputLabel id="priority-select-label">Priority*</InputLabel>
                            {/* This <Select> block is now correct */}
                            <Select
                                labelId="priority-select-label"
                                name="priority"
                                value={formData.priority}
                                label="Priority*"
                                onChange={handleChange}
                            >
                                <MenuItem value="LOW">Low</MenuItem>
                                <MenuItem value="MEDIUM">Medium</MenuItem>
                                <MenuItem value="HIGH">High</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Red asterisk message - This was correct */}
                    <Grid item xs={12}>
                        <Box sx={{ mt: 1 }}>
                            <Typography variant="caption" color="error">
                                * make field are important
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ pr: 3, pb: 2 }}>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained">Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default TaskModal;