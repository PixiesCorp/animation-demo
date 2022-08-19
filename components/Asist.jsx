import Image from 'next/image'
import Suit from '../public/images/suit.png'
import Dress from '../public/images/dress.png'
import styles from "../styles/Asist.module.css"
import Animate from "./Animate"

export default function Asist() {
  return (
    <div className={styles.asistContain}>
      <h1 className={styles.asistTitle}>Codigo de Vestimenta</h1>
      <div className={styles.asistContainImg}>
        <span className={styles.suit}>
          <Image src={Suit} alt="" />
        </span>
        <span className={styles.dress}>
          <Image src={Dress} alt="" />
        </span>
      </div>
      <h3 className={styles.typeEvent}>Formal</h3>
      <div className={styles.info}>
        <p>$ Tanda del Dolar $</p>
        <p>! No Niños !</p>
      </div>
      <h1 className={styles.confirm}>! Confirma tu asistencia !</h1>
      <Animate />
      <div className={styles.fill}></div>
    </div>
  );
}
