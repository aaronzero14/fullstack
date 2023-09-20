import React, { useState } from 'react';
import styles from '../../styles/Blog.module.css';

export default function Blog() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${styles.Blog} ${darkMode ? styles.DarkMode : ''}`}>
    
<br /><br />

  <div className={styles.Blog_Fullstack}> 
  
  <h1 className={styles.Full}> <br /><br />Fullstack Developer</h1>
 <center> <button className={styles.dark_mode} onClick={() => setDarkMode(!darkMode)}>

        {darkMode ? 'Desactivar' : 'Activar'} Modo Oscuro
      </button></center>
  </div><br />
      <div className={styles.grid}>
  <article className={styles.main}>
    <h1>About Me </h1>

  </article>
  <section className={styles.side}>
    <p>
    </p>
  </section>
</div> <br /><br />

    </div>
  );
}
