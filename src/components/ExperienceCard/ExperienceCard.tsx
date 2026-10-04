import { useState } from "react";
import {
  ArrowRight,
  Clock3,
  MessageCircle,
  Users,
  ChevronDown,
} from "lucide-react";

import type { Experience } from "../../data/experiences";

import "./ExperienceCard.css";

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/251995600588?text=${encodeURIComponent(
    experience.message,
  )}`;

  return (
    <article
      className={`experience-card ${isOpen ? "experience-card-open" : ""}`}
    >
      {/* Card Image */}
      <button
        className="experience-card-top"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <img
          src={experience.image}
          alt={experience.title}
          className="experience-image"
          loading="lazy"
        />

        <div className="experience-image-overlay"></div>

        <span className="experience-number">0{experience.id}</span>

        <div className="experience-card-title">
          <span className="experience-label">PRIVATE EXPERIENCE</span>

          <h3>{experience.title}</h3>

          <div className="experience-quick-info">
            <span>
              <Clock3 size={14} />
              {experience.duration}
            </span>

            <span>
              <Users size={14} />
              {experience.guests}
            </span>
          </div>
        </div>

        <span className="experience-expand">
          <ChevronDown size={18} />
        </span>
      </button>

      {/* Expandable Content */}
      <div className="experience-details">
        <div className="experience-details-inner">
          <p>{experience.description}</p>

          {experience.note && (
            <p className="experience-note">{experience.note}</p>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-button"
            onClick={(event) => event.stopPropagation()}
          >
            <MessageCircle size={17} />

            {experience.buttonText}

            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
