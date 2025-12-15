import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function Programs() {
  const { t } = useLanguage();

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t('programsPage.pageTitle')}</h1>
          <p className="page-subtitle">{t('programsPage.pageSubtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="program-detail">
            <div className="program-detail-image">
              <img src="/imgs/coding-mom_1.png" alt="Coding Mom" />
            </div>
            <div className="program-detail-content">
              <h2>{t('programsPage.codingMom.title')}</h2>
              <p className="program-subtitle">{t('programsPage.codingMom.subtitle')}</p>
              <p>{t('programsPage.codingMom.desc1')}</p>
              <p>{t('programsPage.codingMom.desc2')}</p>
              <p>{t('programsPage.codingMom.desc3')}</p>
              <h4>{t('programsPage.highlights')}</h4>
              <ul>
                <li>{t('programsPage.codingMom.achievement1')}</li>
                <li>{t('programsPage.codingMom.achievement2')}</li>
                <li>{t('programsPage.codingMom.achievement3')}</li>
              </ul>
            </div>
          </div>

          <div className="program-detail reverse">
            <div className="program-detail-image">
              <img src="/imgs/wagethe-education_3.jpg" alt="Waghete Education" />
            </div>
            <div className="program-detail-content">
              <h2>{t('programsPage.wagethe.title')}</h2>
              <p className="program-subtitle">{t('programsPage.wagethe.subtitle')}</p>
              <p>{t('programsPage.wagethe.desc1')}</p>
              <p>{t('programsPage.wagethe.desc2')}</p>
              <p>{t('programsPage.wagethe.desc3')}</p>
              <h4>{t('programsPage.highlights')}</h4>
              <ul>
                <li>{t('programsPage.wagethe.achievement1')}</li>
                <li>{t('programsPage.wagethe.achievement2')}</li>
                <li>{t('programsPage.wagethe.achievement3')}</li>
              </ul>
            </div>
          </div>

          <div className="program-detail">
            <div className="program-detail-image">
              <img src="/imgs/health-vaccination_4.jpg" alt="Health & Vaccination" />
            </div>
            <div className="program-detail-content">
              <h2>{t('programsPage.health.title')}</h2>
              <p className="program-subtitle">{t('programsPage.health.subtitle')}</p>
              <p>{t('programsPage.health.desc1')}</p>
              <p>{t('programsPage.health.desc2')}</p>
              <p>{t('programsPage.health.desc3')}</p>
              <h4>{t('programsPage.highlights')}</h4>
              <ul>
                <li>{t('programsPage.health.achievement1')}</li>
                <li>{t('programsPage.health.achievement2')}</li>
                <li>{t('programsPage.health.achievement3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">{t('programsPage.testimonialsTitle')}</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">{t('programsPage.testimonial1.text')}</p>
              <div className="testimonial-author">
                <strong>{t('programsPage.testimonial1.name')}</strong>
                <span>{t('programsPage.testimonial1.role')}</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">{t('programsPage.testimonial2.text')}</p>
              <div className="testimonial-author">
                <strong>{t('programsPage.testimonial2.name')}</strong>
                <span>{t('programsPage.testimonial2.role')}</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">{t('programsPage.testimonial3.text')}</p>
              <div className="testimonial-author">
                <strong>{t('programsPage.testimonial3.name')}</strong>
                <span>{t('programsPage.testimonial3.role')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{t('programsPage.ctaTitle')}</h2>
          <p>{t('programsPage.ctaText')}</p>
          <Link to="/donate" className="btn btn-light">{t('cta.button')}</Link>
        </div>
      </section>
    </main>
  );
}
