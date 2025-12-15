import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">Adeline Foundation</span>
              <svg className="cross-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2V22M2 12H22" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="footer-mission">{t('footer.mission')}</p>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/about">{t('nav.about')}</Link>
            <Link to="/programs">{t('nav.programs')}</Link>
            <Link to="/gallery">{t('nav.gallery')}</Link>
            <Link to="/contact">{t('nav.contact')}</Link>
            <Link to="/privacy">{t('footer.privacy')}</Link>
          </div>

          <div className="footer-contact">
            <h4>{t('footer.contactTitle')}</h4>
            <p>Jl. H. Agus Salim No.32B</p>
            <p>Kebon Sirih, Menteng</p>
            <p>Central Jakarta 10340</p>
            <p>info@adalinefoundation.org</p>
            <p>(62) 021 5020-1021</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Adeline Foundation - All Rights Reserved</p>
          <p className="footer-motto">Faith, Hope, and Love - In All We Do</p>
        </div>
      </div>
    </footer>
  );
}
