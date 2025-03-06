document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  const races = document.querySelector(".races");

  function getScrollAmount() {
    let racesWidth = races.scrollWidth;
    return -(racesWidth - window.innerWidth);
  }

  const tween = gsap.to(races, {
    x: getScrollAmount(),
    duration: 3,
    ease: "linear",
  })

  ScrollTrigger.create({
    trigger: "#fahrten",
    start: "top 20%",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    scrub: 1,
    animation: tween,
    invalidateOnRefresh: true,
    markers: true,
  });

});

