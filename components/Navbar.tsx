"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.container} glass`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <div className={styles.logoWrapper}>
                            <div className={styles.rocketIcon}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M12.81 4.36l-1.41 1.41a8.67 8.67 0 012.12 5.09h4.38a1.5 1.5 0 001.06-.44l3-3a1.5 1.5 0 000-2.12l-3-3a1.5 1.5 0 00-2.12 0l-3 3a1.5 1.5 0 00-.44 1.06v3.13a8.67 8.67 0 011.41-5.13zM6.5 13.5l-3 3a1.5 1.5 0 000 2.12l3 3a1.5 1.5 0 002.12 0l3-3a1.5 1.5 0 00.44-1.06V14.43a8.67 8.67 0 01-1.41 5.13l1.41-1.41a8.67 8.67 0 01-2.12-5.09H5.56a1.5 1.5 0 00-1.06.44z" opacity=".4" />
                                    <path d="M13.5 10.5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
                                    <path d="M19.5 4.5l-3 3a1.5 1.5 0 00-.44 1.06H11.5c-1.66 0-3 1.34-3 3V16.5a1.5 1.5 0 001.06.44l3-3a1.5 1.5 0 00.44-1.06h4.5c1.66 0 3-1.34 3-3V7.5a1.5 1.5 0 00-1.06-.44l-3-3a1.5 1.5 0 00-1.44-.06z" />
                                </svg>
                            </div>
                            <span className={styles.logoText}>EZD.vn</span>
                        </div>
                    </Link>
                </div>

                <div className={styles.links}>
                    <Link href="#">Giới thiệu</Link>
                    <div className={styles.dropdown}>
                        <Link href="#" className={styles.dropdownTrigger}>
                            Sản phẩm & Dịch vụ
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </Link>
                        <div className={`${styles.dropdownContent} glass`}>
                            <Link href="/ai-agents">Chuyển đổi AI Agents</Link>
                            <Link href="/sieu-that-tap-sinh">Siêu "thật" tập sinh</Link>
                            <Link href="/sieu-thuc-tap-sinh">Siêu thực tập sinh</Link>
                        </div>
                    </div>

                    <Link href="#">Liên hệ</Link>
                </div>
            </div>
        </nav>
    );
}

