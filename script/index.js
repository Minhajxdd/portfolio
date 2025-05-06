// initilizing aos
AOS.init();

const toggleCheckbox = document.getElementById("toggle");
const html = document.documentElement;

(function applyTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
    toggleCheckbox.checked = true;
  } else {
    html.classList.remove("dark");
    toggleCheckbox.checked = false;
  }
})();

toggleCheckbox.addEventListener("change", function () {
  if (this.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

// Typing effect for the subtitle
const typingText = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");
const textArray = [
  "Frontend Developer",
  "UI/UX Designer",
  "Web Enthusiast",
  "Problem Solver",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;

function type() {
  const currentText = textArray[textIndex];

  if (isDeleting) {
    // Removing characters
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50; // Delete faster
  } else {
    // Adding characters
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 150; // Type slower
  }

  // When word is complete
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingDelay = 1500; // Pause at end
  }

  // When deletion is complete
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length; // Move to next word
    typingDelay = 500; // Pause before typing next word
  }

  setTimeout(type, typingDelay);
}

// Start the typing effect
setTimeout(type, 1000);

// Animate skill bars on scroll
const skillProgress = document.querySelectorAll(".skill-progress");

function showSkills() {
  skillProgress.forEach((skill) => {
    const skillPosition = skill.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (skillPosition < screenPosition) {
      // Read the original target from the HTML attribute
      const target = skill.parentElement.getAttribute("data-progress");
      skill.style.width = target;
    }
  });
}

// Set initial width to 0 (don’t overwrite data-progress!)
skillProgress.forEach((skill) => {
  skill.style.width = "0";
});

// Update skill bars when scrolling
window.addEventListener("scroll", showSkills);
