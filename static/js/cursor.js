const trailer = document.getElementById("trail");
const hoverables = document.querySelectorAll(".hoverable");

// Listeners
for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener("mouseenter", onMouseHover);
  hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Mouse move event listener to update the position of the trailer
document.addEventListener("mousemove", (e) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  gsap.to(trailer, {
    duration: 0.2,
    left: x,
    top: y,
  });
});

function onMouseHover() {
  gsap.to(trailer, 0.2, {
    scale: 0.5,
  });
}
function onMouseHoverOut() {
  gsap.to(trailer, 0.2, {
    scale: 1,
  });
}
