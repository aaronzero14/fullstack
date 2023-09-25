// components/AnimatedText.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Backend.module.css'


const AnimatedText = () => {
  return (
<div className={styles.backend}>
<motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 5 }}
      className={styles.animated_text}
    >
      Aaron - Expert IT
    </motion.p>
<div className={styles.backend_card}>

<motion.p
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 5 }}
      className={styles.container}
    > <br /><br />
   <img src="https://cdn-icons-png.flaticon.com/512/5692/5692800.png" alt="icon" className={styles.card} />
   <img src="https://cdn-icons-png.flaticon.com/512/5692/5692800.png" alt="icon" className={styles.card} />
   
   <br /> <br />
    
     
Passionate Front-End Developer with a keen eye for design, turning ideas into engaging web experiences.
Proficient in HTML, CSS, and JavaScript, I craft pixel-perfect, responsive websites that captivate users.
Dedicated to staying up-to-date with the latest web technologies and trends to deliver cutting-edge solutions.
Driven by creativity and a user-centric approach, I love making the web more beautiful and user-friendly.
Lets  collaborate to bring your web projects to life, combining aesthetics and functionality seamlessly.   
      <br /><br /></motion.p>

</div>
<br /><br />
</div>
  );
};

export default AnimatedText;
