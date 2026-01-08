"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
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
            </div>
        </nav>
    );
}
