import { ArrowUpRight, MessageCircle } from "lucide-react";

import "./Hero.css";

function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hello Addis City Experience! I'm interested in booking a private Addis experience. I'd like to know about availability and options.",
  );

  const whatsappUrl = `https://wa.me/251995600588?text=${whatsappMessage}`;

  return (
    <section className="hero" id="home">
      <div className="hero-image"></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-label">YOUR ADDIS EXPERIENCE AWAITS</p>

        <h1>
          Ready to
          <br />
          <span>Experience Addis?</span> 
        </h1>

        <p className="hero-description">
          Tell us how you want to experience the city. We'll help you create a
          private and memorable Addis experience around you.
        </p>

        <div className="hero-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            <MessageCircle size={19} />

            <span>Start Your Experience</span>

            <ArrowUpRight size={18} />
          </a>

          <p className="hero-details">
            Private transportation · Up to 3 guests · Customized experiences
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
