import { ProjectDetailPage } from "./components/ProjectDetailPage";
import {useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {ProjectsPage} from "./components/ProjectsPage";

export default function App() {

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
        .then(response => response.json())
        .then(data => console.log(data))
  }, []);



  return (
    <BrowserRouter>
      <Routes>
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />

      <Route path="*" element={<Navigate to="/projects" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
