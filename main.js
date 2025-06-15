document.addEventListener('DOMContentLoaded', () => {
  // ✅ Handle Hamburger toggle if present
  const hamburger = document.getElementById('hamburger');
  const navlinks = document.getElementById('navlinks');

  if (hamburger && navlinks) {
    hamburger.addEventListener('click', () => {
      navlinks.classList.toggle('active');
    });
  }

  // ✅ Handle Logo click if present
  const logoImgs = document.querySelectorAll('.logoImg');
  if (logoImgs.length > 0) {
    logoImgs.forEach(img => {
      img.addEventListener('click', () => {
        const currentUrl = window.location.href;
        if (currentUrl.includes('/blog/')) {
        // We are in blog/ folder
        window.location.href = '/';
      } else if (currentUrl.includes('/work')) {
        window.location.href = '/';
      } else {
        window.location.href = '/';
      }
      });
    });
  }
});