"use client";

import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

const CATALOG_DATA = [
    {
        id: "media",
        title: "Nội dung & Đa phương tiện",
        list: [
            "AI Clone Voice cá nhân (độ chính xác 99%)",
            "Text to Speech đọc tiếng Việt đa vùng miền",
            "Transcription tòa án (phân tách 10+ người nói)",
            "Ghi âm & Tóm tắt họp hành đa kênh (Zoom, Meet)",
            "Multilingual Dubbing (Lồng tiếng phim/video)",
            "Audio Book & Trình đọc văn bản cho người khiếm thị",
            "Tạo Podcast/Radio từ Script tự động 100%",
            "Sound Effect Generator cho phim & quảng cáo",
            "Karaoke Backing Track Creator (tách lời mượt)",
            "AI Restoration: Tô màu & Phục chế ảnh cổ",
            "Character Consistency: Giữ nguyên nhân vật/style",
            "Dựng hình 3D & Virtual Home Staging (Nội thất)",
            "Mockup sản phẩm 360 độ từ mô tả văn bản",
            "Virtual Try-on cho thời trang và phụ kiện",
            "Tạo Video TikTok từ Script/Văn bản tự động",
            "Video Marketing: Cá nhân hóa theo tên khách hàng",
            "Avatar AI nói chuyện tự nhiên (Deepfake-free)",
            "Tạo tranh Đông Hồ/Hàng Trống hiện đại bằng AI",
            "AI Comic/Manga Creator: Tạo truyện tranh từ kịch bản",
            "Sáng tác thơ, lời bài hát & Giai điệu theo mood"
        ]
    },
    {
        id: "tech",
        title: "Dữ liệu & Công nghệ",
        list: [
            "AI BA: Phân tích sâu BRD/SRS & User Stories",
            "Trích xuất PDF: Lấy dữ liệu tọa độ & Bảng biểu",
            "Cross-reference dữ liệu đa Spreadsheet",
            "SQL Business Insights: Truy vấn DB bằng tiếng Việt",
            "Phân loại dữ liệu lớn theo chủ đề & Sentiment",
            "Dự báo Market Trends từ dữ liệu E-commerce",
            "Automate Admin: Email, Docs, G-Calendar sync",
            "Agentic Orchestration: Điều phối 20+ Agents",
            "AI nhập liệu Excel từ hóa đơn/ảnh chụp 24/7",
            "Web Scraping & Theo dõi giá đối thủ tự động",
            "Code Review & Tối ưu hóa Database chuyên sâu",
            "Generate Unit Test & Debug code base lớn",
            "AI Crawler & Data Extraction (mọi website/app)",
            "AI Dev Agent: Tự code & Sửa bug theo yêu cầu",
            "SQL Stats & Insights generation (Phân tích DB lớn)",
            "Enterprise Search: Tìm kiếm nội dung trong mã nguồn",
            "Sắp xếp file & Clean-up hệ thống dữ liệu tự động"
        ]
    },
    {
        id: "marketing",
        title: "Marketing & Thương hiệu",
        list: [
            "Viết kịch bản TikTok Shorts & Reels (Trend-ready)",
            "Viết Content Facebook Group & Bio Instagram",
            "YouTube Thumbnail & Video Script Generator",
            "Creative Ads Optimization (Facebook/Tiktok Ads)",
            "Motivational Quotes & Daily Affirmation Creator",
            "Blog SEO & Landing Page copywriter",
            "AI tìm Hashtag & Lịch đăng bài tối ưu engagement",
            "Content Calendar: Lên kế hoạch nội dung cả năm",
            "Slogan & Brand Messaging cho Startup/Cá nhân",
            "Email Marketing: Sequence & Newsletter Automation",
            "Thiết kế Logo & Brand Identity (Startup kit)",
            "Tạo Moodboard & Concept Wedding/Event",
            "AI In sán: Tạo File in (áo thun, poster) từ Text"
        ]
    },
    {
        id: "business",
        title: "Vận hành & Doanh nghiệp",
        list: [
            "Virtual Sales Assistant cho Livestream & Chat",
            "AI Kế toán: Quản lý hóa đơn & Cảnh báo thuế",
            "CSKH tự động (Hậu mãi, Bảo hành, Đổi trả)",
            "Dự báo tồn kho & Chuỗi cung ứng thông minh",
            "Quản lý nhân sự: Sàng lọc CV & Phỏng vấn sơ bộ AI",
            "Soạn thảo quy trình vận hành SOP tự động",
            "AI Training nội bộ: Tạo tài liệu đào tạo nhân viên",
            "Phân tích đối thủ cạnh tranh & Feedback khách hàng",
            "AI Nông dân: Bắt bệnh cây trồng & Lịch tưới tiêu",
            "AI Y tế: Minh họa y khoa & Tóm tắt bệnh án",
            "AI Bất động sản: Định giá & Mô tả nhà đất SEO",
            "AI Ngân hàng: Phân tích rủi ro tín dụng & KYC",
            "AI Sản xuất: Dự báo bảo trì máy móc (Predictive)",
            "AI Luật: Phân tích bản án & Áp dụng án lệ VN",
            "Virtual Assistant cho Small Business Owner"
        ]
    },
    {
        id: "edu",
        title: "Học tập & Phát triển",
        list: [
            "AI Hướng nghiệp: Khám phá đam mê cá nhân",
            "Tạo Flashcard & Tài liệu học ngoại ngữ cá nhân hóa",
            "Generate đề thi trắc nghiệm (Tài, Sử, Địa, Anh...)",
            "Viết CV & Thư xin việc (ATS-friendly) mượt mà",
            "Trợ lý học tập: Tóm tắt bài giảng & Giải đáp thắc mắc",
            "AI tạo lộ trình phát triển kỹ năng 6 tháng",
            "Giáo viên ảo dạy phát âm & giao tiếp ngôn ngữ",
            "Viết Case Study kinh doanh & Phân tích học thuật",
            "Tạo Mindmap từ nội dung tài liệu dài/phức tạp",
            "Trợ lý nghiên cứu khoa học & Kiểm tra đạo văn",
            "Tự động tạo Documentation & README cho dự án",
            "Dev Assistant: Xử lý tài liệu code dài/không mất context"
        ]
    },
    {
        id: "personal",
        title: "Cá nhân & Đời sống",
        list: [
            "AI quản lý tài chính & Chi tiêu gia đình (AI Wealth)",
            "Trợ lý dinh dưỡng & Gợi ý nấu ăn từ nguyên liệu sẵn",
            "Lịch nhắc bảo dưỡng thiết bị gia đình & Ô tô",
            "AI hỗ trợ giải quyết yêu cầu bảo hiểm/thủ tục hành chính",
            "Trợ lý phong cách: Outfit & Skincare routine daily",
            "AI viết thiệp chúc mừng & Lời chúc Tết cá nhân hóa",
            "Tạo thiệp cưới ảo & Thư mời sự kiện ấn tượng",
            "AI trợ giúp thiền & Chăm sức khỏe tinh thần",
            "Theo dõi thói quen & Nhắc nhở kỷ luật bản thân",
            "Quản lý tủ sách & Gợi ý nội dung đọc phù hợp",
            "Thiết kế thời trang & Virtual Try-on cho cá nhân"
        ]
    }
];

function CatalogTabs() {
    const [activeTab, setActiveTab] = useState(CATALOG_DATA[0].id);
    const [isPaused, setIsPaused] = useState(false);
    const activeData = CATALOG_DATA.find(item => item.id === activeTab);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveTab((current) => {
                const currentIndex = CATALOG_DATA.findIndex(item => item.id === current);
                const nextIndex = (currentIndex + 1) % CATALOG_DATA.length;
                return CATALOG_DATA[nextIndex].id;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleTabClick = (id: string) => {
        setActiveTab(id);
        setIsPaused(true);
    };

    return (
        <div
            className={styles.catalogContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Left Column: Categories */}
            <div className={styles.catalogSidebar}>
                {CATALOG_DATA.map((item) => (
                    <button
                        key={item.id}
                        className={`${styles.tabBtn} ${activeTab === item.id ? styles.activeTab : ""}`}
                        onClick={() => handleTabClick(item.id)}
                    >
                        {item.title}
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                ))}
            </div>

            {/* Right Column: Detailed List */}
            <div className={styles.catalogContent}>
                <ul className={styles.activeList} key={activeTab}>
                    {activeData?.list.map((solution, idx) => {
                        const categoryLetter = activeData.id.charAt(0).toUpperCase();
                        const itemCode = `#${categoryLetter}${String(idx + 1).padStart(3, '0')}`;
                        return (
                            <li key={idx} className="fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                                <span className={styles.itemNumber}>{itemCode}</span>
                                {solution}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

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



                <section className={`${styles.tierGrid} fade-in`}>
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

                <section className={styles.secHeader}>
                    <h2 className={styles.secTitle}>Hệ sinh thái AI</h2>
                    <p className={styles.secDesc}>200+ giải pháp cho các tác vụ</p>
                </section>

                <CatalogTabs />

                <section className={`${styles.securitySection} fade-in`}>
                    <div className="badge" style={{ marginBottom: '24px' }}>
                        Cam kết · Bảo mật · Minh bạch
                    </div>
                    <h2 className={styles.secTitle}>
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
