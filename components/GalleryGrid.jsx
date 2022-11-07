import Image from "next/image";
import styles from "../styles/GalleryGrid.module.css";
import boda1 from "../public/images/boda1.jpg";
import boda2 from "../public/images/boda13.jpg";
import boda3 from "../public/images/boda3.jpg";
import boda4 from "../public/images/boda4.jpg";
import boda5 from "../public/images/boda5.jpg";
import boda6 from "../public/images/boda6.jpg";
import boda7 from "../public/images/boda7.jpg";
import boda8 from "../public/images/boda8.jpg";
import boda9 from "../public/images/boda9.jpg";
import boda10 from "../public/images/boda10.jpg";
import boda11 from "../public/images/boda11.jpg";
import boda12 from "../public/images/boda12.jpg";
import boda13 from "../public/images/boda2.jpg";
import boda14 from "../public/images/boda14.jpg";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.galleryTitle}>Galeria</h1>
      <div className={styles.galleryContain}>
          <Image src={boda1} alt="" className={styles.photo} priority={true} layout="responsive"/>
          <Image src={boda2} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda3} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda4} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda5} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda6} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda7} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda8} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda9} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda10} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda11} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda12} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda13} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda14} alt="" className={styles.photo} layout="responsive"/>
      </div>
      <div className={styles.fill}></div>
    </div>
  );
}
