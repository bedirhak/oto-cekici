import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/logo.png";
import { FaPhone, FaWhatsapp, FaChevronDown } from "react-icons/fa";

const ContraNavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const phoneNumber = "0539 585 44 22";

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`);
    };

    const handleWhatsAppClick = () => {
        const message = "🚨 ACİL ÇEKİCİ GEREKİYOR! 🚨\n\nWeb sitenizden yazıyorum.\nKonumum: Sakarya\n\nLütfen hemen ulaşın!";
        const url = `https://wa.me/905395854422?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownClick = (e: React.MouseEvent) => {
        e.preventDefault();
        toggleDropdown();
    };

    const handleItemClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        <>
            <Navbar expand="lg" className={`cg-navbar ${isScrolled ? 'scrolled' : ''}`}>
                <Container className="cg-navbar-container">
                    <Navbar.Brand href="/">
                        <div className="cg-logo">
                            <img src={Logo} alt="Sakarya Oto Çekici Logo" />
                            <span className="logo-text">SAKARYA OTO ÇEKİCİ</span>
                        </div>
                    </Navbar.Brand>

                    {/* Mobile Call Button */}
                    <div className="mobile-call-btn d-lg-none">
                        <button className="emergency-call-btn" onClick={handleCallClick}>
                            <FaPhone />
                            <span>ARA</span>
                        </button>
                    </div>

                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        data-bs-toggle="collapse"
                        data-bs-target="#basic-navbar-nav"
                    />

                    <Navbar.Collapse id="basic-navbar-nav" className="cg-navbar-link">

                        {/* Desktop Contact Buttons */}
                        <div className="navbar-contact-buttons d-none d-lg-flex">
                            <button className="navbar-whatsapp-btn" onClick={handleWhatsAppClick}>
                                <FaWhatsapp />
                                <span>WhatsApp</span>
                            </button>
                            <button className="navbar-call-btn" onClick={handleCallClick}>
                                <FaPhone />
                                <span>{phoneNumber}</span>
                            </button>
                        </div>


                        <Nav className="me-auto">
                            <Nav.Link className="cg-nav-link" href="/">
                                Ana Sayfa
                            </Nav.Link>

                            {/* İlçeler Hover Dropdown Menu */}
                            <div className="nav-dropdown-wrapper">
                                <Nav.Link
                                    className="cg-nav-link dropdown-trigger"
                                    href="#"
                                    role="button"
                                    onClick={handleDropdownClick}
                                    data-bs-toggle="dropdown"
                                >
                                    İlçelerimiz <FaChevronDown className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} />
                                </Nav.Link>
                                <div className={`custom-dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                    <div className="dropdown-section">
                                        <h6 className="dropdown-header">🏙️ Merkez İlçeler</h6>
                                        <a href="/adapazari" className="dropdown-item" onClick={handleItemClick}>Adapazarı Oto Çekici</a>
                                        <a href="/serdivan" className="dropdown-item" onClick={handleItemClick}>Serdivan Oto Çekici</a>
                                        <a href="/arifiye" className="dropdown-item" onClick={handleItemClick}>Arifiye Oto Çekici</a>
                                        <a href="/erenler" className="dropdown-item" onClick={handleItemClick}>Erenler Oto Çekici</a>
                                    </div>

                                    <div className="dropdown-divider"></div>

                                    <div className="dropdown-section">
                                        <h6 className="dropdown-header">🌅 Doğu Bölgesi</h6>
                                        <a href="/hendek" className="dropdown-item" onClick={handleItemClick}>Hendek Oto Çekici</a>
                                        <a href="/sapanca" className="dropdown-item" onClick={handleItemClick}>Sapanca Oto Çekici</a>
                                        <a href="/karasu" className="dropdown-item" onClick={handleItemClick}>Karasu Oto Çekici</a>
                                        <a href="/kaynarca" className="dropdown-item" onClick={handleItemClick}>Kaynarca Oto Çekici</a>
                                    </div>

                                    <div className="dropdown-divider"></div>

                                    <div className="dropdown-section">
                                        <h6 className="dropdown-header">🌄 Batı Bölgesi</h6>
                                        <a href="/geyve" className="dropdown-item" onClick={handleItemClick}>Geyve Oto Çekici</a>
                                        <a href="/pamukova" className="dropdown-item" onClick={handleItemClick}>Pamukova Oto Çekici</a>
                                        <a href="/tarakli" className="dropdown-item" onClick={handleItemClick}>Taraklı Oto Çekici</a>
                                        <a href="/sogutlu" className="dropdown-item" onClick={handleItemClick}>Söğütlü Oto Çekici</a>
                                    </div>

                                    <div className="dropdown-divider"></div>

                                    <div className="dropdown-section">
                                        <h6 className="dropdown-header">🛣️ Diğer İlçeler</h6>
                                        <a href="/kocaali" className="dropdown-item" onClick={handleItemClick}>Kocaali Oto Çekici</a>
                                        <a href="/karapurcek" className="dropdown-item" onClick={handleItemClick}>Karapürçek Oto Çekici</a>
                                        <a href="/ferizli" className="dropdown-item" onClick={handleItemClick}>Ferizli Oto Çekici</a>
                                    </div>
                                </div>
                            </div>

                            <Nav.Link className="cg-nav-link" href="/about">
                                Hakkımızda
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default ContraNavBar;
