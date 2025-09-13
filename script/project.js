// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Theme switcher (in case you've implemented it elsewhere)
  const body = document.querySelector("body");
  const isDarkMode = body.classList.contains("dark");

  // Project data
  const projectsData = {
    project1: {
      title: "Team Base",
      description: `
        TeamBase is a project management tool which provide all the functionalities and features that a team
        need to have to manage and collaborate their project with ease by leveraging features like Kanban
        Boards for task assignments and tracking progresses , team chat, notifications, and group video chat using
        SFU (Selective Forwarding Unit).
        `,
      technologies: [
        "Node.js",
        "NestJs",
        "Angular",
        "Mongodb",
        "Rabbit MQ",
        "Redis",
        "Sfu",
        "Express",
        "SOLID",
      ],
      features: [
        "Real-time Dashboard",
        "Team management",
        "Kanban Boards",
        "Video Chat",
        "Text Messages",
      ],
      techDetails: [
        "Solid Angular architecture",
        "Scalable Modular Repository Architecture",
        "Highly Scalable Video Chat",
        "World Class Engineering Solutions",
        "Websockets for real-time updates",
        "REST API",
      ],
      images: [
        "/assets/projects/teambase/teambase_one.png",
        "/assets/projects/teambase/teambase_two.png",
      ],
      liveLink: "https://teambase.mohammedminhaj.blog",
      githubLink: "https://github.com/Minhajxdd/team-base-backend",
    },
    project2: {
      title: "Nex Core",
      description: `
      NexCore is a feature-rich E-Commerce platform designed for PC hardware enthusiasts, offering a
      seamless browsing experience with a user-friendly wishlist, a shopping cart for multiple purchases, and
      secure payment options through Razorpay, enabling users to effortlessly buy their desired components.
      `,
      technologies: ["NodeJs", "Javascript", "MVC", "EJS", "RazorPay"],
      features: [
        "Beautiful UI/UX",
        "Listing Hardwares",
        "Purchase/Sell Projects",
        "Track Orders",
        "Secure Razor Pay Payment Gateway",
      ],
      techDetails: [
        "Non Block NodeJs",
        "MVC Architecture",
        "Secure Payment Gateway's",
        "Ejs For SSR Templating",
        "Mongodb For Data",
      ],
      images: [
        "/assets/projects/nexcore/nexcore1.png",
        "/assets/projects/nexcore/nexcore2.png",
        "/assets/projects/nexcore/nexcore3.png",
      ],
      liveLink: "https://nexcore.sytes.net",
      githubLink: "https://github.com/Minhajxdd/NexCore",
    },
    project3: {
      title: "Portfolio Website",
      description:
        "My personal portfolio website featuring interactive elements, project showcases, and contact information. Built with modern web technologies for optimal quality and user experience.",
      technologies: ["HTML", "Tailwind CSS", "GSAP", "JavaScript"],
      features: [
        "Interactive UI elements",
        "Project showcase",
        "Dark/light mode",
        "Responsive design",
        "Contact form with capcha",
      ],
      techDetails: [
        "GSAP animations",
        "Tailwind utility classes",
        "Scroll-triggered effects",
        "Optimized assets",
        "SEO optimized",
      ],
      images: [
        "/assets/projects/portfolio/portfolio1.png",
        "/assets/projects/portfolio/portfolio2.png",
      ],
      liveLink: "https://mohammedminhaj.blog",
      githubLink: "https://github.com/minhajxdd/portfolio",
    },
    project4: {
      title: "StockWise – Inventory & Supply Chain Manager",
      description:
        "A distributed web application for real-time inventory, order, and supply chain management across warehouses and retail nodes. Built with Golang, NestJS, and Spring Boot with a modern microservices architecture.",
      technologies: [
        "Golang",
        "NestJS",
        "Spring Boot",
        "Kafka",
        "Istio",
        "React",
        "PostgreSQL",
        "Redis"
      ],
      features: [
        "Real-time inventory tracking",
        "Multi-warehouse order routing",
        "Event-driven alerts",
        "Role-based access control",
        "Forecasting & reporting"
      ],
      techDetails: [
        "Service Mesh with Istio",
        "Circuit breakers (Resilience4j & Golang)",
        "Kafka for event streaming",
        "Kubernetes deployment",
        "API Gateway with Kong"
      ],
      images: [
        "/assets/projects/stockwise/stockwise_architecture.png",
        "/assets/projects/stockwise/stockwise2.png",
      ],
      liveLink: "https://stockwise.mohammedminhaj.blog",
      githubLink: "https://github.com/minhajxdd/stockwise",
    },
    
    project5: {
      title: "Crypto Trading Bot",
      description:
        "An automated cryptocurrency trading assistant that uses technical analysis and machine learning to execute trades. The system analyzes market trends and provides trading signals to maximize returns.",
      technologies: [
        "Python",
        "Machine Learning",
        "APIs",
        "Docker",
        "PostgreSQL",
      ],
      features: [
        "Automated trading",
        "Technical analysis",
        "Risk management",
        "Performance tracking",
        "Multiple exchange support",
      ],
      techDetails: [
        "Random Forest algorithm",
        "Binance and Coinbase APIs",
        "Containerized deployment",
        "Backtesting engine",
        "Telegram notifications",
      ],
      images: [
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
      ],
      liveLink: "https://minhajxdd.github.io/crypto-bot.",
      githubLink: "https://github.com/minhajxdd/crypto-bot",
    },
    project6: {
      title: "Social Media Analytics",
      description:
        "A data visualization dashboard for social media metrics across multiple platforms. Track engagement, growth, and campaign performance with customizable reports and insights.",
      technologies: ["Vue.js", "D3.js", "Express", "MongoDB", "Social APIs"],
      features: [
        "Cross-platform analytics",
        "Custom date ranges",
        "Export reports",
        "Campaign tracking",
        "Audience insights",
      ],
      techDetails: [
        "Vue 3 Composition API",
        "D3.js visualizations",
        "OAuth multi-platform login",
        "RESTful API design",
        "Responsive dashboard",
      ],
      images: [
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
        "/api/placeholder/800/500",
      ],
      liveLink: "https://minhajxdd.github.io/social-analytics",
      githubLink: "https://github.com/minhajxdd/social-analytics",
    },
  };

  // Animation for projects section
  const projectsAnimation = () => {
    const projectsContainer = document.querySelector(".projects-container");
    const projectCards = document.querySelectorAll(".project-card");

    // Main container animation
    gsap.to(projectsContainer, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    // Each card animation with stagger
    gsap.fromTo(
      projectCards,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsContainer,
          start: "top 80%",
        },
      }
    );
  };

  // Initialize animations
  projectsAnimation();

  // Modal functionality
  const modal = document.getElementById("projectModal");
  const closeModal = document.getElementById("closeModal");
  const projectCards = document.querySelectorAll(".project-card");

  // Open modal with project data
  const openProjectModal = (projectId) => {
    const project = projectsData[projectId];
    if (!project) return;

    // Set project title
    document.querySelector(".project-title").textContent = project.title;

    // Clear and set technologies
    const techContainer = document.querySelector(".project-technologies");
    techContainer.innerHTML = "";
    project.technologies.forEach((tech) => {
      const pill = document.createElement("span");
      pill.className =
        "tech-pill px-3 py-1 bg-dark-accent rounded-full text-xs";
      pill.textContent = tech;
      techContainer.appendChild(pill);
    });

    // Set description
    document.querySelector(".project-description").textContent =
      project.description;

    // Set features
    const featuresContainer = document.querySelector(".project-features");
    featuresContainer.innerHTML = "";
    project.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresContainer.appendChild(li);
    });

    // Set technical details
    const techDetailsContainer = document.querySelector(
      ".project-tech-details"
    );
    techDetailsContainer.innerHTML = "";
    project.techDetails.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      techDetailsContainer.appendChild(li);
    });

    // Set links
    document.querySelector(".project-live-link").href = project.liveLink;
    document.querySelector(".project-github-link").href = project.githubLink;

    // Set up slider
    const sliderWrapper = document.querySelector(".slider-wrapper");
    sliderWrapper.innerHTML = "";

    // Set up pagination dots
    const paginationDotsContainer = document.querySelector(".pagination-dots");
    paginationDotsContainer.innerHTML = "";

    project.images.forEach((image, index) => {
      // Create slide
      const slide = document.createElement("div");
      slide.className = `slide absolute inset-0 ${index === 0 ? "active" : ""}`;

      const img = document.createElement("img");
      img.src = image;
      img.alt = `${project.title} screenshot ${index + 1}`;
      img.className = "w-full h-full object-cover";

      slide.appendChild(img);
      sliderWrapper.appendChild(slide);

      // Create pagination dot
      const dot = document.createElement("button");
      dot.className = `pagination-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
        index === 0
          ? "bg-secondary-color scale-125"
          : "bg-gray-400 bg-opacity-60"
      }`;
      dot.setAttribute("data-index", index);
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);

      // Add event listener to dot
      dot.addEventListener("click", () => {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".pagination-dot");

        // Remove active class from all slides and dots
        slides.forEach((s) => s.classList.remove("active"));
        dots.forEach((d) => {
          d.classList.remove("bg-secondary-color", "scale-125");
          d.classList.add("bg-gray-400", "bg-opacity-60");
        });

        // Add active class to current slide and dot
        slides[index].classList.add("active");
        dot.classList.remove("bg-gray-400", "bg-opacity-60");
        dot.classList.add("bg-secondary-color", "scale-125");
      });

      paginationDotsContainer.appendChild(dot);
    });

    // Show modal with animation
    modal.classList.remove("hidden");

    // Check if we should lock body scroll
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      modal,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      ".modal-content",
      { scale: 0.95, y: 20 },
      { scale: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
    );
  };

  // Close modal
  const closeProjectModal = () => {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        modal.classList.add("hidden");
        // Restore body scroll
        document.body.style.overflow = "";
      },
    });
  };

  // Add click event to project cards
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      openProjectModal(projectId);
    });
  });

  // Close modal when clicking the close button
  closeModal.addEventListener("click", closeProjectModal);

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Image slider functionality
  const prevSlide = document.querySelector(".prev-slide");
  const nextSlide = document.querySelector(".next-slide");

  // Function to update slides and pagination dots
  const updateSlider = (newActiveIndex) => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".pagination-dot");

    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => {
      dot.classList.remove("bg-secondary-color", "scale-125");
      dot.classList.add("bg-gray-400", "bg-opacity-60");
    });

    // Add active class to new active slide and dot
    slides[newActiveIndex].classList.add("active");
    dots[newActiveIndex].classList.remove("bg-gray-400", "bg-opacity-60");
    dots[newActiveIndex].classList.add("bg-secondary-color", "scale-125");

    // Add a small animation to the slide
    gsap.fromTo(
      slides[newActiveIndex],
      { opacity: 0.6 },
      { opacity: 1, duration: 0.4, ease: "power1.out" }
    );
  };

  prevSlide.addEventListener("click", () => {
    const slides = document.querySelectorAll(".slide");
    const activeSlide = document.querySelector(".slide.active");
    let newActiveIndex = 0;

    slides.forEach((slide, index) => {
      if (slide === activeSlide) {
        newActiveIndex = index === 0 ? slides.length - 1 : index - 1;
      }
    });

    updateSlider(newActiveIndex);
  });

  nextSlide.addEventListener("click", () => {
    const slides = document.querySelectorAll(".slide");
    const activeSlide = document.querySelector(".slide.active");
    let newActiveIndex = 0;

    slides.forEach((slide, index) => {
      if (slide === activeSlide) {
        newActiveIndex = index === slides.length - 1 ? 0 : index + 1;
      }
    });

    updateSlider(newActiveIndex);
  });

  // Add keyboard navigation
  document.addEventListener("keydown", (e) => {
    // Only if modal is visible
    if (!modal.classList.contains("hidden")) {
      if (e.key === "ArrowLeft") {
        prevSlide.click();
      } else if (e.key === "ArrowRight") {
        nextSlide.click();
      } else if (e.key === "Escape") {
        closeProjectModal();
      }
    }
  });

  // Theme adapting for project cards
  const adaptTheme = () => {
    const isDark = document.body.classList.contains("dark");
    const techPills = document.querySelectorAll(".tech-pill");

    techPills.forEach((pill) => {
      if (isDark) {
        pill.classList.add("bg-dark-accent");
        pill.classList.remove("bg-gray-200");
      } else {
        pill.classList.remove("bg-dark-accent");
        pill.classList.add("bg-gray-200");
      }
    });
  };

  adaptTheme();

  // Listen for theme changes if you have a theme toggle
  const themeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        adaptTheme();
      }
    });
  });

  themeObserver.observe(document.body, { attributes: true });
});
