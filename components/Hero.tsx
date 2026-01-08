import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`${styles.content} fade-in`}>
                <div className={styles.badge}>Next.js 16 Ready</div>
                <p className={styles.subBadge}>Hoạt động trong lĩnh vực công nghệ</p>
                <h1 className={styles.title}>
                    Khám phá kỷ nguyên <br />
                    <span className={styles.gradientText}>Sáng tạo số</span>
                </h1>
                <p className={styles.description}>
                    Xây dựng ứng dụng web nhanh hơn, đẹp hơn và thông minh hơn với hệ sinh thái Next.js App Router mạnh mẽ.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.primaryBtn}>Khám phá thêm</button>
                    <button className={styles.secondaryBtn}>Xem tài liệu</button>
                </div>
            </div>
            <div className={styles.visual}>
                <div className={styles.blob}></div>
                <div className={styles.glow}></div>
            </div>
        </section>
    );
}
