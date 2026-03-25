import Link from "next/link";
import styles from "./QuickLinks.module.css";

const quickLinks = [
  {
    label: "Om kören",
    sublabel: "Läs mer om",
    href: "/om-koren",
    img: "/images/quicklink-1.jpg",
    span: 1,
  },
  {
    label: "Sjung med!",
    sublabel: "Läs mer om",
    href: "/sjung-med",
    img: "/images/quicklink-2.jpg",
    span: 1,
  },
  {
    label: "Hyr oss",
    sublabel: "Läs mer om",
    href: "/hyr-oss",
    img: "/images/quicklink-3.jpg",
    span: 2,
  },
  {
    label: "Konserter",
    sublabel: "Läs mer om",
    href: "/konserter",
    img: "/images/quicklink-4.jpg",
    span: 2,
  },
  {
    label: "Skivor",
    sublabel: "Läs mer om",
    href: "/skivor",
    img: "/images/quicklink-5.jpg",
    span: 1,
  },
  {
    label: "Vännerna",
    sublabel: "Läs mer om",
    href: "/vannerna",
    img: "/images/quicklink-6.jpg",
    span: 1,
  },
] as const;

export default function QuickLinks() {
  return (
    <section className={styles.section} aria-label="Snabblänkar">
      <h2 className={styles.heading}>Snabblänkar</h2>

      <div className={styles.grid}>
        {quickLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`${styles.card} ${
              item.span === 2 ? styles.cardSpan2 : styles.cardSpan1
            }`}
            aria-label={item.label}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className={styles.text}>
              <div className={styles.sublabel}>{item.sublabel}</div>
              <div className={styles.label}>{item.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

