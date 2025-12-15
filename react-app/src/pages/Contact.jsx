import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@adalinefoundation.org?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t('contact.pageTitle')}</h1>
          <p className="page-subtitle">{t('contact.pageSubtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>{t('contact.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>{t('contact.form.name')}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>{t('contact.form.email')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>{t('contact.form.phone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>{t('contact.form.subject')}</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>{t('contact.form.message')}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{t('contact.form.submit')}</button>
              </form>
            </div>

            <div className="contact-info">
              <h2>{t('contact.infoTitle')}</h2>
              
              <div className="info-block">
                <h4>{t('contact.info.address.title')}</h4>
                <p>{t('contact.info.address.text')}</p>
              </div>

              <div className="info-block">
                <h4>{t('contact.info.email.title')}</h4>
                <p>{t('contact.info.email.general')}</p>
                <p>{t('contact.info.email.donation')}</p>
              </div>

              <div className="info-block">
                <h4>{t('contact.info.phone.title')}</h4>
                <p>{t('contact.info.phone.number')}</p>
                <p>{t('contact.info.phone.whatsapp')}</p>
                <p className="hours">{t('contact.info.phone.hours')}</p>
              </div>

              <div className="map-placeholder">
                <h4>{t('contact.map.title')}</h4>
                <a 
                  href="https://maps.google.com/?q=Jl.+H.+Agus+Salim+No.32B,+Kebon+Sirih,+Menteng,+Central+Jakarta+10340" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  {t('contact.map.button')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
