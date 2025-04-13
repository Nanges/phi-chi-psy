import Link from "next/link";
import styles from "./NavBar.module.css";
import cn from "classnames";

export default function NavBar(){
    return <nav className={cn(styles.NavBar,'container')}>
    <ul>
      <li>
        <Link href="/">Accueil</Link>
      </li>
      <li>
        <Link href="/a-propos">&phi; &chi; &psi;</Link>
      </li>
      <li>
        <Link href="/therapies">Thérapies</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
}