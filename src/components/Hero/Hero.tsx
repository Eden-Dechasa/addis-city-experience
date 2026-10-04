import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";
import "./Hero.css";

function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hello Addis City Experience! I'd like to learn more about your experiences and booking options.",
  );

  const whatsappUrl = `https://wa.me/251995600588?text=${whatsappMessage}`;

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          PRIVATE TOURS • LOCAL EXPERIENCES • ADDIS ABABA
        </p>

        <h1>
          Experience Addis
          <br />
          <span></span>
        </h1>

        <p className="hero-description">
          Explore Addis Ababa with a local host, private transportation and
          experiences designed around you.
        </p>

        <div className="hero-buttons">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-primary-button"
          >
            <MessageCircle size={20} />
            Book via WhatsApp
          </a>

          <a href="#experiences" className="hero-secondary-button">
            Explore Experiences
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <span>Discover Addis</span>
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

export default Hero;
