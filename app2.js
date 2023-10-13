const tl = gsap.timeline({ defaults: { ease: 'power1.in' } });

gsap.registerPlugin(ScrollTrigger);

tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo('.stagger1', { opacity: 0 }, { opacity: 1, stagger: .3, duration: 1 }, "-=1");
tl.fromTo('.stagger2', { opacity: 0 }, { opacity: 1, stagger: .7, duration: 1 }, "-=1");
tl.fromTo('.main-image', { opacity: 0 }, { opacity: 1, stagger: .7, duration: 1.5 }, "-=1");
tl.fromTo('.image-left', { opacity: 0 }, { opacity: 1, stagger: .7, duration: 1.5 }, "-=1");
tl.fromTo('.image-right', { opacity: 0 }, { opacity: 1, stagger: .7, duration: 1.5 }, "-=1");

const tltop = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section",
      start: "10%",
      end: "70%",
      scrub: true,
      // pin: true,
      // pinSpacing: false,
    //   markers: { startColor: "blue", endColor: "red" }
    },
  });


  // gsap.set('#left1', {xPercent:0});

  // var rotate = gsap.timeline({
  //   scrollTrigger:{
  //     trigger: ".image-left",
      
  //     scrub:0.2,
  //     start: '-80',
  //     end:'+=10000',
  //   }
  // })
  // .to('#left1', {
  //   rotation:-360*5,
  //   duration:1, ease:'none',
  // })


  // gsap.set('#right1', {xPercent:0});

  // var rotate = gsap.timeline({
  //   scrollTrigger:{
  //     trigger: ".image-right",
      
  //     scrub:0.2,
  //     start: '-80',
  //     end:'+=10000',
  //   }
  // })
  // .to('#right1', {
  //   rotation:360*5,
  //   duration:1, ease:'none',
  // })

  
  tltop.fromTo(".main-image", { y: 0 }, { y: 100 });
  tltop.fromTo(".image-left", { y: 0 }, { y: -50 }, "<");
  tltop.fromTo(".image-right", { y: 0 }, { y: -70 }, "<");