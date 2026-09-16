import "./style.css";
import { renderApp } from "./render.js";

document.querySelector("#app").innerHTML = renderApp();

const heroVideo = document.querySelector(".hero-video video");
if (heroVideo) {
  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.playsInline = true;
  const tryPlay = () => heroVideo.play().catch(() => {});
  heroVideo.addEventListener("canplay", tryPlay, { once: true });
  tryPlay();
}
