document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".graphic-des-item");

  items.forEach(item => {
    const toggleBtn = item.querySelector(".toggle-btn");
    const details = item.querySelector(".details");

    toggleBtn.addEventListener("click", () => {
      const isActive = details.classList.contains("opacity-100");

      // Hide all other details
      items.forEach(otherItem => {
        const otherDetails = otherItem.querySelector(".details");
        const otherBtn = otherItem.querySelector(".toggle-btn");

        // Hide logic for mobile
        otherDetails.classList.remove("opacity-100", "translate-y-0", "h-56");
        otherDetails.classList.add("opacity-0", "h-0", "translate-y-[-100%]");

        // Reset image corners
        otherBtn.classList.add("rounded-3xl");
        otherBtn.classList.remove("rounded-t-3xl");
      });

      // Show if not already active
      if (!isActive) {
        requestAnimationFrame(() => {
          details.classList.remove("no-transition");
          details.classList.add("transition-all", "duration-300", "ease-in-out");

          details.classList.remove("opacity-0", "translate-y-[-100%]", "h-0");
          details.classList.add("opacity-100", "translate-y-0", "h-56");
        });

        // Update corner radius
        toggleBtn.classList.remove("rounded-3xl");
        toggleBtn.classList.add("rounded-t-3xl");
      }
    });
  });
});
