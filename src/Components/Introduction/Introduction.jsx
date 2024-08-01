import React from 'react'
import { getImgSrc } from '../../imgImport'
import styles from "./Introduction.module.css";
import { BackCircle } from '../BackCircle/BackCircle';

//The welcome introduction section of the page is created.
export const Introduction = () => {
    return (
        <section className = {styles.container}>
            <div className = {styles.content}>
                {/*Creates the welcome message to be displayed.*/} 
                <h1 className = {styles.title}>Hi, I'm Schneider</h1>
                <div className = {styles.seperator}></div>
                <p className ={styles.description}>I'm a versatile developer skilled in full-stack, front-end, and WordPress development with expertise in Java, JavaScript, React, MySQL, and more. Reach out to learn more about my projects and experience!</p>
                {/*Button is generated for the user to press and direct to send me an email.*/} 
                <a href="mailto:schneidercjp@gmail.com" className = {styles.contactButton}>Contact Me</a>
            </div>
            {/*Image of my self is displayed.*/} 
            <div className = {styles.imageContent}>
            {/*Decoration to go behind my image*/} 
            <BackCircle></BackCircle>
            <img src={getImgSrc("Pictures/introduction.png")} alt = "Schneider Introduction Image" className ={styles.introductionImg}></img>
            </div>
                
           
        </section>
      )
}
