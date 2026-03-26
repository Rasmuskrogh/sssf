import Link from "next/link";
import styles from "./Footer.module.css";

const navLinks = [
  {
    heading: "Kören",
    links: [
      { label: "Om kören", href: "/om-koren" },
      { label: "Partners", href: "/partners" },
      { label: "Skivor", href: "/skivor" },
      { label: "Vännerna", href: "/vannerna" },
    ],
  },
  {
    heading: "Utforska",
    links: [
      { label: "Sjung med!", href: "/sjung-med" },
      { label: "Hyr oss", href: "/hyr-oss" },
      { label: "Konserter", href: "/konserter" },
    ],
  },
];

/* const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: "IG" },
  { label: "Facebook", href: "https://facebook.com", icon: "FB" },
  { label: "YouTube", href: "https://youtube.com", icon: "YT" },
]; */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Col 1 - Brand */}
        <div className={styles.brand}>
          <span className={styles.brandName}>
            Stockholms<br />Studentsångare
          </span>
          <p className={styles.tagline}>
            En akademisk manskör med rötter i en lång tradition av sång och gemenskap.
          </p>
          {/* <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div> */}
        </div>

        {/* Col 2 & 3 - Nav */}
        {navLinks.map((group) => (
          <div key={group.heading} className={styles.navGroup}>
            <h4 className={styles.groupHeading}>{group.heading}</h4>
            <ul className={styles.linkList}>
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Col 4 - Contact */}
        <div className={styles.contact}>
          <h4 className={styles.groupHeading}>Kontakt</h4>
          <p className={styles.contactLine}>kontakt@studentsangare.se</p>
          <p className={styles.contactLine}>Stockholm, Sverige</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <span>© {year} Stockholms Studentsångare. Alla rättigheter förbehållna.</span>
      </div>
    </footer>
  );
}