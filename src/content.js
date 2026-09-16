/**
 * Site content — edit this file to change copy, links, and cards.
 */

const asset = (path) => `./${String(path).replace(/^\//, "")}`;

export const origin = "https://tigg3s.com";

export const site = {
  title: "TIGGES",
  tagline: "Family and ventures",
  logo: {
    src: asset("assets/logo.svg"),
    alt: "TIGGES",
    href: "#top",
  },
};

export const seo = {
  title: "TIGGES — Family and ventures hub",
  description:
    "TIGGES is the Tigges family and ventures hub: art, architecture, music with DJ URBANT, Set Radar, and GTA VI.AI.",
  canonical: `${origin}/`,
  ogImage: `${origin}/assets/og.jpg`,
};

export const aboutSeo = {
  title: "About TIGGES — Family and ventures",
  description:
    "About the TIGGES hub: Tigges family studios for art and architecture, plus ventures including DJ URBANT, Set Radar, and GTA VI.AI.",
  canonical: `${origin}/about.html`,
};

export const about = {
  heading: "About TIGGES",
  paragraphs: [
    "TIGGES is the family and ventures hub for the Tigges family. It gathers the studios, sites, and projects in one place so people can find the right door.",
    "Family includes Art Leon (paintings, drawings, and studio work), Art Barbara (paintings and works on paper), and architecture with a studio in Spain.",
    "Ventures includes DJ URBANT, Set Radar timed tracklists for festivals and clubs, and GTA VI.AI. Those three sit beside the Family studios on the home page.",
    "The home page is a directory, not a shop. Each Family and Ventures card opens the studio or project site. DJ URBANT live sets are on Mixcloud until the YouTube channel has more videos. Social profiles are in the footer.",
  ],
};

export const faqs = [
  {
    question: "What is TIGGES?",
    answer:
      "TIGGES is the family and ventures site for the Tigges family. It is a hub, not a store: each card opens the studio or project site.",
  },
  {
    question: "Who is DJ URBANT?",
    answer:
      "DJ URBANT is the music project on this hub. Mixes and dates live on djurbant.com. Join live on Mixcloud.",
  },
  {
    question: "Where is the architecture studio?",
    answer:
      "The architecture studio is in Spain. The project site is tiggesarchitekt.ch, listed under Family on this hub.",
  },
  {
    question: "What is Set Radar?",
    answer:
      "Set Radar publishes timed tracklists for festivals and clubs at setradar.ai.",
  },
  {
    question: "What is GTA VI.AI?",
    answer: "GTA VI.AI is a Tigges venture on this hub. Follow the GTA$ at gtavi.ai.",
  },
];

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
