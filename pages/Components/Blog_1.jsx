import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Blog_1.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCode, faCodeBranch, faKey, faStore, faSyringe } from '@fortawesome/free-solid-svg-icons';





export default function Blog_1() {
  return (
    <div>

<div className={styles.line}> <br /> - Projects -  </div>
<br /><br />
<div className={styles.grid}>
  <article className={styles.main}>
    <h1>Tatto Studio</h1>
<center>    <FontAwesomeIcon icon={faSyringe} color='gray' fontSize={200} /> </center>    
<p>
App weather created to Javascript.
    </p>
   <Link href="https://weather-14.netlify.app/  " >
   <div className={styles.link_1}><br /> Look the project</div>
   </Link>

  </article>

  <article className={styles.main}>
    <h1>App Weather</h1>
<center>    <FontAwesomeIcon icon={faCloud} color='#0070f3' fontSize={200} /> </center>    
<p>
App weather created to Javascript.
    </p>
   <Link href="https://weather-14.netlify.app/  " >
   <div className={styles.link_1}><br /> Look the project</div>
   </Link>

  </article>
  <section className={styles.side}>
    <h1>Password Generator</h1>
<center>    <FontAwesomeIcon icon={faKey} color='yellow' fontSize={200}  /> </center>
    <p>
App Password created Javascript
    </p>
    <Link href="https://hash-password.netlify.app/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>
  </section>
  <section className={styles.side}>
    <h1>Zero Net Solutions</h1>
<center>
<FontAwesomeIcon icon={faCode} color='greenyellow' fontSize={200}  /> 

</center>
    <p>
   Software Solutions
    </p>
    <Link href="https://zeronetsolutions.netlify.app/#acerca" className={styles.link_1}>
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>
  </section>
  <section className={styles.side}>
    <h1>E-Commerce</h1>
<center>    <FontAwesomeIcon icon={faStore} color='orange' fontSize={200}  /> </center>
    <p>
    Online Store 
    </p>
    <Link href="https://www.panamajackchile.cl/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>  
  </section>

  <section className={styles.side}>
    <h1>E-Commerce</h1>
<center>    <FontAwesomeIcon icon={faStore} color='orange' fontSize={200}  /> </center>
    <p>
    Online Store 
    </p>
    <Link href="https://estampapanama.com/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>  
  </section>

  <section className={styles.side}>
    <h1>E-Commerce</h1>
<center>    <FontAwesomeIcon icon={faStore} color='orange' fontSize={200}  /> </center>
    <p>
    Online Store 
    </p>
    <Link href="https://scalperscompany.mx/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>  
  </section>

  <section className={styles.side}>
    <h1>E-Commerce</h1>
<center>    <FontAwesomeIcon icon={faStore} color='orange' fontSize={200}  /> </center>
    <p>
    Online Store 
    </p>
    <Link href="https://experienciausa.net/ropa-barata-estados-unidos/" >
    <div className={styles.link_1}><br /> Look the project</div>
   </Link>  
  </section>
</div>



    </div>
  )
}
