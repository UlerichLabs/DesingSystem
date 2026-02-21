import Image from 'next/image';

export default function LogoShowcase() {
    return (
        <div className="section fade-up delay-1">
            <div className="section-label">Identidade</div>
            <h2 className="section-title">Logo &amp; Variações</h2>
            <div className="logo-showcase">

                {/* Dark (primary) */}
                <div className="logo-card dark">
                    <div className="logo-svg-wrap">
                        <Image src="/logos/logo-dark.svg" alt="ULERICH LABS Dark" width={160} height={160} />
                    </div>
                    <span className="card-label">Dark (Primary)</span>
                </div>

                {/* Light */}
                <div className="logo-card light">
                    <div className="logo-svg-wrap">
                        <Image src="/logos/logo-light.svg" alt="ULERICH LABS Light" width={160} height={160} />
                    </div>
                    <span className="card-label" style={{ color: '#9CA3AF' }}>Light Version</span>
                </div>

                {/* Mono */}
                <div className="logo-card dark">
                    <div className="logo-svg-wrap">
                        <Image src="/logos/logo-mono.svg" alt="ULERICH LABS Mono" width={160} height={160} />
                    </div>
                    <span className="card-label">Mono / White</span>
                </div>

                {/* Icon only */}
                <div className="logo-card" style={{ background: 'var(--surface2)' }}>
                    <div className="logo-svg-wrap">
                        <Image src="/logos/logo-icon.svg" alt="ULERICH LABS Icon" width={120} height={120} />
                    </div>
                    <span className="card-label">Ícone / App Icon</span>
                </div>

            </div>
        </div>
    );
}
