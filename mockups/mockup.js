import "../src/style.css";
import "./mockup.css";

const youtubeHref = "https://www.youtube.com/@DJ_UrbanT";

const arrowIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M9.33337 22.667L22.6667 9.33366" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M10.6666 9.33301L22.6666 9.33301L22.6666 21.333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
`;

const brandIcons = {
  linkedin: `<svg viewBox="0 0 448 512" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`,
  x: `<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>`,
  youtube: `<svg viewBox="0 0 576 512" aria-hidden="true"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.1 338.5V175.5L361 256 232.1 338.5z"></path></svg>`,
  instagram: `<svg viewBox="0 0 448 512" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>`,
  twitch: `<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"></path></svg>`,
};

const outlineIcons = {
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><g clip-path="url(#clip-x)"><path d="M5.33325 5.33301L20.9773 26.6663H26.6666L11.0226 5.33301H5.33325Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.33325 26.6663L14.3573 17.6423M17.6373 14.3623L26.6666 5.33301" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip-x"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><g clip-path="url(#clip-ig)"><path d="M5.33325 10.6663C5.33325 9.25185 5.89515 7.8953 6.89535 6.8951C7.89554 5.89491 9.2521 5.33301 10.6666 5.33301H21.3333C22.7477 5.33301 24.1043 5.89491 25.1045 6.8951C26.1047 7.8953 26.6666 9.25185 26.6666 10.6663V21.333C26.6666 22.7475 26.1047 24.104 25.1045 25.1042C24.1043 26.1044 22.7477 26.6663 21.3333 26.6663H10.6666C9.2521 26.6663 7.89554 26.1044 6.89535 25.1042C5.89515 24.104 5.33325 22.7475 5.33325 21.333V10.6663Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20C17.0609 20 18.0783 19.5786 18.8284 18.8284C19.5786 18.0783 20 17.0609 20 16C20 14.9391 19.5786 13.9217 18.8284 13.1716C18.0783 12.4214 17.0609 12 16 12C14.9391 12 13.9217 12.4214 13.1716 13.1716C12.4214 13.9217 12 14.9391 12 16Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 10V10.0133" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip-ig"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><g clip-path="url(#clip-fb)"><path d="M9.33337 13.3333V18.6667H13.3334V28H18.6667V18.6667H22.6667L24 13.3333H18.6667V10.6667C18.6667 10.313 18.8072 9.97391 19.0572 9.72386C19.3073 9.47381 19.6464 9.33333 20 9.33333H24V4H20C18.2319 4 16.5362 4.70238 15.286 5.95262C14.0358 7.20286 13.3334 8.89856 13.3334 10.6667V13.3333H9.33337Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip-fb"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><g clip-path="url(#clip-yt)"><path d="M2.66675 10.6663C2.66675 9.25185 3.22865 7.8953 4.22885 6.8951C5.22904 5.89491 6.58559 5.33301 8.00008 5.33301H24.0001C25.4146 5.33301 26.7711 5.89491 27.7713 6.8951C28.7715 7.8953 29.3334 9.25185 29.3334 10.6663V21.333C29.3334 22.7475 28.7715 24.104 27.7713 25.1042C26.7711 26.1044 25.4146 26.6663 24.0001 26.6663H8.00008C6.58559 26.6663 5.22904 26.1044 4.22885 25.1042C3.22865 24.104 2.66675 22.7475 2.66675 21.333V10.6663Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3334 12L20 16L13.3334 20V12Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip-yt"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><g clip-path="url(#clip-li)"><path d="M5.33325 7.99967C5.33325 7.29243 5.6142 6.61415 6.1143 6.11406C6.6144 5.61396 7.29267 5.33301 7.99992 5.33301H23.9999C24.7072 5.33301 25.3854 5.61396 25.8855 6.11406C26.3856 6.61415 26.6666 7.29243 26.6666 7.99967V23.9997C26.6666 24.7069 26.3856 25.3852 25.8855 25.8853C25.3854 26.3854 24.7072 26.6663 23.9999 26.6663H7.99992C7.29267 26.6663 6.6144 26.3854 6.1143 25.8853C5.6142 25.3852 5.33325 24.7069 5.33325 23.9997V7.99967Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6667 14.667V21.3337" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6667 10.667V10.6803" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 21.3337V14.667" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.3333 21.3337V17.3337C21.3333 16.6264 21.0524 15.9481 20.5523 15.448C20.0522 14.9479 19.3739 14.667 18.6667 14.667C17.9594 14.667 17.2811 14.9479 16.781 15.448C16.281 15.9481 16 16.6264 16 17.3337" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip-li"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`,
};

const cards = {
  music: { title: "Music", description: "Dj UrbanT Website", href: "https://djurbant.com/", image: "/assets/music.jpg" },
  art: { title: "Art Leon", description: "Leon Tigges art portfolio", href: "https://leontigges.com/", image: "/assets/art.jpg" },
  architecture: { title: "Architecture", description: "Tigges Architekt Studio Website", href: "https://tiggesarchitekt.ch/", image: "/assets/architecture.jpg" },
  barbara: { title: "Art Barbara", description: "Paintings and works on paper", href: "https://barbaratigges.com/", image: "/assets/barbara.jpg" },
  setradar: { title: "Set Radar", description: "Timed tracklists for festivals and clubs", href: "https://setradar.ai/", image: "/assets/setradar.jpg" },
  gta: { title: "GTA VI.AI", description: "Follow the GTA$", href: "https://gtavi.ai/", image: "/assets/gta.jpg" },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderCard(card) {
  return `
    <a class="card" href="${escapeHtml(card.href)}" target="_blank" rel="noopener noreferrer" style="background-image: url('${escapeHtml(card.image)}')">
      <span class="card-arrow">${arrowIcon}</span>
      <h2 class="card-title">${escapeHtml(card.title)}</h2>
      <p class="card-copy">${escapeHtml(card.description)}</p>
    </a>
  `;
}

function renderGroups(variant) {
  if (variant === "grouped") {
    return `
      <div class="card-group">
        <p class="section-label">Family</p>
        <div class="cards grid-3">
          ${["art", "barbara", "architecture"].map((id) => renderCard(cards[id])).join("")}
        </div>
      </div>
      <div class="card-group">
        <p class="section-label">Ventures</p>
        <div class="cards grid-3">
          ${["music", "setradar", "gta"].map((id) => renderCard(cards[id])).join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="cards grid-3">
      ${["music", "art", "architecture", "barbara", "setradar", "gta"].map((id) => renderCard(cards[id])).join("")}
    </div>
  `;
}

const variant = document.body.dataset.variant || "grid";
const label = variant === "grouped" ? "Option B · Family / Ventures" : "Option A · 3×2 grid (recommended)";

document.querySelector("#app").innerHTML = `
  <div class="mockup-banner">
    <span>TIGG3S V2 mockup — ${label}. Live homepage is unchanged.</span>
    <span>
      <a href="/">Original hub</a>
      · <a href="/mockups/option-a.html">Option A</a>
      · <a href="/mockups/option-b.html">Option B</a>
      · <a href="/mockups/improved.html">Improved</a>
    </span>
  </div>

  <header class="header">
    <div class="wrap header-inner">
      <a class="logo" href="/">
        <img src="/assets/logo.svg" alt="TIGGES" width="174" height="32" />
      </a>
      <p class="tagline">Tigges family links &amp; resources</p>
    </div>
  </header>

  <section class="hero">
    <div class="hero-video">
      <video autoplay muted playsinline loop>
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
    </div>
    <h1 class="hero-title">
      <a href="${youtubeHref}" target="_blank" rel="noopener noreferrer">DJ<b>URBANT</b></a>
    </h1>
    <a class="hero-cta" href="${youtubeHref}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
  </section>

  <section class="cards-section">
    <div class="wrap">
      ${renderGroups(variant)}
    </div>
  </section>

  <section class="socials-section">
    <div class="wrap">
      <div class="socials">
        <a class="social social-linkedin" href="https://www.linkedin.com/in/tigges/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${brandIcons.linkedin}</a>
        <a class="social social-x" href="https://twitter.com/DJUrbanT" target="_blank" rel="noopener noreferrer" aria-label="X">${brandIcons.x}</a>
        <a class="social social-youtube" href="${youtubeHref}" target="_blank" rel="noopener noreferrer" aria-label="YouTube">${brandIcons.youtube}</a>
        <a class="social social-instagram" href="https://www.instagram.com/_urbant_/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${brandIcons.instagram}</a>
        <a class="social social-twitch" href="https://www.twitch.tv/djurbant" target="_blank" rel="noopener noreferrer" aria-label="Twitch">${brandIcons.twitch}</a>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="wrap footer-inner">
      <p class="copyright">© 2025 by CT</p>
      <div class="footer-socials">
        <a class="footer-social" href="https://twitter.com/DJUrbanT" target="_blank" rel="noopener noreferrer" aria-label="X">${outlineIcons.x}</a>
        <a class="footer-social" href="https://www.instagram.com/_urbant_/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${outlineIcons.instagram}</a>
        <a class="footer-social" href="https://www.facebook.com/profile.php?id=61558787754176" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${outlineIcons.facebook}</a>
        <a class="footer-social" href="${youtubeHref}" target="_blank" rel="noopener noreferrer" aria-label="YouTube">${outlineIcons.youtube}</a>
        <a class="footer-social" href="https://www.linkedin.com/in/tigges/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${outlineIcons.linkedin}</a>
      </div>
    </div>
  </footer>
`;
