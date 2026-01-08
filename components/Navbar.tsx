"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} glass`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">EZD<span>.</span></Link>
                </div>
                <div className={styles.links}>
                    <Link href="#features">Tính năng</Link>
                    <Link href="#about">Về chúng tôi</Link>
                    <Link href="#contact" className={styles.cta}>Bắt đầu ngay</Link>
                </div>
            </div>
        </nav>
    );
}
