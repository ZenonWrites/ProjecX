import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectList from "./components/ProjectList"

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
            {/* Now passing the data to ProjectList component */}
            <ProjectList projects={projects} />
        </div>
    );
}

export default App