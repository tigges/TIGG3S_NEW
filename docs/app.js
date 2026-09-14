(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function h(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(r){if(r.ep)return;r.ep=!0;const a=h(r);fetch(r.href,a)}})();const s=t=>`./${String(t).replace(/^\//,"")}`,l={tagline:"Family and ventures",logo:{src:s("assets/logo.svg"),alt:"TIGGES",href:"#top"}},o={video:s("assets/hero.mp4"),poster:s("assets/hero-poster.jpg"),prefix:"DJ",title:"URBANT",cta:{label:"Join Live on Mixcloud",href:"https://www.mixcloud.com/urbant/"}},p=[{id:"family",label:"Family",cards:[{title:"Art Leon",description:"Paintings, drawings, and studio work",href:"https://leontigges.com/",image:s("assets/art.jpg")},{title:"Art Barbara",description:"Paintings and works on paper",href:"https://barbaratigges.com/",image:s("assets/barbara.jpg")},{title:"Architecture",description:"Studio in Spain",href:"https://tiggesarchitekt.ch/",image:s("assets/architecture.jpg")}]},{id:"ventures",label:"Ventures",cards:[{title:"Music",description:"Mixes, dates, and the DJ home",href:"https://djurbant.com/",image:s("assets/music.jpg")},{title:"Set Radar",description:"Timed tracklists for festivals and clubs",href:"https://setradar.ai/",image:s("assets/setradar.jpg")},{title:"GTA VI.AI",description:"Follow the GTA$",href:"https://gtavi.ai/",image:s("assets/gta-card.jpg")}]}],u=[{id:"mixcloud",label:"Mixcloud",href:"https://www.mixcloud.com/urbant/"},{id:"instagram",label:"Instagram",href:"https://www.instagram.com/_urbant_/?hl=en"},{id:"youtube",label:"YouTube",href:"https://www.youtube.com/@DJ_UrbanT"},{id:"x",label:"X",href:"https://twitter.com/DJUrbanT"},{id:"twitch",label:"Twitch",href:"https://www.twitch.tv/djurbant"},{id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/tigges/"}],g={copyright:"© 2025 by CT"},f=`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M9.33337 22.667L22.6667 9.33366" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M10.6666 9.33301L22.6666 9.33301L22.6666 21.333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
`,m={mixcloud:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.2 12.8c0-2.4 1.9-4.4 4.3-4.5.7-1.9 2.5-3.2 4.6-3.2 1.8 0 3.4.9 4.3 2.4 2.4.2 4.3 2.2 4.3 4.6 0 .2 0 .5-.1.7H22c1.1 0 2 .9 2 2s-.9 2-2 2H4.2c-1.1 0-2-.9-2-2 0-.4.1-.8.3-1.1-.2-.3-.3-.6-.3-.9z"></path></svg>',linkedin:'<svg viewBox="0 0 448 512" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>',x:'<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>',youtube:'<svg viewBox="0 0 576 512" aria-hidden="true"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.1 338.5V175.5L361 256 232.1 338.5z"></path></svg>',instagram:'<svg viewBox="0 0 448 512" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>',twitch:'<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"></path></svg>'};function e(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}document.querySelector("#app").innerHTML=`
  <header class="header" id="top">
    <div class="wrap header-inner">
      <a class="logo" href="${e(l.logo.href)}">
        <img src="${e(l.logo.src)}" alt="${e(l.logo.alt)}" width="174" height="32" />
      </a>
      <p class="tagline">${e(l.tagline)}</p>
      <nav class="jump" aria-label="On this page">
        <a href="#family">Family</a>
        <a href="#ventures">Ventures</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-video" style="background-image: url('${e(o.poster)}')">
      <video autoplay muted loop playsinline webkit-playsinline preload="auto" poster="${e(o.poster)}">
        <source src="${e(o.video)}" type="video/mp4" />
      </video>
    </div>
    <h1 class="hero-title">${e(o.prefix)}<b>${e(o.title)}</b></h1>
    <a class="hero-cta" href="${e(o.cta.href)}" target="_blank" rel="noopener noreferrer">${e(o.cta.label)}</a>
  </section>

  <section class="cards-section">
    <div class="wrap">
      ${p.map(t=>`
        <div class="card-group" id="${e(t.id)}">
          <p class="section-label">${e(t.label)}</p>
          <div class="cards grid-3">
            ${t.cards.map(i=>`
              <a class="card" href="${e(i.href)}" target="_blank" rel="noopener noreferrer" style="background-image: url('${e(i.image)}')">
                <span class="card-arrow">${f}</span>
                <h2 class="card-title">${e(i.title)}</h2>
                <p class="card-copy">${e(i.description)}</p>
              </a>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <footer class="footer">
    <div class="wrap footer-inner">
      <p class="copyright">${e(g.copyright)}</p>
      <div class="socials">
        ${u.map(t=>`
          <a class="social social-${e(t.id)}" href="${e(t.href)}" target="_blank" rel="noopener noreferrer" aria-label="${e(t.label)}">
            ${m[t.id]??""}
          </a>
        `).join("")}
      </div>
    </div>
  </footer>
`;const c=document.querySelector(".hero-video video");if(c){c.muted=!0,c.defaultMuted=!0,c.playsInline=!0;const t=()=>c.play().catch(()=>{});c.addEventListener("canplay",t,{once:!0}),t()}
