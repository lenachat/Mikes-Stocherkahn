AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".bg-video");
  if (video) {
    video.muted = true;
    video.play();
    video.loop = true;
  }
});

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


function validatePrivacyCheckbox() {
  const checkbox = document.getElementById('privacy');
  checkbox.classList.remove('checkbox-error'); // ggf. vorher entfernen
  if (!checkbox.checked) {
    checkbox.classList.add('checkbox-error');
    return false;
  }
  return true;
}

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const button = item.querySelector('.faq-question');
  button.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

