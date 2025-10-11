
import React, { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList';
import Layout from './components/Layout'; // Import the Layout component

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
   
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data));
  }, []);

  return (
    
    <Layout> 
      {/* adding this component into layout */}
      <ProjectList projects={projects} />
    </Layout>
  );
}

export default App;
