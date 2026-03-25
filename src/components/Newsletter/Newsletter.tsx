"use client";

import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [confirmation, setConfirmation] = useState<string | null>(null);

  return (
    <section className={styles.strip} aria-label="Nyhetsbrev">
      <div className={styles.inner}>
        <div>
          <div className={styles.title}>Prenumerera på vårt nyhetsbrev</div>
          <div className={styles.subtitle}>
            Få mejl om föreställningar och biljetter
          </div>
        </div>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            setConfirmation("Tack! Vi hör av oss.");
          }}
        >
          <div className={styles.formRow}>
            <input
              type="email"
              name="email"
              placeholder="Din e-postadress"
              className={styles.input}
              required
              autoComplete="email"
            />
            <button type="submit" className={styles.button}>
              SKICKA
            </button>
          </div>
          {confirmation ? (
            <div className={styles.confirmation}>{confirmation}</div>
          ) : null}
        </form>
      </div>
    </section>
  );
}

