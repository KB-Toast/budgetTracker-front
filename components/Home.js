import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Home() {
  return (
    /*
    <div>
      <Link href="/dashboard"> Dashboard </Link>
    </div>
    */
    <div className={styles.globalLayout}>
      <div className={styles.primaryMenu}>
        Here is the menu
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          Here is some header
        </div>
        <div className={styles.secondaryMenu}>
          Here is a secondary menu
        </div>
        <div className={styles.mainContent}>
          <div className={styles.mainContentHeader}>
            <h2>Dashboard</h2>
            <input type='date'/>
          </div>
          <div className={styles.mainContentCards}>
            <div className={styles.card}>
              Card 1
            </div>
            <div className={styles.card}>
              Card 2
            </div>
            <div className={styles.card}>
              Card 3
            </div>
            <div className={styles.card}>
              Card 4
            </div>
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.bars}>
              some good looking bars here
            </div>
            <div className={styles.latestMovements}>
              <h3> Latest movements : </h3>
              <ul>
                <li>More money</li>
                <li>Less money</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Home;
