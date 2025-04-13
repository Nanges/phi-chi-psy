import { cn, PropsWithClassName } from '@/libs/utils';
import styles from './Citation.module.css';
import { Citation as CitationModel } from './types';

type CitationProps = PropsWithClassName<{
    citation: CitationModel
}>;

export default function Citation({ className, citation }:CitationProps){
    return <div className={cn(styles.CitationWrapper, className)}>
        <div className={styles.Citation}>
            <blockquote>{citation.citation}</blockquote>
            <p className={styles.Author}>—{citation.auteur}</p>
        </div>
    </div>
}