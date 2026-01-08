import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`${styles.content} fade-in`}>
                <h1 className={styles.title}>
                    Nâng cấp năng lực <br />
                    Kiến tạo tương lai
                </h1>
                <p className={styles.description}>
                    Khám phá tiềm năng vô hạn của bạn và kết nối với mạng lưới chuyên gia hàng đầu trong một hệ sinh thái cao cấp được thiết kế riêng cho sự xuất sắc.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.primaryBtn}>
                        Khám phá ngay
                    </button>
                    <button className={styles.secondaryBtn}>
                        Tìm hiểu thêm
                    </button>
                </div>
            </div>
        </section>
    );
}
