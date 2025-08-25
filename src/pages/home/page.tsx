
import React from 'react';

const HomePage: React.FC = () => {
    const phoneNumber = "0539 585 44 22"; // Telefon numaranızı buraya ekleyin

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`);
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        7/24 Hızlı ve Güvenilir
                        <span className="highlight"> OTO ÇEKİCİ </span>
                        Hizmeti
                    </h1>
                    <p className="hero-description">
                        Sakarya'da 24 saat kesintisiz oto çekici hizmeti! Araç arızası, kaza,
                        lastik patlağı veya herhangi bir sorun yaşadığınızda hemen yanınızdayız.
                    </p>
                    <div className="hero-buttons">
                        <button id="callButtonId" className="cta-button primary" onClick={handleCallClick}>
                            <i className="phone-icon"></i>
                            HEMEN ARA: {phoneNumber}
                        </button>

                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <main className="container">
                    <h2 className="section-title">Oto Çekici Hizmetlerimiz</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🚗</div>
                            <h3>Araç Çekme</h3>
                            <p>Arızalı, kazalı veya çalışmayan araçlarınızı güvenle çekiyoruz</p>
                            <button className="service-cta" onClick={handleCallClick}>
                                ÇEKİCİ ÇAĞIR
                            </button>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">⚡</div>
                            <h3>Acil Yardım</h3>
                            <p>Yolda kaldınız mı? 15 dakikada yanınızdayız!</p>
                            <button className="service-cta emergency" onClick={handleCallClick}>
                                ACİL YARDIM
                            </button>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔧</div>
                            <h3>Oto Tamiri</h3>
                            <p>Basit tamirler için mobil tamir hizmeti</p>
                            <button className="service-cta" onClick={handleCallClick}>
                                TAMİR ÇAĞIR
                            </button>
                        </div>
                    </div>
                </main>
            </section>

            {/* Emergency Contact */}
            <section className="emergency-contact">
                <div className="container">
                    <div className="emergency-content">
                        <h2>SAKARYA'DA YOLDA MI KALDINIZ?</h2>
                        <p className="emergency-text">
                            Panik yapmayın! TEM, D-100 veya şehir içinde olsanız,
                            profesyonel oto çekici ekibimiz <strong>15 dakikada yanınızda!</strong>
                        </p>
                        <div className="emergency-buttons">
                            <button className="emergency-call" onClick={handleCallClick}>
                                📞 ACİL ÇAĞRI: {phoneNumber}
                            </button>
                            {/* <button className="whatsapp-button">
                                💬 WHATSAPP İLE YAZ
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-us">
                <div className="container">
                    <h2 className="section-title">Neden Bizi Seçmelisiniz?</h2>
                    <div className="features-grid">
                        <div className="feature">
                            <div className="feature-icon">⚡</div>
                            <h3>15 Dakikada Yanınızda</h3>
                            <p>Sakarya genelinde hızlı müdahale garantisi</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">💰</div>
                            <h3>Uygun Fiyat</h3>
                            <p>Şeffaf fiyatlandırma, gizli maliyet yok</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">🛡️</div>
                            <h3>Güvenli Taşıma</h3>
                            <p>Araçlarınız sigortayla güvence altında</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">🕒</div>
                            <h3>7/24 Hizmet</h3>
                            <p>Gece gündüz, hafta sonu ayrımı yok</p>
                        </div>
                    </div>
                    <div className="cta-center">
                        <button className="cta-button large" onClick={handleCallClick}>
                            HEMEN FİYAT TEKLIFI AL - {phoneNumber}
                        </button>
                    </div>
                </div>
            </section>

            {/* Coverage Areas */}
            <section className="coverage-areas">
                <div className="container">
                    <h2 className="section-title">Hizmet Alanlarımız</h2>
                    <p className="coverage-intro">
                        Sakarya'nın tüm ilçelerinde profesyonel oto çekici hizmeti veriyoruz.
                        TEM, D-100, Ankara yolu ve tüm ana arterler dahil:
                    </p>
                    <div className="areas-grid">
                        <div className="area-group">
                            <h3>Merkez İlçeler</h3>
                            <ul>
                                <li>✅ Serdivan - Adapazarı</li>
                                <li>✅ Arifiye - Erenler</li>
                                <li>✅ Söğütlü - Pamukova</li>
                            </ul>
                        </div>
                        <div className="area-group">
                            <h3>Tüm İlçelerimiz</h3>
                            <ul>
                                <li>✅ Geyve - Hendek - Karasu</li>
                                <li>✅ Karapürçek - Kaynarca</li>
                                <li>✅ Kocaali - Sapanca</li>
                                <li>✅ Taraklı - Ferizli</li>
                            </ul>
                        </div>
                        <div className="area-group">
                            <h3>Ana Yollar</h3>
                            <ul>
                                <li>🛣️ TEM Otoyolu</li>
                                <li>🛣️ D-100 Karayolu</li>
                                <li>🛣️ Ankara Yolu</li>
                                <li>🛣️ Sapanca - İzmit Yolu</li>
                            </ul>
                        </div>
                    </div>
                    <div className="coverage-cta">
                        <p><strong>Hangi bölgede olursanız olun, hemen ulaşın!</strong></p>
                        <button className="cta-button" onClick={handleCallClick}>
                            BULUNDUĞUNUZ KONUMA ÇEKİCİ ÇAĞIRIN
                        </button>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta">
                <div className="container">
                    <h2>Araçınız Arızalandı mı?</h2>
                    <p className="final-text">
                        Geç kalmayın! Profesyonel oto çekici ekibimiz
                        <strong> şu anda hazır ve bekliyor!</strong>
                    </p>
                    <div className="final-buttons">
                        <button className="mega-cta" onClick={handleCallClick}>
                            📞 HEMEN ARA VE ÇÖZ: {phoneNumber}
                        </button>
                    </div>
                    <p className="guarantee">
                        ✅ %100 Güvenli Taşıma ✅ Uygun Fiyat ✅ Hızlı Hizmet
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;