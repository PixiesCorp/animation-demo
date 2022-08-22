import Image from "next/dist/client/image"
import Liverpool from "../public/images/liverpool2.png"
import Amazon from "../public/images/amazon2.png"
import Sears from "../public/images/sears.png"
import styles from '../styles/Gifts.module.css'

export default function Gifts() {
  return (
    <div className={styles.GiftContain}>
      <h1 className={styles.title}>Mesa de Regalos</h1>
      <div className={styles.logos}>
        <a href="" className={styles.liverpool}>
          <Image src={Liverpool} alt=""/>
        </a>
        <a href="" className={styles.sears}>
          <Image src={Sears} alt=""/>
        </a>
        <a href="" className={styles.amazon}>
          <Image src={Amazon} alt=""/>
        </a>
      </div>
    </div>
  )
}