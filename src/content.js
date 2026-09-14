/**
 * Site content — edit this file to change copy, links, and cards.
 */

const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;

export const site = {
  title: "Tigges",
  tagline: "Family and ventures",
  logo: {
    src: asset("assets/logo.svg"),
    alt: "TIGGES",
    href: "#top",
  },
};

export const hero = {
  video: asset("assets/hero.mp4"),
  poster: asset("assets/hero-poster.jpg"),
  prefix: "DJ",
  title: "URBANT",
  cta: {
    label: "Join Live on Mixcloud",
    href: "https://www.mixcloud.com/urbant/",
  },
};

export const cardGroups = [
  {
    id: "family",
    label: "Family",
    cards: [
      {
        title: "Art Leon",
        description: "Paintings, drawings, and studio work",
        href: "https://leontigges.com/",
        image: asset("assets/art.jpg"),
      },
      {
        title: "Art Barbara",
        description: "Paintings and works on paper",
        href: "https://barbaratigges.com/",
        image: asset("assets/barbara.jpg"),
      },
      {
        title: "Architecture",
        description: "Studio in Spain",
        href: "https://tiggesarchitekt.ch/",
        image: asset("assets/architecture.jpg"),
      },
    ],
  },
  {
    id: "ventures",
    label: "Ventures",
    cards: [
      {
        title: "Music",
        description: "Mixes, dates, and the DJ home",
        href: "https://djurbant.com/",
        image: asset("assets/music.jpg"),
      },
      {
        title: "Set Radar",
        description: "Timed tracklists for festivals and clubs",
        href: "https://setradar.ai/",
        image: asset("assets/setradar.jpg"),
      },
      {
        title: "GTA VI.AI",
        description: "Follow the GTA$",
        href: "https://gtavi.ai/",
        image: asset("assets/gta-card.jpg"),
      },
    ],
  },
];

export const socials = [
  {
    id: "mixcloud",
    label: "Mixcloud",
    href: "https://www.mixcloud.com/urbant/",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/_urbant_/?hl=en",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@DJ_UrbanT",
  },
  {
    id: "x",
    label: "X",
    href: "https://twitter.com/DJUrbanT",
  },
  {
    id: "twitch",
    label: "Twitch",
    href: "https://www.twitch.tv/djurbant",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tigges/",
  },
];

export const footer = {
  copyright: "© 2025 by CT",
};
