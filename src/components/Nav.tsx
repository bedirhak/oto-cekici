import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/logo.png";
import { FaPhone, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';

const ContraNavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDistrictsDropdownOpen, setIsDistrictsDropdownOpen] = useState(false);
    const [isTowTruckDropdownOpen, setIsTowTruckDropdownOpen] = useState(false);
    const phoneNumber = "0539 585 44 22";

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest('.nav-dropdown-wrapper')) {
                setIsDistrictsDropdownOpen(false);
                setIsTowTruckDropdownOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleCallClick = () => {
        window.open(`tel:${phoneNumber.replace(/\s/g, '')}`);
    };

    const handleWhatsAppClick = () => {
        const message = "🚨 ACİL ÇEKİCİ GEREKİYOR! 🚨\n\nWeb sitenizden yazıyorum.\nKonumum: Sakarya\n\nLütfen hemen ulaşın!";
        const url = `https://wa.me/905395854422?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const toggleDistrictsDropdown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDistrictsDropdownOpen(!isDistrictsDropdownOpen);
        setIsTowTruckDropdownOpen(false); // Close other dropdown
    };

    const toggleTowTruckDropdown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsTowTruckDropdownOpen(!isTowTruckDropdownOpen);
        setIsDistrictsDropdownOpen(false); // Close other dropdown
    };

    const handleItemClick = () => {
        setIsDistrictsDropdownOpen(false);
        setIsTowTruckDropdownOpen(false);
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
                            <Nav.Link className="cg-nav-link nav-home" href="/">
                                Ana Sayfa
                            </Nav.Link>

                            {/* İlçeler Dropdown Menu */}
                            <div className="nav-dropdown-wrapper">
                                <Nav.Link
                                    className="cg-nav-link dropdown-trigger"
                                    href="#"
                                    role="button"
                                    onClick={toggleDistrictsDropdown}
                                    onMouseEnter={() => window.innerWidth >= 992 && setIsDistrictsDropdownOpen(true)}
                                    onMouseLeave={() => window.innerWidth >= 992 && setIsDistrictsDropdownOpen(false)}
                                >
                                    İlçelerimiz <FaChevronDown className={`dropdown-arrow ${isDistrictsDropdownOpen ? 'open' : ''}`} />
                                </Nav.Link>
                                <div
                                    className={`custom-dropdown-menu districts-dropdown ${isDistrictsDropdownOpen ? 'show' : ''}`}
                                    onMouseEnter={() => window.innerWidth >= 992 && setIsDistrictsDropdownOpen(true)}
                                    onMouseLeave={() => window.innerWidth >= 992 && setIsDistrictsDropdownOpen(false)}
                                >
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

                            {/* Oto Çekici Dropdown Menu */}
                            <div className="nav-dropdown-wrapper">
                                <Nav.Link
                                    className="cg-nav-link dropdown-trigger"
                                    href="#"
                                    role="button"
                                    onClick={toggleTowTruckDropdown}
                                    onMouseEnter={() => window.innerWidth >= 992 && setIsTowTruckDropdownOpen(true)}
                                    onMouseLeave={() => window.innerWidth >= 992 && setIsTowTruckDropdownOpen(false)}
                                >
                                    Oto Çekici <FaChevronDown className={`dropdown-arrow ${isTowTruckDropdownOpen ? 'open' : ''}`} />
                                </Nav.Link>
                                <div
                                    className={`custom-dropdown-menu towtruck-dropdown ${isTowTruckDropdownOpen ? 'show' : ''}`}
                                    onMouseEnter={() => window.innerWidth >= 992 && setIsTowTruckDropdownOpen(true)}
                                    onMouseLeave={() => window.innerWidth >= 992 && setIsTowTruckDropdownOpen(false)}
                                >
                                    <div className="dropdown-section">
                                        <a href="/en-yakin" className="dropdown-item" onClick={handleItemClick}>En Yakın Oto Çekici</a>
                                        <a href="/oto-cekici" className="dropdown-item" onClick={handleItemClick}>Oto Çekici</a>
                                        <a href="/yol-yardim" className="dropdown-item" onClick={handleItemClick}>Yol Yardım</a>
                                        {/* <a href="/aku-takviye" className="dropdown-item" onClick={handleItemClick}>Akü Takviye</a> */}
                                    </div>
                                </div>
                            </div>

                            <Nav.Link className="cg-nav-link nav-about" href="/about">
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
