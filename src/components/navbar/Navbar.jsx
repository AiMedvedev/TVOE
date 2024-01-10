import Link from "next/link";
import Links from "./links/Links";
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="144" height="50" viewBox="0 0 144 50" fill="none">
                    <path d="M32 14L32 36L0 50L2.18557e-06 0L32 14Z" fill="white"/>
                    <path d="M24 4.5V9.59375L16 6.0625V1.39876e-06L24 4.5Z" fill="white"/>
                    <path d="M32 9V13.125L25 10.0352V5.0625L32 9Z" fill="white"/>
                </svg>
            </Link>

            <div>
                <Links />
            </div>

            <Link href="/" className={styles.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M20.1664 15.4257V33H23.8331V15.4257L31.7036 23.2962L34.2959 20.7038L21.9998 8.40765L9.70361 20.7038L12.2959 23.2962L20.1664 15.4257Z" fill="#BABABA"/>
                </svg>
            </Link>
        </div>
    )
}

export default Navbar;