document.getElementById("year").textContent = new Date().getFullYear();

// Initialize typed.js
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#typed-text", {
    strings: [
      "Backend Engineer",
      "Pc Enthusiast",
      "Programmer",
      "Full Stack Dev!",
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animations
  gsap.from(".profile-card", {
    opacity: 0,
    y: 50,
    rotation: 5,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#home h1", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from("#home .text-xl", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from("#home p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.7,
    ease: "power3.out",
  });

  gsap.from("#home .flex.flex-wrap", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.9,
    ease: "power3.out",
  });

  // About section animations
  gsap.from("#about h2", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
  });

  gsap.from("#about .w-24", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
    width: 0,
    duration: 1,
    delay: 0.3,
  });

  gsap.from("#about .glass", {
    scrollTrigger: {
      trigger: "#about .glass",
      start: "top 75%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });

  // Skill items staggered animation
  gsap.from(".skill-item", {
    scrollTrigger: {
      trigger: ".skill-item",
      start: "top 85%",
    },
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
  });
});
