"use client";

import styles from "./Features.module.css";

const FEATURES = [
    {
        icon: "radar",
        title: "Phân tích dự án thời gian thực",
        desc: "Thông tin tức thì về hiệu suất dự án và xác định các điểm nghẽn quy trình.",
    },
    {
        icon: "target",
        title: "Phân bổ nguồn lực thông minh",
        desc: "Tối ưu hóa hiệu suất của nhóm với việc phân bổ nguồn lực do AI đề xuất.",
    },
    {
        icon: "rewarded_ads",
        title: "Hệ thống khen thưởng linh hoạt",
        desc: "Tự động hóa khuyến khích dựa trên đóng góp và các mốc thành công của dự án.",
    },
    {
        icon: "notifications_active",
        title: "Cảnh báo quan trọng cá nhân hóa",
        desc: "Luôn đón đầu các vấn đề với thông báo chủ động được thiết kế riêng cho bạn.",
    },
    {
        icon: "auto_fix_high",
        title: "Tối ưu hóa tự động",
        desc: "Các pipeline tự sửa lỗi và điều chỉnh theo các biến số môi trường thay đổi.",
    },
    {
        icon: "hub",
        title: "Mạng lưới chuyên gia hợp nhất",
        desc: "Kết nối tức thì với hơn 500+ chuyên gia toàn cầu về AI và chiến lược.",
    },
    {
        icon: "insights",
        title: "Khả năng dự báo chính xác",
        desc: "Dự báo kết quả dự án với độ chính xác 99,9% dựa trên dữ liệu thực tế.",
    },
    {
        icon: "security",
        title: "Bảo mật cấp doanh nghiệp",
        desc: "Triển khai an toàn chỉ với một cú nhấp chuột nhờ giao thức mã hóa đầu cuối.",
    }
];

export default function Features() {
    return (
        <section className={`${styles.features} bg-light-section section-padding`}>
            <div className="container">
                <div className={styles.header}>
                    <div className="badge" style={{ marginBottom: '16px', background: 'rgba(37, 99, 235, 0.05)' }}>
                        <span className="badge-dot"></span>
                        DANH MỤC GIẢI PHÁP AI
                    </div>
                    <h2 className={styles.title}>
                        Giải pháp Sức mạnh AI, <br />
                        Quy trình <span style={{ color: 'var(--primary)' }}>Tối ưu</span> cùng EZD
                    </h2>
                    <p className={styles.subtitle}>
                        Trải nghiệm quản lý dự án liền mạch, phân bổ nguồn lực thông minh và kết quả đột phá nhờ sức mạnh AI của EZD.
                    </p>
                </div>

                <div className={styles.grid}>
                    {FEATURES.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <a href="#" className={styles.learnMore}>
                                Tìm hiểu thêm
                                <span className="material-symbols-outlined">east</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
