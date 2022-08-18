import Image from "next/future/image";
import styles from '../styles/GalleryGrid.module.css'
import boda1 from "../public/images/boda-1.jpg"
import boda2 from "../public/images/boda-2.jpg"
import boda3 from "../public/images/boda-3.jpg"
import boda4 from "../public/images/boda-4.jpg"
import boda5 from "../public/images/boda-5.jpg"
import boda6 from "../public/images/boda-6.jpg"
import boda7 from "../public/images/boda-7.jpg"
import {motion} from 'framer-motion'

export default function Gallery() {
  return (
    <motion.div className={styles.gallery} initial={{ x: -200}} animate={{x: 0}} transition={{duration: 0.8, type: "spring"}}>
      <h1 className={styles.galleryTitle}>Galeria</h1>
      <div className={styles.galleryContain}>
        <span className={styles.p1}>
          <Image src={boda1} alt="" className={styles.photo} priority={true}/>
        </span>
        <span className={styles.p2}>
          <Image  src={boda2} alt="" className={styles.photo}/>
        </span>
        <span className={styles.p3}>
          <Image  src={boda3} alt="" className={styles.photo}/>
        </span>
        <span className={styles.p4}>
          <Image  src={boda4} alt="" className={styles.photo}/>
        </span>
        <span className={styles.p5}>
          <Image  src={boda5} alt="" className={styles.photo}/>
        </span>
        <span className={styles.p6}>
          <Image  src={boda6} alt="" className={styles.photo}/>
        </span>
        <span className={styles.p7}>
          <Image  src={boda7} alt="" className={styles.photo}/>
        </span>
      </div>
      <div className={styles.fill}></div>
    </motion.div>
 
  );
}
