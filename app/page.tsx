
import Hero from "@/components/Hero";
import ServiceAccordion from "@/components/ServiceAccordion";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ServiceAccordion />
    </main>
  );
}
