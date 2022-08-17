import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import { HiHome , HiLocationMarker , HiCheck, HiPhotograph } from 'react-icons/hi'

export default function NavBar() {
  return(
    <nav className={styles.nav}>
      <ul className={styles.containNav}>
        <li>
          <Link href="/" className={styles.link}>
            <a>
              <HiHome size="1.5em"/>
              Inicio
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ubicacion">
            <a>
              <HiLocationMarker size="1.5em"/>
              Ubicacion
            </a>
          </Link>
        </li>
        <li>
          <Link href="/asistencia">
          <a>
            <HiCheck size="1.5em"/>
            Asistencia
          </a>
          </Link>
        </li>
        <li>
          <Link href="/galeria">
            <a>
              <HiPhotograph size="1.5em"/>
              Galeria
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}