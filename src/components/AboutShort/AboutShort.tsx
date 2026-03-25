import Image from "next/image";
import Link from "next/link";
import styles from "./AboutShort.module.css";

export default function AboutShort() {
  return (
    <section className={styles.section} aria-label="Om oss">
      <div className={styles.grid}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/choir-photo.jpg"
              alt="Stockholms Studentsångare"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <div className={styles.contentCol}>
          <div className={styles.label}>OM OSS</div>
          <h2 className={styles.heading}>Stockholms Studentsångare</h2>
          <p className={styles.body}>
            Vi är en av Stockholms ledande akademiska manskörer med rötter i en
            lång tradition av sång, gemenskap och musikalisk excellens. Varje
            konsert är ett möte mellan historia och nutid.
          </p>

          <Link href="/om-koren" className={`btn-primary ${styles.button}`}>
            OM OSS
          </Link>
        </div>
      </div>
    </section>
  );
}

