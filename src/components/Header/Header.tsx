"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileKorenOpen, setMobileKorenOpen] = useState(false);
  const pathname = usePathname();
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const previousRectRef = useRef<DOMRect | null>(null);
  const isHome = pathname === "/";
  const shouldUseScrolledHeader = !isHome || isScrolled;

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

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileKorenOpen(false);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (!next) setMobileKorenOpen(false);
      return next;
    });
  };

  useLayoutEffect(() => {
    const logoEl = logoRef.current;
    if (!logoEl) return;

    const previousRect = previousRectRef.current;
    const nextRect = logoEl.getBoundingClientRect();

    if (previousRect) {
      const dx = previousRect.left - nextRect.left;
      const dy = previousRect.top - nextRect.top;

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        logoEl.style.transition = "none";
        logoEl.style.transform = `translate(${dx}px, ${dy}px)`;

        requestAnimationFrame(() => {
          logoEl.style.transition = "transform 380ms cubic-bezier(0.4, 0, 0.2, 1)";
          logoEl.style.transform = "";
        });
      }
    }

    previousRectRef.current = nextRect;
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${shouldUseScrolledHeader ? styles.scrolled : styles.transparent} ${menuOpen ? styles.menuOpen : ""
          }`}
      >
        <div className={`${styles.inner} ${menuOpen ? styles.innerMenuOpen : ""}`}>
          <Link
            ref={logoRef}
            href="/"
            className={`${styles.logoLink} ${menuOpen ? styles.logoCentered : ""}`}
            aria-label="Stockholms Studentsångare"
            onClick={closeMobileMenu}
          >
            <img
              src="/images/sssf_logo.png"
              alt="Stockholms Studentsångare emblem"
              className={styles.logoEmblem}
            />
            {/* <div className={styles.logoText}>
              <span>Stockholms</span>
              <span>Studentsångare</span>
            </div> */}
          </Link>

          <nav className={styles.nav} aria-label="Huvudnavigation">
            <div className={styles.navItemDropdown}>
              <Link href="/koren" className={styles.navLink}>
                Kören
              </Link>
              <div className={styles.dropdown} role="menu" aria-label="Kören">
                <Link href="/om-koren" className={styles.dropdownItem}>
                  Om kören
                </Link>
                <Link href="/partners" className={styles.dropdownItem}>
                  Partners
                </Link>
                <Link href="/skivor" className={styles.dropdownItem}>
                  Skivor
                </Link>
                <Link href="/vannerna" className={styles.dropdownItem}>
                  Vännerna
                </Link>
              </div>
            </div>

            <Link href="/sjung-med" className={styles.navLink}>
              Sjung med!
            </Link>
            <Link href="/hyr-oss" className={styles.navLink}>
              Hyr oss
            </Link>
            <Link href="/konserter" className={styles.navLink}>
              Konserter
            </Link>
            <Link href="/vannerna" className={styles.navLink}>
              Vännerna
            </Link>
          </nav>

          <button
            type="button"
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={menuOpen}
            onClick={toggleMobileMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className={styles.mobileOverlay} role="dialog" aria-modal="true">
          <div className={styles.mobileLinks}>
            <div className={styles.mobileKorenBlock}>
              <button
                type="button"
                className={`${styles.mobileLink} ${styles.mobileKorenToggle}`}
                aria-expanded={mobileKorenOpen}
                aria-controls="mobile-koren-submenu"
                onClick={() => setMobileKorenOpen((prev) => !prev)}
              >
                <span>Kören</span>
                <span
                  className={`${styles.mobileKorenArrow} ${
                    mobileKorenOpen ? styles.mobileKorenArrowOpen : ""
                  }`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
              <div
                id="mobile-koren-submenu"
                className={`${styles.mobileGroup} ${mobileKorenOpen ? styles.mobileGroupOpen : ""}`}
                aria-label="Kören"
              >
                <Link
                  href="/om-koren"
                  className={styles.mobileSubLink}
                  onClick={closeMobileMenu}
                >
                  Om kören
                </Link>
                <Link
                  href="/partners"
                  className={styles.mobileSubLink}
                  onClick={closeMobileMenu}
                >
                  Partners
                </Link>
                <Link
                  href="/skivor"
                  className={styles.mobileSubLink}
                  onClick={closeMobileMenu}
                >
                  Skivor
                </Link>
                <Link
                  href="/vannerna"
                  className={styles.mobileSubLink}
                  onClick={closeMobileMenu}
                >
                  Vännerna
                </Link>
              </div>
            </div>

            <Link
              href="/sjung-med"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              Sjung med!
            </Link>
            <Link
              href="/hyr-oss"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              Hyr oss
            </Link>
            <Link
              href="/konserter"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              Konserter
            </Link>
            <Link
              href="/vannerna"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              Vännerna
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

