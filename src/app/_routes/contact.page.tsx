import { PageComponent } from 'rasengan';
import { useState, useEffect, useRef } from 'react';

const ContactPage: PageComponent = () => {
  const [serviceId, setServiceId] = useState<string>('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');
  const [expectation, setExpectation] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const sid = params.get('serviceId');
      if (sid) {
        setServiceId(sid);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceName = selectRef.current?.options[selectRef.current.selectedIndex]?.text || "Non précisé";
    
    // Formatage texte enrichi pour WhatsApp (Maintient les lignes)
    const whatsappMsg = `*🏠 Nouvelle demande (Home of Transformation)*\n\n`
      + `*Nom et Prénom* : ${name} ${surname}\n`
      + `*Âge* : ${age} ans\n`
      + `*Email* : ${email}\n`
      + `*Service* : ${serviceName}\n`
      + `*Paiement* : ${paymentMode}\n\n`
      + `*Problème rencontré* :\n_${problem}_\n\n`
      + `*Attentes* :\n_${expectation}_\n\n`
      + `✅ Je suis informé(e) des frais de consultation à *2 500 FCFA* et de l'obligation de prévoir 2 cahiers.`;
      
    // Le numéro de destination
    const phone = "24102866292";
    const encodedMsg = encodeURIComponent(whatsappMsg);
    
    // Détection basique PC vs Smartphone
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let targetUrl = '';
    if (isMobile) {
      // Sur smartphone : ouvre directement l'application WhatsApp
      targetUrl = `whatsapp://send?phone=${phone}&text=${encodedMsg}`;
    } else {
      // Sur PC : ouvre exclusivement WhatsApp Web (évite la page de redirection API)
      targetUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;
    }
    
    window.open(targetUrl, '_blank');
  };

  return (
    <div className="grid-section" style={{ minHeight: 'calc(100vh - 60px)', paddingTop: '100px', paddingBottom: '5rem', background: 'var(--background)' }}>
      <div className="container pt-5">
        <div className="text-center mb-5 position-relative" style={{ zIndex: 10 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--foreground)', fontSize: '3rem' }}>
            Prendre Rendez-vous
          </h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--primary)', margin: '1rem auto' }}></div>
          <p style={{ color: 'var(--muted-foreground)', maxWidth: '650px', margin: '0 auto', fontSize: '1.125rem' }}>
            Nous sommes le moyen le plus sûr et efficace pour vous rendre unique et particulier dans la vie professionnelle et la vie en général 👌🏾. <strong>Bienvenue chez nous, chez vous.</strong>
          </p>
        </div>

        <div className="row g-5 justify-content-center">
          <div className="col-lg-6">
            <div className="feature-card p-4 p-md-5 w-100" style={{ padding: '2.5rem' }}>
              <form onSubmit={handleSubmit}>
                {/* Style interne ultra-premium pour les inputs */}
                <style>{`
                  .custom-input {
                    background-color: var(--background) !important;
                    color: var(--foreground) !important;
                    border: 1.5px solid var(--border) !important;
                    border-radius: 0.75rem !important;
                    padding: 0.85rem 1.2rem !important;
                    font-size: 0.95rem;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
                  }
                  .custom-input:focus {
                    background-color: var(--card) !important;
                    border-color: var(--primary) !important;
                    box-shadow: 0 0 0 4px rgba(59,130,246,0.1) !important;
                    outline: none;
                  }
                  .custom-input::placeholder {
                    color: var(--muted-foreground);
                    opacity: 0.6;
                  }
                  .form-label {
                    font-weight: 600;
                    color: var(--foreground);
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                    display: block;
                  }
                `}</style>
                
                {/* Rappel des frais visible dans le formuaire mobile */}
                <div className="d-block d-lg-none mb-4 p-3 rounded" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.3)', color: 'var(--primary)' }}>
                  <i className="bi bi-info-circle-fill me-2"></i> Frais de consultation : <strong>2 500 FCFA</strong>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-5">
                    <label htmlFor="name" className="form-label">Nom <span style={{ color: 'var(--primary)' }}>*</span></label>
                    <input type="text" className="form-control custom-input" id="name" placeholder="Ex: YAKAM" required value={name} onChange={e => setName(e.target.value)} />
                  </div>
                  <div className="col-md-4">
                     <label htmlFor="surname" className="form-label">Prénom</label>
                     <input type="text" className="form-control custom-input" id="surname" placeholder="Ex: Emmanuel" value={surname} onChange={e => setSurname(e.target.value)} />
                  </div>
                  <div className="col-md-3">
                     <label htmlFor="age" className="form-label">Âge <span style={{ color: 'var(--primary)' }}>*</span></label>
                     <input type="number" className="form-control custom-input" id="age" placeholder="Ex: 30" required value={age} onChange={e => setAge(e.target.value)} />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email <span style={{ color: 'var(--primary)' }}>*</span></label>
                  <input type="email" className="form-control custom-input" id="email" placeholder="votre@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="form-label">Service Souhaité</label>
                  <select 
                    className="form-select custom-input" 
                    id="service" 
                    ref={selectRef}
                    style={{ appearance: 'auto' }}
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                  >
                    <option value="">-- Sélectionnez un accompagnement --</option>
                    <option value="1">Développement professionnel</option>
                    <option value="2">Découverte de votre talent</option>
                    <option value="3">Gestion des conflits / Thérapie de couple</option>
                    <option value="4">Gestion d'un caractère difficile</option>
                    <option value="5">Gestion de problèmes (écoute sans jugement)</option>
                    <option value="6">Coaching en art oratoire</option>
                    <option value="7">Coaching vestimentaire</option>
                    <option value="8">Élégance féminine et Art du foulard</option>
                    <option value="9">Décoration intérieure</option>
                    <option value="10">Rangement de maison</option>
                    <option value="11">Secret des épouses épanouies</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="problem" className="form-label">Type de problème rencontré <span style={{ color: 'var(--primary)' }}>*</span></label>
                  <textarea className="form-control custom-input" id="problem" rows={2} placeholder="Petite description du problème..." required value={problem} onChange={e => setProblem(e.target.value)}></textarea>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="expectation" className="form-label">Ce que vous aimeriez voir chez vous après le travail fait <span style={{ color: 'var(--primary)' }}>*</span></label>
                  <textarea className="form-control custom-input" id="expectation" rows={2} placeholder="Vos attentes..." required value={expectation} onChange={e => setExpectation(e.target.value)}></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="payment" className="form-label">Mode de paiement <span style={{ color: 'var(--primary)' }}>*</span></label>
                  <select 
                    className="form-select custom-input" 
                    id="payment" 
                    style={{ appearance: 'auto' }}
                    required
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                  >
                    <option value="">-- Sélectionnez le mode de paiement --</option>
                    <option value="En tranche">En tranche</option>
                    <option value="Versement complet">Versement complet</option>
                  </select>
                </div>

                <div className="mb-4 p-3 rounded" style={{ background: 'rgba(59,130,246,0.08)', border: '1px dashed rgba(59,130,246,0.5)', color: 'var(--foreground)', fontSize: '0.9rem' }}>
                  <strong><i className="bi bi-journal-text me-2"></i> Note :</strong> 2 cahiers sont obligatoires pour le début du travail (un reste au bureau avec moi et avec vous).
                </div>

                <button type="submit" className="btn btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2 shadow-sm" style={{ fontWeight: 600, borderRadius: '0.75rem', fontSize: '1.05rem' }}>
                  <i className="bi bi-whatsapp"></i> Continuer sur WhatsApp
                </button>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.85rem', textAlign: 'center', marginTop: '1.25rem' }}>
                  <i className="bi bi-shield-lock-fill"></i> Sans création de compte. Vous serez redirigé vers l'application sécurisée WhatsApp.
                </p>
              </form>
            </div>
          </div>
          
          <div className="col-lg-5">
            {/* Carte "Informations" avec Glow et Design ultra premium */}
            <div className="feature-card p-5 h-100 d-flex flex-column justify-content-center overflow-hidden position-relative">
              
              {/* Effets de Glow Abstrait (style verre/neon) */}
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.15, pointerEvents: 'none', borderRadius: '50%' }}></div>
              <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '250px', height: '250px', background: '#D4A847', filter: 'blur(120px)', opacity: 0.1, pointerEvents: 'none', borderRadius: '50%' }}></div>

              <div style={{ position: 'relative', zIndex: 5 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--card-title-color)', marginBottom: '3rem' }}>
                  Informations Pratiques
                </h3>
                
                {/* --- BLOC SPECIAL : FRAIS DE CONSULTATION --- */}
                <div className="d-flex mb-4 align-items-start p-3 rounded" style={{ paddingBottom: '1.25rem', border: '1px solid rgba(59,130,246,0.3)', background: 'var(--card)', boxShadow: '0 8px 16px rgba(0,0,0,0.05)', position: 'relative', transform: 'translateX(-10px)', width: 'calc(100% + 20px)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1.25rem', border: '1px solid var(--border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                     <i className="bi bi-tag-fill" style={{ fontSize: '1.5rem', color: 'var(--primary)' }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.35rem', fontSize: '1.15rem' }}>Frais de consultation</h5>
                    <p style={{ color: 'var(--foreground)', margin: 0, lineHeight: 1.5, fontSize: '0.95rem', fontWeight: 500 }}>
                      Toute consultation est fixée à <span style={{fontSize:'1.1rem', background:'var(--primary)', color:'white', padding:'2px 8px', borderRadius:'6px', display:'inline-block'}}>2 500 FCFA</span>
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4 align-items-start" style={{ paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1.25rem', border: '1px solid var(--border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                     <i className="bi bi-geo-alt-fill" style={{ fontSize: '1.5rem', color: 'var(--primary)' }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.35rem', fontSize: '1.1rem' }}>Notre Adresse</h5>
                    <p style={{ color: 'var(--muted-foreground)', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>Douala, Cameroun</p>
                  </div>
                </div>
                
                <div className="d-flex mb-4 align-items-start" style={{ paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1.25rem', border: '1px solid var(--border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                     <i className="bi bi-telephone-fill" style={{ fontSize: '1.5rem', color: 'var(--primary)' }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.35rem', fontSize: '1.1rem' }}>Ligne Directe</h5>
                    <p style={{ color: 'var(--muted-foreground)', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>+241 02 86 62 92<br/>+241 65 97 59 035</p>
                  </div>
                </div>
                
                <div className="d-flex mb-4 align-items-start" style={{ paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1.25rem', border: '1px solid var(--border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                     <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem', color: 'var(--primary)' }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.35rem', fontSize: '1.1rem' }}>Support Client</h5>
                    <p style={{ color: 'var(--muted-foreground)', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>prunellenono@icloud.com</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginRight: '1.25rem', border: '1px solid var(--border)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                     <i className="bi bi-clock-fill" style={{ fontSize: '1.5rem', color: 'var(--primary)' }}></i>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 600, color: 'var(--foreground)', marginBottom: '0.35rem', fontSize: '1.1rem' }}>Heures d'ouverture</h5>
                    <p style={{ color: 'var(--muted-foreground)', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>
                      <strong>Lun-Ven:</strong> 9h00 - 19h00<br/>
                      <strong>Sam:</strong> 10h00 - 14h00
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactPage.metadata = {
    title: 'Contactez-nous - Home of Transformation',
    description: 'Prenez rendez-vous avec Home of Transformation pour démarrer votre changement.',
};
  
export default ContactPage;
