import React, { useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaRoute, FaShieldAlt, FaTools } from 'react-icons/fa';
import './page.scss'

const EnYakin: React.FC = () => {
    const phoneNumber = "0539 585 44 22";

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`);
    };

    const handleWhatsAppClick = () => {
        const message = "En yakın çekici hizmetiniz için bilgi almak istiyorum.";
        const url = `https://wa.me/905395854422?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    useEffect(() => {
        document.title = "En Yakın Çekici | Sakarya ve Çevresine En Hızlı Oto Çekici Hizmeti";

        // Meta description for SEO
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Sakarya ve çevresindeki en yakın oto çekici hizmeti. TEM, D-100, Bolu yolu, İzmit yolu üzerinde 10 dakikada yanınızda. Kurtköy, İstanbul, Adapazarı arası en hızlı çekici.');
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="en-yakin-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h1>En Yakın Çekici Hizmeti - Sakarya ve Çevresinde</h1>
                            <p className="lead">Sakarya, TEM Otoyolu, D-100, Bolu Yolu ve İzmit Yolu üzerinde size en yakın konumda bulunan profesyonel oto çekici hizmeti. 7/24 acil müdahale ile ortalama 10-15 dakikada yanınızdayız!</p>
                            <div className="hero-buttons">
                                <button className="primary-btn" onClick={handleCallClick}>
                                    <FaPhoneAlt /> En Yakın Çekici: {phoneNumber}
                                </button>
                                <button className="secondary-btn" onClick={handleWhatsAppClick}>
                                    <FaWhatsapp /> Hemen WhatsApp
                                </button>
                            </div>
                            <div className="proximity-badges">
                                <span className="proximity-badge">📍 Sakarya'da En Yakın</span>
                                <span className="proximity-badge">⚡ 10 Dakikada Yanınızda</span>
                                <span className="proximity-badge">🛣️ Tüm Otoyollarda Hizmet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearest Locations Section */}
            <section className="nearest-locations-section">
                <div className="container">
                    <h2>Size En Yakın Çekici Noktalarımız</h2>
                    <p className="section-subtitle">Stratejik konumlarımızla her noktaya en hızlı ulaşım</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="location-content">
                                <h3>TEM Otoyolu Üzerinde En Yakın Çekici</h3>
                                <p>TEM Otoyolu Sakarya giriş ve çıkışlarında konuşlandırılmış çekici araçlarımızla, Adapazarı-İstanbul arası her noktada 10-12 dakika içinde yanınızdayız. Sapanca TEM çıkışı, Arifiye kavşağı, Hendek geçişi ve Düzce yönünde tüm TEM güzergahında en yakın çekici hizmetimizle acil müdahalelerinizi gerçekleştiriyoruz.</p>

                                <h4>D-100 Karayolu En Yakın Çekici Noktaları</h4>
                                <p>D-100 karayolu Adapazarı giriş-çıkış, Arifiye kavşağı, Sapanca ve Hendek geçişlerinde bulunan çekici noktalarımızla size en yakın konumdan hızla müdahale ediyoruz. Ankara-İstanbul yönünde hangi tarafta olursanız olun, en yakın çekici noktamızdan 15 dakika içinde ulaşıyoruz.</p>

                                <h4>Bolu Yolu ve İzmit Yolu Çekici Hizmetimiz</h4>
                                <p>Sakarya'dan Bolu istikametine giden D-655 karayolu üzerinde ve İzmit yolu D-130 güzergahında en yakın çekici hizmetimizle bölgedeki tüm araç sorunlarına hızla müdahale ediyoruz. Sapanca-İzmit arası, Hendek-Bolu arası güzergahlarda size en yakın noktalardan profesyonel çekici desteği sağlıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="proximity-map">
                                <h3>En Yakın Çekici Mesafeleri</h3>
                                <div className="distance-list">
                                    <div className="distance-item">
                                        <FaMapMarkerAlt className="location-icon" />
                                        <div className="distance-info">
                                            <h5>Adapazarı Merkez</h5>
                                            <span>5-8 dakika</span>
                                        </div>
                                    </div>
                                    <div className="distance-item">
                                        <FaMapMarkerAlt className="location-icon" />
                                        <div className="distance-info">
                                            <h5>Serdivan - Arifiye</h5>
                                            <span>8-12 dakika</span>
                                        </div>
                                    </div>
                                    <div className="distance-item">
                                        <FaMapMarkerAlt className="location-icon" />
                                        <div className="distance-info">
                                            <h5>TEM Otoyolu</h5>
                                            <span>10-15 dakika</span>
                                        </div>
                                    </div>
                                    <div className="distance-item">
                                        <FaMapMarkerAlt className="location-icon" />
                                        <div className="distance-info">
                                            <h5>D-100 Karayolu</h5>
                                            <span>12-18 dakika</span>
                                        </div>
                                    </div>
                                    <div className="distance-item">
                                        <FaMapMarkerAlt className="location-icon" />
                                        <div className="distance-info">
                                            <h5>Sapanca - Hendek</h5>
                                            <span>15-20 dakika</span>
                                        </div>
                                    </div>
                                    <div className="distance-item">
                                        <FaMapMarkerAlt className="location-icon" />
                                        <div className="distance-info">
                                            <h5>İzmit Yolu</h5>
                                            <span>20-25 dakika</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kurtköy and Surrounding Areas Section */}
            <section className="surrounding-areas-section">
                <div className="container">
                    <h2>Kurtköy ve İstanbul Çevresinden Sakarya'ya En Yakın Çekici</h2>
                    <p className="section-subtitle">İstanbul çevresi ve Sakarya arası en hızlı çekici transferi</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="transfer-content">
                                <h3>Kurtköy - Sakarya Arası Çekici Hizmeti</h3>
                                <p>Kurtköy, Pendik, Gebze ve İstanbul Anadolu yakasından Sakarya'ya araç transferi için en yakın ve en hızlı çekici hizmetimizle TEM Otoyolu üzerinden güvenli taşımacılık yapıyoruz. Kurtköy'den Adapazarı'na 45-50 dakikada, Serdivan'a 40-45 dakikada araç teslimatı sağlıyoruz.</p>

                                <h4>İstanbul - Sakarya Çekici Rotamız</h4>
                                <ul className="route-list">
                                    <li><strong>Kurtköy → Adapazarı:</strong> TEM üzerinden 40-50 dk</li>
                                    <li><strong>Pendik → Serdivan:</strong> TEM güzergahı 45-55 dk</li>
                                    <li><strong>Gebze → Arifiye:</strong> TEM-D100 30-40 dk</li>
                                    <li><strong>Kartal → Hendek:</strong> TEM rotası 50-60 dk</li>
                                    <li><strong>Ümraniye → Sapanca:</strong> TEM hızlı geçiş 35-45 dk</li>
                                </ul>

                                <h5>Sakarya'dan İstanbul'a Araç Götürme</h5>
                                <p>Sakarya'dan İstanbul çevresine araç götürme hizmetimizde de en yakın rotaları kullanarak en hızlı teslimatı sağlıyoruz. Adapazarı'ndan Kurtköy'e, Serdivan'dan Pendik'e, Arifiye'den Gebze'ye profesyonel çekici hizmetimizle güvenli transfer yapıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-features">
                                <h3>Çevre İller Arası Çekici Avantajlarımız</h3>
                                <div className="feature-grid">
                                    <div className="feature-item">
                                        <FaRoute className="feature-icon" />
                                        <h4>En Kısa Rotalar</h4>
                                        <p>GPS destekli navigation ile en yakın ve en hızlı güzergahları kullanıyoruz.</p>
                                    </div>
                                    <div className="feature-item">
                                        <FaClock className="feature-icon" />
                                        <h4>Hızlı Transfer</h4>
                                        <p>İstanbul-Sakarya arası en hızlı çekici transferi garantisi.</p>
                                    </div>
                                    <div className="feature-item">
                                        <FaShieldAlt className="feature-icon" />
                                        <h4>Sigortalı Taşıma</h4>
                                        <p>Şehirler arası tüm transferlerde tam güvence.</p>
                                    </div>
                                    <div className="feature-item">
                                        <FaTools className="feature-icon" />
                                        <h4>Profesyonel Ekipman</h4>
                                        <p>Uzun mesafe transferleri için özel dizayn edilmiş çekici filomuz.</p>
                                    </div>
                                </div>

                                <div className="emergency-box">
                                    <h4>🚨 İstanbul-Sakarya Arası Acil Durum?</h4>
                                    <p>TEM veya D-100 üzerinde acil çekici ihtiyacınızda hemen arayın!</p>
                                    <button className="primary-btn" onClick={handleCallClick}>
                                        <FaPhoneAlt /> Acil Çekici: {phoneNumber}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highway Services Section */}
            <section className="highway-services-section">
                <div className="container">
                    <h2>Otoyol ve Karayollarında En Yakın Çekici Hizmeti</h2>
                    <p className="section-subtitle">TEM, D-100, Bolu ve İzmit yollarında 7/24 acil müdahale</p>

                    <div className="highway-grid">
                        <div className="highway-item">
                            <h3>🛣️ TEM Otoyolu En Yakın Çekici</h3>
                            <p>TEM Otoyolu Sakarya geçişi boyunca en yakın konumlardan 10-12 dakikada müdahale. Sapanca TEM gişeleri, Arifiye kavşağı, Hendek geçişi ve tüm ara noktalarda acil çekici desteği.</p>
                            <div className="highway-features">
                                <span>✅ 24/7 Hazır Bekleyiş</span>
                                <span>✅ Hızlı Trafik Müdahalesi</span>
                                <span>✅ Otoyol Güvenlik Protokolü</span>
                            </div>
                        </div>

                        <div className="highway-item">
                            <h3>🛤️ D-100 Karayolu Çekici Hizmeti</h3>
                            <p>D-100 karayolu Adapazarı-Sapanca-Hendek güzergahında en yakın çekici noktalarından hızla müdahale. İstanbul-Ankara yönünde tüm acil durumlara 15 dakikada çözüm.</p>
                            <div className="highway-features">
                                <span>✅ Stratejik Konum</span>
                                <span>✅ Çift Yönlü Hizmet</span>
                                <span>✅ Hızlı Kurtarma</span>
                            </div>
                        </div>

                        <div className="highway-item">
                            <h3>🏔️ Bolu Yolu Çekici Desteği</h3>
                            <p>Sakarya-Bolu arası D-655 karayolunda özellikle kış aylarında kritik olan çekici hizmetimizle en yakın noktalardan güvenli müdahale sağlıyoruz.</p>
                            <div className="highway-features">
                                <span>✅ Kış Şartları Uzmanı</span>
                                <span>✅ Dağ Yolu Tecrübesi</span>
                                <span>✅ Özel Ekipman</span>
                            </div>
                        </div>

                        <div className="highway-item">
                            <h3>🌊 İzmit Yolu Çekici Hizmeti</h3>
                            <p>Sakarya-İzmit arası D-130 karayolunda ve Sapanca çevresi rotalarında en yakın çekici hizmetimizle güvenli yol yardımı sunuyoruz.</p>
                            <div className="highway-features">
                                <span>✅ Sahil Yolu Hizmeti</span>
                                <span>✅ Turistik Bölge Desteği</span>
                                <span>✅ Hızlı Erişim</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="seo-content-section">
                <div className="container">
                    <h2>En Yakın Oto Çekici - Sakarya ve Çevresinde</h2>

                    <div className="seo-text">
                        <h3>Sakarya'nın En Yakın Oto Çekici Hizmeti - 7/24 Acil Müdahale</h3>
                        <p>Sakarya ve çevre illerde size en yakın konumda bulunan profesyonel oto çekici hizmetimizle 2015'ten beri hizmet veriyoruz. TEM Otoyolu, D-100 Karayolu, Bolu yolu ve İzmit yolu üzerinde stratejik noktalarda konuşlandırılmış çekici filomuzla ortalama 10-15 dakikada yanınızdayız. En yakın çekici arıyorsanız, doğru adrestesiniz!</p>

                        <h4>En Yakın Çekici Nasıl Bulunur? - Sakarya'da En Hızlı Çözüm</h4>
                        <p>Araç arızası yaşadığınızda veya kaza geçirdiğinizde "en yakın çekici nerede?" sorusu hayati önem taşır. Sakarya'da en yakın çekici hizmetimiz sayesinde bu soruya en hızlı yanıtı alacaksınız. GPS koordinat sistemimiz ve merkezi dispatch merkezimiz ile size en yakın çekici noktamızı belirleyerek hızla müdahale ediyoruz. Adapazarı'nda 5-8 dakika, Serdivan'da 8-12 dakika, TEM Otoyolu üzerinde 10-15 dakika içinde yanınızdayız.</p>

                        <h4>Kurtköy ve İstanbul Çevresinden En Yakın Çekici - Sakarya Rotası</h4>
                        <p>İstanbul Kurtköy, Pendik, Gebze, Kartal ve Anadolu yakasından Sakarya'ya araç çektirme veya Sakarya'dan bu bölgelere araç götürme ihtiyacınızda en yakın ve en hızlı çekici hizmetimizi kullanabilirsiniz. TEM Otoyolu üzerinden Kurtköy-Adapazarı arası 40-50 dakika, Pendik-Serdivan arası 45-55 dakikada güvenli transfer gerçekleştiriyoruz. İstanbul trafiğinde en yakın güzergahları bilen deneyimli şoförlerimizle hem hızlı hem güvenli taşımacılık yapıyoruz.</p>

                        <h5>TEM Otoyolu En Yakın Çekici Noktaları</h5>
                        <p>TEM Otoyolu Sakarya bölümünde en yakın çekici hizmetimiz için Sapanca TEM gişeleri çıkışı, Arifiye TEM kavşağı, Hendek TEM geçişi ve Adapazarı TEM bağlantı yollarında çekici araçlarımız 24 saat hazır bekletmekte. İstanbul'dan gelirken veya İstanbul'a giderken TEM üzerinde yaşadığınız acil durumlarda size en yakın çekici noktamızdan 10-12 dakika içinde müdahale ediyoruz.</p>

                        <h5>D-100 Karayolunda En Yakın Çekici Hizmeti</h5>
                        <p>D-100 karayolu Ankara-İstanbul güzergahında Sakarya geçişlerinde en yakın çekici hizmetimizle trafik kazaları, araç arızaları ve acil durumlar için 15 dakika içinde yanınızdayız. Adapazarı D-100 giriş-çıkış, Arifiye kavşağı, Sapanca ve Hendek D-100 geçişlerinde konuşlandırılmış çekici noktalarımızdan size en yakın olanından hızla destek sağlıyoruz.</p>

                        <h5>Sakarya İçi En Yakın Çekici Kullanımı</h5>
                        <p>Sakarya ili içerisinde ilçeler arası araç çekme, kaza sonrası taşıma, arızalı araç servise götürme gibi ihtiyaçlarınızda da en yakın çekici hizmetimizden faydalanabilirsiniz. Adapazarı merkez, Serdivan, Erenler, Arifiye arası transferlerde 10-15 dakikalık mesafelerden en hızlı hizmeti sunuyoruz. Sakarya içi en yakın çekici hizmeti için single point of contact olarak 7/24 hizmetinizdeyiz.</p>

                        <h6>Bolu Yolu ve İzmit Yolu En Yakın Çekici</h6>
                        <p>Sakarya'dan Bolu istikametine giden D-655 karayolu ve İzmit yönüne giden D-130 karayollarında da en yakın çekici hizmetimizle bölgenin zorlu coğrafyasında güvenli müdahale sağlıyoruz. Özellikle kış aylarında Bolu yolu üzerinde yaşanan zorlu şartlarda experienced ekibimizle en yakın noktadan profesyonel çekici desteği veriyoruz.</p>

                        <h6>En Yakın Çekici Avantajlarımız</h6>
                        <p>✓ GPS koordinatlı en yakın nokta tespiti ✓ 10-15 dakikalık hızlı müdahale ✓ 7/24 kesintisiz hizmet ✓ Profesyonel çekici filomuz ✓ Sigortalı taşımacılık ✓ Şeffaf fiyatlandırma ✓ Deneyimli operator kadromuz ✓ Modern teknoloji kullanımı. Sakarya ve çevresinde en yakın çekici hizmetine ihtiyaç duyduğunuzda bizimle iletişime geçmeniz yeterli!</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Size En Yakın Çekici 10 Dakikada Yanınızda!</h2>
                        <p className="cta-text">Sakarya ve çevresinde acil çekici ihtiyacınızda hemen arayın, en yakın noktamızdan hızla geliyoruz!</p>
                        <div className="cta-buttons">
                            <button className="primary-btn" onClick={handleCallClick}>
                                <FaPhoneAlt /> En Yakın Çekici: {phoneNumber}
                            </button>
                            <button className="secondary-btn" onClick={handleWhatsAppClick}>
                                <FaWhatsapp /> WhatsApp'tan Konum Gönder
                            </button>
                        </div>
                        <div className="quick-stats">
                            <div className="stat-item">
                                <span className="stat-number">10 dk</span>
                                <span className="stat-label">Ortalama Varış</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">7/24</span>
                                <span className="stat-label">Kesintisiz Hizmet</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">16</span>
                                <span className="stat-label">İlçede Hizmet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnYakin;