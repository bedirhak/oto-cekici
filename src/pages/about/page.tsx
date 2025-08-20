
import React from 'react';
import Container from '../../components/Container';

const AboutPage: React.FC = () => {
    const phoneNumber = "0539 585 44 22";

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`);
    };

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <Container>
                    <div className="about-hero-content">
                        <h1 className="about-main-title">
                            Sakarya'nın En Güvenilir <span className="highlight">Oto Çekici</span> Hizmeti
                        </h1>
                        <p className="about-subtitle">
                            2015'ten beri Sakarya ve çevre ilçelerde 7/24 profesyonel oto çekici hizmeti veriyoruz.
                            Adapazarı'ndan Serdivan'a, Geyve'den Hendek'e kadar tüm bölgelerde hızlı ve güvenilir hizmet.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Our Story Section */}
            <section className="our-story">
                <Container>
                    <div className="story-content">
                        <h2 className="section-title">Hikayemiz</h2>
                        <div className="story-grid">
                            <div className="story-text">
                                <p>
                                    2015 yılında Sakarya Adapazarı'nda küçük bir garajda başladığımız yolculuğumuz,
                                    bugün <strong>Sakarya'nın en büyük oto çekici filosu</strong>na dönüştü.
                                    Kurucumuz Ahmet Bey'in "Her Sakaryalı'ya hızlı yardım" vizyonu ile yola çıktık.
                                </p>
                                <p>
                                    10 yıllık deneyimimizde <strong>50.000+</strong> araç çektik, binlerce Sakaryalı'ya
                                    yardım ettik. TEM Otoyolu'ndan D-100'e, şehir içinden kırsal bölgelere kadar
                                    her noktada hizmet verdik.
                                </p>
                                <p>
                                    Bugün <strong>15 kişilik profesyonel ekibimiz</strong> ile Sakarya'nın
                                    16 ilçesinde kesintisiz hizmet vermeye devam ediyoruz.
                                </p>
                            </div>
                            <div className="story-stats">
                                <div className="stat-card">
                                    <div className="stat-number">50K+</div>
                                    <div className="stat-label">Çekilen Araç</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">10</div>
                                    <div className="stat-label">Yıllık Deneyim</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">16</div>
                                    <div className="stat-label">İlçede Hizmet</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-number">15</div>
                                    <div className="stat-label">Dakikada Müdahale</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Service Areas Section */}
            <section className="service-areas">
                <Container>
                    <h2 className="section-title">Sakarya Genelinde Hizmet Verdiğimiz Bölgeler</h2>
                    <p className="section-subtitle">
                        Sakarya'nın her köşesinde, 24 saat boyunca profesyonel oto çekici hizmetimiz hazır bekliyor.
                    </p>

                    <div className="areas-detailed-grid">
                        {/* Merkez İlçeler */}
                        <div className="area-card featured">
                            <h3 className="area-title">🏙️ Merkez İlçelerimiz</h3>
                            <div className="area-places">
                                <div className="place-item primary">
                                    <strong>Adapazarı Oto Çekici</strong>
                                    <span>Şehir merkezi, Köprübaşı, Yeni Mahalle, Tabakhane</span>
                                </div>
                                <div className="place-item primary">
                                    <strong>Serdivan Oto Çekici</strong>
                                    <span>Kemalpaşa, Arabacıalanı, Semerciler, Çark Caddesi</span>
                                </div>
                                <div className="place-item">
                                    <strong>Arifiye Oto Çekici</strong>
                                    <span>Arifiye Merkez, İstasyon Caddesi</span>
                                </div>
                                <div className="place-item">
                                    <strong>Erenler Oto Çekici</strong>
                                    <span>Erenler Mahallesi, Yeni Yerleşim</span>
                                </div>
                            </div>
                        </div>

                        {/* Doğu Bölgesi */}
                        <div className="area-card">
                            <h3 className="area-title">🌅 Doğu Bölgesi</h3>
                            <div className="area-places">
                                <div className="place-item">
                                    <strong>Hendek Oto Çekici</strong>
                                    <span>Hendek Merkez, Çiftlikköy, Ormanlı</span>
                                </div>
                                <div className="place-item">
                                    <strong>Sapanca Oto Çekici</strong>
                                    <span>Sapanca Gölü çevresi, Kırkpınar, Mahmudiye</span>
                                </div>
                                <div className="place-item">
                                    <strong>Karasu Oto Çekici</strong>
                                    <span>Karasu Merkez, Akyazı bağlantısı</span>
                                </div>
                                <div className="place-item">
                                    <strong>Kaynarca Oto Çekici</strong>
                                    <span>Kaynarca Merkez</span>
                                </div>
                            </div>
                        </div>

                        {/* Batı Bölgesi */}
                        <div className="area-card">
                            <h3 className="area-title">🌅 Batı Bölgesi</h3>
                            <div className="area-places">
                                <div className="place-item">
                                    <strong>Geyve Oto Çekici</strong>
                                    <span>Geyve Merkez, Osmaniye, Kızılcık</span>
                                </div>
                                <div className="place-item">
                                    <strong>Pamukova Oto Çekici</strong>
                                    <span>Pamukova Merkez, Çifteler, Derbent</span>
                                </div>
                                <div className="place-item">
                                    <strong>Taraklı Oto Çekici</strong>
                                    <span>Taraklı Merkez, Akçakese, Karaköy</span>
                                </div>
                            </div>
                        </div>

                        {/* Ana Yollar */}
                        <div className="area-card highway">
                            <h3 className="area-title">🛣️ Ana Yol Güzergahları</h3>
                            <div className="area-places">
                                <div className="place-item highway-item">
                                    <strong>TEM Otoyolu Çekici Hizmeti</strong>
                                    <span>Sapanca - Geyve arası, Kurtköy - Hendek</span>
                                </div>
                                <div className="place-item highway-item">
                                    <strong>D-100 Karayolu</strong>
                                    <span>Adapazarı geçişi, Akyazı bağlantısı</span>
                                </div>
                                <div className="place-item highway-item">
                                    <strong>Ankara Yolu (D-650)</strong>
                                    <span>Geyve - Taraklı - Ankara istikameti</span>
                                </div>
                                <div className="place-item highway-item">
                                    <strong>Sakarya İç Yolları</strong>
                                    <span>İlçeler arası bağlantılar, köy yolları</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact */}
                    <div className="quick-contact">
                        <h3>Sakarya'da Nerede Olursanız Olun</h3>
                        <p>15 dakika içinde yanınızdayız!</p>
                        <button className="quick-call-btn" onClick={handleCallClick}>
                            📞 HEMEN ARA: {phoneNumber}
                        </button>
                    </div>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose">
                <Container>
                    <h2 className="section-title">Neden Sakarya'da Bizi Tercih Ediyorlar?</h2>
                    <div className="why-grid">
                        <div className="why-item">
                            <div className="why-icon">🏆</div>
                            <h4>Sakarya'nın Lideri</h4>
                            <p>
                                10 yıldır Sakarya'da hizmet veren, en çok tercih edilen oto çekici firması.
                                <strong>50.000+</strong> mutlu müşteri.
                            </p>
                        </div>
                        <div className="why-item">
                            <div className="why-icon">⚡</div>
                            <h4>15 Dakika Garanti</h4>
                            <p>
                                Adapazarı merkezden Hendek'e, Geyve'den Sapanca'ya kadar
                                <strong>15 dakikada</strong> yanınızdayız.
                            </p>
                        </div>
                        <div className="why-item">
                            <div className="why-icon">🚛</div>
                            <h4>Modern Filo</h4>
                            <p>
                                Son model çekici araçlarımızla <strong>otomobilden kamyona</strong> kadar
                                her türlü aracı güvenle çekiyoruz.
                            </p>
                        </div>
                        <div className="why-item">
                            <div className="why-icon">💰</div>
                            <h4>Sakarya'nın En Uygun Fiyatları</h4>
                            <p>
                                Şeffaf fiyatlandırma, gizli maliyet yok. Sakarya genelinde
                                <strong>en uygun</strong> oto çekici fiyatları.
                            </p>
                        </div>
                        <div className="why-item">
                            <div className="why-icon">🛡️</div>
                            <h4>Sigortalı Güvenlik</h4>
                            <p>
                                Araçlarınız <strong>tam sigorta</strong> kapsamında. Hasar riskine karşı
                                %100 güvence altında.
                            </p>
                        </div>
                        <div className="why-item">
                            <div className="why-icon">👥</div>
                            <h4>Yerel Sakarya Ekibi</h4>
                            <p>
                                <strong>15 kişilik</strong> profesyonel ekibimiz Sakarya'nın her sokağını bilir.
                                Hızlı ve doğru hizmet.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Our Team */}
            <section className="our-team">
                <Container>
                    <h2 className="section-title">Sakarya Oto Çekici Ekibimiz</h2>
                    <div className="team-content">
                        <p className="team-intro">
                            <strong>15 kişilik</strong> deneyimli ekibimiz, Sakarya'nın her noktasında
                            7/24 hizmetinizde. Tüm ekip üyelerimiz <strong>sertifikalı</strong> ve
                            <strong>sigortalıdır</strong>.
                        </p>
                        <div className="team-features">
                            <div className="team-feature">
                                <strong>Operasyon Merkezi:</strong> Adapazarı Merkez
                            </div>
                            <div className="team-feature">
                                <strong>Çekici Operatörleri:</strong> 10 Deneyimli Şoför
                            </div>
                            <div className="team-feature">
                                <strong>Müşteri Hizmetleri:</strong> 3 Uzman Personel
                            </div>
                            <div className="team-feature">
                                <strong>Teknik Ekip:</strong> 2 Uzman Teknisyen
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contact CTA */}
            <section className="contact-cta">
                <Container>
                    <div className="cta-content">
                        <h2>Sakarya'da Yolda mı Kaldınız?</h2>
                        <p>
                            Hangi ilçede olursanız olun, <strong>15 dakikada yanınızdayız!</strong>
                            <br />
                            TEM, D-100, şehir içi - her yerde hızlı müdahale.
                        </p>
                        <button className="main-cta-btn" onClick={handleCallClick}>
                            🚨 ACİL ÇAĞRI: {phoneNumber}
                        </button>
                        <div className="service-hours">
                            ⏰ 7/24 Kesintisiz Hizmet | 🏆 10 Yıllık Deneyim | 🛡️ Sigortalı Güvenlik
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default AboutPage;