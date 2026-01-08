"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import styles from "./page.module.css";

export default function Home() {
  const [showTopBar, setShowTopBar] = useState(true);

  return (
    <main className={styles.main}>
      {showTopBar && <TopBar onClose={() => setShowTopBar(false)} />}
      <Navbar hasTopBar={showTopBar} />
      <Hero />

      <section id="features" className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sức mạnh vượt trội</h2>
            <p className={styles.sectionSubtitle}>Những công nghệ hàng đầu được tích hợp sẵn trong dự án của bạn.</p>
          </div>

          <div className={styles.grid}>
            {[
              { title: "App Router", desc: "Tận dụng tối đa sức mạnh của React Server Components." },
              { title: "Hiệu năng", desc: "Tối ưu hóa hình ảnh, font chữ và code tự động." },
              { title: "Bảo mật", desc: "Cơ chế bảo mật mạnh mẽ từ cấp độ server." },
              { title: "SEO", desc: "Hỗ trợ SEO tuyệt vời với metadata generation." }
            ].map((feature, i) => (
              <div key={i} className={`${styles.card} glass`}>
                <div className={styles.cardIcon}>0{i + 1}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>&copy; 2026 EZD Studio. Được tạo bởi Antigravity.</p>
        </div>
      </footer>
    </main>
  );
}
