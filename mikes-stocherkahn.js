// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(ScrollTrigger)

//   const gallery = document.querySelector(".gallery");

//   function getScrollAmount() {
//     let galleryWidth = gallery.scrollWidth;
//     return -(galleryWidth - window.innerWidth);
//   }

//   const tween = gsap.to(gallery, {
//     x: getScrollAmount(),
//     duration: 3,
//     ease: "none",
//   })

//   ScrollTrigger.create({
//     trigger: ".gallery-wrapper",
//     start: "top 20%",
//     end: () => `+=${getScrollAmount() * -1}`,
//     pin: true,
//     scrub: 1,
//     animation: tween,
//     invalidateOnRefresh: true,
//     markers: true,
//   });

// });

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const gallery = document.querySelector(".gallery");

  function getScrollAmount() {
    let galleryWidth = gallery.scrollWidth;
    let windowWidth = window.innerWidth;
    return galleryWidth - windowWidth;
  }

  const scrollAmount = getScrollAmount();

  const tween = gsap.to(gallery, {
    x: -scrollAmount,
    duration: 3,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: "#wir",
    start: "top 10%",
    end: () => `+=${scrollAmount}`,
    pin: true,
    scrub: 1,
    animation: tween,
    invalidateOnRefresh: true, // Recalculate on resize
    markers: false,
  });
});
