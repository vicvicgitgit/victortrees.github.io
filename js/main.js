// Minimal JavaScript for mobile navigation and optional publication filtering.

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const papers = document.querySelectorAll(".paper-card[data-tags]");

  if (filterButtons.length && papers.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        papers.forEach((paper) => {
          const tags = paper.getAttribute("data-tags").split(" ");
          const shouldShow = filter === "all" || tags.includes(filter);
          paper.classList.toggle("hidden", !shouldShow);
        });
      });
    });
  }
});
