import React from 'react'
import { getImgSrc } from '../../imgImport'
import styles from "./Contact.module.css";

//The contact section of the page is displayed, designed for the footer.
export const Contact = () => {
  return (
    <footer className = {styles.container} id = "contact">
        {/*Section title is displayed*/} 
        <div className = {styles.text}>
            <h2>Contact</h2>
        </div>
        {/*Each of the contact methods is displayed with a clickable link and an image depiciting the method*/} 
        <ul className = {styles.links}>
            <li className = {styles.link}>
                <img src={getImgSrc("Essentials/emailIcon.png")} alt ="Email Icon" />
                <a href = "mailto:schneidercjp@gmail.com">schneidercjp@gmail.com</a>
            </li>
            <li className = {styles.link}>
                <img src={getImgSrc("Essentials/linkedInIcon.png")} alt ="Linkedin Icon" />
                <a href = "https://www.linkedin.com/in/schneidercjp/" target = "_blank">linkedin.com/in/schneidercjp</a>
            </li>
            <li className = {styles.link}>
                <img src={getImgSrc("Essentials/githubIcon.png")} alt ="Email Icon" />
                <a href = "https://github.com/schneidercjp" target = "_blank">github.com/schneidercjp</a>
            </li>
        </ul>
    </footer>
  )
}
