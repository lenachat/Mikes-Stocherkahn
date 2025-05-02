document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // ----- Fahrten Section Animation -----

  const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
  const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

  gsap.set(photos, { yPercent: 101 }); // Position images outside the view initially
  const allPhotos = gsap.utils.toArray(".desktopPhoto");

  let mm = gsap.matchMedia();

  // When viewport is at least 600px wide, apply desktop functionality
  mm.add("(min-width: 1051px)", () => {
    console.log("desktop");

    // Pin the right side container as you scroll
    gsap.to(".right", {
      scrollTrigger: {
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        pinSpacing: false, // Disable additional spacing
        markers: false,
      }
    });

    // Create scrolltrigger for each text section
    details.forEach((detail, index) => {
      let headline = detail.querySelector("h3");
      let animation = gsap.timeline()
        .to(photos[index], { yPercent: 0 }) // Move image into view
        .set(allPhotos[index], { autoAlpha: 0 }); // Fade out previous image

      ScrollTrigger.create({
        trigger: headline,
        start: "top 70%",
        end: "top 40%",
        animation: animation,
        scrub: 1,
        markers: false,
        pinSpacing: false,
      });
    });
  });

});

