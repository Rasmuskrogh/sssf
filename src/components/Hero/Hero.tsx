import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.content}>
        <div className={styles.dateLine}>9 maj</div>
        <div className={styles.concertName}>Vårkonsert 2026</div>

        <div className={styles.actions}>
          <Link href="#" className={`btn-primary ${styles.actionLink}`}>
            Biljetter
          </Link>
          <Link href="#" className={`btn-secondary ${styles.actionLink}`}>
            Läs mer
          </Link>
        </div>
      </div>
    </section>
  );
}

