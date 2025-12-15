import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-cta">
            <a href="mailto:donasi@adalinefoundation.org" className="btn btn-light">
              {t('hero.donateBtn')}
            </a>
            <Link to="/contact" className="btn btn-outline">
              {t('hero.contactBtn')}
            </Link>
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container">
          <h2 className="section-title">{t('vision.title')}</h2>
          <p className="section-subtitle">{t('vision.subtitle')}</p>
          
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">{t('vision.education.title')}</h3>
              <p className="card-text">{t('vision.education.text')}</p>
            </div>

            <div className="card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">{t('vision.health.title')}</h3>
              <p className="card-text">{t('vision.health.text')}</p>
            </div>

            <div className="card">
              <div className="card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="card-title">{t('vision.partnership.title')}</h3>
              <p className="card-text">{t('vision.partnership.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section programs-section">
        <div className="container">
          <h2 className="section-title">{t('programs.title')}</h2>
          <p className="section-subtitle">{t('programs.subtitle')}</p>

          <div className="programs-grid">
            <div className="program-card">
              <img src="/imgs/coding-mom_1.png" alt="Coding Mom" className="program-image" />
              <div className="program-content">
                <h3>{t('programs.codingMom.title')}</h3>
                <p>{t('programs.codingMom.desc')}</p>
                <Link to="/programs" className="program-link">{t('programs.learnMore')}</Link>
              </div>
            </div>

            <div className="program-card">
              <img src="/imgs/wagethe-education_3.jpg" alt="Waghete Education" className="program-image" />
              <div className="program-content">
                <h3>{t('programs.wagethe.title')}</h3>
                <p>{t('programs.wagethe.desc')}</p>
                <Link to="/programs" className="program-link">{t('programs.learnMore')}</Link>
              </div>
            </div>

            <div className="program-card">
              <img src="/imgs/health-vaccination_4.jpg" alt="Health & Vaccination" className="program-image" />
              <div className="program-content">
                <h3>{t('programs.health.title')}</h3>
                <p>{t('programs.health.desc')}</p>
                <Link to="/programs" className="program-link">{t('programs.learnMore')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.text')}</p>
          <a href="mailto:donasi@adalinefoundation.org" className="btn btn-light">
            {t('cta.button')}
          </a>
        </div>
      </section>
    </main>
  );
}
