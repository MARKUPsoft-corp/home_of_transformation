import { PageComponent, Link } from 'rasengan';
import { useState, useCallback, useEffect } from 'react';

type ServiceItem = {
  title: string;
  desc: string;
  time: string;
  icon: string;
  img: string;
  detail?: string;
};

const ServicesPage: PageComponent = () => {
  const [selected, setSelected] = useState<ServiceItem | null>(null);
  const [closing, setClosing] = useState(false);

  const openModal = useCallback((s: ServiceItem) => {
    setClosing(false);
    setSelected(s);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setSelected(null);
      setClosing(false);
      document.body.style.overflow = '';
    }, 220);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    // Nettoyage de l'overflow quand le composant est détruit (ex: navigation vers une autre page)
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [closeModal]);

  const services: ServiceItem[] = [
    { icon: "bi-briefcase", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", title: "Développement professionnel", desc: "Te faire réussir par des stratégies pour l'amélioration de ton business afin que ta réussite soit fulgurante.", time: "1 semaine (1 séance de 2h/jour)",
      detail: "Ce programme intensif d’une semaine est conçu pour les entrepreneurs, indépendants et managers qui souhaitent structurer leur vision et accélérer leur croissance. Chaque séance de 2h combine analyse stratégique, plan d’action personnalisé et outils pratiques actionables immédiatement. Vous repartirez avec une feuille de route claire, des indicateurs de performance adaptés et une posture de leader affirmée." },
    { icon: "bi-star", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", title: "Découverte de talent", desc: "Maximiser ta réussite sur le plan professionnel pour garantir ton succès.", time: "3 mois (2 séances d'1h55/semaine)",
      detail: "Un accompagnement profond sur 3 mois pour identifier vos forces uniques, vos passions et les aligner avec votre projet de vie. Grâce à des tests de personnalité, des exercices d’introspection guidée et un suivi hebdomadaire, vous découvrirez vos talents authentiques et construirez une stratégie concrète pour les valoriser professionnellement et personnellement." },
    { icon: "bi-heart-pulse", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800", title: "Thérapie de couple & conflits", desc: "Gestion des incompréhensions, désaccords, doutes. Mieux connaître son partenaire.", time: "4 semaines (3 séances d'1h45/semaine)",
      detail: "En binome ou en séance individuelle, ce programme en 2 étapes vous aide à reconstruire la confiance et la communication dans votre relation. Étape 1 : décryptage des schémas conflictuels et travail sur l’expression émotionnelle. Étape 2 : reconstruction des fondations du couple — écoute active, réconciliation et projets communs. Un regard bienveillant et sans jugement en toutes circonstances." },
    { icon: "bi-person-badge", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", title: "Gestion d'un caractère difficile", desc: "Méthodes efficaces pour devenir la meilleure version de toi-même et canaliser tes réactions.", time: "3 mois (3 séances d'1h30/semaine)",
      detail: "Ce suivi intensif de 3 mois s’adresse à ceux qui souhaitent mieux gérer leurs émotions, réduire l’impulsivité et améliorer leurs relations. Grâce à des techniques issues de la psychologie comportementale, de la pleine conscience et du coaching, vous apprendrez à transformer vos réactions en forces, à développer votre empathie et à créer des relations plus harmonieuses." },
    { icon: "bi-chat-dots", img: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=800", title: "Problèmes de la vie en général", desc: "Écoute sans jugement et apport de solutions efficientes et efficaces à tes problèmes quotidiens.", time: "1 semaine (3 séances de 2h)",
      detail: "Qu’il s’agisse de décisions difficiles, de transitions professionnelles ou personnelles, de perte de sens ou de problèmes relationnels non catégorisés — cet espace est le vôtre. En 3 séances intenses, nous analysons votre situation avec un regard extérieur bienveillant, identifions les blocages profonds et élaborons ensemble des solutions pragmatiques et adaptées à votre réalité." },
    { icon: "bi-mic", img: "https://images.unsplash.com/photo-1475721025505-1a3b118b76df?auto=format&fit=crop&q=80&w=800", title: "Coaching en art oratoire", desc: "Savoir parler en public, gérer le stress, réussir un entretien ou une soutenance.", time: "1 mois (3 séances d'1h40/semaine)",
      detail: "Parler avec assurance, convaincre, captiver un auditoire — ces compétences s’acquièrent. Ce programme d’un mois couvre : la gestion du stress scénique, la structuration du discours, le langage non-verbal, la modulation de la voix et la gestion des questions inattendues. Idéal avant un entretien, une soutenance, un pitch ou toute prise de parole importante." },
    { icon: "bi-person-lines-fill", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800", title: "Coaching vestimentaire (H/F)", desc: "Agencement, ajustement, colorimétrie selon la silhouette à moindre coût.", time: "3 semaines (2 séances d'1h45/semaine)",
      detail: "Votre garde-robe est un outil de communication puissant. En 3 semaines, nous analysons votre silhouette, vos tons de teint, votre style de vie et vos objectifs pour définir une identité vestimentaire qui vous ressemble. Vous repartirez avec des combinaisons tenues optimisées, des techniques d’achat intelligent et la confiance de vous habiller avec aisance." },
    { icon: "bi-magic", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800", title: "Élégance pratique & Foulard", desc: "S'habiller élégant, class, chic avec un foulard (bureau, voyage, église...).", time: "1 semaine (4 séances de 35 min)",
      detail: "L’art du foulard est une forme d’élégance à la portée de toutes. En 4 séances pratiques et concentrées, vous apprendrez plus de 15 façons de nouer, draper et porter un foulard pour chaque occasion : au bureau, en voyage, pour une cérémonie... Chaque technique est accompagnée de conseils couleur et matière pour sublimer votre tenue." },
    { icon: "bi-house-heart", img: "https://images.unsplash.com/photo-1616486028042-5ba04fb7b8dd?auto=format&fit=crop&q=80&w=800", title: "Décoration intérieure", desc: "Matériaux chic et élégants selon votre budget ou services à moindre coût.", time: "Sur devis",
      detail: "Votre espace de vie influence directement votre bien-être et votre productivité. Nous intervenons pour vous aider à créer un intérieur harmonieux, élégant et fonctionnel — quel que soit votre budget. Du choix des matériaux aux associations de couleurs, en passant par l’agencement des meubles, chaque décision est pensée pour vous. Devis gratuit et personnalisé après une première consultation." },
    { icon: "bi-box-seam", img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=800", title: "Rangement de maison", desc: "Solutions rapides pour un espace propre, bien rangé et sain en quelques heures.", time: "Sur devis",
      detail: "Un chez-vous bien organisé, c’est un esprit plus libre. Nos experts du rangement interviennent directement chez vous pour réaménager vos espaces selon des méthodes éprouvées (inspiration KonMari, rangement fonctionnel). Résultat : des espaces libérés, des solutions de rangement esthétiques et durables, et une sérénité retrouvée. Devis adapté à la surface et au niveau de désencombrement." },
  ];

  return (
    <>
    <div className="grid-section" style={{ minHeight: 'calc(100vh - 60px)', paddingBottom: '5rem' }}>
      <div className="container pt-5">
        
        {/* En-tête */}
        <div className="text-center mb-5 position-relative" style={{ zIndex: 10 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--foreground)', fontSize: '3rem' }}>
            Tous Nos Services
          </h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '1rem auto' }}></div>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Parcourez nos 10 offres d'accompagnement. Chaque service est conçu pour répondre précisément à vos besoins de transformation.
          </p>
        </div>

        {/* Grille de cartes Bento */}
        <div className="row g-4 justify-content-center">
          {services.map((s, index) => (
            <div className="col-md-6 col-lg-4 d-flex" key={index}>
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
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onClick={() => openModal(s)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Voir détails : ${s.title}`}
                  onKeyDown={(e) => e.key === 'Enter' && openModal(s)}
                >
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
                  {/* Badge numéro */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'var(--card)',
                    color: 'var(--card-foreground)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    border: '1px solid var(--border)'
                  }}>
                    #{index + 1}
                  </div>
                </div>

                {/* --- Corps de texte --- */}
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`bi ${s.icon}`} style={{ fontSize: '1.1rem', color: 'var(--primary)' }}></i>
                    </div>
                    <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', margin: 0, color: 'var(--card-title-color)' }}>
                      {s.title}
                    </h5>
                  </div>
                  
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>
                    {s.desc}
                  </p>
                  
                  {/* Badge de durée */}
                  <div style={{ background: 'var(--muted)', padding: '8px 12px', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--foreground)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <i className="bi bi-clock" style={{color: 'var(--primary)'}}></i> <strong style={{ fontWeight: 600 }}>Durée :</strong> {s.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Section CTA --- */}
        <div className="text-center mt-5 p-5 feature-card overflow-hidden" style={{ background: 'var(--card)' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--card-title-color)', marginBottom: '1rem' }}>
            Prêt à commencer votre transformation ?
          </h3>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Contactez-nous dès aujourd'hui pour réserver votre première séance et entamer votre chemin vers la réussite.
          </p>
          <Link to="/contact" className="btn btn-primary d-inline-flex align-items-center gap-2 py-2 px-4 shadow-sm" style={{ fontWeight: 600 }}>
            <i className="bi bi-calendar-event"></i> Prendre Rendez-vous
          </Link>
        </div>

      </div>
    </div>

    {/* ===== POPUP / MODAL SERVICE ===== */}
    {(selected || closing) && (
      <div
        className={`service-modal-overlay${closing ? ' closing' : ''}`}
        onClick={(e) => e.target === e.currentTarget && closeModal()}
        role="dialog"
        aria-modal="true"
      >
        <div className="service-modal-panel" style={{ position: 'relative' }}>
          {/* Bouton fermer - Fixe en haut à droite du conteneur (défile avec le contenu) */}
          <button
            onClick={closeModal}
            aria-label="Fermer"
            style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 20, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', fontSize: '1.2rem', transition: 'background 0.2s' }}
          >
            <i className="bi bi-x"></i>
          </button>

          {/* Image en bandeau avec fondu (gradient) transparent */}
          {selected && (
            <div style={{ position: 'relative', borderRadius: '1.5rem 1.5rem 0 0', overflow: 'hidden', aspectRatio: '16/7' }}>
              <img src={selected.img} alt={selected.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Gradient sur l'image pour mourir dans le fond de la carte */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--card) 0%, transparent 70%)' }}></div>
            </div>
          )}

          {/* Contenu */}
          {selected && (
            <div style={{ padding: '0 2.5rem 2.5rem', marginTop: '-2rem', position: 'relative', zIndex: 5 }}>
              {/* Icône + Titre alignés à gauche */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`bi ${selected.icon}`} style={{ fontSize: '1.5rem', color: 'var(--primary)' }}></i>
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--card-title-color)', margin: 0, lineHeight: 1.3 }}>
                  {selected.title}
                </h2>
              </div>

              {/* Description développée et justifiée */}
              <p style={{ color: 'var(--muted-foreground)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', textAlign: 'justify' }}>
                {selected.detail || selected.desc}
              </p>

              {/* Badges : Durée et Frais de consultation */}
              <div className="d-flex justify-content-center w-100 flex-wrap gap-3" style={{ marginBottom: '2.5rem' }}>
                <div style={{ background: 'var(--muted)', padding: '12px 20px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <i className="bi bi-clock" style={{ color: 'var(--primary)', fontSize: '1.15rem' }}></i>
                  <span style={{ color: 'var(--foreground)', fontSize: '0.95rem' }}>
                    <strong>Durée :</strong> {selected.time}
                  </span>
                </div>
                
                <div style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.3)', padding: '12px 20px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <i className="bi bi-tag-fill" style={{ color: 'var(--primary)', fontSize: '1.15rem' }}></i>
                  <span style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>
                    <strong>Consultation initiale :</strong> 2 000 FCFA
                  </span>
                </div>
              </div>

              {/* CTA Centré */}
              <div className="d-flex gap-3 flex-wrap justify-content-center pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                <Link 
                  to={`/contact?serviceId=${services.findIndex(s => s.title === selected.title) + 1}`} 
                  className="btn btn-primary d-inline-flex align-items-center gap-2 py-2 px-4" 
                  style={{ fontWeight: 600 }}
                  onClick={() => {
                    document.body.style.overflow = ''; // forcer le déblocage avant la navigation
                  }}
                >
                  <i className="bi bi-calendar-event"></i> Prendre Rendez-vous
                </Link>
                <button onClick={closeModal} className="btn" style={{ background: 'var(--muted)', color: 'var(--foreground)', fontWeight: 500 }}>
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
};

ServicesPage.metadata = {
  title: 'Nos Services - Home of Transformation',
  description: 'Découvrez nos 10 services d\'accompagnement professionnel et personnel : coaching, thérapie de couple, art oratoire, décoration et rangement.',
};

export default ServicesPage;
