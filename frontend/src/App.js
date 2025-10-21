
import React, { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import Layout from './components/Layout';// Import the Layout component
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
   
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  const handleProjectCreated = (newProject) => {
    setProjects(prevProjects => [...prevProjects, newProject]);
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/projects" element={<ProjectPage />}/>

          {/* Routes to be used in the future */}
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          {/* <Route path="/change-request" element={<CRPage />} /> */}

          {/*Default page currently set to project page */}
          <Route path="*" element={<Navigate to="/projects" replace />} />

        </Routes>
      </BrowserRouter>

  );
}

export default App;
