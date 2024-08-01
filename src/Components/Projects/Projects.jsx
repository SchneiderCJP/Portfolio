import React from 'react'
import projects from "../../Data/Projects.json";
import { ProjectSlide } from './ProjectSlide';
import styles from "./Projects.module.css";

// Displays each of the projects from the projects data file.
export const Projects = () => {
  return (
    <section id = "projects" className = {styles.container}>
      {/* Section title */} 
        <h2 className = {styles.title}>Projects</h2>
        {/* Displays each of the projects */} 
        <div className = {styles.projects}>{
        projects.map((project, id) => {
           return (
            <ProjectSlide key = {id} project = {project}/>
           )
        })
        }</div>
    </section>
  );
};
