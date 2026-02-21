export default function Hero() {
    return (
        <div className="section fade-up" style={{ textAlign: 'center', padding: '48px 0 24px' }}>
            <div className="section-label" style={{ textAlign: 'center', justifyContent: 'center', display: 'block', marginBottom: '16px' }}>
                Sistema de Design
            </div>
            <h1 style={{
                fontFamily: 'var(--font-brand)',
                fontSize: 'clamp(36px,6vw,72px)',
                fontWeight: 900,
                background: 'var(--grad-brand)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.05,
                marginBottom: '16px'
            }}>
                ULERICH<br />LABS
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', letterSpacing: '1px', maxWidth: '480px', margin: '0 auto' }}>
                Seriedade · Modernidade · Pegada Gamer<br />
                <span style={{ color: 'var(--blue)' }}>Lucas</span> &amp; <span style={{ color: 'var(--green)' }}>Luan</span> — criando organização com estilo
            </p>
        </div>
    );
}
