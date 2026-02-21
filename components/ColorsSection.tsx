import { COLORS } from '../lib/constants';

interface ColorsSectionProps {
    onCopyColor: (hex: string) => void;
}

export default function ColorsSection({ onCopyColor }: ColorsSectionProps) {
    return (
        <div className="section" id="cores">
            <div className="section-label">Paleta</div>
            <h2 className="section-title">Sistema de Cores</h2>

            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '13px' }}>
                Clique em qualquer cor para copiar o hex.
            </p>

            <div className="color-grid">
                {COLORS.map((c, index) => {
                    const isDark = ['#0D1117', '#161B22', '#30363D', '#484F58'].includes(c.hex);

                    return (
                        <div key={index} className="color-chip" onClick={() => onCopyColor(c.hex)}>
                            <div className="color-swatch" style={{ background: c.bg }}>
                                <div className="dot" style={{ color: isDark ? '#8B949E' : 'rgba(0,0,0,0.5)' }}>⌘</div>
                            </div>
                            <div className="color-info">
                                <div className="color-name">{c.name}</div>
                                <div className="color-hex">{c.hex}</div>
                                <div className="color-role">{c.role}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
