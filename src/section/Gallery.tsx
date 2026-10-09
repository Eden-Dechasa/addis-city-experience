import { ArrowUpRight } from "lucide-react";
import "./Gallery.css";

const galleryItems = [
  {
    image: "/images/entoto.jpg",
    title: "Entoto",
    category: "Nature & Views",
  },
  {
    image: "/images/unity-park.jpg",
    title: "Unity Park",
    category: "Culture & Recreation",
  },
  {
    image: "/images/friendship-park.jpg",
    title: "Friendship Park",
    category: "Modern Addis",
  },
  {
    image: "/images/gulele.jpg",
    title: "Gulele",
    category: "Nature",
  },
  {
    image: "/images/city-corridor.jpg",
    title: "City Corridor",
    category: "Urban Addis",
  },
  {
    image: "/images/addis-hero.jpg",
    title: "Addis Ababa",
    category: "The City",
  },
];

function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="section-container">
        <div className="section-title gallery-title">
          <p className="gallery-label">SEE ADDIS DIFFERENTLY</p>

          <h2>
            Moments From
            <br />
            <span>The Experience.</span>
          </h2>

          <p>
            From mountain views to modern city spaces, discover some of the
            places and moments that make Addis unforgettable.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.title}
            >
              <img
                src={item.image}
                alt={`${item.title} — Addis City Experience`}
                loading="lazy"
              />

              <div className="gallery-overlay">
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

                <div className="gallery-arrow">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
