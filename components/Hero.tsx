import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`${styles.content} fade-in`}>
                <div className="badge">
                    <span className="badge-dot"></span>
                    PHIÊN BẢN 2.0 ĐÃ RA MẮT
                </div>

                <h1 className={styles.title}>
                    Nền tảng <br />
                    <span className="text-gradient">nâng cấp năng lực</span> <br />
                    và kết nối chuyên gia
                </h1>

                <p className={styles.description}>
                    Khám phá tiềm năng vô hạn của bạn trong một cộng đồng tinh hoa,
                    được thiết kế để kiến tạo sự phát triển bền vững và đột phá.
                </p>

                <div className={styles.buttons}>
                    <button className="btn-primary">
                        Khám phá ngay
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    <button className="btn-secondary">
                        <div className={styles.playIcon}>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        Tìm hiểu thêm
                    </button>
                </div>
            </div>
        </section>
    );
}

