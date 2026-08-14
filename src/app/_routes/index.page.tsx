import { PageComponent, Link } from 'rasengan';

const Page: PageComponent = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--background)',
        overflow: 'hidden',
        position: 'relative',
        paddingTop: '80px',
      }}>
        {/* Cercles décoratifs en arrière-plan */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container py-5">
          <div className="row align-items-center g-5">

            {/* ── COLONNE GAUCHE : texte ── */}
            <div className="col-lg-6 z-1">
              {/* Badge annnonce */}
              <div className="hero-badge-wrapper" style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.15)',
                  backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 12px rgba(59,130,246,0.08)',
                  borderRadius: '10px', padding: '8px 20px',
                  fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)',
                  fontFamily: 'var(--font-heading)', letterSpacing: '0.01em',
                  transition: 'all 0.3s ease'
                }} className="hero-badge">
                  <span style={{ fontSize: '0.9rem' }}><i className="bi bi-bullseye"></i></span>
                  Transformation intérieure & extérieure
                </div>
              </div>

              {/* Titre principal */}
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(38px, 5vw, 52px)',
                lineHeight: 1.15,
                color: 'var(--foreground)',
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}>
                Et si votre <span style={{ color: 'var(--primary)', textShadow: '0 2px 10px rgba(59,130,246,0.2)' }}>succès</span> se voyait, se ressentait... et se vivait chez vous ?
              </h1>

              {/* Sous-titre */}
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{
                  fontSize: '1.25rem',
                  color: 'var(--muted-foreground)',
                  lineHeight: 1.6,
                }}>
                  Vous avez le potentiel. Nous avons le plan pour le révéler, de l’intérieur à l’extérieur.
                </p>
              </div>

              {/* CTAs */}
              <div className="hero-ctas" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  className="btn btn-primary shadow-sm"
                  style={{ borderRadius: '8px', fontWeight: 600, padding: '12px 28px', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}
                >
                  <i className="bi bi-calendar-event me-2"></i> Réserver mon Bilan 360° OFFERT
                </Link>
                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    borderRadius: '8px', fontWeight: 500, padding: '12px 28px',
                    fontSize: '1rem', border: '1px solid var(--border)', fontFamily: 'var(--font-heading)',
                    background: 'var(--card)', color: 'var(--foreground)', textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                >
                  Découvrir l'approche <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* ── COLONNE DROITE : illustration vectorielle ── */}
            <div className="col-lg-6 text-center position-relative d-none d-lg-block z-0">
              {/* SVG inline maison en traits bleus — style rasengan.dev */}
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '-5%',
                transform: 'translateY(-50%)',
                width: '110%',
                height: 'auto',
                opacity: 0.85
              }}>
                <svg
                  viewBox="0 0 520 500"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '100%', maxWidth: '680px', marginLeft: 'auto', display: 'block', pointerEvents: 'none' }}
                  fill="none"
                >
                  <defs>
                    {/* Dégradé principal bleu — identique à rasengan.dev */}
                    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8EBBFF" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#2A7FFF" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#8EBBFF" stopOpacity="0" />
                    </linearGradient>
                    {/* Dégradé pour les traits secondaires */}
                    <linearGradient id="blueGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2A7FFF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8EBBFF" stopOpacity="0.1" />
                    </linearGradient>
                    {/* Dégradé fenêtres */}
                    <linearGradient id="winGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8EBBFF" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#2A7FFF" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>

                  {/* ── Toiture principale ── */}
                  <polyline
                    points="80,230 260,60 440,230"
                    stroke="url(#blueGrad)"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  {/* Ligne de toit intérieure (écho) */}
                  <polyline
                    points="110,230 260,85 410,230"
                    stroke="url(#blueGrad)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeOpacity="0.4"
                  />

                  {/* ── Cheminée ── */}
                  <rect x="330" y="95" width="32" height="60" stroke="url(#blueGrad2)" strokeWidth="2" rx="2" />
                  {/* Fumée stylisée */}
                  <path
                    d="M338,90 Q335,75 342,65 Q348,55 344,42"
                    stroke="#8EBBFF"
                    strokeWidth="1.5"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M350,88 Q347,72 354,61 Q360,50 356,36"
                    stroke="#8EBBFF"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                  />

                  {/* ── Corps de la maison ── */}
                  <rect
                    x="100"
                    y="228"
                    width="320"
                    height="210"
                    stroke="url(#blueGrad2)"
                    strokeWidth="2.5"
                    rx="4"
                  />

                  {/* ── Porte ── */}
                  <rect
                    x="218"
                    y="330"
                    width="64"
                    height="108"
                    stroke="url(#winGrad)"
                    strokeWidth="2"
                    rx="32"
                  />
                  {/* Poignée porte */}
                  <circle cx="274" cy="387" r="4" stroke="#2A7FFF" strokeWidth="1.5" strokeOpacity="0.7" />

                  {/* ── Fenêtre gauche ── */}
                  <rect x="128" y="270" width="68" height="60" stroke="url(#winGrad)" strokeWidth="2" rx="4" />
                  {/* Croisillon */}
                  <line x1="162" y1="270" x2="162" y2="330" stroke="#8EBBFF" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="128" y1="300" x2="196" y2="300" stroke="#8EBBFF" strokeWidth="1" strokeOpacity="0.5" />

                  {/* ── Fenêtre droite ── */}
                  <rect x="324" y="270" width="68" height="60" stroke="url(#winGrad)" strokeWidth="2" rx="4" />
                  <line x1="358" y1="270" x2="358" y2="330" stroke="#8EBBFF" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="324" y1="300" x2="392" y2="300" stroke="#8EBBFF" strokeWidth="1" strokeOpacity="0.5" />

                  {/* ── Fenêtre mansardée (toit) ── */}
                  <rect x="228" y="148" width="64" height="52" stroke="url(#winGrad)" strokeWidth="2" rx="3" />
                  {/* Petit toit de la lucarne */}
                  <polyline points="220,148 260,126 300,148" stroke="#8EBBFF" strokeWidth="1.5" strokeOpacity="0.6" />
                  <line x1="260" y1="148" x2="260" y2="200" stroke="#8EBBFF" strokeWidth="1" strokeOpacity="0.4" />

                  {/* ── Sol ── */}
                  <line x1="60" y1="438" x2="460" y2="438" stroke="url(#blueGrad)" strokeWidth="2" strokeOpacity="0.6" />
                  <line x1="30" y1="445" x2="490" y2="445" stroke="#8EBBFF" strokeWidth="1" strokeOpacity="0.2" />

                  {/* ── Effets décoratifs (étoiles / sparkles comme rasengan.dev) ── */}
                  <circle cx="75" cy="130" r="3" fill="#8EBBFF" fillOpacity="0.6" />
                  <circle cx="68" cy="130" r="1" fill="#8EBBFF" fillOpacity="0.3" />
                  <circle cx="82" cy="130" r="1" fill="#8EBBFF" fillOpacity="0.3" />
                  <circle cx="75" cy="123" r="1" fill="#8EBBFF" fillOpacity="0.3" />
                  <circle cx="75" cy="137" r="1" fill="#8EBBFF" fillOpacity="0.3" />

                  <circle cx="445" cy="175" r="4" fill="#2A7FFF" fillOpacity="0.5" />
                  <circle cx="437" cy="175" r="1.5" fill="#2A7FFF" fillOpacity="0.3" />
                  <circle cx="453" cy="175" r="1.5" fill="#2A7FFF" fillOpacity="0.3" />
                  <circle cx="445" cy="167" r="1.5" fill="#2A7FFF" fillOpacity="0.3" />
                  <circle cx="445" cy="183" r="1.5" fill="#2A7FFF" fillOpacity="0.3" />

                  {/* ── Arbustes décoratifs côtés ── */}
                  <path
                    d="M62,437 Q72,405 82,430 Q90,400 100,435"
                    stroke="url(#blueGrad2)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M420,437 Q430,405 440,430 Q448,400 458,435"
                    stroke="url(#blueGrad2)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeOpacity="0.5"
                  />
                </svg>
              </div>


              <style>{`.hero-badge:hover { border-color: rgba(59,130,246,0.3) !important; }`}</style>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BANNIÈRE MÉTHODE 360 ===== */}
      <section style={{ background: 'linear-gradient(135deg, var(--card) 0%, rgba(59,130,246,0.03) 100%)', padding: '2.5rem 0', borderBottom: '1px solid var(--border)', borderTop: '1px solid var(--border)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <div className="container">
          <div className="row g-4 align-items-center text-center text-lg-start">
            <div className="col-lg-5">
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--foreground)', margin: 0, lineHeight: 1.4 }}>
                La première méthode 360° au Cameroun qui aligne :<br />
                <span style={{ color: 'var(--primary)' }}>Carrière • Bien-être • Image</span>
              </h2>
            </div>
            <div className="col-lg-7">
              <div className="d-flex flex-column flex-md-row gap-3 gap-lg-4 justify-content-center justify-content-lg-end">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '1rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>
                  <i className="bi bi-check-circle-fill text-primary"></i> Coaching pro
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '1rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>
                  <i className="bi bi-check-circle-fill text-primary"></i> Équilibre émotionnel
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '1rem', color: 'var(--muted-foreground)', fontWeight: 500 }}>
                  <i className="bi bi-check-circle-fill text-primary"></i> Style & intérieur
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== APERÇU SERVICES ===== */}
      <section className="grid-section" style={{ padding: '5rem 0', background: 'var(--background)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--foreground)', fontSize: '2rem' }}>
              Nos 3 Piliers de Transformation
            </h2>
            <div style={{ width: '48px', height: '3px', background: 'var(--primary)', margin: '12px auto 0' }}></div>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              { 
                icon: 'bi-rocket-takeoff', 
                title: 'PERFORMANCE • CARRIÈRE', 
                desc: 'Pour atteindre vos objectifs pro sans vous épuiser.', 
                sub: ['Coaching pro', 'Révélation de talents', 'Art oratoire'],
                color: 'var(--primary)', 
                img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800' 
              },
              { 
                icon: 'bi-heart', 
                title: 'RELATIONS • BIEN-ÊTRE', 
                desc: 'Pour une confiance et une sérénité à toute épreuve.', 
                sub: ['Gestion des conflits', 'Coaching de vie', 'Transformation comportementale'],
                color: '#D4A847', 
                img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800' 
              },
              { 
                icon: 'bi-gem', 
                title: 'IMAGE • ART DE VIVRE', 
                desc: 'Parce que votre extérieur doit refléter votre valeur intérieure.', 
                sub: ['Conseil en image', 'Élégance', 'Décoration & Maison'],
                color: 'var(--primary)', 
                img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800' 
              },
            ].map((s) => (
              <div className="col-md-6 col-lg-4 d-flex" key={s.title}>
                {/* Structure Carte Rasengan (Bento Box style) */}
                <div className="card w-100 overflow-hidden feature-card">
                  {/* --- Emplacement pour l'image attrayante --- */}
                  <div
                    style={{
                      aspectRatio: '16/9',
                      backgroundColor: 'var(--muted)',
                      borderBottom: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}
                  >
                    {/* Image via Unsplash */}
                    <img
                      src={s.img}
                      alt={s.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                    />
                  </div>

                  {/* --- Corps de texte --- */}
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className={`bi ${s.icon}`} style={{ fontSize: '1.1rem', color: s.color }}></i>
                      </div>
                      <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', margin: 0, color: 'var(--card-title-color)' }}>
                        {s.title}
                      </h5>
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {s.desc}
                    </p>
                    
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', flex: 1 }}>
                      {s.sub.map((item, idx) => (
                        <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--foreground)', marginBottom: '4px', display: 'flex', gap: '6px' }}>
                          <span style={{ color: 'var(--primary)' }}>•</span> {item}
                        </li>
                      ))}
                    </ul>

                    <div>
                      <Link to="/services" className="stretched-link" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        En savoir plus <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 position-relative" style={{ zIndex: 10 }}>
            <Link to="/services" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '8px', padding: '10px 24px', textDecoration: 'none', background: 'transparent', transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Découvrir nos 10 services détaillés <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== POURQUOI NOUS CHOISIR & TEMOIGNAGE ===== */}
      <section style={{ padding: '5rem 0', background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            
            {/* Colonne gauche : Avantages */}
            <div className="col-lg-6">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59,130,246,0.1)', color: 'var(--primary)', padding: '6px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(59,130,246,0.2)' }}>
                <i className="bi bi-shield-check"></i> Notre Différence
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--foreground)', fontSize: '2.2rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Pourquoi choisir <span style={{ color: 'var(--primary)' }}>Home Transformation</span> ?
              </h2>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Nous croyons que pour qu'un changement soit durable, il doit être global. Inutile de consulter 3 experts différents. Nous unifions votre progression à 360°.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Accompagnement personnalisé à 360°',
                  'Méthodes modernes & efficaces',
                  'Écoute, discrétion & professionnalisme',
                  'Résultats visibles et durables',
                  'Transformation intérieure & extérieure'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--foreground)', fontWeight: 500 }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(59,130,246,0.15)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem' }}>
                      <i className="bi bi-check2"></i>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne droite : Témoignage */}
            <div className="col-lg-6">
              <div className="feature-card" style={{ padding: '3rem 2.5rem', background: 'var(--background)', borderRadius: '1.5rem', border: '1px solid var(--border)', position: 'relative' }}>
                <i className="bi bi-quote" style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontSize: '4rem', color: 'var(--muted)', opacity: 0.5 }}></i>
                
                <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                
                <p style={{ fontSize: '1.15rem', color: 'var(--foreground)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
                  "J’ai pris le pack complet. Résultat : promotion au travail, couple apaisé, et enfin une maison où je me sens bien. C’est la première fois qu’un coach comprend que tout est lié."
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--muted)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 600 }}>
                    U
                  </div>
                  <div>
                    <h5 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--foreground)' }}>Ulrich, 34 ans</h5>
                    <span style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>Cameroun</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

Page.metadata = {
  title: 'Home of Transformation - Accueil',
  description: 'Cabinet de coaching et de transformation professionnelle et personnelle. Nous vous accompagnons avec bienveillance vers votre réussite.',
};

export default Page;

