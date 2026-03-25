"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    // Lock background scroll while overlay is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : styles.transparent}`}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink} aria-label="Stockholms Studentsångare">
            <img
              src="/images/logo-emblem.png"
              alt="Stockholms Studentsångare emblem"
              className={styles.logoEmblem}
            />
            <div className={styles.logoText}>
              <span>Stockholms</span>
              <span>Studentsångare</span>
            </div>
          </Link>

          <nav className={styles.nav} aria-label="Huvudnavigation">
            <div className={styles.navItemDropdown}>
              <Link href="/#koren" className={styles.navLink}>
                Kören
              </Link>
              <div className={styles.dropdown} role="menu" aria-label="Kören">
                <Link href="/#om-koren" className={styles.dropdownItem}>
                  Om kören
                </Link>
                <Link href="/#partners" className={styles.dropdownItem}>
                  Partners
                </Link>
                <Link href="/#skivor" className={styles.dropdownItem}>
                  Skivor
                </Link>
                <Link href="/#vannerna" className={styles.dropdownItem}>
                  Vännerna
                </Link>
              </div>
            </div>

            <Link href="/#sjung-med" className={styles.navLink}>
              Sjung med!
            </Link>
            <Link href="/#hyr-oss" className={styles.navLink}>
              Hyr oss
            </Link>
            <Link href="/#konserter" className={styles.navLink}>
              Konserter
            </Link>
            <Link href="/#vannerna" className={styles.navLink}>
              Vännerna
            </Link>
          </nav>

          <button
            type="button"
            className={styles.hamburger}
            aria-label="Öppna meny"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className={styles.mobileOverlay} role="dialog" aria-modal="true">
          <button
            type="button"
            className={styles.mobileClose}
            aria-label="Stäng meny"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <div className={styles.mobileLinks}>
            <Link href="/#koren" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              Kören
            </Link>
            <div className={styles.mobileGroup} aria-label="Kören">
              <Link
                href="/#om-koren"
                className={styles.mobileSubLink}
                onClick={() => setMenuOpen(false)}
              >
                Om kören
              </Link>
              <Link
                href="/#partners"
                className={styles.mobileSubLink}
                onClick={() => setMenuOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="/#skivor"
                className={styles.mobileSubLink}
                onClick={() => setMenuOpen(false)}
              >
                Skivor
              </Link>
              <Link
                href="/#vannerna"
                className={styles.mobileSubLink}
                onClick={() => setMenuOpen(false)}
              >
                Vännerna
              </Link>
            </div>

            <Link
              href="/#sjung-med"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Sjung med!
            </Link>
            <Link
              href="/#hyr-oss"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Hyr oss
            </Link>
            <Link
              href="/#konserter"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Konserter
            </Link>
            <Link
              href="/#vannerna"
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              Vännerna
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

