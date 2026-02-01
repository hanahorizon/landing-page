import React from 'react'
import styles from "../modules/Footer.module.css"

const Footer = () => {
  return (

    <footer className={styles.footer}>

        
        <div className={styles.contents}>

            <div className={styles.column}>
                <img src="https://themejunction.net/html/bexon/demo/assets/images/logos/logo-2.webp" alt="logo"
                    width="130px"/>
                <p>Developing personalze our customer journeys to increase satisfaction & loyalty of our expansion.</p>



                
            </div>
            <div className={styles.column}>
                <h3>SERVICES</h3>
                <ul>
                    <li>Customer Experience</li>
                    <li>Training Programs</li>
                    <li>Business Strategy</li>
                    <li>Training Program</li>
                    <li>ESG Consulting</li>
                    <li>Development Hub</li>

                </ul>
            </div>
            <div className={styles.column}>
                <h3>RESOURCES</h3>
                <ul>
                    <li>Contact us</li>
                    <li>Team Member</li>
                    <li>Recognitions</li>
                    <li>Careers</li>
                    <li>New</li>
                    <li>News</li>
                    <li>Feedback</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>OUR OFFICE</h3>
                <ul>
                    <li>993 Renner Burg, West Rond </li>
                    <li>MT 94251-030, USA.</li>
                    <li>P: +1 (009) 544-7818</li>
                    <li>M: support@bexon.com</li>
                    <li>Mon-Fri 10am-10pm</li>

                </ul>
            </div>
        </div>
    </footer>


  )
}

export default Footer