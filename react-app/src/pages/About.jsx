import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t('about.pageTitle')}</h1>
          <p className="page-subtitle">{t('about.pageSubtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-vision">
            <h2>{t('about.visionTitle')}</h2>
            <p className="vision-text">{t('about.vision')}</p>
          </div>

          <div className="about-mission">
            <h2>{t('about.missionTitle')}</h2>
            <div className="mission-grid">
              <div className="mission-card">
                <h3>{t('about.mission1.title')}</h3>
                <p>{t('about.mission1.text')}</p>
              </div>
              <div className="mission-card">
                <h3>{t('about.mission2.title')}</h3>
                <p>{t('about.mission2.text')}</p>
              </div>
              <div className="mission-card">
                <h3>{t('about.mission3.title')}</h3>
                <p>{t('about.mission3.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section history-section">
        <div className="container">
          <h2 className="section-title">{t('about.historyTitle')}</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>{t('about.history.2019.title')}</h3>
                <p>{t('about.history.2019.text')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>{t('about.history.2020.title')}</h3>
                <p>{t('about.history.2020.text')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>{t('about.history.2021.title')}</h3>
                <p>{t('about.history.2021.text')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>{t('about.history.2022.title')}</h3>
                <p>{t('about.history.2022.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scripture-section">
        <div className="container">
          <blockquote className="scripture">
            <p>{t('about.scripture.text')}</p>
            <cite>- {t('about.scripture.source')}</cite>
          </blockquote>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">{t('about.valuesTitle')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>{t('about.values.love.title')}</h3>
              <p>{t('about.values.love.text')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.values.integrity.title')}</h3>
              <p>{t('about.values.integrity.text')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.values.excellence.title')}</h3>
              <p>{t('about.values.excellence.text')}</p>
            </div>
            <div className="value-card">
              <h3>{t('about.values.compassion.title')}</h3>
              <p>{t('about.values.compassion.text')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
