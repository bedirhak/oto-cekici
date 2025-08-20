
import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPhone, FaWhatsapp, FaClock, FaMapMarkerAlt, FaCar, FaTruck, FaTools, FaShieldAlt } from 'react-icons/fa';

const ArifiyePage: React.FC = () => {
    const phoneNumber = "0539 585 44 22";

    useEffect(() => {
        // SEO Meta Tags
        document.title = "Arifiye Oto Çekici | 7/24 Sakarya Bölge Kurtarma Hizmeti";

        // Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Arifiye\'de 7/24 oto çekici ve bölge kurtarma hizmeti. Sakarya\'nın en hızlı araç çekici firması. Yol yardım, kaza kurtarma ve acil çekici hizmetleri.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Arifiye\'de 7/24 oto çekici ve bölge kurtarma hizmeti. Sakarya\'nın en hızlı araç çekici firması. Yol yardım, kaza kurtarma ve acil çekici hizmetleri.';
            document.head.appendChild(meta);
        }

        // Keywords meta tag
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'Arifiye Oto Çekici, Sakarya Çekici, Arifiye Bölge Kurtarma, Sakarya Yol Yardım, Arifiye Araç Çekici, Sakarya Oto Çekici, Bölge Kurtarma, Yol Yardım, Sakarya Bölge Yardım, Arifiye Çekici, Acil Çekici, Kaza Kurtarma');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'keywords';
            meta.content = 'Arifiye Oto Çekici, Sakarya Çekici, Arifiye Bölge Kurtarma, Sakarya Yol Yardım, Arifiye Araç Çekici, Sakarya Oto Çekici, Bölge Kurtarma, Yol Yardım, Sakarya Bölge Yardım, Arifiye Çekici, Acil Çekici, Kaza Kurtarma';
            document.head.appendChild(meta);
        }
    }, []);

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`);
    };

    const handleWhatsAppClick = () => {
        const message = "🚨 ARİFİYE ACİL ÇEKİCİ GEREKİYOR! 🚨\n\nWeb sitenizden yazıyorum.\nKonumum: Arifiye, Sakarya\n\nLütfen hemen ulaşın!";
        const url = `https://wa.me/905395854422?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="state-page">
            {/* Hero Section */}
            <section className="hero-section bg-gradient py-5">
                <Container>
                    <Row className="align-items-center min-vh-50">
                        <Col lg={8} className="text-white">
                            <h1 className="display-4 fw-bold mb-4">
                                Arifiye Oto Çekici <span className="text-warning">7/24 Hizmet</span>
                            </h1>
                            <p className="lead mb-4">
                                Sakarya'nın tarihi ilçesi Arifiye'de araç kurtarma ve oto çekici hizmetlerinde öncü firmayız.
                                7/24 acil çekici, bölge kurtarma ve yol yardım hizmetleriyle yanınızdayız.
                            </p>
                            <div className="hero-features d-flex flex-wrap gap-4 mb-4">
                                <div className="feature-item d-flex align-items-center">
                                    <FaClock className="text-warning me-2" />
                                    <span>7/24 Hizmet</span>
                                </div>
                                <div className="feature-item d-flex align-items-center">
                                    <FaMapMarkerAlt className="text-warning me-2" />
                                    <span>Arifiye Merkez</span>
                                </div>
                                <div className="feature-item d-flex align-items-center">
                                    <FaTruck className="text-warning me-2" />
                                    <span>Modern Çekici Filosu</span>
                                </div>
                            </div>
                            <div className="hero-buttons d-flex flex-wrap gap-3">
                                <button className="btn btn-warning btn-lg px-4" onClick={handleCallClick}>
                                    <FaPhone className="me-2" />
                                    Hemen Ara: {phoneNumber}
                                </button>
                                <button className="btn btn-success btn-lg px-4" onClick={handleWhatsAppClick}>
                                    <FaWhatsapp className="me-2" />
                                    WhatsApp
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services Section */}
            <section className="services-section py-5">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="section-title">Arifiye Bölge Kurtarma Hizmetlerimiz</h2>
                            <p className="lead text-muted">
                                Sakarya Arifiye'de sunduğumuz kapsamlı araç çekici ve yol yardım hizmetleri
                            </p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col md={6} lg={3}>
                            <Card className="service-card h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <FaCar className="service-icon text-primary mb-3" size={48} />
                                    <h5>Arifiye Oto Çekici</h5>
                                    <p className="text-muted">
                                        Arifiye merkez ve tüm mahallelerinde 7/24 araç çekici hizmeti.
                                        Modern ekipmanlarla güvenli taşıma.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="service-card h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <FaShieldAlt className="service-icon text-success mb-3" size={48} />
                                    <h5>Bölge Kurtarma</h5>
                                    <p className="text-muted">
                                        Sakarya Arifiye'de kaza sonrası araç kurtarma ve bölge yardım hizmetleri.
                                        Profesyonel ekibimizle yanınızdayız.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="service-card h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <FaTools className="service-icon text-warning mb-3" size={48} />
                                    <h5>Yol Yardım</h5>
                                    <p className="text-muted">
                                        Arifiye'de lastik değişimi, akü takviyesi, yakıt ikmali ve
                                        acil yol yardım hizmetleri.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} lg={3}>
                            <Card className="service-card h-100 border-0 shadow-sm">
                                <Card.Body className="text-center p-4">
                                    <FaTruck className="service-icon text-danger mb-3" size={48} />
                                    <h5>Ağır Vasıta Çekici</h5>
                                    <p className="text-muted">
                                        Sakarya Arifiye'de kamyon, otobüs ve ağır vasıta çekici hizmetleri.
                                        Güçlü çekici filomuzu keşfedin.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Coverage Area */}
            <section className="coverage-section bg-light py-5">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h2 className="mb-4">Arifiye'de Hizmet Verdiğimiz Bölgeler</h2>
                            <p className="lead mb-4">
                                Sakarya'nın merkez ilçesi Arifiye'nın her köşesinde 7/24 oto çekici hizmetimiz mevcuttur.
                                Profesyonel ekibimiz ve modern çekici filomuzla Arifiye'de yaşanan tüm araç sorunlarına
                                hızlı çözüm sunuyoruz.
                            </p>

                            <div className="coverage-areas mb-4">
                                <h4 className="text-primary mb-3">Hizmet Verdiğimiz Arifiye Mahalleleri</h4>
                                <Row>
                                    <Col md={6}>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Adliye Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Arifbey Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Atatürk Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Cumhuriyet Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Fatih Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Hanlıköy Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Hanlı Merkez Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Hanlı Sakarya Mahallesi</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Kalaycı Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Kumbaşı Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Neviye Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Türkçaybaşı Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Yazılıgürgen Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Yukarıkirazca Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Aşağıkirazca Mahallesi</li>
                                            <li className="mb-2"><FaMapMarkerAlt className="text-warning me-2" />Tüm Arifiye Bölgesi</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>

                            <div className="why-choose-us mb-3">
                                <h4 className="text-primary mb-3">Neden Arifiye Oto Çekici Hizmetimizi Tercih Etmelisiniz?</h4>
                                <div className="reasons-list">
                                    <div className="reason-item d-flex mb-3">

                                        <div>
                                            <strong>Sakarya'nın En Hızlı Müdahale Süresi:</strong> Arifiye içinde ortalama 10-15 dakikada yerinize ulaşıyoruz.
                                        </div>
                                    </div>
                                    <div className="reason-item d-flex mb-3">

                                        <div>
                                            <strong>7/24 Arifiye Bölge Kurtarma:</strong> Gece gündüz demeden hizmetinizdeyiz. Hafta sonu dahil kesintisiz hizmet.
                                        </div>
                                    </div>
                                    <div className="reason-item d-flex mb-3">

                                        <div>
                                            <strong>Modern Çekici Filosu:</strong> Sakarya'nın en güncel teknolojiye sahip araç çekici ekipmanları.
                                        </div>
                                    </div>
                                    <div className="reason-item d-flex mb-3">

                                        <div>
                                            <strong>Uygun Fiyat Garantisi:</strong> Arifiye'de en uygun oto çekici ve yol yardım hizmet fiyatları.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} >
                            <Card className="contact-card border-0 shadow ">
                                <Card.Header className="bg-primary text-white text-center">
                                    <h5 className="mb-0">Arifiye Acil Çekici</h5>
                                </Card.Header>
                                <Card.Body className="text-center p-4">
                                    <h3 className="text-primary mb-3">{phoneNumber}</h3>
                                    <p className="mb-4">
                                        Arifiye'de araç sorunu yaşadığınız anda hemen arayın!
                                        7/24 Sakarya bölge kurtarma hizmetimizden faydalanın.
                                    </p>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-primary btn-lg" onClick={handleCallClick}>
                                            <FaPhone className="me-2" />
                                            Hemen Ara
                                        </button>
                                        <button className="btn btn-success btn-lg" onClick={handleWhatsAppClick}>
                                            <FaWhatsapp className="me-2" />
                                            WhatsApp Mesaj
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* SEO Content Section */}
            <section className="seo-content py-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="seo-text">
                                <h2 className="mb-4">Sakarya Arifiye Oto Çekici - Bölge Kurtarma Uzmanı</h2>

                                <div className="content-block mb-4">
                                    <h3 className="h4 text-primary">Arifiye'de Güvenilir Araç Çekici Hizmeti</h3>
                                    <p>
                                        <strong>Sakarya Arifiye oto çekici</strong> hizmetinde sektörün lideri olarak,
                                        bölgedeki tüm araç sahiplerinin güvenilir partneri olmaktan gurur duyuyoruz.
                                        Arifiye merkez başta olmak üzere, ilçenin her köşesinde <strong>7/24 çekici hizmeti</strong>
                                        sunarak, araç arızası veya kaza anında yanınızda oluyoruz.
                                    </p>
                                    <p>
                                        <strong>Arifiye bölge kurtarma</strong> hizmetlerimiz kapsamında; araç çekici,
                                        yol yardım, kaza kurtarma, lastik değişimi, akü takviyesi ve yakıt ikmali gibi
                                        geniş bir hizmet yelpazesi sunuyoruz. <strong>Sakarya yol yardım</strong>
                                        konusunda uzman ekibimiz ve modern teknolojiye sahip çekici filomuzla,
                                        her türlü araç sorununa profesyonel çözümler üretiyoruz.
                                    </p>
                                </div>

                                <div className="content-block mb-4">
                                    <h3 className="h4 text-primary">Neden Sakarya'nın En Tercih Edilen Çekici Firmasıyız?</h3>
                                    <p>
                                        <strong>Sakarya bölge yardım</strong> konusunda yıllardır edindiğimiz tecrübe ve
                                        müşteri memnuniyetine verdiğimiz önem, bizi Arifiye'nın en güvenilir
                                        oto çekici firması haline getirmiştir. <strong>Arifiye çekici</strong> hizmetinde
                                        kalite standartlarımızdan asla ödün vermeyiz.
                                    </p>
                                    <ul className="custom-list">
                                        <li><strong>Hızlı Müdahale:</strong> Arifiye içinde 10-15 dakikada yerinizde</li>
                                        <li><strong>7/24 Hizmet:</strong> Gece gündüz, hafta sonu fark etmez</li>
                                        <li><strong>Modern Ekipman:</strong> Son teknoloji çekici ve kurtarma araçları</li>
                                        <li><strong>Uzman Ekip:</strong> Deneyimli ve sertifikalı operatörler</li>
                                        <li><strong>Uygun Fiyat:</strong> Şeffaf ve rekabetçi fiyat politikası</li>
                                        <li><strong>Sigortalı Hizmet:</strong> Araçlarınız güvende</li>
                                    </ul>
                                </div>

                                <div className="content-block mb-4">
                                    <h3 className="h4 text-primary">Arifiye Bölgesinde Kapsamlı Hizmet Ağı</h3>
                                    <p>
                                        <strong>Sakarya oto çekici</strong> hizmetlerimiz sadece Arifiye merkez ile sınırlı değil.
                                        İlçenin tüm mahallelerinde, ana yollarında ve yan sokaklarında etkili bir hizmet ağına sahibiz.
                                        <strong>Arifiye araç çekici</strong> ihtiyacınız olduğunda, nerede olursanız olun
                                        size en yakın ekibimizi yönlendiriyoruz.
                                    </p>
                                    <p>
                                        Özellikle D-100 karayolu, TEM otoyolu ve Arifiye çevresi gibi yoğun trafik alanlarında
                                        yaşanan araç sorunlarında, <strong>acil çekici</strong> hizmetimizle hızlı müdahale ediyoruz.
                                        <strong>Kaza kurtarma</strong> operasyonlarında da deneyimli ekibimizle profesyonel hizmet sunuyoruz.
                                    </p>
                                </div>

                                <div className="content-block">
                                    <h3 className="h4 text-primary">Sakarya Bölge Kurtarma - Teknoloji ve Güvenlik</h3>
                                    <p>
                                        <strong>Sakarya bölge kurtarma</strong> operasyonlarında kullandığımız araçlar,
                                        uluslararası güvenlik standartlarına uygun olarak tasarlanmış ve sürekli bakım-onarım
                                        altında tutulmaktadır. Hem siz hem de aracınızın güvenliği için gerekli tüm önlemleri alıyoruz.
                                    </p>
                                    <p>
                                        <strong>Arifiye oto çekici</strong> hizmetlerimizden yararlanmak için tek yapmanız gereken
                                        {phoneNumber} numaralı telefonumuzu aramak. Müşteri temsilcimiz size en yakın ekibimizin
                                        konumunu bildirerek, tahmini varış süresini paylaşacaktır.
                                        WhatsApp üzerinden de 7/24 iletişim kurabilir, konum paylaşımı yapabilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Emergency Contact Footer */}
            <section className="emergency-footer bg-danger text-white py-4">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <h4 className="mb-3">Arifiye'de Acil Durum mu?</h4>
                            <p className="mb-3">7/24 Sakarya Oto Çekici ve Bölge Kurtarma Hizmeti - Hemen Arayın!</p>
                            <div className="emergency-buttons d-flex justify-content-center gap-3 flex-wrap">
                                <button className="btn btn-light btn-lg" onClick={handleCallClick}>
                                    <FaPhone className="me-2" />
                                    {phoneNumber}
                                </button>
                                <button className="btn btn-success btn-lg" onClick={handleWhatsAppClick}>
                                    <FaWhatsapp className="me-2" />
                                    WhatsApp Mesaj Gönder
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ArifiyePage;