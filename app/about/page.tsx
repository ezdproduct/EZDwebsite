import styles from './about.module.css';

import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.aboutHero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Về EZD.VN</span>
                        <h1 className={styles.title}>
                            Định hình tương lai <br />
                            <span className="text-gradient">Bằng giải pháp AI thực chiến</span>
                        </h1>
                        <p className={styles.subtitle}>
                            EZD không chỉ là một đơn vị công nghệ. Chúng tôi là người đồng hành,
                            thu hẹp khoảng cách giữa trí tuệ nhân tạo đột phá và hiệu quả vận hành thực tế tại Việt&nbsp;Nam.
                        </p>
                    </div>
                </div>

                {/* Background light effects similar to Homepage */}
                <div className={styles.lightStreamLeft}></div>
                <div className={styles.lightStreamRight}></div>
            </section>

            {/* Vision & Mission Summary */}
            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionText}>
                            <h2>Tầm nhìn của chúng tôi</h2>
                            <p>
                                Trở thành đối tác trong việc <strong>"Phổ cập AI cho các doanh nghiệp"</strong>.
                                Chúng tôi không chỉ xây dựng phần mềm, chúng tôi kiến tạo những "nhân sự số"
                                thông minh, tận tâm và không ngừng học hỏi để nâng tầm giá trị cho khách hàng.
                            </p>
                        </div>
                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>24/7</span>
                                <span className={styles.statLabel}>Vận hành mượt mà</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statLabel}>Tập trung giải pháp AI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.smallBadge}>Dịch vụ của chúng tôi</span>
                        <h2>3 MẢNG GIÁ TRỊ CỐT LÕI</h2>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h3>Siêu 'thật' tập sinh</h3>
                            <p>Giải pháp "thuê" nhân sự ảo, nhằm mang đến đội ngũ AI Agent có khả năng làm việc hiệu quả ở các vị trí Marketing, Data, Tech... với chi phí tối ưu.</p>
                            <Link href="/sieu-that-tap-sinh" className={styles.cardLink}>Xem chi tiết</Link>
                        </div>

                        <div className={styles.card}>
                            <h3>Siêu thực tập sinh</h3>
                            <p>Chương trình thực tập huấn luyện thế hệ tương lai, giúp các bạn "nâng cấp" qua các dự án thực chiến có tác động thật.</p>
                            <Link href="/sieu-thuc-tap-sinh" className={styles.cardLink}>Xem chi tiết</Link>
                        </div>

                        <div className={styles.card}>
                            <h3>Chuyển giao<br />công nghệ</h3>
                            <p>Chuyển giao công nghệ AI chuyên biệt, giúp doanh nghiệp tự động hóa quy trình và tối ưu hóa doanh thu 24/7.</p>
                            <Link href="/ai-agents" className={styles.cardLink}>Xem chi tiết</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

