import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'
import NavBar from '../components/NavBar'
import Music from '../components/Music'
import CountDown from '../components/CountDown'
import bg from '../public/images/portada.jpg'

export default function Home() {
  return (
    <>
      <PageLayout />
      <NavBar />
      <div className={styles.homeContain}>
        <Image src={bg} alt=""className={styles.bg} layout="fill"/>
        <div className={styles.homeContainTitle}>
          <h1>Alexis & Andrea</h1>
          <h3>Nuestra Boda</h3>
        </div>
        <Music />
        <CountDown 
        countdownTimestampMs={1662163200000}/>
        <h3 className={styles.homeDate}>3 de Septiembre del 2022</h3>
      </div>
    </>
  )
}
