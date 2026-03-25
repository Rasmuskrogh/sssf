import Link from "next/link";
import styles from "./JoinUs.module.css";

export default function JoinUs() {
  return (
    <section className={styles.section} aria-label="Sjung med oss">
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <h2 className={styles.heading}>Vill du sjunga med oss?</h2>
        <Link href="/sjung-med" className={`btn-primary ${styles.button}`}>
          SJUNG MED OSS
        </Link>
      </div>
    </section>
  );
}

