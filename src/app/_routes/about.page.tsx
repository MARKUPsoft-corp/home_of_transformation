import { PageComponent, Link } from 'rasengan';

const AboutPage: PageComponent = () => {
  return (
    <div className="grid-section" style={{ minHeight: 'calc(100vh - 60px)', paddingBottom: '5rem' }}>
      <div className="container pt-5">
        
        {/* En-tête de page aligné */}
        <div className="row align-items-center mb-5 position-relative" style={{ zIndex: 10 }}>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="feature-card p-0 h-100 d-flex flex-column overflow-hidden">
               {/* Image stylisée pour "À Propos" */}
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                 alt="Équipe Home of Transformation" 
                 style={{ width: '100%', height: '300px', objectFit: 'cover' }}
               />
               <div className="p-5 text-center" style={{ background: 'var(--card)' }}>
                 <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--card-title-color)', marginBottom: '1rem' }}>Notre Vision</h2>
                 <p style={{ color: 'var(--muted-foreground)', fontStyle: 'italic', fontSize: '1.2rem', margin: 0 }}>
                   « Parce que chaque personne a le potentiel de devenir la meilleure version d'elle-même. »
                 </p>
               </div>
            </div>
          </div>
          
          <div className="col-lg-6 ps-lg-5">
            <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--foreground)', fontSize: '3rem', marginBottom: '1rem' }}>
              À Propos
            </h1>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', marginBottom: '2rem' }}></div>
            
            <p style={{ fontSize: '1.15rem', color: 'var(--foreground)', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem', fontWeight: 500, marginBottom: '2rem' }}>
              Chez Home of Transformation, notre mission est de vous accompagner de manière bienveillante et personnalisée pour vous aider à atteindre vos objectifs, qu'ils soient professionnels ou personnels.
            </p>
            
            <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Nous croyons fermement que chaque individu possède des talents uniques qui ne demandent qu'à être révélés. Que ce soit pour améliorer vos performances au bureau, sauver ou renforcer votre couple, trouver votre style vestimentaire unique, ou même sublimer votre espace de vie pour favoriser le bien-être, nous avons la méthode adaptée.
            </p>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Nous prônons une écoute active, <strong style={{ color: 'var(--foreground)' }}>sans aucun jugement</strong>, dans un cadre sécurisant et de confiance.
            </p>
            
            <Link to="/contact" className="btn btn-primary d-inline-flex align-items-center gap-2 py-2 px-4 shadow-sm" style={{ fontWeight: 600 }}>
              Nous Contacter <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
        
        {/* Valeurs section */}
        <div className="text-center mt-5 mb-5 position-relative" style={{ zIndex: 10 }}>
           <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--foreground)', fontSize: '2.5rem' }}>Nos Valeurs</h2>
           <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--primary)', margin: '1rem auto 3rem' }}></div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4 d-flex">
            <div className="feature-card w-100 p-4 text-center">
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <i className="bi bi-shield-check" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--card-title-color)' }}>Confidentialité</h4>
              <p style={{ color: 'var(--muted-foreground)', margin: 0 }}>Vous pouvez vous confier en toute sécurité. Vos données et séances restent privées.</p>
            </div>
          </div>
          
          <div className="col-md-4 d-flex">
            <div className="feature-card w-100 p-4 text-center">
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <i className="bi bi-gem" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--card-title-color)' }}>Excellence</h4>
              <p style={{ color: 'var(--muted-foreground)', margin: 0 }}>Des méthodes éprouvées et des stratégies efficaces pour des résultats optimaux.</p>
            </div>
          </div>
          
          <div className="col-md-4 d-flex">
            <div className="feature-card w-100 p-4 text-center">
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <i className="bi bi-people" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--card-title-color)' }}>Bienveillance</h4>
              <p style={{ color: 'var(--muted-foreground)', margin: 0 }}>Une écoute attentive et respectueuse en toutes circonstances, sans arrière-pensée.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutPage.metadata = {
    title: 'À Propos - Home of Transformation',
    description: 'Découvrez la mission et les valeurs de Home of Transformation.',
};
  
export default AboutPage;
