import React from 'react'
import styles from '../../styles/Footer.module.css';


export default function Footer() {
  return (
    <div className={styles.Footer}>


<br /><br />
<div className={styles.grid}>
  <article className={styles.main}>
    <h1 >Comunnicate With Me</h1>
    <p>
    I invite you to connect with me through my portfolio website, where refined aesthetics and visionary creativity converge, igniting possibilities for exceptional collaborations. Discover a realm of refined craftsmanship and exquisite design as you navigate through my portfolio website. I look forward to connecting with you and discussing how we can bring your vision to life in the most elegant and impactful way possible  </p>
  </article>
  <section className={styles.side}>
    <h1> Skills</h1>
    <p>
    #Javascript #React #Next #Node #Typescript #PHP #Python #Java #HTML #CSS #SCSS #Boopstrap #Material UI/UX #Linux #kali #Parrot #CISCO    </p>
  </section>
  <section className={styles.side}>
    <h1>Information</h1>
    <p>Costa Rica, San Jose : Desamparados</p>
    <p>( +506 ) 6144 - 7976    </p>
    <p>aaronfullstackdeveloper@gmail.com

</p>
  </section>

<br /><br /><br />
</div>

    </div>
  )
}
