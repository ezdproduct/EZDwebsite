"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "./page.module.css";

const services = [
    {
        title: "AI Agents",
        subtitle: "Chuyển giao công nghệ",
        description: "Ứng dụng trí tuệ nhân tạo đột phá, chuyển giao miễn phí quy trình, mã nguồn và hệ sinh thái kỹ thuật số giúp bạn tự động hóa, tối ưu doanh thu.",
        link: "/ai-agents",
        icon: "smart_toy",
        color: "#3b82f6",
    },
    {
        title: "Siêu thực tập sinh",
        subtitle: "Chương trình tinh hoa",
        description: "Cây cầu nối tối ưu giữa lý thuyết học thuật và tác động thực tế. Tham gia chương trình thực tập được thiết kế cho các nhà lãnh đạo tương lai.",
        link: "/sieu-thuc-tap-sinh",
        icon: "school",
        color: "#10b981",
    },
    {
        title: "Siêu 'thật' tập sinh",
        subtitle: "Nhân sự ảo 24/7",
        description: "AI agents chuyên biệt cho hơn 10 vị trí công việc: làm việc 24/7, không nghỉ phép – giúp doanh nghiệp tiết kiệm đến 70% chi phí.",
        link: "/sieu-that-tap-sinh",
        icon: "hail",
        color: "#8b5cf6",
    }
];

export default function ServicesPage() {
    return (
        <div className={styles.page}>
            <Navbar />

            <div className={styles.bgAura}></div>

            <main className={`${styles.main} fade-in`}>
                <header className={styles.header}>
                    <div className="badge">
                        HỆ SINH THÁI EZD
                    </div>
                    <h1 className={styles.title}>
                        Giải pháp <span className="text-gradient">Đột phá</span> <br />
                        Kiến tạo Tương lai
                    </h1>
                    <p className={styles.subtitle}>
                        Chúng tôi cung cấp các giải pháp AI và đào tạo chuyên sâu,
                        giúp cá nhân và doanh nghiệp làm chủ công nghệ mới nhất.
                    </p>
                </header>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ "--accent": service.color } as any}
                        >
                            <div className={styles.iconWrapper}>
                                <span className={`material-symbols-outlined ${styles.icon}`}>
                                    {service.icon}
                                </span>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.serviceSubtitle}>{service.subtitle}</div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </div>
                            <Link href={service.link} className={styles.detailBtn}>
                                Chi tiết
                                <span className="material-symbols-outlined">north_east</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={styles.footerCTA}>
                    <Link href="/" className="btn-secondary">
                        <span className="material-symbols-outlined">west</span>
                        Quay lại trang chủ
                    </Link>
                </div>
            </main>
        </div>
    );
}
