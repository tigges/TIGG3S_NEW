(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function h(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(a){if(a.ep)return;a.ep=!0;const i=h(a);fetch(a.href,i)}})();const r=t=>`./${String(t).replace(/^\//,"")}`,d={tagline:"Family and ventures",logo:{src:r("assets/logo.svg"),alt:"TIGGES"}},p={heading:"About TIGGES",paragraphs:["TIGGES is the family and ventures hub for the Tigges family. It gathers the studios, sites, and projects in one place so people can find the right door.","Family includes Art Leon (paintings, drawings, and studio work), Art Barbara (paintings and works on paper), and architecture with a studio in Spain.","Ventures includes DJ URBANT, Set Radar timed tracklists for festivals and clubs, and GTA VI.AI. Those three sit beside the Family studios on the home page.","The home page is a directory, not a shop. Each Family and Ventures card opens the studio or project site. DJ URBANT live sets are on Mixcloud until the YouTube channel has more videos. Social profiles are in the footer."]},f=[{question:"What is TIGGES?",answer:"TIGGES is the family and ventures site for the Tigges family. It is a hub, not a store: each card opens the studio or project site."},{question:"Who is DJ URBANT?",answer:"DJ URBANT is the music project on this hub. Mixes and dates live on djurbant.com. Join live on Mixcloud."},{question:"Where is the architecture studio?",answer:"The architecture studio is in Spain. The project site is tiggesarchitekt.ch, listed under Family on this hub."},{question:"What is Set Radar?",answer:"Set Radar publishes timed tracklists for festivals and clubs at setradar.ai."},{question:"What is GTA VI.AI?",answer:"GTA VI.AI is a Tigges venture on this hub. Follow the GTA$ at gtavi.ai."}],o={video:r("assets/hero.mp4"),poster:r("assets/hero-poster.jpg"),prefix:"DJ",title:"URBANT",cta:{label:"Join Live on Mixcloud",href:"https://www.mixcloud.com/urbant/"}},m=[{id:"family",label:"Family",cards:[{title:"Art Leon",description:"Paintings, drawings, and studio work",href:"https://leontigges.com/",image:r("assets/art.jpg")},{title:"Art Barbara",description:"Paintings and works on paper",href:"https://barbaratigges.com/",image:r("assets/barbara.jpg")},{title:"Architecture",description:"Studio in Spain",href:"https://tiggesarchitekt.ch/",image:r("assets/architecture.jpg")}]},{id:"ventures",label:"Ventures",cards:[{title:"Music",description:"Mixes, dates, and the DJ home",href:"https://djurbant.com/",image:r("assets/music.jpg")},{title:"Set Radar",description:"Timed tracklists for festivals and clubs",href:"https://setradar.ai/",image:r("assets/setradar.jpg")},{title:"GTA VI.AI",description:"Follow the GTA$",href:"https://gtavi.ai/",image:r("assets/gta-card.jpg")}]}],v=[{id:"mixcloud",label:"Mixcloud",href:"https://www.mixcloud.com/urbant/"},{id:"instagram",label:"Instagram",href:"https://www.instagram.com/_urbant_/?hl=en"},{id:"youtube",label:"YouTube",href:"https://www.youtube.com/@DJ_UrbanT"},{id:"x",label:"X",href:"https://twitter.com/DJUrbanT"},{id:"twitch",label:"Twitch",href:"https://www.twitch.tv/djurbant"},{id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/tigges/"}],b={copyright:"© 2025 by CT"},w=`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M9.33337 22.667L22.6667 9.33366" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M10.6666 9.33301L22.6666 9.33301L22.6666 21.333" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
`,y={mixcloud:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.2 12.8c0-2.4 1.9-4.4 4.3-4.5.7-1.9 2.5-3.2 4.6-3.2 1.8 0 3.4.9 4.3 2.4 2.4.2 4.3 2.2 4.3 4.6 0 .2 0 .5-.1.7H22c1.1 0 2 .9 2 2s-.9 2-2 2H4.2c-1.1 0-2-.9-2-2 0-.4.1-.8.3-1.1-.2-.3-.3-.6-.3-.9z"></path></svg>',linkedin:'<svg viewBox="0 0 448 512" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>',x:'<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>',youtube:'<svg viewBox="0 0 576 512" aria-hidden="true"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.1 338.5V175.5L361 256 232.1 338.5z"></path></svg>',instagram:'<svg viewBox="0 0 448 512" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>',twitch:'<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"></path></svg>'};function e(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function u(t){const s=t==="home",h=s?"#top":"./",l=s?`<h1 class="tagline">${e(d.tagline)}</h1>`:`<p class="tagline">${e(d.tagline)}</p>`,a=s?"#family":"./#family",i=s?"#ventures":"./#ventures",c=s?"":' aria-current="page"';return`
  <header class="header" id="top">
    <div class="wrap header-inner">
      <a class="logo" href="${e(h)}">
        <img src="${e(d.logo.src)}" alt="${e(d.logo.alt)}" width="174" height="32" />
      </a>
      ${l}
      <nav class="jump" aria-label="Site">
        <a href="${e(a)}">Family</a>
        <a href="${e(i)}">Ventures</a>
        <a href="./about.html"${c}>About</a>
      </nav>
    </div>
  </header>
`}function g(){return`
  <footer class="footer">
    <div class="wrap footer-inner">
      <p class="copyright">${e(b.copyright)}</p>
      <div class="socials">
        ${v.map(t=>`
          <a class="social social-${e(t.id)}" href="${e(t.href)}" target="_blank" rel="noopener noreferrer" aria-label="${e(t.label)}">
            ${y[t.id]??""}
          </a>
        `).join("")}
      </div>
    </div>
  </footer>
`}function $(){return`
  ${u("home")}

  <section class="hero">
    <div class="hero-video">
      <img class="hero-poster" src="${e(o.poster)}" alt="" width="1920" height="1080" fetchpriority="high" decoding="async" />
      <video autoplay muted loop playsinline webkit-playsinline preload="metadata" poster="${e(o.poster)}">
        <source src="${e(o.video)}" type="video/mp4" />
      </video>
    </div>
    <p class="hero-title">${e(o.prefix)}<b>${e(o.title)}</b></p>
    <a class="hero-cta" href="${e(o.cta.href)}" target="_blank" rel="noopener noreferrer">${e(o.cta.label)}</a>
  </section>

  <section class="cards-section">
    <div class="wrap">
      ${m.map(t=>`
        <div class="card-group" id="${e(t.id)}">
          <p class="section-label">${e(t.label)}</p>
          <div class="cards grid-3">
            ${t.cards.map(s=>`
              <a class="card" href="${e(s.href)}" target="_blank" rel="noopener noreferrer" style="background-image: url('${e(s.image)}')">
                <span class="card-arrow">${w}</span>
                <h2 class="card-title">${e(s.title)}</h2>
                <p class="card-copy">${e(s.description)}</p>
              </a>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  ${g()}
`}function T(){return`
  ${u("about")}

  <section class="about-section" id="about">
    <div class="wrap about-inner">
      <h1 class="about-title">${e(p.heading)}</h1>
      ${p.paragraphs.map(t=>`<p class="about-copy">${e(t)}</p>`).join("")}
      <h2 class="faq-heading">Questions</h2>
      <dl class="faq">
        ${f.map(t=>`
          <div class="faq-item">
            <dt>${e(t.question)}</dt>
            <dd>${e(t.answer)}</dd>
          </div>
        `).join("")}
      </dl>
    </div>
  </section>

  ${g()}
`}const A=document.body.dataset.page||"home";document.querySelector("#app").innerHTML=A==="about"?T():$();const n=document.querySelector(".hero-video video");if(n){n.muted=!0,n.defaultMuted=!0,n.playsInline=!0;const t=()=>n.play().catch(()=>{});n.addEventListener("canplay",t,{once:!0}),t()}
