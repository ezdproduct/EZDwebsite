"use client";

import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function SieuThucTapSinh() {
    return (
        <div className={styles.page}>
            <Navbar />

            <main className={`${styles.main} fade-in`}>
                {/* Hero Section */}
                <section className={`${styles.hero} glass`}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <div className="badge">
                                <span className="badge-dot"></span>
                                CHƯƠNG TRÌNH CHÍNH THỨC 2024
                            </div>
                            <h1 className={styles.title}>
                                Giải phóng tiềm năng cùng <br />
                                <span className="text-gradient">Siêu Thực Tập Sinh</span>
                            </h1>
                            <p className={styles.description}>
                                Cây cầu nối tối ưu giữa lý thuyết học thuật và tác động thực tế. Tham gia chương trình thực tập tinh hoa được thiết kế cho các nhà lãnh đạo tương lai.
                            </p>

                            <div className={styles.heroButtons}>
                                <button className="btn-primary">
                                    Ứng tuyển ngay
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                                <button className="btn-secondary">
                                    Tải Syllabus
                                </button>
                            </div>

                            <div className={styles.socialProof}>
                                <div className={styles.avatars}>
                                    <div className={styles.avatar} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWBLmQ4bHo_h_R4oHM1PSd1E4ueO6TyW7f692OfMle8Qfsl7UQGiagdV6hEqptDAaS2BI0Y21Ix5lFk-LOV71omKzVp3eam-mJEgxOq6F4ZJJ7uBo_r1owKTR7q-JKPp8LvIhXvxILPtQjvPFfEtETDFwYxKsor38LbpghWRTWS9MQh5qmKtdhSsbVNSTvuRorQh8qlFMrLf543S4myEZ2sloQ-EySxvOZx4oxEtfqLtX5Kj2iNCBViTuJa5TapP2qYBkb-1LwOaEM')" }}></div>
                                    <div className={styles.avatar} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5GvC1wim_CY-0j4kwmb2ySitOGXJg7X0pYLF4zgjd4zSs4lPqaxV-5MSpyyKE16gdPpZM5RX-oS4bK0upKOpTKy-mNCEppiDA3CF2J698CNQHrPZ8ldBpbZjFHx9qC6CKfWQy6egWElk5NU-zWp21wa23DtX5tm7WtRjeFB2l-Dv9p3SBdgO9xGNtwrb7ZvrPwcCyTo2SVkBUBZEqrXzCQSjTBrvjAXssdSW2me02ytBAmfdBFT6QjLus4z08QhjKsYPD8JUhTUvD')" }}></div>
                                    <div className={styles.avatar} style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiyJMtedhFkPfhdZTiCQ4aUuyYFB8BgFgekrlqT5f2AuSYCj3lBUU5MtYvXpFEDgsgsbnxYC5kELrKs_7kHJBgDgM4um29nJZ2VYY3KnxAPXuPDa_wsIr9d5h3UHJPE0FiBNJYw1HqCYiEakJe4sJ4P83mddiryONFvyEbL95cGLkyh8QX5RpfTmhdaEt6SDFE0f5ZePUVV9-sTu3ckyynlNrknqvKkIuJRTh_6KZ2oCMFjSId77cTVvVPi5iWKiSJefkf_9WbPrMi')" }}></div>
                                </div>
                                <p className={styles.proofText}>Được tham gia bởi hơn 500 sinh viên từ các đại học hàng đầu</p>
                            </div>
                        </div>

                        <div className={styles.heroImageContainer}>
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtVppvYgIITbndxX0hY8Na65CnYoGSzwd0fLSZ4rdIbxMWIrOluVTaiFYiOKSfIRSUKIppzXeOW6veRk64HCb_YJcM-pFizzlbFPbaiLeapGyzjKM45-UzW8eIo0lQwzrzGQlGKTvmaFquqtVJX2vYXFNypiUlzv5hWPUhqKBKiNRP7P7i78wuy00LuOJSaWcQ59YCdY3hDqIYaDqmXYJA1lwpg9kiGMYcxDKHCBWgs_PDwM1PAuju4nnFxFCT9_0jzkGsUp3F4MOa"
                                alt="Super Interns"
                                className={styles.heroImage}
                            />
                            <div className={`${styles.floatingBadge} glass`}>
                                <div className={styles.badgeInfo}>
                                    <p>Khóa tiếp theo</p>
                                    <p>Bắt đầu 15 tháng 10</p>
                                </div>
                                <div className={styles.calIcon}>📅</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className={`${styles.features} fade-in`}>
                    <div className={styles.sectionHeader}>
                        <h2 className="font-manrope">Tại sao chọn EZD Super Interns?</h2>
                        <p>Vượt qua những công việc pha cà phê đơn thuần. Trải nghiệm chương trình tập trung vào tác động, nâng cao kỹ năng và kết nối thực tế.</p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.iconBox} style={{ background: '#eff6ff', color: '#2b6cee' }}>💼</div>
                            <h3>Dự án thực tế</h3>
                            <p>Làm việc trên các tình huống kinh doanh trực tiếp. Code và chiến lược của bạn sẽ tác động đến người dùng thực.</p>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.iconBox} style={{ background: '#eef2ff', color: '#4f46e5' }}>👥</div>
                            <h3>Cố vấn chuyên gia</h3>
                            <p>Các buổi 1-kèm-1 hàng tuần với các chuyên gia dày dạn kinh nghiệm từ các công ty công nghệ hàng đầu.</p>
                        </div>
                        <div className={`${styles.featureCard} glass`}>
                            <div className={styles.iconBox} style={{ background: '#ecfeff', color: '#0891b2' }}>🏅</div>
                            <h3>Chứng chỉ uy tín</h3>
                            <p>Nhận chứng chỉ được công nhận sau khi hoàn thành, cùng với việc đánh giá portfolio chuyên nghiệp.</p>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className={`${styles.tableSection} fade-in`}>
                    <div className={`${styles.tableWrapper} glass`}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Tính năng</th>
                                    <th>Thực tập truyền thống</th>
                                    <th style={{ color: '#2b6cee' }}>EZD Super Interns</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.featureName}>Tác động dự án</td>
                                    <td>Thấp, chỉ quan sát</td>
                                    <td className={styles.check}>✓ Tác động cao, sở hữu dự án</td>
                                </tr>
                                <tr>
                                    <td className={styles.featureName}>Phát triển kỹ năng</td>
                                    <td>Học tập tự phát</td>
                                    <td className={styles.check}>✓ Lộ trình đào tạo bài bản</td>
                                </tr>
                                <tr>
                                    <td className={styles.featureName}>Mạng lưới kết nối</td>
                                    <td>Hạn chế tiếp cận</td>
                                    <td className={styles.check}>✓ Kết nối trực tiếp lãnh đạo</td>
                                </tr>
                                <tr>
                                    <td className={styles.featureName}>Kết quả</td>
                                    <td>Thư xác nhận kinh nghiệm</td>
                                    <td className={styles.check}>✓ Portfolio & Chứng chỉ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Roadmap Section */}
                <section className={`${styles.roadmap} fade-in`}>
                    <div className={styles.sectionHeader}>
                        <h2 className="font-manrope">Hành trình 12 tuần của bạn</h2>
                        <p>Từ những kiến thức cơ bản đến những buổi trình bày thực tế.</p>
                    </div>

                    <div className={styles.timeline}>
                        <div className={`${styles.step} glass`}>
                            <div className={styles.stepIcon}>📚</div>
                            <div className={styles.stepHeader}>
                                <h3>Giai đoạn 1: Onboarding & Cơ bản</h3>
                                <span className={styles.week}>Tuần 1-2</span>
                            </div>
                            <p>Giới thiệu văn hóa công ty, thiết lập công cụ và các module đào tạo nền tảng. Làm quen với người cố vấn của bạn.</p>
                        </div>

                        <div className={`${styles.step} glass`}>
                            <div className={styles.stepIcon}>🛠️</div>
                            <div className={styles.stepHeader}>
                                <h3>Giai đoạn 2: Đi sâu kỹ năng</h3>
                                <span className={styles.week}>Tuần 3-5</span>
                            </div>
                            <p>Các buổi thảo luận chuyên sâu và thực hành có hướng dẫn. Bạn sẽ bắt đầu đóng góp vào các nhiệm vụ thực tế của nhóm.</p>
                        </div>

                        <div className={`${styles.step} glass`}>
                            <div className={styles.stepIcon}>🚀</div>
                            <div className={styles.stepHeader}>
                                <h3>Giai đoạn 3: Dự án thực tế</h3>
                                <span className={styles.week}>Tuần 6-10</span>
                            </div>
                            <p>Làm chủ một dự án lớn. Bạn sẽ dẫn dắt việc thực thi, cộng tác với các nhóm liên chức năng và giải quyết các bài toán thật.</p>
                        </div>

                        <div className={`${styles.step} glass`}>
                            <div className={styles.stepIcon}>🎓</div>
                            <div className={styles.stepHeader}>
                                <h3>Giai đoạn 4: Tốt nghiệp & Demo Day</h3>
                                <span className={styles.week}>Tuần 12</span>
                            </div>
                            <p>Trình bày dự án trước ban lãnh đạo. Nhận chứng chỉ, đánh giá portfolio và cơ hội làm việc chính thức.</p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className={`${styles.footerCTA} fade-in`}>
                    <h2 className={`${styles.ctaTitle} font-manrope`}>Sẵn sàng để bứt phá sự nghiệp?</h2>
                    <p className={styles.ctaDesc}>Tham gia cộng đồng EZD Super Interns và biến tiềm năng của bạn thành sự xuất sắc chuyên nghiệp.</p>
                    <div className={styles.ctaButtons}>
                        <button className="btn-primary" style={{ background: 'white', color: 'var(--primary)', padding: '20px 48px', fontSize: '18px' }}>Ứng tuyển ngay</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
