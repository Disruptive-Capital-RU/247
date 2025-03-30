document.addEventListener("DOMContentLoaded", function () {
  // Apple-style dropdown menu handling
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");
  const headerElement = document.querySelector("header");

  // Declare timeout variable at a higher scope so it's accessible to all handlers
  let timeout;

  // Initial state - ensure dropdowns are hidden
  dropdownTriggers.forEach((trigger) => {
    const dropdown = trigger.querySelector(".dropdown-menu");
    if (dropdown) {
      dropdown.style.opacity = "0";
      dropdown.style.visibility = "hidden";
      dropdown.style.transform = "translateY(-10px)";
    }
  });

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => {
      clearTimeout(timeout);

      // Darken the header background on dropdown hover
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.92)";

      // Hide all other dropdowns
      dropdownTriggers.forEach((otherTrigger) => {
        const otherDropdown = otherTrigger.querySelector(".dropdown-menu");
        if (otherTrigger !== trigger && otherDropdown) {
          otherDropdown.style.opacity = "0";
          otherDropdown.style.visibility = "hidden";
          otherDropdown.style.transform = "translateY(-10px)";
        }
      });

      // Show current dropdown
      const dropdown = trigger.querySelector(".dropdown-menu");
      if (dropdown) {
        dropdown.style.opacity = "1";
        dropdown.style.visibility = "visible";
        dropdown.style.transform = "translateY(0)";
      }
    });

    trigger.addEventListener("mouseleave", () => {
      // Return header to default background when not hovering
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

      timeout = setTimeout(() => {
        const dropdown = trigger.querySelector(".dropdown-menu");
        if (dropdown) {
          dropdown.style.opacity = "0";
          dropdown.style.visibility = "hidden";
          dropdown.style.transform = "translateY(-10px)";
        }
      }, 150); // Small delay to allow user to move to dropdown content
    });
  });

  // Handle dropdown menu hover to maintain visibility
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");
  dropdownMenus.forEach((menu) => {
    menu.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      menu.style.opacity = "1";
      menu.style.visibility = "visible";
      menu.style.transform = "translateY(0)";
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.92)";
    });

    menu.addEventListener("mouseleave", () => {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      menu.style.opacity = "0";
      menu.style.visibility = "hidden";
      menu.style.transform = "translateY(-10px)";
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const headerHeight = document.querySelector("header").offsetHeight;

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight, // Adjusted for header height
          behavior: "smooth",
        });
      }
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.92)";
    } else {
      headerElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      console.log("Form submitted with values:", formValues);
      // Placeholder for actual submission
      alert("Thank you for your inquiry! We will contact you shortly.");
      contactForm.reset();
    });
  }

  // Scroll Animation for Sections
  const animatedSections = document.querySelectorAll(".animated-section");
  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 20% of the section is visible
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        // Optional: Stop observing after animation triggered once
        // observer.unobserve(entry.target);
      }
      // Optional: remove class if element goes out of view
      // else {
      //     entry.target.classList.remove('is-visible');
      // }
    });
  }, observerOptions);

  animatedSections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Active Navigation Link Highlighting
  const sections = document.querySelectorAll("main section[id]"); // Select sections with IDs
  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPosition = window.pageYOffset + headerHeight + 100; // Add offset for better accuracy

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Initial call to set active link on page load
  window.dispatchEvent(new Event("scroll"));

  // Responsive navigation (Placeholder for future expansion)
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  function handleScreenChange(e) {
    if (e.matches) {
      console.log("Mobile view active");
    } else {
      console.log("Desktop view active");
    }
  }
  mediaQuery.addEventListener("change", handleScreenChange);
  handleScreenChange(mediaQuery);
});
