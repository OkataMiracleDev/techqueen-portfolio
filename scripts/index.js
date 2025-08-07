const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // Don't prevent default — we want it to scroll
    // e.preventDefault();

    // Reset all links to default background
    navLinks.forEach(l => {
      l.classList.remove('bg-[#ffffff]');
      l.classList.add('bg-none');
    });

    // Highlight the clicked link
    this.classList.remove('bg-none');
    this.classList.add('bg-[#ffffff]');
  });
});

// Testimonial-slider
  const wrapper = document.getElementById("testimonial-wrapper");
  const buttons = document.querySelectorAll(".testimonial-btn");
  const slides = document.querySelectorAll(".testimonial-1, .testimonial-2");

  const btn1 = document.querySelector(".testimonial-1-btn");
  const btn2 = document.querySelector(".testimonial-2-btn");

  function activateSlide(index) {
    // Slide the wrapper
    wrapper.style.transform = `translateX(-${index * 100}%)`;

    // Reset all buttons
    [btn1, btn2].forEach(btn => {
      btn.classList.remove("bg-[#267194]", "border-white");
      btn.classList.add("bg-white", "border-gray-600");
    });

    // Highlight active button
    if (index === 0) {
      btn1.classList.add("bg-[#267194]", "border-white");
      btn1.classList.remove("bg-white", "border-gray-600");
    } else {
      btn2.classList.add("bg-[#267194]", "border-white");
      btn2.classList.remove("bg-white", "border-gray-600");
    }
  }

  btn1.addEventListener("click", () => activateSlide(0));
  btn2.addEventListener("click", () => activateSlide(1));
