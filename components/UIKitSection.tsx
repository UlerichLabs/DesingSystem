export default function UIKitSection() {
    return (
        <div className="section" id="comp">
            <div className="section-label">Componentes</div>
            <h2 className="section-title">UI Kit</h2>
            <div className="components-grid">

                {/* Buttons */}
                <div>
                    <div className="comp-group-title">Botões</div>
                    <div className="comp-row">
                        <button className="btn btn-primary">Confirmar</button>
                        <button className="btn btn-secondary">Cancelar</button>
                        <button className="btn btn-ghost">Opções</button>
                        <button className="btn btn-danger">Excluir</button>
                    </div>
                    <div className="comp-row" style={{ marginTop: '12px' }}>
                        <button className="btn btn-primary btn-sm">Small</button>
                        <button className="btn btn-primary">Default</button>
                        <button className="btn btn-primary btn-lg">Large</button>
                    </div>
                </div>

                <div className="divider" style={{ margin: '24px 0' }}></div>

                {/* Badges */}
                <div>
                    <div className="comp-group-title">Badges &amp; Status</div>
                    <div className="comp-row">
                        <span className="badge badge-blue">Ativo</span>
                        <span className="badge badge-green">Pago</span>
                        <span className="badge badge-purple">Em jogo</span>
                        <span className="badge badge-orange">Pendente</span>
                    </div>
                </div>

                <div className="divider" style={{ margin: '24px 0' }}></div>

                {/* Inputs */}
                <div>
                    <div className="comp-group-title">Inputs</div>
                    <div className="comp-row" style={{ alignItems: 'flex-start' }}>
                        <div className="input-wrap">
                            <label className="input-label">Valor</label>
                            <input className="input" type="text" placeholder="R$ 0,00" />
                        </div>
                        <div className="input-wrap">
                            <label className="input-label">Buscar</label>
                            <input className="input" type="text" placeholder="Procurar jogo..." />
                        </div>
                    </div>
                </div>

                <div className="divider" style={{ margin: '24px 0' }}></div>

                {/* Cards */}
                <div>
                    <div className="comp-group-title">Cards de Dados</div>
                    <div className="comp-row" style={{ alignItems: 'flex-start' }}>

                        <div className="card-demo">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Saldo</span>
                                <span className="badge badge-green">Ativo</span>
                            </div>
                            <div className="card-stat" style={{ background: 'var(--grad-brand)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>R$4.280</div>
                            <div className="card-stat-label">Conta principal</div>
                            <div className="card-trend">↑ +12,3% este mês</div>
                        </div>

                        <div className="card-demo">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Backlog</span>
                                <span className="badge badge-purple">Jogos</span>
                            </div>
                            <div className="card-stat" style={{ color: 'var(--purple)' }}>47</div>
                            <div className="card-stat-label">Jogos na lista</div>
                            <div style={{ marginTop: '16px' }}>
                                <div className="progress-wrap">
                                    <div className="progress-label"><span>Concluídos</span><span>23/47</span></div>
                                    <div className="progress-bar"><div className="progress-fill" style={{ width: '49%', background: 'linear-gradient(90deg,#A855F7,#0EA5E9)' }}></div></div>
                                </div>
                            </div>
                        </div>

                        <div className="card-demo">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Saúde</span>
                                <span className="badge badge-blue">Médico</span>
                            </div>
                            <div className="card-stat" style={{ color: 'var(--cyan)' }}>3</div>
                            <div className="card-stat-label">Consultas este ano</div>
                            <div style={{ marginTop: '16px' }}>
                                <div className="progress-wrap">
                                    <div className="progress-label"><span>Próxima</span><span>15 Mar</span></div>
                                    <div className="progress-bar"><div className="progress-fill" style={{ width: '70%', background: 'linear-gradient(90deg,#06B6D4,#22C55E)' }}></div></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="divider" style={{ margin: '24px 0' }}></div>

                {/* Animations */}
                <div>
                    <div className="comp-group-title">Micro-animações</div>
                    <div className="anim-grid">
                        <div className="anim-card anim-pulse"><span className="icon">💙</span><span className="name">Pulse</span></div>
                        <div className="anim-card anim-float"><span className="icon">🎮</span><span className="name">Float</span></div>
                        <div className="anim-card anim-spin"><span className="icon">⚙️</span><span className="name">Spin</span></div>
                        <div className="anim-card anim-glitch"><span className="icon">⚡</span><span className="name">Glitch</span></div>
                        <div className="anim-card anim-glow"><span className="icon">💎</span><span className="name">Glow</span></div>
                    </div>
                </div>

                <div className="divider" style={{ margin: '24px 0' }}></div>

                {/* Spacing */}
                <div>
                    <div className="comp-group-title">Espaçamentos</div>
                    <div className="spacing-row">
                        <div className="spacing-block">
                            <div className="spacing-visual" style={{ width: '4px', height: '4px' }}></div>
                            <span className="spacing-label">4px<br />xs</span>
                        </div>
                        <div className="spacing-block">
                            <div className="spacing-visual" style={{ width: '8px', height: '8px' }}></div>
                            <span className="spacing-label">8px<br />sm</span>
                        </div>
                        <div className="spacing-block">
                            <div className="spacing-visual" style={{ width: '16px', height: '16px' }}></div>
                            <span className="spacing-label">16px<br />md</span>
                        </div>
                        <div className="spacing-block">
                            <div className="spacing-visual" style={{ width: '24px', height: '24px' }}></div>
                            <span className="spacing-label">24px<br />lg</span>
                        </div>
                        <div className="spacing-block">
                            <div className="spacing-visual" style={{ width: '32px', height: '32px' }}></div>
                            <span className="spacing-label">32px<br />xl</span>
                        </div>
                        <div className="spacing-block">
                            <div className="spacing-visual" style={{ width: '48px', height: '48px' }}></div>
                            <span className="spacing-label">48px<br />2xl</span>
                        </div>
                        <div className="spacing-block">
                            <div className="spacing-visual" style={{ width: '64px', height: '64px' }}></div>
                            <span className="spacing-label">64px<br />3xl</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
