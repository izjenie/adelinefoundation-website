import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t('privacy.pageTitle')}</h1>
          <p className="page-subtitle">{t('privacy.pageSubtitle')}</p>
        </div>
      </section>

      <section className="section privacy-content">
        <div className="container">
          <p className="updated-date">{t('privacy.updated')}</p>

          <div className="privacy-section">
            <h2>{t('privacy.intro.title')}</h2>
            <p>{t('privacy.intro.text')}</p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.collection.title')}</h2>
            <ul>
              <li>{t('privacy.collection.item1')}</li>
              <li>{t('privacy.collection.item2')}</li>
              <li>{t('privacy.collection.item3')}</li>
              <li>{t('privacy.collection.item4')}</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.usage.title')}</h2>
            <ul>
              <li>{t('privacy.usage.item1')}</li>
              <li>{t('privacy.usage.item2')}</li>
              <li>{t('privacy.usage.item3')}</li>
              <li>{t('privacy.usage.item4')}</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.protection.title')}</h2>
            <p>{t('privacy.protection.text')}</p>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.rights.title')}</h2>
            <ul>
              <li>{t('privacy.rights.item1')}</li>
              <li>{t('privacy.rights.item2')}</li>
              <li>{t('privacy.rights.item3')}</li>
              <li>{t('privacy.rights.item4')}</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>{t('privacy.contact.title')}</h2>
            <p>{t('privacy.contact.text')}</p>
            <p className="contact-email">info@adalinefoundation.org</p>
          </div>
        </div>
      </section>
    </main>
  );
}
