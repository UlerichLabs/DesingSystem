export default function TypographySection() {
    return (
        <div className="section fade-up delay-3">
            <div className="section-label">Fundação</div>
            <h2 className="section-title">Tipografia</h2>

            <div className="type-samples">

                {/* Sample 1: Orbitron */}
                <div className="type-sample">
                    <div className="type-meta">Brand / Assinatura — Orbitron</div>
                    <div className="t-brand">ULERICH LABS</div>
                    <div className="text-[11px] text-[#8B949E] mt-4 max-w-lg font-sans">
                        Uso restrito <strong>exclusivamente</strong> para a logomarca e assinatura visual da empresa. Não utilizar em títulos de página ou componentes de interface comuns para não poluir a leitura.
                    </div>
                </div>

                {/* Sample 2: Inter (H1/H2/H3/Body) */}
                <div className="type-sample">
                    <div className="type-meta">UI &amp; Leitura — Inter</div>
                    <div className="t-heading mb-2">A base do Design System</div>
                    <div className="t-sub mb-4">Hierarquia de Informação</div>
                    <div className="t-body max-w-2xl">
                        A fonte <strong>Inter</strong> passa a ser a espinha dorsal da nossa interface e produtos SaaS (como Vitta e Medtrack). Foi escolhida por sua excelente legibilidade em telas densas, limpeza geométrica e neutralidade. Ela transmite seriedade e confiança aos usuários ao lidar com fluxos financeiros e médicos.
                    </div>
                </div>

                {/* Sample 3: JetBrains Mono */}
                <div className="type-sample">
                    <div className="type-meta">Dados &amp; Monospaced — JetBrains Mono</div>
                    <div className="t-mono mb-4 text-lg">R$ 4.280,00</div>
                    <div className="t-label mb-2">TXID: #9A8B7C6D5E4F3</div>
                    <div className="text-[13px] text-[#8B949E] mt-4 max-w-lg font-sans">
                        A <strong>JetBrains Mono</strong> agora está restrita a dados tabulares, números grandes (saldos, analytics), IDs de transação, badges e trechos de código. Isso cria um ritmo visual tático para leitura de dados numéricos sem pesar na tela.
                    </div>
                </div>

            </div>
        </div>
    );
}
