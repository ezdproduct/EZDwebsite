"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
    hasTopBar?: boolean;
}

export default function Navbar({ hasTopBar = true }: NavbarProps) {
    return (
        <nav className={`${styles.navbar} ${!hasTopBar ? styles.noTopBar : ""}`}>
            <div className={`${styles.container} glass`}>
                <div className={styles.logo}>
                    <Link href="/">EZD.vn</Link>
                </div>

                <div className={styles.links}>
                    <Link href="#">Giới thiệu</Link>
                    <Link href="#">Sản phẩm</Link>
                    <Link href="#">Dịch vụ</Link>
                    <Link href="#">Câu chuyện</Link>
                    <Link href="#">Liên hệ</Link>
                </div>

                <div className={styles.mobileActions}>
                    <button className={styles.actionBtn} aria-label="Tìm kiếm">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>
                    <button className={styles.actionBtn} aria-label="Thông báo">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
