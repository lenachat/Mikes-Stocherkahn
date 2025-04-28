document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // ----- Header Animation -----
  // gsap.to(".heading", {
  //   duration: 2,
  //   text: "Mikes Stocherkahn",  // Uses TextPlugin
  //   ease: "none"
  // });

  // ----- Wir Section Animation -----

  // const fotoGallery = document.querySelector(".foto-gallery");

  // function getScrollAmount() {
  //   let fotoGalleryWidth = fotoGallery.scrollWidth;
  //   let windowWidth = window.innerWidth;
  //   return fotoGalleryWidth - windowWidth;
  // }

  // const scrollAmount = getScrollAmount();

  // const tween = gsap.to(fotoGallery, {
  //   x: -scrollAmount * 2,
  //   duration: 1.5,
  //   ease: "none",
  // });

  // ScrollTrigger.create({
  //   trigger: "#wir",
  //   start: "top top",
  //   end: () => `+=${scrollAmount}`,
  //   pin: true,
  //   scrub: 1,
  //   animation: tween,
  //   invalidateOnRefresh: true, // Recalculate on resize
  //   markers: false,
  //   pinSpacing: true,
  // });  


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
        end: "bottom 80%",
        pin: ".right",
        pinSpacing: true, // Disable additional spacing
      }
    });

    // Create scrolltrigger for each text section
    details.forEach((detail, index) => {
      let headline = detail.querySelector("h2");
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
        pinSpacing: true,
      });
    });
  });

  // ----- About section horizontal scroll -----
  const fotoGallery = document.querySelector(".wrapper");

  function getScrollAmount() {
    let fotoGalleryWidth = fotoGallery.scrollWidth;
    let windowWidth = window.innerWidth;
    return fotoGalleryWidth - windowWidth;
  }

  const scrollAmount = getScrollAmount();

  const tween = gsap.to(fotoGallery, {
    x: -scrollAmount,
    duration: 1.5,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: "#about",
    start: "top top",
    end: () => `+=${scrollAmount}`,
    pin: true,
    scrub: 1,
    animation: tween,
    invalidateOnRefresh: true, // Recalculate on resize
    markers: true,
    pinSpacing: false,
  });

  gsap.to(".item3", {
    autoAlpha: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".wrapper",
      start: () => `top -15%`,
      end: () => `+=${0.2 * scrollAmount}`,
      scrub: true,
      markers: true,
    }
  });

  gsap.to(".item2", {
    autoAlpha: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".wrapper",
      start: `top 3%`,
      end: () => `+=${0.2 * scrollAmount}`,
      scrub: true,
      markers: true,
    }
  });

  gsap.to(".item1", {
    autoAlpha: 1,
    duration: 2,
    scrollTrigger: {
      trigger: "#about",
      start: () => `top top`,
      end: () => `+=${0.2 * scrollAmount}`,
      scrub: true,
      markers: true,
    }
  });

  window.addEventListener("resize", () => {
    scrollAmount = getScrollAmount();
    ScrollTrigger.refresh();
  });

  // ----- About Section Animation ----- new version

  // const boat = gsap.utils.toArray(".boat-container-section");
  // const textParagaraphs = gsap.utils.toArray(".text-paragraph");

  // // gsap.set(textParagaraphs, { yPercent: 101 }); // Position images outside the view initially
  // gsap.set(textParagaraphs, { autoAlpha: 0 });
  // const allParagraphs = gsap.utils.toArray(".text-paragraph");

  // let mm2 = gsap.matchMedia();

  // // When viewport is at least 600px wide, apply desktop functionality
  // mm2.add("(min-width: 600px)", () => {

  //   // Pin the right side container as you scroll
  //   gsap.to(".right-2", {
  //     scrollTrigger: {
  //       trigger: ".gallery-2",
  //       start: "top top",
  //       end: "bottom bottom",
  //       pin: ".right-2",
  //       pinSpacing: true, // Disable additional spacing
  //     }
  //   });

  //   // Create scrolltrigger for each text section
  //   boat.forEach((detail2, index) => {
  //     let headline2 = detail2.querySelector("img");
  //     let animation2 = gsap.timeline()
  //       .to(textParagaraphs[index], { autoAlpha: 1 }); // Move image into view
  //     // .set(allParagraphs[index], { autoAlpha: 0 }); // Fade out previous image

  //     ScrollTrigger.create({
  //       trigger: headline2,
  //       start: "top 70%",
  //       end: "top 30%",
  //       animation: animation2,
  //       scrub: 1,
  //       markers: false,
  //       pinSpacing: true,
  //     });
  //   });
  // });

  // ----- About Section Animation ----- new version 2

  // gsap.to(".boat-container", {
  //   y: () => -(document.querySelector(".boat-container").offsetHeight - window.innerHeight),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".left-2",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: true,
  //     pin: ".left-2"
  //   }
  // });

  // // const boat = gsap.utils.toArray(".boat-container-section:not(:first-child)");
  // const textParagaraphs = gsap.utils.toArray(".text-paragraph");

  // gsap.set(textParagaraphs, { yPercent: 101 }); // Position images outside the view initially
  // // const allParagraphs = gsap.utils.toArray(".text-paragraph");

  // let mm2 = gsap.matchMedia();

  // // When viewport is at least 600px wide, apply desktop functionality
  // mm2.add("(min-width: 600px)", () => {

  //   textParagaraphs.forEach((text, index) => {
  //     const imageContainer = document.querySelector(".boat-container");
  //     const imgHeight = imageContainer.offsetHeight;
  //     const totalSections = textParagraphs.length;

  //     const triggerPoint = (index + 1) * (imgHeight / (totalSections + 1));

  //     ScrollTrigger.create({
  //       trigger: ".left-2",
  //       start: () => {
  //         // Startpunkt: Vom oberen Rand der linken Spalte plus triggerPoint, minus die halbe Fensterhöhe
  //         const leftTop = document.querySelector(".left-2").getBoundingClientRect().top + window.scrollY;
  //         return leftTop + triggerPoint - window.innerHeight / 2;
  //       },
  //       end: "+=1", // Minimaldauer, da nur der Moment relevant ist
  //       onEnter: () => gsap.to(para, { yPercent: 0, autoAlpha: 1, duration: 1 }),
  //       onLeaveBack: () => gsap.to(para, { yPercent: 101, autoAlpha: 0, duration: 1 }),
  //       markers: true // Zum Debuggen – zum späteren Entfernen
  //     });

  // -------------------------------------------------
  // // Pin the right side container as you scroll
  // gsap.to(".right-2", {
  //   scrollTrigger: {
  //     trigger: ".gallery-2",
  //     start: "top top",  
  //     end: "bottom bottom",
  //     pin: ".right-2",
  //     pinSpacing: true, // Disable additional spacing
  //   }
  // });

  // // Create scrolltrigger for each text section
  // boat.forEach((detail2, index) => {
  //   let headline2 = detail2.querySelector("img");
  //   let animation2 = gsap.timeline()
  //     .to(textParagaraphs[index], { yPercent: 0 }) // Move image into view
  //     .set(allParagraphs[index], { autoAlpha: 0 }); // Fade out previous image

  // ScrollTrigger.create({
  //   trigger: headline2,
  //   start: "top 70%",
  //   end: "top 30%",
  //   animation: animation2,
  //   scrub: 1,
  //   markers: true,
  //   pinSpacing: true,
  // });
  // });
  //   });

  // ----- About Section Animation -----

  // gsap.to('#about', {
  //   scrollTrigger: {
  //     trigger: "#about",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: 1,
  //     markers: false,
  //     pinSpacing: false,
  //     pin: true,
  //   },
  // })

  // gsap.to(".kahn-topview", {
  //   y: "-100vh",
  //   duration: 2,
  //   scrollTrigger: {
  //     trigger: "#about",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: true,
  //     markers: false,
  //     pinSpacing: false,
  //   }
  // });

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

