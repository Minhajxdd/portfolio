// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Header animations
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#blogs",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    })
    .to("#blogs-title", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
    .to(
      "#blogs-subtitle",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .to(
      "#section-divider",
      {
        opacity: 1,
        scaleX: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .to(
      "#filter-tabs",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

  // Blog cards animation
  gsap.set(".blog-card", { opacity: 0, y: 50 });

  ScrollTrigger.batch(".blog-card", {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    start: "top 85%",
  });

  gsap.to(".shape", {
    y: -50,
    duration: 2,
    ease: "power1.inOut",
    stagger: 0.5,
    repeat: -1,
    yoyo: true,
  });
});
