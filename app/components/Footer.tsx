import { cn } from '@/libs/utils';
import Brain from './Brain';
import styles from './Footer.module.css';

export default function Footer(){
    return <footer className={styles.Footer}>
        <div className={cn("container", styles.Container)}>
            <div className={styles.BrainWrapper}>
                <Brain className={styles.Brain}/>
            </div>
            <div className={styles.ContactDataWrapper}>
                <h2 className={styles.AddressTitle}>Philippe Anciaux</h2>
                <address className={styles.Address}>
                    7 Avenue de Champalle<br/>
                    5530 Yvoir
                </address>
                <p><a href="mailto:philippe.anciaux@phichipsy.be">philippe.anciaux@phichipsy.be</a></p>
                <p><a href="tel:+32 471 06 31 42">+32 471 06 31 42</a></p>
            </div>
        </div>
    </footer>
}