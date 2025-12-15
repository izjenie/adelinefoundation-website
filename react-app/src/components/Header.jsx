import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="nav-brand">
            <span className="logo-text">Adeline Foundation</span>
            <svg className="cross-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2V22M2 12H22" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
          
          <button className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              {t('nav.about')}
            </Link>
            <Link to="/programs" className={`nav-link ${isActive('/programs') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              {t('nav.programs')}
            </Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              {t('nav.gallery')}
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              {t('nav.contact')}
            </Link>
            
            <div className="lang-toggle">
              <button 
                className={`lang-btn ${language === 'id' ? 'active' : ''}`} 
                onClick={() => setLanguage('id')}
              >
                ID
              </button>
              <button 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            
            <Link to="/donate" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              {t('nav.donate')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
