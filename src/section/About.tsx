import { Car, Camera, MapPin, Sparkles } from "lucide-react";

import "./About.css";

const features = [
  {
    icon: Car,
    title: "Private",
    description: "Private transportation for up to 3 guests.",
  },
  {
    icon: MapPin,
    title: "Local",
    description: "Experience Addis with a local host.",
  },
  {
    icon: Camera,
    title: "Personal",
    description: "Professional photography available.",
  },
  {
    icon: Sparkles,
    title: "Flexible",
    description: "Customize your experience around you.",
  },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="about-intro">
          <div className="section-title">
            <p className="about-label">THE ADDIS EXPERIENCE</p>

            <h2>
              More Than a Tour.
              <br />
              <span>It's Your Addis Experience.</span>
            </h2>
          </div>

          <p className="about-description">
            Discover Addis Ababa through a personal and flexible experience.
            Explore the city's nature, culture, landmarks and modern spaces with
            private transportation and a local host.
          </p>
        </div>

        <div className="about-features">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
