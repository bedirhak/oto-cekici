import React, { useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaTools, FaCar, FaBatteryFull, FaRoad, FaShieldAlt, FaClock } from 'react-icons/fa';

const OtoCekici: React.FC = () => {
    const phoneNumber = "0539 585 44 22";

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`);
    };

    const handleWhatsAppClick = () => {
        const message = "Merhaba! Oto çekici hizmetiniz hakkında bilgi almak istiyorum.";
        const url = `https://wa.me/905395854422?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    useEffect(() => {
        // SEO için title ve meta tag'leri güncelleme
        document.title = "Sakarya Oto Çekici | 7/24 Acil Araç Çekici ve Yol Yardım Hizmeti";

        // Scroll to top when page loads
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="oto-cekici-page">
            {/* Hero Section with H1 */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1>Sakarya'nın En Güvenilir Oto Çekici Hizmeti</h1>
                            <p className="lead">2015'ten beri Sakarya'nın tüm ilçelerinde 7/24 profesyonel oto çekici ve yol yardım hizmeti sunuyoruz.</p>
                            <div className="hero-buttons">
                                <button className="primary-btn" onClick={handleCallClick}>
                                    <FaPhoneAlt /> Hemen Ara: {phoneNumber}
                                </button>
                                <button className="secondary-btn" onClick={handleWhatsAppClick}>
                                    <FaWhatsapp /> WhatsApp'tan Yaz
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-section">
                <div className="container">
                    <h2>Neden Sakarya Oto Çekici Hizmetini Tercih Etmelisiniz?</h2>
                    <p className="section-subtitle">Sakarya'nın tüm ilçelerinde profesyonel hizmet garantisi</p>

                    <div className="row reasons-row">
                        <div className="col-md-6 col-lg-3">
                            <div className="reason-card">
                                <FaClock className="reason-icon" />
                                <h3>15 Dakika Ulaşım</h3>
                                <p>Adapazarı, Serdivan, Arifiye ve Erenler'de ortalama 15 dakikada yanınızdayız.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="reason-card">
                                <FaTools className="reason-icon" />
                                <h3>Profesyonel Ekipman</h3>
                                <p>Modern çekici filomuz ve profesyonel ekipmanlarımızla her türlü aracı güvenle taşıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="reason-card">
                                <FaShieldAlt className="reason-icon" />
                                <h3>Sigortalı Taşıma</h3>
                                <p>Tüm araçlarınız taşıma sırasında oluşabilecek hasarlara karşı sigortalıdır.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="reason-card">
                                <FaRoad className="reason-icon" />
                                <h3>Tüm İlçelerde Hizmet</h3>
                                <p>Sakarya'nın 16 ilçesinde kesintisiz hizmet sunuyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* District Service Section */}
            <section className="district-service-section">
                <div className="container">
                    <h2>Sakarya'da İlçe İlçe Oto Çekici Hizmetlerimiz</h2>
                    <p className="section-subtitle">Tüm ilçelerde 7/24 hizmetinizdeyiz</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="district-content">
                                <h3>Merkez İlçelerde Oto Çekici</h3>
                                <h4>Adapazarı Oto Çekici</h4>
                                <p>Sakarya'nın merkezi Adapazarı'nda, şehir merkezinin yoğun trafiğinde bile ortalama 10-15 dakikada yanınızdayız. Semerkant Mahallesi, Atatürk Bulvarı, Çark Caddesi ve tüm Adapazarı bölgesinde 7/24 hizmet veriyoruz.</p>

                                <h4>Serdivan Oto Çekici</h4>
                                <p>Sakarya Üniversitesi çevresi, Arabacı Alanı, Kemalpaşa ve tüm Serdivan bölgesinde profesyonel çekici hizmetimizle hızlı çözümler sunuyoruz.</p>

                                <h4>Arifiye ve Erenler Oto Çekici</h4>
                                <p>Arifiye ve Erenler ilçelerinde oto çekici ihtiyaçlarınızda 15 dakika içinde ulaşım garantisiyle yanınızdayız. Toyota fabrikası çevresi ve sanayi bölgelerinde de hizmet veriyoruz.</p>

                                <h5>Hendek ve Sapanca Oto Çekici</h5>
                                <p>Hendek ve Sapanca'nın tüm mahallelerinde, göl kenarı ve dağ yolları dahil her noktada oto çekici hizmetimizi en uygun fiyatlarla sunmaktayız.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="district-content">
                                <h3>Diğer İlçelerde Oto Çekici Hizmetlerimiz</h3>
                                <h5>Geyve, Pamukova ve Taraklı</h5>
                                <p>Sakarya'nın güney ilçelerinde, dağlık bölgelerde ve köylerde bile profesyonel çekici hizmetimizle aracınızı güvenle taşıyoruz.</p>

                                <h5>Karasu, Kocaali ve Kaynarca</h5>
                                <p>Karadeniz kıyısındaki ilçelerimizde, sahil yolunda veya iç kesimlerde yaşadığınız araç sorunlarında 24 saat yanınızdayız.</p>

                                <h5>Ferizli, Karapürçek ve Söğütlü</h5>
                                <p>Sakarya'nın her köşesinde olduğu gibi bu ilçelerimizde de profesyonel çekici filomuzla hizmet vermekteyiz.</p>

                                <h6>TEM ve D-100 Karayolu Çekici Hizmeti</h6>
                                <p>TEM Otoyolu ve D-100 karayolu üzerinde yaşanan arızalar ve kazalarda en hızlı şekilde müdahale ediyor, trafik güvenliğini sağlayarak aracınızı istediğiniz servise ulaştırıyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* When to Call Section */}
            <section className="when-to-call-section">
                <div className="container">
                    <h2>Oto Çekici Ne Zaman Aranır?</h2>
                    <p className="section-subtitle">Aşağıdaki durumlarda 7/24 hizmetinizdeyiz</p>

                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaCar className="situation-icon" />
                                <h4>Araç Kazaları</h4>
                                <p>Trafik kazalarında hasarlı aracınızın güvenli şekilde taşınması için profesyonel çekici hizmetimizi arayabilirsiniz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaTools className="situation-icon" />
                                <h4>Motor Arızaları</h4>
                                <p>Yolda kaldığınız motor arızalarında aracınızı istediğiniz servise güvenle taşıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaBatteryFull className="situation-icon" />
                                <h4>Akü Sorunları</h4>
                                <p>Akü bitmesi durumunda takviye veya çekici hizmetiyle sorunlarınızı anında çözüyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaRoad className="situation-icon" />
                                <h4>Lastik Patlaması</h4>
                                <p>Yedek lastiğiniz yoksa veya değiştiremiyorsanız, aracınızı en yakın lastikçiye ulaştırıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaTools className="situation-icon" />
                                <h4>Şanzıman Sorunları</h4>
                                <p>Şanzıman arızalarında profesyonel taşıma hizmetiyle aracınızı güvenle servise ulaştırıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaCar className="situation-icon" />
                                <h4>Araç Çekme İşlemleri</h4>
                                <p>Trafik cezası nedeniyle çekilen araçların transferi için de hizmet veriyoruz.</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-box">
                        <h6>Oto Çekici İhtiyacında Dikkat Edilmesi Gerekenler</h6>
                        <p>Araç arızalarında öncelikle güvenliğinizi sağlayın. Aracınızı güvenli bir yere çekin, reflektör yerleştirin ve dörtlüleri yakın. Ardından bizimle iletişime geçerek konum bilgilerinizi paylaşın. Ortalama 15-20 dakika içinde yanınızda olacağız.</p>
                    </div>
                </div>
            </section>

            {/* Battery Service Section */}
            <section className="battery-service-section">
                <div className="container">
                    <h2>Sakarya'da Akü Takviye Hizmeti</h2>
                    <p className="section-subtitle">Soğuk havalarda ve akü sorunlarında yanınızdayız</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="battery-content">
                                <h3>Profesyonel Akü Takviye Hizmeti</h3>
                                <p>Özellikle kış aylarında sıkça yaşanan akü sorunlarında, profesyonel ekipmanlarımızla Sakarya'nın tüm ilçelerinde akü takviye hizmeti sunuyoruz. Modern cihazlarımız sayesinde aracınızın elektronik sistemlerine zarar vermeden güvenli akü takviyesi yapıyoruz.</p>

                                <h4>Akü Takviye Hizmetimizin Özellikleri</h4>
                                <ul className="feature-list">
                                    <li><strong>Hızlı Müdahale:</strong> Ortalama 15 dakikada yanınızdayız.</li>
                                    <li><strong>Profesyonel Ekipman:</strong> Modern takviye cihazlarıyla güvenli çözüm.</li>
                                    <li><strong>7/24 Hizmet:</strong> Gece-gündüz akü takviye hizmeti.</li>
                                    <li><strong>Tüm Araçlar:</strong> Otomobil, SUV, minibüs, kamyonet - tüm araçlara uygun.</li>
                                    <li><strong>Uygun Fiyat:</strong> Ekonomik fiyatlarla profesyonel çözüm.</li>
                                </ul>

                                <h6>Akünüzün Ömrünü Uzatmak İçin Öneriler</h6>
                                <p>Akü takviyesi sonrasında en az 30 dakika araç kullanarak akünüzün şarj olmasını sağlayın. Düzenli akü bakımı yaptırarak daha uzun ömürlü kullanım elde edebilirsiniz. Uzun süre kullanılmayan araçları haftada bir kez çalıştırarak akünün boşalmasını önleyebilirsiniz.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="battery-image-container">
                                <img src="/images/battery-service.jpg" alt="Sakarya Akü Takviye Hizmeti" className="img-fluid rounded" />
                                <div className="battery-service-cta">
                                    <h4>Akü Takviye Hizmeti Mi Lazım?</h4>
                                    <p>Sakarya'nın tüm ilçelerinde 15 dakikada yanınızdayız!</p>
                                    <button className="primary-btn" onClick={handleCallClick}>
                                        <FaPhoneAlt /> Hemen Ara: {phoneNumber}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* D-100 Highway Service Section */}
            <section className="d100-highway-section">
                <div className="container">
                    <h2>D-100 Karayolu Oto Çekici Hizmeti - Sakarya'nın En Hızlı Müdahalesi</h2>
                    <p className="section-subtitle">D-100 karayolu üzerinde 7/24 acil çekici ve yol yardım hizmeti</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d100-content">
                                <h3>D-100 Karayolu'nda Profesyonel Çekici Hizmeti</h3>
                                <p>D-100 karayolu Sakarya geçişinde yaşanan trafik kazaları, araç arızaları ve acil durumlar için 7/24 profesyonel çekici hizmetimizle yanınızdayız. Adapazarı D-100 giriş ve çıkışlarında, Arifiye kavşağında, Sapanca geçişinde ve tüm D-100 güzergahında Sakarya'nın en uygun fiyatlı ve en kaliteli çekici hizmetini sunuyoruz.</p>

                                <h4>D-100'de Neden Bizi Tercih Etmelisiniz?</h4>
                                <ul className="feature-list">
                                    <li><strong>En Hızlı Müdahale:</strong> D-100 üzerinde ortalama 10-12 dakikada yanınızdayız.</li>
                                    <li><strong>En Uygun Fiyat:</strong> Sakarya'daki tüm çekici firmalarından daha ekonomik tarifeler.</li>
                                    <li><strong>Trafik Güvenliği:</strong> Uzman ekibimizle trafik akışını aksatmadan güvenli müdahale.</li>
                                    <li><strong>Modern Filomuz:</strong> D-100'ün hızlı trafiğine uygun profesyonel çekici araçları.</li>
                                    <li><strong>Sigortalı Hizmet:</strong> Karayolu taşımacılığında tam güvence.</li>
                                </ul>

                                <h5>D-100 Karayolu Sakarya Bölgesi Çekici Noktalarımız</h5>
                                <p>Adapazarı D-100 kavşağından başlayarak Arifiye, Sapanca ve Hendek çıkışlarına kadar tüm D-100 güzergahında stratejik noktalarda konuşlandırılmış çekici araçlarımızla en hızlı müdahaleyi sağlıyoruz. İstanbul-Ankara yönünde veya Ankara-İstanbul yönünde hangi tarafta olursanız olun, 15 dakika içinde yanınızdayız.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d100-info">
                                <h4>D-100'de Sık Yaşanan Durumlar</h4>
                                <div className="situation-list">
                                    <div className="situation-item">
                                        <h6>🚗 Trafik Kazaları</h6>
                                        <p>D-100'deki trafik kazalarında hasarlı araçların güvenli şekilde yol kenarından kaldırılması ve istenen noktaya taşınması.</p>
                                    </div>
                                    <div className="situation-item">
                                        <h6>⚙️ Motor Arızaları</h6>
                                        <p>Uzun yolculukta yaşanan motor sorunlarında aracın en yakın servise güvenle ulaştırılması.</p>
                                    </div>
                                    <div className="situation-item">
                                        <h6>🔋 Akü ve Elektrik Sorunları</h6>
                                        <p>D-100'de kalan araçlara akü takviyesi veya çekici hizmeti ile acil müdahale.</p>
                                    </div>
                                    <div className="situation-item">
                                        <h6>🛞 Lastik Sorunları</h6>
                                        <p>Karayolunda yaşanan lastik patlaması durumlarında güvenli taşıma hizmeti.</p>
                                    </div>
                                </div>

                                <div className="emergency-contact">
                                    <h5>D-100'de Acil Durum?</h5>
                                    <p>Güvenliğinizi sağlayın, reflektör koyun ve bizi arayın!</p>
                                    <button className="primary-btn" onClick={handleCallClick}>
                                        <FaPhoneAlt /> Acil Çekici: {phoneNumber}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="seo-content-section">
                <div className="container">
                    <h2>Sakarya'da Oto Çekici ve Yol Yardım Uzmanı</h2>

                    <div className="seo-text">
                        <h3>Sakarya'nın En Ucuz ve En Kaliteli Oto Çekici Hizmeti</h3>
                        <p>Sakarya Oto Çekici olarak 2015 yılından bu yana Adapazarı, Serdivan, Erenler, Arifiye başta olmak üzere Sakarya'nın tüm ilçelerinde hem en uygun fiyatlı hem de en kaliteli çekici ve yol yardım hizmeti sunuyoruz. Rakiplerimize göre %30 daha ekonomik tarifelerimiz ve %100 müşteri memnuniyeti garantimiz ile Sakarya'nın lider oto çekici firmasıyız. TEM Otoyolu, D-100 Karayolu ve şehir içi tüm bölgelerde yaşadığınız araç sorunlarında tek bir telefon uzağınızdayız.</p>

                        <h4>Sakarya'da En Uygun Fiyatlı Oto Çekici - Kaliteden Ödün Vermeden</h4>
                        <p>Sakarya'daki diğer çekici firmalarından farklı olarak, hem cebinizi zorlamayan ekonomik fiyatlar hem de profesyonel kalitede hizmet sunuyoruz. 8 yıllık tecrübemiz, modern çekici filomuz ve uzman ekibimizle Sakarya'nın en güvenilir ve en ucuz çekici hizmetini sağlıyoruz. Gizli masraf yok, şeffaf fiyatlandırma ve ön ödeme seçeneği ile müşterilerimizin bütçesine uygun çözümler sunuyoruz.</p>

                        <h4>Adapazarı'nda Ucuz ve Güvenilir Oto Çekici Hizmeti</h4>
                        <p>Adapazarı'nın merkezinde, Çark Caddesi, Atatürk Bulvarı, Semerkant Mahallesi ve tüm semtlerde araç çekme, yol yardım ve akü takviye hizmetlerimizle 10-15 dakika içinde yanınızdayız. Adapazarı'ndaki en ekonomik çekici tarifelerimiz ile trafik kazası, araç arızası veya lastik patlaması gibi durumlarda hem hızlı hem de uygun fiyatlı çözümler sunuyoruz. Adapazarı oto çekici sektöründe fiyat-performans lideri olarak müşteri memnuniyetini ön planda tutuyoruz.</p>

                        <h4>Serdivan ve Arifiye'de 7/24 Ekonomik Çekici Hizmeti</h4>
                        <p>Sakarya Üniversitesi çevresi, AVM bölgesi ve Serdivan'ın tüm mahallelerinde Sakarya'nın en uygun fiyatlı 7/24 kesintisiz çekici hizmetimizle araç sorunlarınıza ekonomik çözümler sunuyoruz. Arifiye'de Toyota fabrikası çevresi, sanayi bölgesi ve tüm yerleşim alanlarında öğrenciler ve çalışanlar için özel indirimli tarifelerimizle modern çekici araçlarımızla hizmet vermekteyiz. Üniversite öğrencilerine %20 indirim, fabrika çalışanlarına özel ödeme kolaylığı sağlıyoruz.</p>

                        <h5>TEM Otoyolu ve D-100'de En Hızlı En Ucuz Çekici</h5>
                        <p>TEM Otoyolu ve D-100 karayolu Sakarya geçişlerinde yaşanan acil durumlarda, diğer firmalardan %25-30 daha uygun fiyatlarla profesyonel çekici hizmetimizi sunuyoruz. Karayolu çekici hizmetlerinde sabit fiyat garantisi, gece-gündüz aynı tarife ve mesafe başı hesaplama ile şeffaf fiyatlandırma politikamızla müşterilerimizin güvenini kazanmışız. Otoyol çekici hizmetlerinde Sakarya'nın en hızlı müdahale süresi ve en ekonomik fiyat garantisi veriyoruz.</p>

                        <h5>Sakarya'nın Tüm İlçelerinde Uygun Fiyatlı Kaliteli Hizmet</h5>
                        <p>Hendek, Sapanca, Geyve, Pamukova, Karasu, Kocaali ve Sakarya'nın tüm 16 ilçesinde uniform fiyat politikamızla her bölgede aynı kalitede, aynı uygun fiyatta hizmet sunuyoruz. Köylerde bile ek masraf almadan, şehir merkezi ile aynı tarifelerle çekici hizmetimizi sağlıyoruz. Sakarya genelinde en geniş hizmet ağına sahip tek çekici firması olarak 365 gün 24 saat kesintisiz hizmetinizdeyiz.</p>

                        <h5>Neden Sakarya'nın En Ucuz ve En Kaliteli Çekici Firmasıyız?</h5>
                        <p>8 yıllık sektör tecrübemiz, geniş çekici filomuz ve optimize edilmiş operasyonlarımız sayesinde maliyetlerimizi düşük tutarak bu avantajı müşterilerimize yansıtıyoruz. Kendi çekici araçlarımız, sabit ekibimiz ve doğrudan hizmet anlayışımızla aracı masrafları ortadan kaldırıyor, en uygun fiyatları sunuyoruz. Modern teknoloji kullanımı, GPS takip sistemi ve merkezi dispatch sistemimizle operasyonel verimliliği artırarak maliyet avantajını müşteri memnuniyetine çeviriyoruz.</p>

                        <h6>Müşteri Yorumlarında Sakarya'nın En İyisi</h6>
                        <p>Sakarya'da oto çekici sektöründe 5 yıldır müşteri memnuniyeti birinciliğini koruyoruz. "En uygun fiyat, en hızlı hizmet, en güvenilir firma" yorumlarıyla Google'da 4.8 puan ortalamasına sahip olan firmamız, Sakarya halkının güvenini kazanmış durumdadır. Binlerce müşterimizin referansıyla Adapazarı, Serdivan, Arifiye ve tüm Sakarya ilçelerinde tercih edilen çekici firması olmaktan gurur duyuyoruz.</p>

                        <h6>Sakarya'da Çekici Fiyatları ve Hizmet Kalitesi</h6>
                        <p>Sakarya oto çekici sektöründe fiyat-kalite dengesini en iyi şekilde kuran firması olarak, ekonomik bütçelere uygun esnek ödeme seçenekleri sunuyoruz. Nakit, kredi kartı, havale-EFT ve taksitli ödeme imkanları ile tüm müşterilerimize uygun ödeme yöntemleri sağlıyoruz. Öğrenciler, emekliler ve düşük gelirli vatandaşlarımız için özel indirimli tarifelerimiz mevcuttur. Kaliteli hizmeti herkesin ulaşabileceği fiyatlarla sunmanın gururunu yaşıyoruz.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Sakarya'da Oto Çekici Mi Lazım?</h2>
                        <p className="cta-text">7/24 hizmet veren profesyonel ekibimizle 15 dakika içinde yanınızdayız!</p>
                        <div className="cta-buttons">
                            <button className="primary-btn" onClick={handleCallClick}>
                                <FaPhoneAlt /> Hemen Ara: {phoneNumber}
                            </button>
                            <button className="secondary-btn" onClick={handleWhatsAppClick}>
                                <FaWhatsapp /> WhatsApp'tan Yaz
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OtoCekici;