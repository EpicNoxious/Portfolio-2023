const svgs = document.querySelectorAll("svg");

// other svg animation
const svg0 = svgs[0];
const svg1 = svgs[1];
const svg2 = svgs[2];
const svg3 = svgs[3];
const ellipses0 = Array.from(svg0.querySelectorAll("circle"));
const ellipses1 = Array.from(svg1.querySelectorAll("ellipse"));
const ellipses2 = Array.from(svg2.querySelectorAll("ellipse"));
const ellipses3 = Array.from(svg3.querySelectorAll("circle"));

const homeAnimation = anime({
  targets: ellipses0,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2000,
  delay: function (el, i, l) {
    return i * 100; // reverse the delay order
  },
});

homeAnimation.pause();

// 1st svg
const aboutAnimation = anime({
  targets: ellipses1.slice(0, 5),
  duration: 2000,
  endDelay: 1000,
  easing: "easeInOutCubic",
  direction: "alternate",
  loop: true,
  rx: function (el, i) {
    return 48 - (43 / (ellipses1.length - 6)) * i;
  },
});

aboutAnimation.pause();

// 2nd svg
const projectAnimation = anime({
  targets: ellipses2,
  easing: "easeInOutCubic",
  duration: 1000,
  delay: function (el, i, l) {
    return i * 50; // reverse the delay order
  },

  cx: function (el, i) {
    const cxValues = [
      57.64888280001402, 52.07745422858534, 46.506025657156925,
      40.93459708572824, 35.36316851429982, 29.791739942871132,
      24.22031137144272, 18.64888280001403, 13.077454228585339,
      85.50602565715693, 79.93459708572824, 74.36316851429983,
      68.79173994287115, 63.22031137144272, 57.64888280001402,
    ];
    return cxValues[i];
  },
  ry: function (el, i) {
    const ryValues = [
      46.17006699648923, 47.43459409347071, 47.19796679630723,
      45.71376489332872, 43.37074135841408, 39.99241474092271,
      35.177625539438296, 28.03153963879274, 15.289100705012414,
      19.60158378316863, 30.16104841562935, 36.57316353545553,
      40.966667932884015, 44.05429601143473, 46.17006699648923,
    ];
    return ryValues[i];
  },
  rx: function (el, i) {
    const rxValues = [
      23.085033498244616, 23.717297046735354, 23.598983398153614,
      22.85688244666436, 21.68537067920704, 19.996207370461356,
      17.588812769719148, 14.01576981939637, 7.644550352506207,
      9.800791891584314, 15.080524207814674, 18.286581767727764,
      20.483333966442007, 22.027148005717365, 23.085033498244616,
    ];
    return rxValues[i];
  },
  complete: function () {
    ellipses2[14].style.visibility = "hidden";

    anime({
      targets: ellipses2,
      easing: "linear",
      loop: true,
      keyframes: [
        {
          cx: function (el, i) {
            return (
              ellipses2[i + 1]?.getAttribute("cx") ||
              ellipses2[0].getAttribute("cx")
            );
          },
          rx: function (el, i) {
            return (
              ellipses2[i + 1]?.getAttribute("rx") ||
              ellipses2[0].getAttribute("rx")
            );
          },
          ry: function (el, i) {
            return (
              ellipses2[i + 1]?.getAttribute("ry") ||
              ellipses2[0].getAttribute("ry")
            );
          },
        },
      ],
    });
  },
});
projectAnimation.pause();

// 3rd svg
const contactAnimation = anime({
  targets: ellipses3,
  easing: "easeInOutCubic",
  duration: 1000,
  delay: function (el, i, l) {
    return i * 10; // reverse the delay order
  },

  r: function (el, i) {
    const rValues = [
      48, 46.5, 45, 43.5, 41.99999999999999, 40.5, 39, 37.50000000000001, 36,
      34.5, 33, 31.5, 30, 28.499999999999996, 27, 25.5, 24, 22.5, 21, 19.5, 18,
      16.5, 15,
    ];
    return rValues[i];
  },
  cx: function (el, i) {
    const cxValues = [
      50, 48.80107171213073, 47.60050158170763, 46.400000183932434, 45.2, 44,
      42.8, 41.6, 40.4, 39.2, 38, 36.8, 35.6, 34.4, 33.2, 34.4, 35.6, 36.8, 38,
      39.2, 40.4, 41.6, 42.8, 44,
    ];
    return cxValues[i];
  },
  complete: function () {
    anime({
      targets: ellipses3,
      easing: "easeInOutCubic",
      loop: true,
      duration: 3000,
      keyframes: [
        {
          endDelay: 500,
          cx: function (el, i) {
            const cxValues = [
              50, 48.80107171213073, 47.60050158170763, 46.400000183932434,
              45.2, 44, 42.8, 41.6, 40.4, 39.2, 38, 36.8, 35.6, 34.4, 33.2,
              34.4, 35.6, 36.8, 38, 39.2, 40.4, 41.6, 42.8, 44,
            ];
            return cxValues[i];
          },
        },
        {
          endDelay: 500,
          cx: function (el, i) {
            const cxValues = [
              50, 51.2, 52.4, 53.6, 54.8, 56, 57.2, 58.4, 59.6, 60.8, 62, 63.2,
              64.4, 65.6, 66.8, 65.6, 64.4, 63.2, 61.99999999999999, 60.8, 59.6,
              58.400000000000006, 57.2,
            ];
            return cxValues[i];
          },
        },
        {
          endDelay: 500,
          cx: function (el, i) {
            const cxValues = [
              50, 48.80107171213073, 47.60050158170763, 46.400000183932434,
              45.2, 44, 42.8, 41.6, 40.4, 39.2, 38, 36.8, 35.6, 34.4, 33.2,
              34.4, 35.6, 36.8, 38, 39.2, 40.4, 41.6, 42.8, 44,
            ];
            return cxValues[i];
          },
        },
      ],
    });
  },
});
contactAnimation.pause();

export function playAnimation(currentSlideIndex) {
  if (currentSlideIndex == 0) {
    homeAnimation.play();
  }

  if (currentSlideIndex == 1) {
    aboutAnimation.play();
  }

  if (currentSlideIndex == 2) {
    projectAnimation.play();
  }

  if (currentSlideIndex == 3) {
    contactAnimation.play();
  }
}
export function pauseAnimation(currentSlideIndex) {
  if (currentSlideIndex != 0) {
    homeAnimation.restart();
    homeAnimation.pause();
  }
  if (currentSlideIndex != 1) {
    aboutAnimation.restart();
    aboutAnimation.pause();
  }
  if (currentSlideIndex != 2) {
    projectAnimation.restart();
    projectAnimation.pause();
  }

  if (currentSlideIndex != 3) {
    contactAnimation.restart();
    contactAnimation.pause();
  }
}

export function dotColor(currentSlideIndex) {
  if (currentSlideIndex == 1) {
    document.querySelector(".dot1").style.color = "red";
    document.querySelector(".dot2").style.color = "white";
    document.querySelector(".dot3").style.color = "white";
  } else if (currentSlideIndex == 2) {
    document.querySelector(".dot2").style.color = "red";
    document.querySelector(".dot1").style.color = "white";
    document.querySelector(".dot3").style.color = "white";
  } else if (currentSlideIndex == 3) {
    document.querySelector(".dot3").style.color = "red";
    document.querySelector(".dot1").style.color = "white";
    document.querySelector(".dot2").style.color = "white";
  } else {
    document.querySelector(".dot1").style.color = "white";
    document.querySelector(".dot2").style.color = "white";
    document.querySelector(".dot3").style.color = "white";
  }
}
export function navContent(currentSlideIndex) {
  if (currentSlideIndex == 1) {
    document.querySelector("#nav-link-section-content").innerText = "about";
  } else if (currentSlideIndex == 2) {
    document.querySelector("#nav-link-section-content").innerText = "project";
  } else if (currentSlideIndex == 3) {
    document.querySelector("#nav-link-section-content").innerText = "contact";
  } else {
    document.querySelector("#nav-link-section-content").innerText = "portfolio";
  }
}
