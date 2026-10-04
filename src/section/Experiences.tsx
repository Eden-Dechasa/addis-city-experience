import ExperienceCard from "../components/ExperienceCard/ExperienceCard";
import { experiences } from "../data/experiences";

import "./Experiences.css";

function Experiences() {
  return (
    <section className="experiences section" id="experiences">
      <div className="section-container">
        <div className="section-title experiences-title">
          <p className="experiences-label">EXPLORE ADDIS</p>

          <h2>
            Choose Your
            <br />
            <span>Addis Experience.</span>
          </h2>

          <p>
            Discover the city through experiences designed for small groups,
            local connection and flexibility.
          </p>
        </div>

        <div className="experiences-grid">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        <p className="pricing-note">
          Pricing is customized for each experience. Contact us for pricing and
          availability. Attraction entrance fees are generally excluded unless
          specifically stated.
        </p>
      </div>
    </section>
  );
}

export default Experiences;
