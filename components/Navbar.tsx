"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { href: "/", label: "Trang chủ" },
        { href: "/sieu-that-tap-sinh", label: "Siêu 'thật' tập sinh" },
        { href: "/sieu-thuc-tap-sinh", label: "Siêu thực tập sinh" },
        { href: "/ai-agents", label: "Chuyển giao công nghệ" },
        { href: "/about", label: "Về chúng tôi" },
    ];

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <div className={styles.logoWrapper}>
                                <span className={styles.logoText}>EZD</span>
                            </div>
                        </Link>
                    </div>

                    <div className={styles.links}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={pathname === link.href ? styles.active : ""}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        className={`${styles.menuToggle} ${isOpen ? styles.menuOpen : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`${styles.sidebarOverlay} ${isOpen ? styles.overlayActive : ""}`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Mobile Sidebar */}
            <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
                <div className={styles.sidebarHeader}>
                    <span className={styles.logoText}>EZD</span>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className={styles.sidebarLinks}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.sidebarLink} ${pathname === link.href ? styles.sidebarActive : ""}`}
                        >
                            {link.label}
                            <span className="material-symbols-outlined">chevron_right</span>
                        </Link>
                    ))}
                </div>
                <div className={styles.sidebarFooter}>
                    <p>© 2026 EZD AI Solutions</p>
                </div>
            </aside>
        </>
    );
}


