import Link from "next/link";
import styles from './filmcard.module.css';
import Image from "next/image";

const Filmcard = (image, title) => {
    return (
        <Link href="/" className={styles.card}>
            <div className={styles.image}>
                <Image src={image} alt="" fill /> 
            </div>
            <p className={styles.title}>{title}</p>
        </Link>
    )
}

export default Filmcard;