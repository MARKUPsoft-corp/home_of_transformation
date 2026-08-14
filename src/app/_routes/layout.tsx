import React, { useState, useEffect } from 'react';
import { Outlet, LayoutComponent, Link, NavLink } from 'rasengan';

const RootLayout: LayoutComponent = () => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarClosing, setSidebarClosing] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  // Bloquer le scroll quand sidebar ouverte
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  const openSidebar = () => {
    setSidebarClosing(false);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarClosing(true);
    setTimeout(() => {
      setSidebarOpen(false);
      setSidebarClosing(false);
    }, 280);
  };

  const toggleDark = () => setDark(prev => !prev);

  const navLinks = [
    { to: '/', label: 'Accueil', end: true, icon: 'bi-house' },
    { to: '/services', label: 'Nos Services', end: false, icon: 'bi-grid' },
    { to: '/about', label: 'À Propos', end: false, icon: 'bi-info-circle' },
    { to: '/contact', label: 'Prendre RDV', end: false, icon: 'bi-calendar-check' },
  ];

  return (
    <React.Fragment>
      {/* ===== NAVBAR GLASSMORPHISM ===== */}
      <nav className="navbar navbar-glass">
        <div className="container d-flex align-items-center" style={{ height: '60px' }}>

          {/* Brand */}
          <Link className="navbar-brand d-flex align-items-center gap-2 me-4" to="/" style={{ textDecoration: 'none', color: 'var(--foreground)' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              backgroundColor: 'var(--primary)',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '700',
            }}>H</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em' }}>
              Home of Transformation
            </span>
          </Link>

          {/* Links — masqués sur mobile */}
          <ul className="navbar-nav me-auto mb-0 d-none d-lg-flex align-items-center flex-row">
            {navLinks.slice(0, 3).map(lk => (
              <li className="nav-item" key={lk.to}>
                <NavLink to={lk.to} end={lk.end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{lk.label}</NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + Toggle Dark — desktop */}
          <div className="d-none d-lg-flex align-items-center gap-2 ms-auto">
            <button
              onClick={toggleDark}
              className="dark-toggle"
              aria-label={dark ? 'Mode clair' : 'Mode sombre'}
            >
              <i className={dark ? 'bi bi-sun' : 'bi bi-moon'}></i>
            </button>
            <Link
              to="/contact"
              className="btn btn-primary d-inline-flex align-items-center gap-2"
              style={{ fontSize: '0.875rem', fontWeight: 500, height: '32px', padding: '0 16px', borderRadius: '6px' }}
            >
              <i className="bi bi-calendar-check"></i>
              Prendre RDV
            </Link>
          </div>

          {/* Hamburger + dark toggle — mobile */}
          <div className="d-flex d-lg-none align-items-center gap-2 ms-auto">
            <button
              onClick={toggleDark}
              className="dark-toggle"
              aria-label={dark ? 'Mode clair' : 'Mode sombre'}
            >
              <i className={dark ? 'bi bi-sun' : 'bi bi-moon'}></i>
            </button>
            {/* Hamburger entièrement custom — toujours visible */}
            <button
              onClick={openSidebar}
              aria-label="Ouvrir le menu"
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                background: 'var(--muted)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                cursor: 'pointer',
                padding: '0 8px',
                flexShrink: 0,
              }}
            >
              <span style={{ display: 'block', width: '18px', height: '2px', background: 'var(--foreground)', borderRadius: '2px', transition: 'all 0.2s' }}></span>
              <span style={{ display: 'block', width: '18px', height: '2px', background: 'var(--foreground)', borderRadius: '2px', transition: 'all 0.2s' }}></span>
              <span style={{ display: 'block', width: '12px', height: '2px', background: 'var(--foreground)', borderRadius: '2px', alignSelf: 'flex-start', marginLeft: '3px', transition: 'all 0.2s' }}></span>
            </button>
          </div>

        </div>
      </nav>

      {/* ===== SIDEBAR MOBILE ===== */}
      {sidebarOpen && (
        <>
          {/* Overlay backdrop */}
          <div
            onClick={closeSidebar}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1080,
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              animation: sidebarClosing
                ? 'sidebar-backdrop-out 0.28s ease forwards'
                : 'sidebar-backdrop-in 0.28s ease forwards',
            }}
          />

          {/* Panneau sidebar */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 1090,
              width: 'min(320px, 85vw)',
              background: 'var(--card)',
              borderLeft: '1px solid var(--border)',
              boxShadow: '-8px 0 40px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              animation: sidebarClosing
                ? 'sidebar-panel-out 0.28s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                : 'sidebar-panel-in 0.28s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            }}
          >
            {/* Header sidebar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.25rem',
              borderBottom: '1px solid var(--border)',
              height: '60px',
            }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--foreground)' }}>
                Menu
              </span>
              <button
                onClick={closeSidebar}
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'var(--muted)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--foreground)',
                  fontSize: '1.1rem',
                }}
                aria-label="Fermer le menu"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>

            {/* Liens de navigation */}
            <nav style={{ flex: 1, padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map(lk => (
                <NavLink
                  key={lk.to}
                  to={lk.to}
                  end={lk.end}
                  onClick={closeSidebar}
                  className={({ isActive }) => isActive ? 'sidebar-link sidebar-link-active' : 'sidebar-link'}
                >
                  <i className={`bi ${lk.icon}`}></i>
                  {lk.label}
                </NavLink>
              ))}
            </nav>

            {/* Footer sidebar */}
            <div style={{
              padding: '1.25rem',
              borderTop: '1px solid var(--border)',
            }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)', textAlign: 'center', margin: 0 }}>
                <i className="bi bi-geo-alt-fill me-1" style={{ color: 'var(--primary)' }}></i>
                Douala, Cameroun &nbsp;·&nbsp;
                <i className="bi bi-telephone-fill me-1" style={{ color: 'var(--primary)' }}></i>
                +241 02 86 62 92
              </p>
            </div>
          </div>
        </>
      )}

      {/* Styles des animations sidebar + liens */}
      <style>{`
        @keyframes sidebar-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes sidebar-backdrop-out {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes sidebar-panel-in {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes sidebar-panel-out {
          from { transform: translateX(0); }
          to   { transform: translateX(100%); }
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 1rem;
          border-radius: 10px;
          text-decoration: none;
          color: var(--foreground);
          font-weight: 500;
          font-size: 1rem;
          font-family: var(--font-heading);
          transition: background 0.15s ease, color 0.15s ease;
        }
        .sidebar-link:hover {
          background: var(--muted);
          color: var(--primary);
        }
        .sidebar-link-active {
          background: rgba(59,130,246,0.1);
          color: var(--primary);
          font-weight: 600;
        }
        .sidebar-link i {
          font-size: 1.1rem;
          width: 22px;
          text-align: center;
          flex-shrink: 0;
        }
      `}</style>

      {/* ===== CONTENU ===== */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem 0 2rem', backgroundColor: 'var(--card)' }}>
        <div className="container">
          <div className="row g-4 text-center text-md-start mb-4">
            <div className="col-md-6">
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                Home of Transformation
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', margin: 0, maxWidth: '400px' }}>
                Votre réussite professionnelle et épanouissement personnel grâce à nos programmes d'accompagnement sur mesure.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <h5 style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--foreground)', marginBottom: '1rem' }}>Contact & Localisation</h5>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', margin: 0, lineHeight: 1.8 }}>
                <i className="bi bi-geo-alt-fill me-2" style={{ color: 'var(--primary)' }}></i> Douala, Cameroun<br/>
                <i className="bi bi-telephone-fill me-2" style={{ color: 'var(--primary)' }}></i> <a href="https://wa.me/24102866292" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+241 02 86 62 92</a>
              </p>
            </div>
          </div>
          <div className="text-center pt-4" style={{ borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', margin: 0 }}>
              &copy; {new Date().getFullYear()} Home of Transformation. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default RootLayout;

