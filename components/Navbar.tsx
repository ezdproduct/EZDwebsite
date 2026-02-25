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
                            <span className={styles.logoText}>EZD</span>
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

