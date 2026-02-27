"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {/* Top Visual Section: Pixel Orb & Rings */}
                <div className={`${styles.visualSection} fade-in`}>
                    <div className={styles.bridgeDecoration}></div>
                    <div className={styles.pixelRings}>
                        {[...Array(3)].map((_, ringIdx) => (
                            <div key={ringIdx} className={`${styles.ring} ${styles[`ring${ringIdx + 1}`]}`}>
                                {[...Array(24)].map((_, dotIdx) => (
                                    <div
                                        key={dotIdx}
                                        className={styles.dot}
                                        style={{
                                            ['--i' as any]: dotIdx,
                                            animationDelay: `${ringIdx * 0.2 + dotIdx * 0.05}s`
                                        } as React.CSSProperties}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>



                {/* Massive Heading */}
                <div className={`${styles.mainContent} fade-in`} style={{ animationDelay: '0.8s' }}>
                    <h1 className={styles.heroTitle}>
                        KIẾN TẠO GIẢI PHÁP <br /> <span className="text-gradient">AI</span>
                    </h1>

                    <p className={styles.heroSubtitle}>
                        Giải pháp AI toàn diện cho doanh nghiệp: Tối ưu quy trình, <br /> nâng tầm hiệu suất và kiến tạo tương lai số.
                    </p>

                    <div className={styles.actionButtons}>
                        <a
                            href="#services"
                            className="btn-primary"
                            style={{ padding: '20px 48px', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Bắt đầu ngay
                        </a>
                        <Link href="/about" className="btn-secondary" style={{ padding: '20px 48px', borderRadius: '100px' }}>
                            Tìm hiểu EZD
                        </Link>
                    </div>
                </div>
            </div>

            {/* Animated Light Streams */}
            <div className={styles.lightStreamLeft}>
                <div className={styles.beam}></div>
                <div className={styles.beam}></div>
                <div className={styles.beam}></div>
            </div>
            <div className={styles.lightStreamRight}>
                <div className={styles.beam}></div>
                <div className={styles.beam}></div>
                <div className={styles.beam}></div>
            </div>

            {/* Galaxy Light Strip */}
            <div className={styles.galaxyStripWrapper}>
                <div className={styles.galaxyStrip}></div>
                <div className={styles.galaxyCore}></div>
            </div>

            {/* Circuit Line Background Layer */}
            <div className={styles.circuitBackgroundImg}></div>

            {/* Background Accents */}
            <div className={styles.blur1}></div>
            <div className={styles.blur2}></div>
        </section>
    );
}
