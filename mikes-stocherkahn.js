document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // ----- Header Animation -----
  // gsap.to(".heading", {
  //   duration: 2,
  //   text: "Mikes Stocherkahn",  // Uses TextPlugin
  //   ease: "none"
  // });

  // ----- Wir Section Animation -----

  const fotoGallery = document.querySelector(".foto-gallery");

  function getScrollAmount() {
    let fotoGalleryWidth = fotoGallery.scrollWidth;
    let windowWidth = window.innerWidth;
    return fotoGalleryWidth - windowWidth;
  }

  const scrollAmount = getScrollAmount();

  const tween = gsap.to(fotoGallery, {
    x: -scrollAmount * 2,
    duration: 1.5,
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
    pinSpacing: true,
  });


  // ----- Fahrten Section Animation -----

  const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
  const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

  gsap.set(photos, { yPercent: 101 }); // Position images outside the view initially
  const allPhotos = gsap.utils.toArray(".desktopPhoto");

  let mm = gsap.matchMedia();

  // When viewport is at least 600px wide, apply desktop functionality
  mm.add("(min-width: 600px)", () => {
    console.log("desktop");

    // Pin the right side container as you scroll
    gsap.to(".right", {
      scrollTrigger: {
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        pinSpacing: true, // Disable additional spacing
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
        end: "top 30%",
        animation: animation,
        scrub: 1,
        markers: false,
        pinSpacing: true,
      });
    });
  });

  // ----- About Section Animation -----

  gsap.to('#about', {
    scrollTrigger: {
      trigger: "#about",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      markers: false,
      pinSpacing: false,
      pin: true,
    },
  })

  gsap.to(".kahn-topview", {
    y: "-100vh",
    duration: 2,
    scrollTrigger: {
      trigger: "#about",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      markers: false,
      pinSpacing: false,
    }
  });

  // gsap.to(".text-section-1", {
  //   autoAlpha: 1,
  //   duration: 2,
  //   scrollTrigger: {
  //     trigger: ".kahn-img",
  //     start: "top 10%",
  //     end: () => `+=${document.querySelector('.text-section-1').offsetHeight}`,
  //     scrub: true,
  //     markers: true,
  //   }
  // });

  // gsap.to(".text-section-2", {
  //   autoAlpha: 1,
  //   duration: 2,
  //   scrollTrigger: {
  //     trigger: ".text-section-2",
  //     start: "top 50%",
  //     end: () => `+=${document.querySelector('.text-section-2').offsetHeight}`,
  //     scrub: true,
  //     markers: false,
  //   }
  // });

  // gsap.to(".text-section-3", {
  //   autoAlpha: 1,
  //   duration: 2,
  //   scrollTrigger: {
  //     trigger: ".text-section-3",
  //     start: "top 50%",
  //     end: () => `+=${document.querySelector('.text-section-3').offsetHeight}`,
  //     scrub: true,
  //     markers: false,
  //   }
  // });

});
