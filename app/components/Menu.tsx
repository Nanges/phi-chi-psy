'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Menu.module.css';

function useActiveClass(css:string){
    const pathname = usePathname();
    return (path:string) => path === pathname ? css : undefined;
}

type MenuItem = {
    href:string;
    text:string;
}

const MENU: MenuItem[] = [
    {
        href:'/',
        text:'Accueil'
    },
    {
        href:'/therapies',
        text:'Thérapies'
    },
    {
        href:'/boite-a-outils',
        text:'Boîte à outils'
    },
    {
        href:'/phi-chi-psy',
        text:'φχψ'
    },
    {
        href:'/consultations',
        text:'Consultations'
    }
];

export default function Menu(){
    const isActive = useActiveClass(styles.Active);

    return <ul className={styles.Menu}>
        {MENU.map((item,i) => <li key={i} className={isActive(item.href)}>
            <Link href={item.href}>{item.text}</Link>
       </li>)}
    </ul>
}