import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.divider}></div>

      <div className={styles.section}>
        <h4>Beyza Kilim</h4>
        <p>
          Anadolu'nun ruhunu yansıtan el yapımı kilimler ve halılar. Gelenekten ilham, zamansız desenler.
        </p>
      </div>

      {/* Sayfalar */}
      <div className={styles.section}>
        <h4>Sayfalar</h4>
        <div className={styles.links}>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/shop">Mağaza</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
          <Link to="/faq">SSS</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>

      {/* Dropshipping */}
      <div className={styles.section}>
        <h4>Dropshipping</h4>
        <div className={styles.links}>
          <Link to="/dropshipping">Nasıl Çalışır?</Link>
          <Link to="/dropshipping#form">Başvuru Formu</Link>
          <Link to="/dropshipping#sss">Sık Sorulanlar</Link>
        </div>
      </div>

      {/* Sosyal Medya */}
      <div className={styles.section}>
        <h4>Sosyal Medya</h4>
        <div className={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
          <a href="https://wa.me/90xxxxxxxxxx" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Telif Hakkı ve Politikalar */}
      <div className={styles.bottomLine}>
        © {new Date().getFullYear()} Beyza Kilim. Tüm hakları saklıdır. <br />
        <Link to="/privacy">Gizlilik Politikası</Link> | <Link to="/terms">Kullanım Şartları</Link>
      </div>
    </footer>
  );
};

export default Footer;
