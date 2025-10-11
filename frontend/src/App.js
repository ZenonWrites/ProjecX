import React, { useState, useEffect } from 'react';
import './App.css';


function App(){
    //using set state for storing projects
    const[projects, setProjects] = useState([]);

    //using use effect for fetching from backend api

    useEffect (() => {
        fetch('http://127.0.0.1:8000/api/projects/')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(err => console.log(err));
    },[]);

    return(
        <div>
            <h1>Projects</h1>
            {/* mapping projects and displaying them */}
            {projects.map(project => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>


            ))}
        </div>
    );
}

export default App