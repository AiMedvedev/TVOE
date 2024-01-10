import Image from 'next/image'
import styles from './page.module.css'
import Filmcard from '@/components/filmcard/filmcard';
import Link from 'next/link';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <Image className={styles.imgTitle} width={576} height={228} alt="film name" src="/imgTitle.svg" />
          <h2 className={styles.heroTitle}>
            Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.
          </h2>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.buttonWatch}`}>
              Смотреть
            </button>
            <button className={styles.button}>
              О фильме
            </button>
          </div>
        </div>
      </div>
      <div className={styles.fresh}>
        <h2 className={styles.freshTitle}>Новинки</h2>
        <div className={styles.freshSlider}>
          <div className={styles.card}>
              <Image src="/card1.png" width={400} height={600} alt="film card"/>
              <p className={styles.cardTitle}>Синий жук</p>
          </div>
          <div className={styles.card}>
              <Image src="/card2.png" width={400} height={600} alt="film card"/>
              <p className={styles.cardTitle}>Домашняя игра</p>
          </div>
          <div className={styles.card}>
              <Image src="/card3.png" width={400} height={600} alt="film card"/>
              <p className={styles.cardTitle}>Салют 7</p>
          </div>
          <div className={styles.card}>
              <Image src="/card4.png" width={400} height={600} alt="film card"/>
              <p className={styles.cardTitle}>Поймай меня, если сможешь</p>
          </div>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.topTitle}>
          <Image src="/top10.svg" width={200} height={67} alt="top 10 series"/>
          <h2 className={styles.freshTitle}>просмотров за неделю</h2>
        </div>
        <div className={styles.topSlider}>
          <Image src="/top-card1.png" width={560} height={600} alt="tv card"/>
          <Image src="/top-card2.png" width={560} height={600} alt="tv card"/>
          <Image src="/top-card3.png" width={560} height={600} alt="tv card"/>
        </div>
      </div>
    </main>
  );
};

export default Home; 