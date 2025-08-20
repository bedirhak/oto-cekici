import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
    const phoneNumber = "905395854422"; // Telefon numarası (90 ülke kodu dahil)
    const message = "Merhaba! Web sitenizden erişiyorum. Acil Çekici için lazım!";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="whatsapp-button" onClick={handleWhatsAppClick}>
            <FaWhatsapp />
            <span className="whatsapp-tooltip">WhatsApp ile iletişime geç</span>
        </div>
    );
};

export default WhatsAppButton;
