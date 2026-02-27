"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './ServiceAccordion.module.css';

const SERVICES = [
    {
        id: 'sieu-that',
        title: "Siêu 'thật' tập sinh",
        description: "Giải pháp \"thuê\" nhân sự ảo, nhằm mang đến đội ngũ AI Agent có khả năng làm việc hiệu quả ở các vị trí Marketing, Data, Tech... với chi phí tối ưu.",
        link: "/sieu-that-tap-sinh",
        gradient: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
        textColor: "#ffffff"
    },
    {
        id: 'sieu-thuc',
        title: "Siêu thực tập sinh",
        description: "Chương trình thực tập huấn luyện thế hệ tương lai, giúp các bạn \"nâng cấp\" qua các dự án thực chiến có tác động thật.",
        link: "/sieu-thuc-tap-sinh",
        gradient: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
        textColor: "#0f172a"
    },
    {
        id: 'ai-agents',
        title: "Chuyển giao công nghệ",
        description: "Chuyển giao công nghệ AI chuyên biệt, giúp doanh nghiệp tự động hóa quy trình và tối ưu hóa doanh thu 24/7.",
        link: "/ai-agents",
        gradient: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
        textColor: "#ffffff"
    }
];

export default function ServiceAccordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className={styles.section}>
            <div className={styles.accordionContainer}>
                {SERVICES.map((service, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div
                            key={service.id}
                            className={`${styles.panel} ${isActive ? styles.active : ''}`}
                            style={{
                                backgroundImage: service.gradient,
                                color: service.textColor
                            }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className={styles.header}>
                                <div className={styles.toggle} style={{ borderColor: service.textColor === '#ffffff' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.2)' }}>
                                    {isActive ? (
                                        <span className={styles.minus} style={{ backgroundColor: service.textColor }}></span>
                                    ) : (
                                        <span className={styles.plus} style={{ backgroundColor: service.textColor }}></span>
                                    )}
                                </div>
                            </div>

                            <div className={styles.content}>
                                <h2 className={styles.title} style={{ color: service.textColor }}>{service.title}</h2>
                                {isActive && (
                                    <div className={styles.details}>
                                        <p className={styles.description} style={{ color: service.textColor === '#ffffff' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.8)' }}>{service.description}</p>
                                        <Link href={service.link} className={styles.link} style={{ color: service.textColor, borderColor: service.textColor }}>
                                            Tìm hiểu thêm
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
