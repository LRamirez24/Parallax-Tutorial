

gsap.registerPlugin(ScrollTrigger);



const tltop = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section",
      start: "10%",
      end: "70%",
      scrub: true,
    //   markers: { startColor: "blue", endColor: "red" }
    },
  });

  tltop.fromTo(".main-image", { y: 0 }, { y: 100 });
  tltop.fromTo(".image-left", { y: 0 }, { y: -50 }, "<");
  tltop.fromTo(".image-right", { y: 0 }, { y: -70 }, "<");