document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const fotoGallery = document.querySelector(".foto-gallery");

  function getScrollAmount() {
    let fotoGalleryWidth = fotoGallery.scrollWidth;
    let windowWidth = window.innerWidth;
    return fotoGalleryWidth - windowWidth;
  }

  const scrollAmount = getScrollAmount();

  const tween = gsap.to(fotoGallery, {
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


  const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
  const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

  gsap.set(photos, { yPercent: 101 }); // Position images outside the view initially
  const allPhotos = gsap.utils.toArray(".desktopPhoto");

  let mm = gsap.matchMedia();

  // When viewport is at least 600px wide, apply desktop functionality
  mm.add("(min-width: 600px)", () => {
    console.log("desktop");

    // Pin the right side container as you scroll
    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      pinSpacing: false, // Disable additional spacing
    });

    // Create scrolltrigger for each text section
    details.forEach((detail, index) => {
      let headline = detail.querySelector("h3");
      let animation = gsap.timeline()
        .to(photos[index], { yPercent: 0 }) // Move image into view
        .set(allPhotos[index], { autoAlpha: 0 }); // Fade out previous image

      ScrollTrigger.create({
        trigger: headline,
        start: "top 80%", // Start the animation when the text enters the view
        end: "top 50%", // End the animation when the text reaches 50% of the screen
        animation: animation,
        scrub: true, // Scrubbing smoothens the effect with scroll
        markers: false, // Optional: Remove markers for debugging
      });
    });
  });

});
