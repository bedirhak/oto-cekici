import Logo from "../assets/images/logo.png";
import Container from "./Container";
import {
  FaPhone,
  FaAddressBook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-main">
        <Container className="footer-container">
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={Logo} alt="Sakarya Oto Çekici Logo" />
              </div>
              <p className="footer-description">
                Sakarya'nın en güvenilir oto çekici hizmeti. 7/24 kesintisiz hizmet,
                15 dakikada yanınızda. TEM, D-100 ve tüm ana yollarda acil müdahale garantisi.
                Profesyonel ekip, uygun fiyat, güvenli taşıma.
              </p>
              <div className="footer-emergency">
                <div className="emergency-call-box">
                  <FaPhone className="emergency-icon" />
                  <div>
                    <span className="emergency-label">ACİL ÇAĞRI HATTI</span>
                    <a href="tel:+905395854422" className="emergency-number">
                      0539 585 44 22
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-services-info">
              <h4 className="footer-title">Hizmet Alanlarımız</h4>
              <ul className="footer-nav">
                <li className="service-area">🏙️ Adapazarı - Serdivan</li>
                <li className="service-area">🏙️ Arifiye - Erenler</li>
                <li className="service-area">🛣️ TEM Otoyolu</li>
                <li className="service-area">🛣️ D-100 Karayolu</li>
                <li className="service-area">🏘️ Tüm Sakarya İlçeleri</li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-why-choose">
              <h4 className="footer-title">Neden Bizi Seçin?</h4>
              <ul className="footer-nav">
                <li className="footer-feature">⚡ 15 Dakikada Yanınızda</li>
                <li className="footer-feature">🕒 7/24 Kesintisiz Hizmet</li>
                <li className="footer-feature">💰 Uygun ve Şeffaf Fiyat</li>
                <li className="footer-feature">🛡️ Sigortalı Güvenli Taşıma</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4 className="footer-title">İletişim</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">Acil Çekici Hattı</span>
                    <a href="tel:+905395854422" className="contact-value">
                      0539 585 44 22
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaAddressBook className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">Hizmet Merkezi</span>
                    <span className="contact-value">
                      Sakarya - Adapazarı<br />
                      TEM ve D-100 Otoyolu Üzeri
                    </span>
                  </div>
                </div>
                <div className="contact-item emergency-note">
                  <span className="emergency-text">
                    🚨 Acil durumlar için 7/24 arayabilirsiniz!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <span>© 2025 Sakarya Oto Çekici. Tüm hakları saklıdır.</span>
            </div>
            <div className="footer-credits">
              <span>7/24 Profesyonel Oto Çekici Hizmeti - Sakarya</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
