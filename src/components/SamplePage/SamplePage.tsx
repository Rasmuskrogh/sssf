import styles from "./SamplePage.module.css";

type SamplePageProps = {
  title: string;
  label?: string;
  description?: string;
};

export default function SamplePage({
  title,
  label = "Exempelsida",
  description = "Detta är en exempelsida för sektionen. Här kan vi senare lägga in riktigt innehåll, bilder, textblock och eventuella CTA-knappar.",
}: SamplePageProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.label}>{label}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}

