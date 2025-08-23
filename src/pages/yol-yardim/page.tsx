import React, { useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaTools, FaCar, FaBatteryFull, FaRoad, FaShieldAlt, FaClock, FaWrench, FaGasPump } from 'react-icons/fa';
import './page.scss'

const YolYardim: React.FC = () => {
    const phoneNumber = "0539 585 44 22";

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`);
    };

    const handleWhatsAppClick = () => {
        const message = "Merhaba! Yol yardım hizmetiniz hakkında bilgi almak istiyorum.";
        const url = `https://wa.me/905395854422?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    useEffect(() => {
        document.title = "Sakarya Yol Yardım | 7/24 Acil Yol Yardım ve Araç Kurtarma Hizmeti";

        // Meta description for SEO
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Sakarya\'da 7/24 profesyonel yol yardım hizmeti. Akü takviye, lastik değişimi, yakıt ikmali, oto çekici. 15 dakikada yanınızdayız!');
        }

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="yol-yardim-page">
            {/* Hero Section with H1 */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h1>Sakarya'nın En Güvenilir 7/24 Yol Yardım Hizmeti</h1>
                            <p className="lead">2015'ten beri Sakarya'nın tüm ilçelerinde profesyonel yol yardım hizmeti sunuyoruz. Akü takviye, lastik değişimi, yakıt ikmali, çekici ve tüm acil yol yardım ihtiyaçlarınızda yanınızdayız.</p>
                            <div className="hero-buttons">
                                <button className="primary-btn" onClick={handleCallClick}>
                                    <FaPhoneAlt /> Acil Yol Yardım: {phoneNumber}
                                </button>
                                <button className="secondary-btn" onClick={handleWhatsAppClick}>
                                    <FaWhatsapp /> WhatsApp'tan Yardım İste
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Road Assistance Services Section */}
            <section className="services-section">
                <div className="container">
                    <h2>Sakarya Yol Yardım Hizmetlerimiz</h2>
                    <p className="section-subtitle">7/24 profesyonel yol yardım ekibimizle her türlü acil durumda yanınızdayız</p>

                    <div className="row services-row">
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card">
                                <FaBatteryFull className="service-icon" />
                                <h3>Akü Takviye Hizmeti</h3>
                                <p>Kış aylarında veya akü bitiminde profesyonel ekipmanlarla güvenli akü takviyesi yapıyoruz. Modern cihazlarımızla aracınıza zarar vermeden hızlı çözüm sunuyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card">
                                <FaRoad className="service-icon" />
                                <h3>Lastik Değişimi</h3>
                                <p>Yolda yaşadığınız lastik patlaması durumlarında profesyonel lastik değişim hizmetimizle güvenli şekilde yolculuğunuzu devam ettirmenizi sağlıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card">
                                <FaGasPump className="service-icon" />
                                <h3>Yakıt İkmali</h3>
                                <p>Yakıtınız bittiğinde güvenli yakıt ikmal hizmetimizle yanınızdayız. Benzin, motorin ve LPG için acil yakıt desteği sağlıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card">
                                <FaWrench className="service-icon" />
                                <h3>Küçük Tamirler</h3>
                                <p>Yolda kaldığınız küçük arızalar için yerinde tamir hizmetimizle sorunlarınızı çözmeye çalışıyor, gerektiğinde servise ulaştırıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card">
                                <FaCar className="service-icon" />
                                <h3>Araç Çekici Hizmeti</h3>
                                <p>Yerinde çözülemeyen sorunlarda profesyonel çekici hizmetimizle aracınızı güvenle istediğiniz servise veya adrese ulaştırıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card">
                                <FaTools className="service-icon" />
                                <h3>Kapı Açma Hizmeti</h3>
                                <p>Aracınızın içinde anahtarınızı unuttuğunuzda veya kilit sorunları yaşadığınızda profesyonel kapı açma hizmetimizle yardımcı oluyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Road Assistance */}
            <section className="why-choose-section">
                <div className="container">
                    <h2>Neden Sakarya Yol Yardım Hizmetimizi Tercih Etmelisiniz?</h2>
                    <p className="section-subtitle">Yol yardım konusunda Sakarya'nın en deneyimli ve güvenilir ekibi</p>

                    <div className="row reasons-row">
                        <div className="col-md-6 col-lg-3">
                            <div className="reason-card">
                                <FaClock className="reason-icon" />
                                <h3>15 Dakika Müdahale</h3>
                                <p>Sakarya'nın tüm ilçelerinde ortalama 15 dakikada yanınızdayız. Acil yol yardım ihtiyaçlarınızda hızlı çözüm garantisi.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="reason-card">
                                <FaTools className="reason-icon" />
                                <h3>Profesyonel Ekipman</h3>
                                <p>Modern yol yardım araçları ve ekipmanlarımızla her türlü acil duruma hazırlıklı profesyonel hizmet.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="reason-card">
                                <FaShieldAlt className="reason-icon" />
                                <h3>Güvenli Hizmet</h3>
                                <p>Tüm yol yardım işlemlerimizde güvenlik öncelikli. Sigortalar ve güvenlik protokolleri ile korumalı hizmet.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="reason-card">
                                <FaRoad className="reason-icon" />
                                <h3>7/24 Hizmet</h3>
                                <p>Gece gündüz, hafta sonu, bayram - yılın her günü 24 saat yol yardım hizmetinizdeyiz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* District Road Assistance Services */}
            <section className="district-service-section">
                <div className="container">
                    <h2>Sakarya İlçe İlçe Yol Yardım Hizmetlerimiz</h2>
                    <p className="section-subtitle">Tüm ilçelerde 7/24 profesyonel yol yardım desteği</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="district-content">
                                <h3>Merkez İlçelerde Yol Yardım</h3>
                                <h4>Adapazarı Yol Yardım</h4>
                                <p>Adapazarı merkez ve tüm mahallelerinde 7/24 yol yardım hizmeti. Akü takviye, lastik değişimi, yakıt ikmali ve küçük tamirler için 10-15 dakikada yanınızdayız.</p>

                                <h4>Serdivan Yol Yardım</h4>
                                <p>Sakarya Üniversitesi çevresi, AVM bölgesi ve tüm Serdivan'da acil yol yardım hizmetlerimizle öğrenciler ve vatandaşlarımızın yanındayız.</p>

                                <h4>Arifiye ve Erenler Yol Yardım</h4>
                                <p>Toyota fabrikası çevresi, sanayi bölgesi ve yerleşim alanlarında çalışanlar ve vatandaşlarımız için hızlı yol yardım desteği sağlıyoruz.</p>

                                <h5>Hendek ve Sapanca Yol Yardım</h5>
                                <p>Turistik bölgelerimiz Hendek ve Sapanca'da, göl kenarı ve dağ yollarında bile profesyonel yol yardım hizmetimizi sunuyoruz.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="district-content">
                                <h3>Diğer İlçelerde Yol Yardım Hizmetlerimiz</h3>
                                <h5>Karasu, Kocaali ve Kaynarca Yol Yardım</h5>
                                <p>Karadeniz sahil şeridindeki ilçelerimizde, tatil bölgelerinde ve yerleşim alanlarında 7/24 yol yardım hizmetindeyiz.</p>

                                <h5>Geyve, Pamukova ve Taraklı Yol Yardım</h5>
                                <p>Sakarya'nın dağlık bölgelerinde, zorlu coğrafi şartlarda bile deneyimli ekibimizle yol yardım hizmeti veriyoruz.</p>

                                <h5>Ferizli, Karapürçek ve Söğütlü Yol Yardım</h5>
                                <p>Sakarya'nın tüm köşelerinde aynı kalitede yol yardım hizmeti garantisi ile vatandaşlarımızın yanındayız.</p>

                                <h6>TEM ve D-100 Karayolu Yol Yardım</h6>
                                <p>Otoyol ve ana karayollarında yaşanan acil durumlar için özel donanımlı yol yardım araçlarımızla hızlı ve güvenli müdahale ediyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* When to Call Road Assistance */}
            <section className="when-to-call-section">
                <div className="container">
                    <h2>Yol Yardım Ne Zaman Aranır?</h2>
                    <p className="section-subtitle">Aşağıdaki durumlarda 7/24 yol yardım hizmetimizden faydalanabilirsiniz</p>

                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaBatteryFull className="situation-icon" />
                                <h4>Akü Bitimi</h4>
                                <p>Kış aylarında veya akü ömrü dolduğunda profesyonel akü takviye hizmetimizle aracınızı çalıştırıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaRoad className="situation-icon" />
                                <h4>Lastik Patlaması</h4>
                                <p>Yedek lastiğiniz yoksa veya değişim konusunda yardıma ihtiyacınız varsa profesyonel lastik değişim hizmetimizi kullanın.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaGasPump className="situation-icon" />
                                <h4>Yakıt Bitimi</h4>
                                <p>Yolda yakıtınız bittiğinde güvenli yakıt ikmal hizmetimizle en yakın benzinliğe ulaşmanızı sağlıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaTools className="situation-icon" />
                                <h4>Küçük Arızalar</h4>
                                <p>Motor sorunları, elektrik arızaları ve diğer küçük problemlerde yerinde tamir denemesi yapıyoruz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaWrench className="situation-icon" />
                                <h4>Anahtar Sorunları</h4>
                                <p>Aracınızın içinde anahtarınızı unuttuğunuzda veya kilit arızalarında kapı açma hizmetimizi kullanabilirsiniz.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="situation-card">
                                <FaCar className="situation-icon" />
                                <h4>Büyük Arızalar</h4>
                                <p>Yerinde çözülemeyen büyük arızalarda çekici hizmetimizle aracınızı servise ulaştırıyoruz.</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-box">
                        <h6>Yol Yardım İhtiyacında Dikkat Edilmesi Gerekenler</h6>
                        <p>Yol kenarında kaldığınızda öncelikle güvenliğinizi sağlayın. Aracınızı güvenli bir yere çekin, dörtlüleri yakın ve reflektör yerleştirin. Ardından bizimle iletişime geçerek tam konum bilgilerinizi paylaşın. Ortalama 15 dakika içinde yanınızda olacağız.</p>
                    </div>
                </div>
            </section>

            {/* Battery Service Section */}
            <section className="battery-service-section">
                <div className="container">
                    <h2>Sakarya'da Profesyonel Akü Takviye Yol Yardımı</h2>
                    <p className="section-subtitle">Akü sorunlarında en hızlı ve güvenilir çözüm</p>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="battery-content">
                                <h3>7/24 Akü Takviye Yol Yardım Hizmeti</h3>
                                <p>Kış aylarında sıkça yaşanan akü sorunlarında, modern takviye cihazlarımızla Sakarya'nın her noktasında güvenli akü takviye hizmeti sunuyoruz. Elektronik sistemlere zarar vermeden profesyonel akü desteği sağlıyoruz.</p>

                                <h4>Yol Yardım Akü Takviye Özelliklerimiz</h4>
                                <ul className="feature-list">
                                    <li><strong>Hızlı Müdahale:</strong> Akü takviye için ortalama 15 dakikada yanınızdayız.</li>
                                    <li><strong>Güvenli Takviye:</strong> Aracınızın elektronik sistemlerine zarar vermeyen modern cihazlar.</li>
                                    <li><strong>7/24 Hizmet:</strong> Gece-gündüz akü takviye yol yardımı.</li>
                                    <li><strong>Tüm Araç Tipleri:</strong> Otomobil, SUV, minibüs, kamyonet için uygun takviye.</li>
                                    <li><strong>Ekonomik Fiyat:</strong> Uygun fiyatlarla kaliteli yol yardım hizmeti.</li>
                                </ul>

                                <h6>Akü Sorunu Yaşamayın - Önerilerimiz</h6>
                                <p>Akü takviyesi sonrası en az 30 dakika araç kullanarak şarj sağlayın. Düzenli akü kontrolü yaptırın. Uzun süre kullanmadığınız aracı haftada bir çalıştırın.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="battery-image-container">
                                <div className="battery-service-cta">
                                    <h4>Akü Takviye Yol Yardımı Lazım?</h4>
                                    <p>Sakarya'nın her noktasında 15 dakikada akü takviye hizmetindeyiz!</p>
                                    <button className="primary-btn" onClick={handleCallClick}>
                                        <FaPhoneAlt /> Akü Takviye: {phoneNumber}
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
                    <h2>Sakarya'da Yol Yardım ve Acil Yardım Uzmanı</h2>

                    <div className="seo-text">
                        <h3>Sakarya'nın En Kapsamlı 7/24 Yol Yardım Hizmeti</h3>
                        <p>Sakarya Yol Yardım olarak 2015 yılından bu yana Adapazarı, Serdivan, Erenler, Arifiye başta olmak üzere Sakarya'nın tüm ilçelerinde profesyonel yol yardım hizmeti sunuyoruz. Akü takviye, lastik değişimi, yakıt ikmali, küçük tamirler ve çekici hizmetleriyle 7/24 yanınızdayız. TEM Otoyolu, D-100 Karayolu ve şehir içi tüm bölgelerde yaşadığınız acil durumlar için tek telefon uzağınızdayız.</p>

                        <h4>Sakarya'da En Hızlı Yol Yardım Hizmeti - 15 Dakikada Yanınızda</h4>
                        <p>Yol yardım ihtiyacınızda hız çok önemlidir. Sakarya'nın en hızlı yol yardım hizmeti olarak, modern araç filomuz ve deneyimli ekibimizle ortalama 15 dakikada yanınızdayız. Akü takviye, lastik patlaması, yakıt bitimi veya küçük arızalar için Sakarya genelinde en hızlı müdahale garantisi veriyoruz.</p>

                        <h4>Adapazarı Yol Yardım - Merkez İlçede 7/24 Hizmet</h4>
                        <p>Adapazarı merkez, Çark Caddesi, Atatürk Bulvarı ve tüm semtlerde yol yardım hizmetimizle 10-12 dakikada yanınızdayız. Adapazarı'nda akü takviye, lastik değişimi, yakıt ikmali ve acil tamirler için en güvenilir yol yardım firması olarak hizmet vermekteyiz. Ticaret merkezi, hastane çevresi, okul bölgeleri ve tüm Adapazarı'nda 7/24 yol yardım desteği.</p>

                        <h4>Serdivan ve Arifiye Yol Yardım - Üniversite ve Sanayi Bölgesi</h4>
                        <p>Sakarya Üniversitesi çevresi, AVM bölgesi ve Serdivan'ın tüm mahallelerinde öğrenciler ve vatandaşlarımız için profesyonel yol yardım hizmeti sunuyoruz. Arifiye Toyota fabrikası çevresi, sanayi sitesi ve yerleşim alanlarında çalışanlar için hızlı yol yardım desteği. Üniversite öğrencilerine özel yol yardım tarifelerimiz mevcuttur.</p>

                        <h5>TEM ve D-100 Otoyol Yol Yardım Hizmeti</h5>
                        <p>TEM Otoyolu ve D-100 karayolu Sakarya geçişlerinde yaşanan acil durumlar için özel donanımlı yol yardım araçlarımızla hızlı müdahale ediyoruz. Otoyol yol yardım hizmetlerinde trafik güvenliği öncelikli olarak, reflektör yerleştirme, güvenli bölgeye çekme ve hızlı çözüm sağlama konusunda uzmanız. Karayolu yol yardım hizmetlerinde 7/24 kesintisiz hizmet garantisi.</p>

                        <h5>Sakarya Tüm İlçelerde Yol Yardım - Kapsamlı Hizmet Ağı</h5>
                        <p>Hendek, Sapanca, Geyve, Pamukova, Karasu, Kocaali, Kaynarca, Ferizli, Karapürçek, Söğütlü, Taraklı ve Sakarya'nın tüm 16 ilçesinde aynı kalitede yol yardım hizmeti. Dağlık bölgeler, sahil şeridi, köyler ve kasabalar dahil her noktada profesyonel yol yardım desteği. Sakarya genelinde en geniş yol yardım ağına sahip firma olarak coğrafi zorlukları aşarak hizmet veriyoruz.</p>

                        <h5>Yol Yardım Hizmet Türlerimiz - Kapsamlı Çözümler</h5>
                        <p>✓ Akü Takviye: Profesyonel cihazlarla güvenli akü desteği ✓ Lastik Değişimi: Yedek lastik takma ve patlak tamiri ✓ Yakıt İkmali: Benzin, motorin, LPG acil yakıt desteği ✓ Küçük Tamirler: Motor, elektrik, soğutma sistemi müdahaleleri ✓ Kapı Açma: Anahtar kapatma ve kilit sorunları ✓ Çekici Hizmeti: Büyük arızalarda servise ulaştırma. Tüm yol yardım hizmetlerimizde modern teknoloji ve deneyimli personel garantisi.</p>

                        <h6>7/24 Yol Yardım - Hiç Kapanmayan Hizmet</h6>
                        <p>Yol yardım ihtiyaçları günün her saatinde ortaya çıkabilir. Gece yarısı akü takviye, hafta sonu lastik değişimi, bayram tatilinde yakıt ikmali - ne zaman ihtiyacınız olursa olsun yanınızdayız. 365 gün 24 saat kesintisiz yol yardım hizmeti ile Sakarya halkının güvenli yolculuğuna katkıda bulunuyoruz.</p>

                        <h6>Neden Sakarya'nın En Tercih Edilen Yol Yardım Firmasıyız?</h6>
                        <p>8 yıllık yol yardım tecrübemiz, modern ekipman parkımız, deneyimli teknisyen kadromuz ve müşteri odaklı hizmet anlayışımızla Sakarya'nın lider yol yardım firmasıyız. Hızlı müdahale, uygun fiyat, kaliteli hizmet üçgeninde müşteri memnuniyetini ön planda tutuyoruz. Binlerce memnun müşterimizin referansıyla Sakarya'da yol yardım denilince akla gelen ilk firma olmaktan gurur duyuyoruz.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Sakarya'da Yol Yardım mı Lazım?</h2>
                        <p className="cta-text">7/24 profesyonel yol yardım ekibimizle akü takviye, lastik değişimi, yakıt ikmali ve tüm acil durumlarınızda yanınızdayız!</p>
                        <div className="cta-buttons">
                            <button className="primary-btn" onClick={handleCallClick}>
                                <FaPhoneAlt /> Acil Yol Yardım: {phoneNumber}
                            </button>
                            <button className="secondary-btn" onClick={handleWhatsAppClick}>
                                <FaWhatsapp /> WhatsApp Yol Yardım
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default YolYardim;