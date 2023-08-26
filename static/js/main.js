import {
  playAnimation,
  pauseAnimation,
  dotColor,
  navContent,
} from "./anime.js";

const revealAnimation = () => {
  gsap.set("#trail", {
    opacity: 0,
  });
  let textSpans = document.querySelectorAll(".wrapper-change p");
  gsap.to(textSpans, {
    opacity: 1,
    stagger: 0.3,
    duration: 0,
  });
  gsap.to(textSpans, {
    opacity: 0,
    delay: 0.3,
    stagger: 0.3,
    duration: 0,
    onComplete: function () {
      gsap.to(".wrapper", {
        delay: 0.3,
        duration: 1,
        opacity: 0,
        ease: "power4.out",
        onComplete: function () {
          gsap.set(".wrapper", {
            display: "none",
          });
          gsap.to("#trail", {
            opacity: 1,
          });
          playAnimation(0);
        },
      });
    },
  });
};
revealAnimation();
