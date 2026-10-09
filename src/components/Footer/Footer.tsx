import {
  ArrowUpRight,
  
  MessageCircle,
  MapPin,
  Phone,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hello Addis City Experience! I'm interested in booking a private Addis experience. Please send me the available options.",
  );

  const whatsappUrl = `https://wa.me/251995600588?text=${whatsappMessage}`;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              ADDIS
              <span>CITY EXPERIENCE</span>
            </a>

            <p>
              Discover Addis Ababa through private, flexible and memorable local
              experiences. Explore the city your way.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h3>Explore</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#experiences">Experiences</a>
            <a href="#addons">Add-ons</a>
            <a href="#gallery">Gallery</a>
            <a href="#how-it-works">How It Works</a>
          </div>

          {/* Experiences */}
          <div className="footer-column">
            <h3>Experiences</h3>

            <a href="#experiences">Entoto Tour</a>
            <a href="#experiences">Unity Park</a>
            <a href="#experiences">Friendship Park</a>
            <a href="#experiences">Gulele Botanic Garden</a>
            <a href="#experiences">City Corridor</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} />
              WhatsApp
            </a>

            <a href="tel:+251995600588">
              <Phone size={17} />
              +251 995 600 588
            </a>

            <div className="footer-location">
              <MapPin size={17} />
              <span>Addis Ababa, Ethiopia</span>
            </div>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Addis City Experience. All rights
            reserved.
          </p>

          <p className="footer-tagline">
            PRIVATE EXPERIENCES · LOCAL CONNECTION · ADDIS ABABA
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
