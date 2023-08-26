import {
  playAnimation,
  pauseAnimation,
  dotColor,
  navContent,
} from "./anime.js";

/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

window.handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  currentSlide.dataset.status = "after";

  nextSlide.dataset.status = "becoming-active-from-before";

  console.log(
    currentSlide.getAttribute("slide"),
    nextSlide.getAttribute("slide")
  );
  pauseAnimation(nextSlide.getAttribute("slide"));
  playAnimation(nextSlide.getAttribute("slide"));
  dotColor(nextSlide.getAttribute("slide"));
  navContent(nextSlide.getAttribute("slide"));

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

window.handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  currentSlide.dataset.status = "before";
  nextSlide.dataset.status = "becoming-active-from-after";

  pauseAnimation(nextSlide.getAttribute("slide"));
  playAnimation(nextSlide.getAttribute("slide"));
  dotColor(nextSlide.getAttribute("slide"));
  navContent(nextSlide.getAttribute("slide"));

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {
  nav.dataset.transitionable = "true";

  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
};

window.matchMedia("(max-width: 800px)").onchange = (e) => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};
