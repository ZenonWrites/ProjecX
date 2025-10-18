import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid } from '@mui/material';

const initialState = {
    name: '',
    description: '',
    status: '',
    priority: '',
    domain: '',
    due_date: '',
    start_date: '',
    srs_document: null,
};

function ProjectForm({ open, handleClose, onProjectCreated}) {
    //State to hold form data
    const [formData, setFormData] = useState(initialState);

    // handler function to update the state for any text field
    const handleChange = (e) => {
        const { name,value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prevState => ({
            ...prevState,
            srs_document: e.target.files[0]
        }));
    };

    const handleSubmit = () => {
        const formDataToSend = new FormData();
        
        // Append all form fields to FormData
        Object.keys(formData).forEach(key => {
            if (key === 'srs_document' && formData[key]) {
                formDataToSend.append('srs_document', formData[key]);
            } else if (formData[key] !== null && formData[key] !== undefined) {
                formDataToSend.append(key, formData[key]);
            }
        });

        fetch("http://127.0.0.1:8000/api/projects/", {
            method: "POST",
            body: formDataToSend,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Project created:', data);
            onProjectCreated(data);
            handleClose(); //closing the model
            setFormData(initialState); //Resetting the form
        })
        .catch(error => {
            console.error('Error creating project:', error);
        });
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogContent>
                {/* We use a Grid container for a clean form layout */}
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Project Name"
                            name="name" // The 'name' attribute must match the key in our state
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                         <TextField
                            fullWidth
                            label="Domain"
                            name="domain"
                            value={formData.domain}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            name="description"
                            multiline
                            rows={4}
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Start Date"
                            name="start_date"
                            type="date" // Using type="date" gives a date picker
                            InputLabelProps={{ shrink: true }}
                            value={formData.start_date}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Due Date"
                            name="due_date"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.due_date}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            accept=".pdf,.doc,.docx"
                            style={{ display: 'none' }}
                            id="srs-upload"
                            type="file"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="srs-upload">
                            <Button variant="outlined" component="span" fullWidth>
                                {formData.srs_document ? formData.srs_document.name : 'Upload SRS Document'}
                            </Button>
                        </label>
                        {formData.srs_document && (
                            <p style={{ margin: '8px 0 0', fontSize: '0.75rem', color: 'rgba(0, 0, 0, 0.6)' }}>
                                {formData.srs_document.name} ({(formData.srs_document.size / 1024).toFixed(2)} KB)
                            </p>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained">Save</Button>
            </DialogActions>
        </Dialog>
    );

}

export default ProjectForm