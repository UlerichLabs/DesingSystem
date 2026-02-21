import { PRODUCTS } from '../lib/constants';

export default function ProductsSection() {
    return (
        <div className="section" id="produtos">
            <div className="section-label">Família de Produtos</div>
            <h2 className="section-title">Ecossistema</h2>
            <div className="products-grid">
                {PRODUCTS.map((p, index) => (
                    <div key={index} className="product-card" data-color={p.color}>
                        <div className="product-icon" style={{ background: `${p.accent}18`, border: `1px solid ${p.accent}33` }}>
                            {p.icon}
                        </div>
                        <div className="product-name">{p.name}</div>
                        <div className="product-desc">{p.desc}</div>
                        <span className="product-tag" style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}30` }}>
                            ● {p.tag}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
