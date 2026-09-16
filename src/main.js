import "./style.css";
import { renderAbout, renderHome } from "./render.js";

const page = document.body.dataset.page || "home";
document.querySelector("#app").innerHTML = page === "about" ? renderAbout() : renderHome();

const heroVideo = document.querySelector(".hero-video video");
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.playsInline = true;
  const tryPlay = () => heroVideo.play().catch(() => {});
  heroVideo.addEventListener("canplay", tryPlay, { once: true });
  tryPlay();
}
