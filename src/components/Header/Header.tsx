import { useState } from "react";
import { Menu, X } from "lucide-react";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Addis City Experience! I'd like to book an experience. Please send me the available options.",
  );

  const whatsappUrl = `https://wa.me/251995600588?text=${whatsappMessage}`;

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          ADDIS
          <span>CITY EXPERIENCE</span>
        </a>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#experiences" onClick={closeMenu}>
            Experiences
          </a>

          <a href="#addons" onClick={closeMenu}>
            Add-ons
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#how-it-works" onClick={closeMenu}>
            How It Works
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-book-button"
            onClick={closeMenu}
          >
            Book via WhatsApp
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
