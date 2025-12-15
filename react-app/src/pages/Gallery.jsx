import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Pages.css';

export default function Gallery() {
  const { t } = useLanguage();

  const photos = [
    { src: '/imgs/coding-mom_1.png', title: t('gallery.photo1.title'), desc: t('gallery.photo1.desc') },
    { src: '/imgs/wagethe-education_3.jpg', title: t('gallery.photo2.title'), desc: t('gallery.photo2.desc') },
    { src: '/imgs/health-vaccination_4.jpg', title: t('gallery.photo3.title'), desc: t('gallery.photo3.desc') },
    { src: '/imgs/hero-children_4.jpg', title: t('gallery.photo4.title'), desc: t('gallery.photo4.desc') },
    { src: '/imgs/gallery-1_0.JPG', title: t('gallery.photo5.title'), desc: t('gallery.photo5.desc') },
    { src: '/imgs/gallery-1_1.jpg', title: t('gallery.photo6.title'), desc: t('gallery.photo6.desc') },
    { src: '/imgs/wagethe-education_5.jpg', title: t('gallery.photo7.title'), desc: t('gallery.photo7.desc') },
    { src: '/imgs/health-vaccination_6.jpg', title: t('gallery.photo8.title'), desc: t('gallery.photo8.desc') },
    { src: '/imgs/coding-mom_4.webp', title: t('gallery.photo9.title'), desc: t('gallery.photo9.desc') },
  ];

  const partners = [
    t('gallery.partner1'),
    t('gallery.partner2'),
    t('gallery.partner3'),
    t('gallery.partner4'),
    t('gallery.partner5'),
  ];

  return (
    <main className="page-main">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">{t('gallery.pageTitle')}</h1>
          <p className="page-subtitle">{t('gallery.pageSubtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('gallery.photosTitle')}</h2>
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <div key={index} className="gallery-item">
                <img src={photo.src} alt={photo.title} />
                <div className="gallery-overlay">
                  <h4>{photo.title}</h4>
                  <p>{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section partners-section">
        <div className="container">
          <h2 className="section-title">{t('gallery.partnersTitle')}</h2>
          <p className="section-subtitle">{t('gallery.partnersSubtitle')}</p>
          <div className="partners-list">
            {partners.map((partner, index) => (
              <div key={index} className="partner-item">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{t('gallery.ctaTitle')}</h2>
          <p>{t('gallery.ctaText')}</p>
          <Link to="/contact" className="btn btn-light">{t('gallery.ctaVolunteer')}</Link>
        </div>
      </section>
    </main>
  );
}
