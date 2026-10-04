export interface Experience {
  id: number;
  title: string;
  duration: string;
  guests: string;
  description: string;
  image: string;
  buttonText: string;
  message: string;
  note?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Entoto Tour",
    duration: "4–6 hours",
    guests: "Up to 3 guests",
    description:
      "Explore Entoto's nature, culture and spectacular views of Addis Ababa.",
    image: "/images/entoto.jpg",
    buttonText: "Book via WhatsApp",
    message:
      "Hello Addis City Experience! I'd like to book the Entoto Tour. Please send me the available dates and booking details.",
  },

  {
    id: 2,
    title: "Unity Park Experience",
    duration: "3–4 hours",
    guests: "Up to 3 guests",
    description:
      "Explore Unity Park and discover Ethiopian heritage, nature and recreation within the Grand Palace compound.",
    image: "/images/unity-park.jpg",
    buttonText: "Check Availability",
    note: "Entry and photography are subject to current venue rules and security requirements.",
    message:
      "Hello Addis City Experience! I'd like to check availability for the Unity Park Experience. Please send me the available dates and booking details.",
  },

  {
    id: 3,
    title: "Friendship Park Experience",
    duration: "2–3 hours",
    guests: "Up to 3 guests",
    description:
      "Enjoy riverside scenery, green spaces and the atmosphere of modern Addis Ababa.",
    image: "/images/friendship-park.jpg",
    buttonText: "Book via WhatsApp",
    message:
      "Hello Addis City Experience! I'd like to book the Friendship Park Experience. Please send me the available dates and booking details.",
  },

  {
    id: 4,
    title: "Gulele Botanic Garden",
    duration: "3–4 hours",
    guests: "Up to 3 guests",
    description:
      "Explore botanical landscapes, nature and peaceful outdoor spaces in Addis.",
    image: "/images/gulele.jpg",
    buttonText: "Book via WhatsApp",
    message:
      "Hello Addis City Experience! I'd like to book the Gulele Botanic Garden experience. Please send me the available dates and booking details.",
  },

  {
    id: 5,
    title: "Addis City Corridor & River Park",
    duration: "3–4 hours",
    guests: "Up to 3 guests",
    description:
      "Discover modern Addis through the city corridor, river park and contemporary urban spaces.",
    image: "/images/city-corridor.jpg",
    buttonText: "Book via WhatsApp",
    message:
      "Hello Addis City Experience! I'd like to book the Addis City Corridor & River Park experience. Please send me the available dates and booking details.",
  },
];
