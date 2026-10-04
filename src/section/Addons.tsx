import {
  Camera,
  Coffee,
  Utensils,
  Smartphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import "./Addons.css";

const addons = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capture your Addis experience with professional photos during your tour.",
  },
  {
    icon: Coffee,
    title: "Ethiopian Coffee",
    description:
      "Experience Ethiopia’s famous coffee culture with a traditional coffee experience.",
  },
  {
    icon: Utensils,
    title: "Food Experience",
    description:
      "Discover Ethiopian flavors and enjoy a local food experience during your journey.",
  },
  {
    icon: Smartphone,
    title: "Travel Content",
    description:
      "Create memorable travel content and social media moments throughout your experience.",
  },
  {
    icon: Sparkles,
    title: "Custom Experience",
    description:
      "Have something specific in mind? Build a personalized Addis experience around you.",
  },
];

function Addons() {
  const whatsappMessage = encodeURIComponent(
    "Hello Addis City Experience! I'd like to learn more about your add-ons and customization options.",
  );

  const whatsappUrl = `https://wa.me/251995600588?text=${whatsappMessage}`;

  return (
    <section className="addons section" id="addons">
      <div className="section-container">
        <div className="section-title addons-title">
          <p className="addons-label"></p>

          <h2>
            Add Something 
            <span>Extra</span>
          </h2>

          <p>
            Make your Addis experience more personal with optional add-ons
            designed around the way you want to explore.
          </p>
        </div>

        <div className="addons-grid">
          {addons.map((addon) => {
            const Icon = addon.icon;

            return (
              <article className="addon-card" key={addon.title}>
                <div className="addon-icon">
                  <Icon size={26} strokeWidth={1.6} />
                </div>

                <h3>{addon.title}</h3>

                <p>{addon.description}</p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="addon-link"
                >
                  Ask about this
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="addons-bottom">
          <p>Add-ons can be requested when you book your experience.</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="addons-button"
          >
            Customize My Experience
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Addons;
