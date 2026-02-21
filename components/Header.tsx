'use client';

import { useEffect, useState } from 'react';

const SECTIONS = ['inicio', 'cores', 'tipo', 'produtos', 'comp'];

export default function Header() {
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            let current = '';
            if (window.scrollY < 100) {
                current = 'inicio';
            } else {
                const sectionsToCheck = ['cores', 'tipo', 'produtos', 'comp'];
                sectionsToCheck.forEach(id => {
                    const el = document.getElementById(id);
                    if (el && window.scrollY >= el.offsetTop - 120) {
                        current = id;
                    }
                });
            }
            setActiveSection(current || 'inicio');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        if (id === 'inicio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="site-header">
            <div className="logo-text">ULERICHLABS</div>
            <nav className="nav-pills" id="mainNav">
                <button
                    className={`nav-pill ${activeSection === 'inicio' ? 'active' : ''}`}
                    onClick={() => scrollToSection('inicio')}
                >
                    Início
                </button>
                <button
                    className={`nav-pill ${activeSection === 'cores' ? 'active' : ''}`}
                    onClick={() => scrollToSection('cores')}
                >
                    Cores
                </button>
                <button
                    className={`nav-pill ${activeSection === 'tipo' ? 'active' : ''}`}
                    onClick={() => scrollToSection('tipo')}
                >
                    Tipo
                </button>
                <button
                    className={`nav-pill ${activeSection === 'produtos' ? 'active' : ''}`}
                    onClick={() => scrollToSection('produtos')}
                >
                    Produtos
                </button>
                <button
                    className={`nav-pill ${activeSection === 'comp' ? 'active' : ''}`}
                    onClick={() => scrollToSection('comp')}
                >
                    UI Kit
                </button>
            </nav>
            <div className="version">DESIGN SYSTEM v2.0</div>
        </header>
    );
}
