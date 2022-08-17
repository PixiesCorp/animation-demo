import Animate from "../components/Animate"
import NavBar from "../components/NavBar"
import PageLayout from "../components/PageLayout"
import styles from "../styles/Asist.module.css"

export default function Asistencia (){
  return(
    <>
      <PageLayout />
      <NavBar />
      <h1 className={styles.h1}>Esta es pagina asistencia</h1>
      <Animate />
      
    </>
  )
}