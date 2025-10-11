// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import Layout from './components/Layout'; // Import the Layout component

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // This fetching logic stays the same
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    // Wrap everything in the Layout component
    <Layout> 
      {/* The ProjectList is now a "child" of the Layout */}
      <ProjectList projects={projects} />
    </Layout>
  );
}

export default App;
