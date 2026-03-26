import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.content}>
        <div className={styles.dateLine}>Vårkonsert</div>
        <div className={styles.concertName}>9 maj 2026</div>

        <div className={styles.actions}>
          <Link href="https://billetto.se/e/varkonsert-med-stockholms-studentsangare-biljetter-1884281?utm_campaign=4366083&utm_content=1884281&utm_medium=vk26_fb&utm_source=affiliates"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary ${styles.actionLink}`}>
            Biljetter
          </Link>
          <a
            href="https://www.facebook.com/events/1579280723329105/"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-secondary ${styles.actionLink}`}
          >
            Läs mer
          </a>
        </div>
      </div>
    </section>
  );
}

