"use client";

import { useState, useEffect } from "react";
import styles from "./TopBar.module.css";

interface TopBarProps {
    onClose: () => void;
}

export default function TopBar({ onClose }: TopBarProps) {
    const [step, setStep] = useState(1); // 1: Quote, 2: Offer
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(false); // Start fade out
            setTimeout(() => {
                setStep(2); // Switch content
                setFade(true); // Start fade in
            }, 500); // Wait for fade out animation
        }, 4000); // Show quote for 4 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.topBar}>
            <div className={styles.container}>
                <div className={`${styles.contentWrapper} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                    {step === 1 ? (
                        <p className={styles.text}>
                            <span className={styles.quote}>
                                "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"
                            </span>
                        </p>
                    ) : (
                        <>
                            <span className={styles.tag}>ƯU ĐÃI</span>
                            <p className={styles.text}>
                                Giảm ngay 20% cho tất cả các gói dịch vụ!
                            </p>
                        </>
                    )}
                </div>
                <button
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Đóng thông báo"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}
