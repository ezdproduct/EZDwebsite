'use client';

import { useEffect, useState } from 'react';
import styles from './VietnameseOnlyPopup.module.css';
import { supabase } from '@/lib/supabase';

export default function VietnameseOnlyPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [email, setEmail] = useState('');
    const [zalo, setZalo] = useState('');
    const [errors, setErrors] = useState({ email: '', zalo: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Check if user already registered to avoid showing popup again
        const hasRegistered = localStorage.getItem('ezd_registered');
        if (hasRegistered) return;

        // Show popup after 10 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
            // Reset form
            setEmail('');
            setZalo('');
            setErrors({ email: '', zalo: '' });
        }, 300);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateZalo = (zalo: string) => {
        // Vietnamese phone number: starts with 0, followed by 9 or 10 digits
        const zaloRegex = /^0[0-9]{9,10}$/;
        return zaloRegex.test(zalo);
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset errors
        const newErrors = { email: '', zalo: '' };

        // Validate email
        if (!email) {
            newErrors.email = 'Vui lòng nhập email';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        // Validate Zalo
        if (!zalo) {
            newErrors.zalo = 'Vui lòng nhập số Zalo';
        } else if (!validateZalo(zalo)) {
            newErrors.zalo = 'Số Zalo không hợp lệ (10-11 số, bắt đầu bằng 0)';
        }

        setErrors(newErrors);

        // If there are errors, don't submit
        if (newErrors.email || newErrors.zalo) {
            return;
        }

        // Submit form
        setIsSubmitting(true);

        try {
            // Save data to Supabase
            const { error } = await supabase
                .from('registrations')
                .insert([{ email, zalo }]);

            if (error) throw error;

            console.log('Đăng ký thành công với Supabase:', { email, zalo });

            // Store flag in localStorage so it doesn't show up again
            localStorage.setItem('ezd_registered', 'true');

            alert(`Đăng ký thành công! Chào mừng bạn đến với EZD.`);
            handleClose();
        } catch (error: any) {
            console.error('Supabase error:', error);
            alert('Có lỗi xảy ra khi lưu thông tin. Vui lòng thử lại!');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Overlay without click handler - cannot close by clicking outside */}
            <div className={`${styles.overlay} ${isClosing ? styles.fadeOut : ''}`} />
            <div className={`${styles.popup} ${isClosing ? styles.slideOut : ''}`}>
                {/* Close button removed - registration is mandatory */}

                <p className={styles.message}>
                    Trang web này chỉ phục vụ cho <strong>người Việt Nam</strong>.
                    <br />
                    Vui lòng đăng ký để tiếp tục sử dụng dịch vụ.
                </p>

                <form onSubmit={handleRegister} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>
                            📧 Email <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                            placeholder="example@gmail.com"
                            disabled={isSubmitting}
                        />
                        {errors.email && (
                            <span className={styles.errorText}>{errors.email}</span>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="zalo" className={styles.label}>
                            <img
                                src="/zalo-icon.png"
                                alt="Zalo"
                                className={styles.zaloIcon}
                            />
                            Số Zalo <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="tel"
                            id="zalo"
                            value={zalo}
                            onChange={(e) => setZalo(e.target.value)}
                            className={`${styles.input} ${errors.zalo ? styles.inputError : ''}`}
                            placeholder="0912345678"
                            disabled={isSubmitting}
                        />
                        {errors.zalo && (
                            <span className={styles.errorText}>{errors.zalo}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={styles.registerButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className={styles.spinner}></span>
                                Đang xử lý...
                            </>
                        ) : (
                            'Đăng ký ngay'
                        )}
                    </button>
                </form>

                <p className={styles.note}>
                    * Bắt buộc phải đăng ký để tiếp tục sử dụng
                </p>
            </div>
        </>
    );
}
