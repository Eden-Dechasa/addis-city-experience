import {
  Compass,
  SlidersHorizontal,
  MessageCircle,
  MapPinned,
  ArrowRight,
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Choose",
    description:
      "Choose the Addis experience that matches the way you want to explore the city.",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Customize",
    description:
      "Add photography, coffee, food or other options to make the experience yours.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Book",
    description:
      "Message us directly on WhatsApp and confirm your preferred date and details.",
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Experience",
    description:
      "Meet your local host, enjoy private transportation and experience Addis your way.",
  },
];

function HowItWorks() {
  const whatsappMessage = encodeURIComponent(
    "Hello Addis City Experience! I'd like to book an experience. Please help me with the next steps.",
  );

  const whatsappUrl = `https://wa.me/251995600588?text=${whatsappMessage}`;

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="section-container">
        <div className="section-title how-title">
          <p className="how-label">SIMPLE FROM START TO FINISH</p>

          <h2>
            Your Addis Experience
            <br />
            <span>Starts Here.</span>
          </h2>

          <p>
            No complicated booking process. Choose an experience, make it yours
            and connect with us directly.
          </p>
        </div>

        <div className="steps-wrapper">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="step-item" key={step.number}>
                <div className="step-number">{step.number}</div>

                <div className="step-icon">
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="how-cta">
          <div>
            <span>READY WHEN YOU ARE</span>
            <h3>Let's plan your Addis experience.</h3>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="how-cta-button"
          >
            <MessageCircle size={18} />
            Start on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
