/**
 * Site content — edit this file to change copy, links, and cards.
 */

const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;

export const site = {
  title: "Tigges",
  tagline: "Tigges family links & resources",
  logo: {
    src: asset("assets/logo.svg"),
    alt: "TIGGES",
    href: import.meta.env.BASE_URL,
  },
};

export const hero = {
  video: asset("assets/hero.mp4"),
  poster: asset("assets/hero-poster.jpg"),
  prefix: "DJ",
  title: "URBANT",
  href: "https://www.mixcloud.com/urbant/",
  cta: {
    label: "Join Live on Mixcloud",
    href: "https://www.mixcloud.com/urbant/",
  },
};

export const cardGroups = [
  {
    label: "Family",
    cards: [
      {
        title: "Art Leon",
        description: "Leon Tigges art portfolio",
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
        description: "Tigges Architekt Studio Website",
        href: "https://tiggesarchitekt.ch/",
        image: asset("assets/architecture.jpg"),
      },
    ],
  },
  {
    label: "Ventures",
    cards: [
      {
        title: "Music",
        description: "Dj UrbanT Website",
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
        image: asset("assets/gta.jpg"),
      },
    ],
  },
];

export const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tigges/",
  },
  {
    id: "x",
    label: "X",
    href: "https://twitter.com/DJUrbanT",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@DJ_UrbanT",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/_urbant_/?hl=en",
  },
  {
    id: "twitch",
    label: "Twitch",
    href: "https://www.twitch.tv/djurbant",
  },
];

export const footer = {
  copyright: "© 2025 by CT",
  socials: [
    {
      id: "x",
      label: "X",
      href: "https://twitter.com/DJUrbanT",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/_urbant_/?hl=en",
    },
    {
      id: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61558787754176",
    },
    {
      id: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/@DJ_UrbanT",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tigges/",
    },
  ],
};
