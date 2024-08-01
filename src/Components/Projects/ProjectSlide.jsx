import React from 'react'
import { getImgSrc } from '../../imgImport';
import styles from "./ProjectSlide.module.css";


//Creates each of the individual slides for each project.
export const ProjectSlide = ({project : {title,imageSrc, description, skills, demo, source}}) => {
    return (
        <div className = {styles.container}>
            {/* Image for the project */}
            <img className = {styles.image} src= {getImgSrc(imageSrc)} alt = {`Image of ${title}`}></img>
            {/* Title for the project */} 
            <h3 className = {styles.title}>{title}</h3>
            {/* Line seperating */}
            <div className = {styles.seperator}></div>
            {/* Description for the project */} 
            <p className = {styles.description}>{description}</p>
            {/* Lists out each of the skills used for the project*/} 
            <ul className = {styles.skills}>{
                skills.map((skill, id) =>{
                    return ( <li key={id} className = {styles.skill}>{skill}</li> )
                })
            }</ul> 
            {/* If demo is available, the demo button with the link will be displayed, if not no button is created */} 
            <div className = {styles.links}>
                {demo && demo !== "" && (
                    <a href={demo} className={styles.link} target="_blank">
                        Demo
                    </a>
                )}
                {/* Source button to get to the source code for the project */} 
                <a href = {source} className = {styles.link} target = "_blank"> Source</a>
            </div>               
        </div>

    )
}
