import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function Donate() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);

  const uses = [
    { title: t('donate.use1.title'), desc: t('donate.use1.desc') },
    { title: t('donate.use2.title'), desc: t('donate.use2.desc') },
    { title: t('donate.use3.title'), desc: t('donate.use3.desc') },
    { title: t('donate.use4.title'), desc: t('donate.use4.desc') },
  ];

  const stats = [
    { value: '5,000+', label: t('donate.stat1') },
    { value: '2,000+', label: t('donate.stat2') },
    { value: '500,000+', label: t('donate.stat3') },
    { value: '20+', label: t('donate.stat4') },
  ];

  const faqs = [
    { q: t('donate.faq1.q'), a: t('donate.faq1.a') },
    { q: t('donate.faq2.q'), a: t('donate.faq2.a') },
    { q: t('donate.faq3.q'), a: t('donate.faq3.a') },
  ];

  return (
    <main className="page-main">
      <section className="page-hero donate-hero">
        <div className="container">
          <h1 className="page-title">{t('donate.pageTitle')}</h1>
          <p className="page-subtitle">{t('donate.pageSubtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="donate-intro">
            <h2>{t('donate.introTitle')}</h2>
            <p>{t('donate.introText')}</p>
          </div>

          <div className="donate-uses">
            <h3>{t('donate.usesTitle')}</h3>
            <div className="uses-grid">
              {uses.map((use, index) => (
                <div key={index} className="use-card">
                  <h4>{use.title}</h4>
                  <p>{use.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="donate-action">
            <h3>{t('donate.actionTitle')}</h3>
            <p>{t('donate.actionDesc')}</p>
            <p className="email-label">{t('donate.emailLabel')}</p>
            <p className="email-address">donasi@adalinefoundation.org</p>
            <a href="mailto:donasi@adalinefoundation.org" className="btn btn-primary btn-large">
              {t('donate.button')}
            </a>
            <div className="trust-badges">
              <span className="badge">{t('donate.badge1')}</span>
              <span className="badge">{t('donate.badge2')}</span>
              <span className="badge">{t('donate.badge3')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container">
          <h2 className="section-title">{t('donate.impactTitle')}</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">{t('donate.faqTitle')}</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {faq.q}
                  <span className="faq-icon">{openFaq === index ? '-' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
