"use client";

import styles from "./TopBar.module.css";

interface TopBarProps {
    onClose: () => void;
}

export default function TopBar({ onClose }: TopBarProps) {
    return (
        <div className={styles.topBar}>
            <div className={styles.container}>
                <span className={styles.tag}>ƯU ĐÃI</span>
                <p className={styles.text}>
                    <span className={styles.quote}>"Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người"</span>
                    <span className={styles.divider}>—</span>
                    Giảm ngay 20% cho tất cả các gói dịch vụ!
                </p>
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
