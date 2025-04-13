import Brain from "./Brain";
import Brand from "./Brand";
import styles from "./Banner.module.css";
import { cn, PropsWithClassName } from "@/libs/utils";

export default function Banner({className}:PropsWithClassName){
    return <div className={cn(styles.Banner, className)}>
        <Brain className={styles.Brain}/>
        <Brand withAgreementNumber className={styles.Brand}/>
    </div>
}