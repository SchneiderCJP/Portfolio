import React from 'react'
import experience from "../../Data/Experiences.json";
import styles from "./Experience.module.css";
import { getImgSrc } from '../../imgImport';

//The experience section of the page is created, where it displays my past professional experiences from the data.
export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
             {/*Section title displayed.*/} 
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                {/*Each experience of the data is displayed*/} 
                <ul className={styles.experience}>
                    {
                        experience.map((experienceItem, id) => {
                            return (
                                <li key={id} className={styles.experienceItem}>
                                    {/*Image representation of the experience is displayed.*/} 
                                    <img src={getImgSrc(experienceItem.imageSrc)} alt={`${experienceItem.alt}`}
                                    />
                                    <div className={styles.experienceItemDetails}>
                                        {/*Section title, line seperating, organization name, start & end date, and details displayed.*/} 
                                        <h3>{`${experienceItem.role}`}</h3> 
                                        <div className = {styles.seperator}></div>
                                        <h4>{`${experienceItem.organization}`}</h4>
                                        <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                                        <ul>{experienceItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>
                                        })}</ul>
                                    </div>
                                </li>


                            )

                        })
                    }
                </ul>
            </div>
        </section>
    )
}
