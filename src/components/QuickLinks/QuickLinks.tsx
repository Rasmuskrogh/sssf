import Link from "next/link";
import styles from "./QuickLinks.module.css";

const quickLinks = [
  {
    label: "Om kören",
    sublabel: "Läs mer om",
    href: "/om-koren",
    img: "/images/historia.png",
    pos: "posLeftTop",
    bgPosition: "top"
  },
  {
    label: "Sjung med!",
    sublabel: "Läs mer om",
    href: "/sjung-med",
    img: "/images/sjung-med.jpg",
    pos: "posLeftBottom",
  },
  {
    label: "Hyr oss",
    sublabel: "Läs mer om",
    href: "/hyr-oss",
    img: "/images/hyr.jpg",
    pos: "posMidTall",
  },
  {
    label: "Konserter",
    sublabel: "Läs mer om",
    href: "/konserter",
    img: "/images/konsert.jpg",
    pos: "posThirdTop",
  },
  {
    label: "Skivor",
    sublabel: "Läs mer om",
    href: "/skivor",
    img: "/images/skiva.jpg",
    pos: "posThirdBottom",
    bgPosition: "center 25%"
  },
  {
    label: "Vännerna",
    sublabel: "Läs mer om",
    href: "/vannerna",
    img: "/images/vannerna.jpg",
    pos: "posRightTall",
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
            className={`${styles.card} ${styles[item.pos]}`}
            aria-label={item.label}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${item.img})`, backgroundPosition: "bgPosition" in item && item.bgPosition ? item.bgPosition : "center" }}
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

