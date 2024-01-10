import Image from 'next/image'
import styles from './page.module.css'
import Filmcard from '@/components/filmcard/filmcard';

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
          <Filmcard image="/card1.png" title="Синий жук"/>
          <Filmcard image="/card2.png" title="Домашняя игра"/>
          <Filmcard image="/card3.png" title="Салют 7"/>
          <Filmcard image="/card4.png" title="Поймай меня, если сможешь"/>
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