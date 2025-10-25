import React, { useState } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";


function ModuleForm({ open, handleClose, project, onModuleCreated }) {
    const [name, setName] = useState('')

    const handleSubmit = () => {
        const newModule ={
            name: name,
            project: project.id,
        };

        fetch('http://127.0.0.1:8000/api/modules/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newModule),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Module created:', data);
            onModuleCreated();
            handleClose();
            setName('');
        })
        .catch((error) => console.error('Error:', error));

    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle>Add New Module</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Module Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mt:1 }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Save</Button>
            </DialogActions>
        </Dialog>
    )

}

export default ModuleForm;