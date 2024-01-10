import Link from "next/link";
import styles from './filmcard.module.css';
import Image from "next/image";

const Filmcard = ({image, title}) => {
    return (
        <Link href="/" className={styles.card}>
            <Image src={image} alt="film card" width={400} height={600} /> 
            <p className={styles.title}>{title}</p>
        </Link>
    )
}

export default Filmcard;