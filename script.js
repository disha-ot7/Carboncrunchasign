document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.createElement("button");
  navToggle.textContent = "☰";
  navToggle.classList.add("nav-toggle");
  document.querySelector("nav").prepend(navToggle);

  const navLinks = document.querySelector(".nav-links");
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Stats Counter Animation
  const stats = document.querySelectorAll(".stat");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statElement = entry.target;
          const value = parseInt(statElement.textContent);
          let count = 0;
          const interval = setInterval(() => {
            count += Math.ceil(value / 50);
            statElement.firstChild.textContent = count + "%";
            if (count >= value) {
              clearInterval(interval);
              statElement.firstChild.textContent = value + "%";
            }
          }, 50);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => observer.observe(stat));

  // Button Hover Effect
  document.querySelectorAll(".cta").forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.05)";
      button.style.transition = "0.3s ease";
    });
    button.addEventListener("mouseout", () => {
      button.style.transform = "scale(1)";
    });
  });

  // Automatic Image Slider
  const slides = document.querySelectorAll(".hero-image img");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
  showSlide(currentSlide);
});
