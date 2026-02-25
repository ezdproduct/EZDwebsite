"use client";

import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function SieuThatTapSinh() {
    return (
        <div className={styles.page}>
            <Navbar />

            <section className={`${styles.hero} fade-in`}>
                <div className={styles.heroBg}>
                    <div className={styles.blob1}></div>
                    <div className={styles.blob2}></div>
                </div>

                <div className={styles.container}>
                    <div className={styles.heroGlass}>
                        <div className="badge">
                            <span className="badge-dot"></span>
                            GIẢI PHÁP NHÂN SỰ AI TOÀN DIỆN
                        </div>

                        <h1 className={styles.title}>
                            Thuê thực tập sinh ảo <br />
                            "siêu thật" chỉ <span className="text-gradient">2 triệu/tháng</span>
                        </h1>

                        <p className={styles.description}>
                            AI agents chuyên biệt cho hơn 10 vị trí công việc: làm việc 24/7, không nghỉ phép, không lỗi con người – giúp doanh nghiệp tiết kiệm đến 70% chi phí junior tasks.
                        </p>

                        <div className={styles.buttons}>
                            <button className="btn-primary">
                                Thử miễn phí 7 ngày
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                            <button className="btn-secondary">
                                Đăng ký ngay
                            </button>
                        </div>

                        <div className={styles.statsGrid}>
                            <div className={`${styles.statCard} glass`}>
                                <div className={styles.statIcon}>💰</div>
                                <h3>Tiết kiệm 70%</h3>
                                <p>Giảm chi phí vận hành junior tasks</p>
                            </div>
                            <div className={`${styles.statCard} glass`}>
                                <div className={styles.statIcon}>⏰</div>
                                <h3>Làm việc 24/7</h3>
                                <p>Không nghỉ phép, luôn sẵn sàng</p>
                            </div>
                            <div className={`${styles.statCard} glass`}>
                                <div className={styles.statIcon}>🧠</div>
                                <h3>Đa nhiệm vụ</h3>
                                <p>Hơn 10 vị trí chuyên môn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.agentsSection} fade-in`}>
                <div className={styles.sectionHeader}>
                    <h2 className="font-manrope">Hãy để AI làm việc hiệu quả tối đa</h2>
                    <p>EZD cung cấp đội ngũ AI Agents toàn diện cho mọi chức năng công việc. Từ sáng tạo đến phân tích dữ liệu.</p>
                </div>

                <div className={styles.agentsGrid}>
                    <div className={`${styles.agentCard} glass`}>
                        <div className={styles.agentIcon}>📢</div>
                        <h3>AI Marketing Lead</h3>
                        <p>Lên kế hoạch chiến dịch tự động, viết nội dung và phân tích xu hướng thị trường.</p>
                        <div className={styles.status}>⚡ Đang hoạt động</div>
                    </div>
                    <div className={`${styles.agentCard} glass`}>
                        <div className={styles.agentIcon}>💻</div>
                        <h3>AI Tech Lead</h3>
                        <p>Review code, lập kế hoạch kiến trúc và hỗ trợ gỡ lỗi phức tạp.</p>
                        <div className={styles.status}>⚡ Đang hoạt động</div>
                    </div>
                    <div className={`${styles.agentCard} glass`}>
                        <div className={styles.agentIcon}>🎨</div>
                        <h3>AI Art Director</h3>
                        <p>Đánh giá UI/UX, tạo tài nguyên thiết kế và đảm bảo tính nhất quán.</p>
                        <div className={styles.status}>⚡ Đang hoạt động</div>
                    </div>
                    <div className={`${styles.agentCard} glass`}>
                        <div className={styles.agentIcon}>📊</div>
                        <h3>AI Data Analyst</h3>
                        <p>Phân tích dữ liệu sâu, đề xuất trực quan hóa và báo cáo dự đoán.</p>
                        <div className={styles.status}>⚡ Đang hoạt động</div>
                    </div>
                </div>
            </section>

            <section className={`${styles.comparison} fade-in`}>
                <div className={styles.sectionHeader}>
                    <h2 className="font-manrope">Tối ưu hơn nhân sự truyền thống</h2>
                </div>

                <div className={styles.compareGrid}>
                    <div className={`${styles.compareCard} ${styles.standard}`}>
                        <h3 className={styles.compareTitle}>Nhân sự Junior Thông thường</h3>
                        <ul className={styles.compareList}>
                            <li className={styles.compareItem}>✕ Tốn thời gian đào tạo & kèm cặp</li>
                            <li className={styles.compareItem}>✕ Giới hạn thời gian (8h/ngày)</li>
                            <li className={styles.compareItem}>✕ Dễ mắc lỗi trong tác vụ lặp lại</li>
                        </ul>
                    </div>

                    <div className={`${styles.compareCard} ${styles.premium} glass`}>
                        <h3 className={styles.compareTitle}>Siêu 'thật' tập sinh AI</h3>
                        <ul className={styles.compareList}>
                            <li className={styles.compareItem}>✓ Làm việc ngay, không cần training</li>
                            <li className={styles.compareItem}>✓ Hoạt động 24/7 chính xác cao</li>
                            <li className={styles.compareItem}>✓ Tiết kiệm chi phí đáng kể</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={`${styles.footerCTA} fade-in`}>
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>Sẵn sàng tối ưu hóa doanh nghiệp?</h2>
                    <p className={styles.ctaDesc}>Tham gia ngay hôm nay để trải nghiệm đội ngũ nhân sự AI chuyên nghiệp. Chuẩn bị cho tương lai của công việc.</p>
                    <div className={styles.buttons}>
                        <button className="btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>Đăng ký ngay</button>
                        <button className="btn-secondary" style={{ background: 'transparent', color: 'white', borderColor: 'white' }}>Liên hệ tư vấn</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
