"use client";

import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Link from "next/link";

export default function AiAgents() {
    return (
        <div className={styles.page}>
            <Navbar />

            <div className={styles.bgAura}></div>

            <main className={`${styles.main} fade-in`}>
                <section className={styles.hero}>
                    <div className="badge">
                        <span className="badge-dot"></span>
                        · MIỄN PHÍ · CHUYỂN GIAO
                    </div>

                    <h1 className={styles.massiveHeading}>
                        <span>CHUYỂN GIAO</span>
                        <span>CÔNG NGHỆ</span>
                        <div className={styles.headingRow}>
                            <span className={styles.aiBadge}>AI AGENTS</span>
                        </div>
                        <span className={styles.subText}>
                            Cho cá nhân khởi nghiệp và tổ chức tối ưu vận hành
                        </span>
                    </h1>

                    <div className={styles.heroBadges}>
                        <div className={styles.zeroBadge}>
                            0₫ <span>/ trọn đời</span>
                        </div>
                        <div className="badge" style={{ background: 'white', border: '1px solid #e2e8f0' }}>
                            <span className="badge-dot" style={{ background: '#22c55e', boxShadow: '0 0 10px #22c55e' }}></span>
                            CỘNG ĐỒNG MỞ
                        </div>
                    </div>

                    <p className={styles.heroDesc}>
                        Ứng dụng trí tuệ nhân tạo đột phá, chuyển giao miễn phí quy trình, mã nguồn và hệ sinh thái kỹ thuật số giúp bạn tự động hóa, tối ưu doanh thu.
                    </p>

                    <div className={styles.heroButtons}>
                        <button className="btn-primary" style={{ padding: '24px 48px', fontSize: '20px' }}>
                            Bắt đầu ngay
                            <span className="material-symbols-outlined">east</span>
                        </button>
                        <button className="btn-secondary" style={{ padding: '24px 48px', fontSize: '20px' }}>
                            <span className="material-symbols-outlined" style={{ marginRight: '8px' }}>visibility</span>
                            Xem quy trình
                        </button>
                    </div>
                </section>

                <section className={styles.benefitsSection}>
                    <div className={styles.benefitCard}>
                        <span className={`material-symbols-outlined ${styles.benefitIcon}`}>groups</span>
                        <h3>Cộng đồng kỹ sư</h3>
                        <p>Kết nối 500+ chuyên gia AI, chia sẻ mã nguồn agent và quy trình thực chiến.</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <span className={`material-symbols-outlined ${styles.benefitIcon}`}>terminal</span>
                        <h3>Mã nguồn mở</h3>
                        <p>Toàn bộ thư viện AI agent, pipeline xử lý dữ liệu được public miễn phí.</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <span className={`material-symbols-outlined ${styles.benefitIcon}`}>rocket_launch</span>
                        <h3>Triển khai nhanh</h3>
                        <p>Quy trình chuẩn hoá giúp giảm 70% thời gian áp dụng AI vào vận hành.</p>
                    </div>
                </section>

                <section className={styles.tierGrid}>
                    <div className={`${styles.tierCard} ${styles.individual} fade-in`}>
                        <div className={styles.priceTag}>0đ</div>
                        <h2>DÀNH CHO CÁ NHÂN</h2>
                        <p>Tự xây dựng mô hình kinh doanh và kiếm tiền từ AI Agents một cách chuyên nghiệp.</p>
                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>· Xây dựng AI Agent tư vấn bán hàng 24/7</li>
                            <li className={styles.featureItem}>· Tạo nguồn thu nhập thụ động</li>
                            <li className={styles.featureItem}>· Tự động hóa sáng tạo nội dung</li>
                            <li className={styles.featureItem}>· Khởi nghiệp tinh gọn với chi phí 0đ</li>
                        </ul>
                    </div>

                    <div className={`${styles.tierCard} ${styles.organization} fade-in`}>
                        <div className={styles.priceTag}>0đ</div>
                        <h2>DÀNH CHO TỔ CHỨC</h2>
                        <p>Tích hợp AI để tự động hóa quy trình và cung cấp giải pháp thông minh cho khách hàng.</p>
                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>· Tích hợp AI vào quy trình sẵn có</li>
                            <li className={styles.featureItem}>· Cung cấp giải pháp cho khách hàng</li>
                            <li className={styles.featureItem}>· Giảm thiểu 70% chi phí vận hành</li>
                            <li className={styles.featureItem}>· Triển khai kinh doanh số toàn diện</li>
                        </ul>
                    </div>
                </section>

                <section className={`${styles.securitySection} fade-in`}>
                    <div className="badge" style={{ marginBottom: '24px' }}>
                        Cam kết · Bảo mật · Minh bạch
                    </div>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '950', marginBottom: '24px', textTransform: 'uppercase' }}>
                        Vận hành có <span className="text-gradient">trách nhiệm</span>
                    </h2>

                    <div className={styles.securityGrid}>
                        <div className={`${styles.securityCard} ${styles.blueCard}`}>
                            <h3>BẢO MẬT DỮ LIỆU</h3>
                            <p>Mã hóa đầu cuối AES-256 · On-premise LLMs · Không chia sẻ dữ liệu huấn luyện.</p>
                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}>· Dữ liệu thuộc quyền sở hữu của bạn 100%</li>
                                <li className={styles.featureItem}>· Tùy chọn triển khai offline hoàn toàn</li>
                                <li className={styles.featureItem}>· Kiểm soát truy cập phân quyền chi tiết</li>
                                <li className={styles.featureItem}>· Tuyệt đối không chia sẻ dữ liệu</li>
                            </ul>
                        </div>

                        <div className={`${styles.securityCard} ${styles.whiteCard}`}>
                            <h3>ĐẠO ĐỨC AI</h3>
                            <p>Minh bạch trong quyết định, loại bỏ thiên kiến, con người giám sát.</p>
                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}>· Giải trình được các suy luận của AI</li>
                                <li className={styles.featureItem}>· Kiểm soát bias theo chuẩn quốc tế</li>
                                <li className={styles.featureItem}>· Human-in-the-loop cho tác vụ nhạy cảm</li>
                                <li className={styles.featureItem}>· Tuân thủ quy chuẩn đạo đức mở</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.newsletterSection}>
                    <h2 className="text-gradient">Bạn sẵn sàng bứt phá?</h2>
                    <p>Đăng ký ngay để nhận bản tin công nghệ AI agent hàng tuần và danh mục giải pháp <br /> chuyển giao mới nhất.</p>
                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Email của bạn" />
                        <button className={styles.submitBtn}>
                            Tham gia
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                    <p style={{ fontSize: '14px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="badge-dot" style={{ background: '#22c55e', width: '6px', height: '6px' }}></span>
                        Hoàn toàn miễn phí, hủy bất cứ lúc nào
                    </p>
                </section>
            </main>
        </div>
    );
}
