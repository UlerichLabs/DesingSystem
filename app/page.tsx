'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LogoShowcase from '../components/LogoShowcase';
import ColorsSection from '../components/ColorsSection';
import TypographySection from '../components/TypographySection';
import ProductsSection from '../components/ProductsSection';
import UIKitSection from '../components/UIKitSection';
import Footer from '../components/Footer';

export default function Home() {
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const handleCopyColor = async (hex: string) => {
        try {
            await navigator.clipboard.writeText(hex);
            setToastMessage(`✓ ${hex} copiado!`);
            setTimeout(() => setToastMessage(null), 2000);
        } catch (err) {
            console.error('Failed to copy color: ', err);
        }
    };

    return (
        <>
            <Header />
            <div className="wrapper">
                <Hero />
                <LogoShowcase />
                <ColorsSection onCopyColor={handleCopyColor} />
                <TypographySection />
                <ProductsSection />
                <UIKitSection />
                <Footer />
            </div>

            <div className={`toast ${toastMessage ? 'show' : ''}`}>
                {toastMessage}
            </div>
        </>
    );
}
