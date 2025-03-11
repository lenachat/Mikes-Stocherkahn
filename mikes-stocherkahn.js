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
    start: "top top",
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
        start: "top 70%", // Start the animation when the text enters the view
        end: "top 30%", // End the animation when the text reaches 50% of the screen
        animation: animation,
        scrub: 1, // Scrubbing smoothens the effect with scroll
        markers: false, // Optional: Remove markers for debugging
      });
    });
  });

  // About Section Animation
  ScrollTrigger.create({
    trigger: ".text-container",
    start: "top 30%",
    end: () => "+=" + document.querySelector(".text-container").scrollHeight,
    pin: true,
    scrub: true,
    markers: false,
    invalidateOnRefresh: true,
  });

  gsap.to(".kahn-topview", {
    y: "-50%",
    scrollTrigger: {
      trigger: "#about",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  });

  gsap.to(".text-section-1", {
    autoAlpha: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".text-section-1",
      start: "top 50%",
      end: () => `+=${document.querySelector('.text-section-1').offsetHeight}`,
      markers: true,
    }
  });

  gsap.to(".text-section-2", {
    autoAlpha: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".text-section-2",
      start: "top 50%",
      end: () => `+=${document.querySelector('.text-section-2').offsetHeight}`,
      markers: true,
    }
  });

  gsap.to(".text-section-3", {
    autoAlpha: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".text-section-3",
      start: "top 50%",
      end: () => `+=${document.querySelector('.text-section-3').offsetHeight}`,
      markers: true,
    }
  });

});
