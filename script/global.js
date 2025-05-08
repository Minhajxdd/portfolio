  // Theme switching
  const themeSwitch = document.getElementById("themeSwitch");
  const body = document.body;

  themeSwitch.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      themeSwitch.classList.remove("theme-switch-dark");
      themeSwitch.classList.add("theme-switch-light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      themeSwitch.classList.remove("theme-switch-light");
      themeSwitch.classList.add("theme-switch-dark");
    }
  });

  // Mobile menu
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    if (mobileMenu.classList.contains("menu-hidden")) {
      mobileMenu.classList.remove("menu-hidden");
      mobileMenu.classList.add("menu-visible");
    } else {
      mobileMenu.classList.remove("menu-visible");
      mobileMenu.classList.add("menu-hidden");
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("menu-visible");
      mobileMenu.classList.add("menu-hidden");
    });
  });

  // Navbar scroll animation
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("glass");
      navbar.classList.add("shadow-lg");
      navbar.classList.add("custom-nav");
      navbar.style.padding = "0.5rem 0";
    } else {
      navbar.classList.remove("glass");
      navbar.classList.remove("shadow-lg");
      navbar.classList.remove("custom-nav");
      navbar.style.padding = "1rem 0";
    }
  });