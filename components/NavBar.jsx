import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import { HiHome , HiLocationMarker , HiCheck, HiPhotograph } from 'react-icons/hi'

export default function NavBar() {
  return(
    <nav className={styles.nav}>
      <ul className={styles.containNav}>
        <li>
          <Link href="/" className={styles.link}>
            <a className={styles.a}>
              <HiHome size="1.8em"/>
              <p>Inicio</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ubicacion">
            <a className={styles.a}>
              <HiLocationMarker size="1.8em"/>
              <p>Ubicacion</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/asistencia">
          <a className={styles.a}>
            <HiCheck size="1.8em"/>
            <p>Asistencia</p>
          </a>
          </Link>
        </li>
        <li>
          <Link href="/galeria">
            <a className={styles.a}>
              <HiPhotograph size="1.8em"/>
              <p>Galeria</p>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}