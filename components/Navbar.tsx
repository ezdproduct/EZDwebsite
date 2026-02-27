"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const pathname = usePathname();

    return (
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
                    <Link
                        href="/sieu-that-tap-sinh"
                        className={pathname === "/sieu-that-tap-sinh" ? styles.active : ""}
                    >
                        Siêu &apos;thật&apos; tập sinh
                    </Link>
                    <Link
                        href="/sieu-thuc-tap-sinh"
                        className={pathname === "/sieu-thuc-tap-sinh" ? styles.active : ""}
                    >
                        Siêu thực tập sinh
                    </Link>
                    <Link
                        href="/ai-agents"
                        className={pathname === "/ai-agents" ? styles.active : ""}
                    >
                        Chuyển giao công nghệ
                    </Link>
                </div>

                {/* Right placeholder to help center the links via flexbox */}
                <div className={styles.rightPlaceholder}></div>
            </div>
        </nav>
    );
}

