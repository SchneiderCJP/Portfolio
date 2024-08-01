import React from "react";
import skills from "../../Data/Skills.json";
import styles from "./About.module.css";
import { getImgSrc } from "../../imgImport";


// The about section of the page is displayed.
export const About = () => {
  return (
    <section className={styles.container} id="about">
      {/*Section title is displayed*/} 
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/*Each of the about elements are displayed with the title, seperator, and description.*/} 
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <div className={styles.seperator}></div>
              <p>
                Experience with both front-end and back-end technologies such as Java, MySQL, Android Studio Flutter Dart, and various web technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Front-End Developer</h3>
              <div className={styles.seperator}></div>
              <p>
                Demonstrated expertise in creating user interfaces with JavaScript, CSS, and React. Developed interactive elements and applications, including this portfolio site and various JavaScript games.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Back-End Developer</h3>
              <div className={styles.seperator}></div>
              <p>
                Experience with server-side development using Java and MySQL. Developed and managed databases, handled application logic, and integrated back-end functionalities with front-end interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>WordPress Developer</h3>
              <div className={styles.seperator}></div>
              <p>
                Hands-on experience improving WordPress sites through audits, source code edits, and design enhancements.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Game Developer</h3>
              <div className={styles.seperator}></div>
              <p>
                Developed multiple games using various technologies. Created JavaScript games similar to Pacman and Mario, and a 2D "Space Evader" game using Unity and C#. These projects demonstrate proficiency in game development and design.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <div className={styles.seperator}></div>
              <p>
                Focused on designing user interfaces with an emphasis on aesthetics and user experience. Utilized JavaScript, HTML, CSS, and React to create visually appealing and intuitive designs for various applications and projects.
              </p>
            </div>
          </li>
        </ul>
        {/*Each of the skills along with their name and image icon depiciting it is displayed*/} 
        <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImgSrc(skill.imageSrc)} alt={skill.alt} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
      </div>
    </section>
  );
};
