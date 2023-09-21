import React, { useState } from 'react';
import styles from '../../styles/Blog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faDiagramProject, faLink, faPerson, faPersonArrowDownToLine  } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${styles.Blog} ${darkMode ? styles.DarkMode : ''}`}>
    
<br /><br /><br />

  <div className={styles.Blog_Fullstack}> 
  
  <h1 className={styles.Full}> <br /><br /><FontAwesomeIcon icon={faCodeBranch} color='greenyellow' /> Fullstack Developer</h1>
 <center> <button className={styles.dark_mode} onClick={() => setDarkMode(!darkMode)}>

        {darkMode ? 'Desactivar' : 'Activar'} Dark Mode
      </button></center>
  </div><br />
      <div className={styles.grid}>
  <article className={styles.main}>
    <h1><FontAwesomeIcon icon={faPersonArrowDownToLine} color='greenyellow' /> About Me </h1>
    <p>With a strong background in both front-end and back-end technologies, I create robust and user-friendly applications. My expertise in penetration testing enhances my ability to ensure the security and reliability of the software solutions I develop.</p>
    <p>I build things for the web. I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.Currently, I’m focused on building accessible, human-centered products at Upstatement..</p>
  </article>
  <section className={styles.side}>
    <h1><FontAwesomeIcon icon={faDiagramProject} color='greenyellow' /> Knowledge </h1>
    <p>I have knowledge in the following areas:</p>
    <br />
    <p>Static Content and Information Websites, Blogs, Ecommerces, Foros, News & Media Websites, Online Education Platforms, Sitios Web de Entretenimiento,Job Portals, Government and Public Services Websites,Health and Wellness Websites </p>
    

  </section>
</div> <br /><br />

    </div>
  );
}
