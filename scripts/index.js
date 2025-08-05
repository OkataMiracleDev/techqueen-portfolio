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
