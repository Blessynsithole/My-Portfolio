// Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Select elements
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Only proceed if elements exist
  if (menuToggle && navLinks) {
    // Create and append the close (times) icon
    const barsIcon = menuToggle.querySelector('.fa-bars');
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fas fa-times';
    closeIcon.style.display = 'none';
    menuToggle.appendChild(closeIcon);

    // Toggle menu function
    function toggleMenu() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
      
      // Toggle between bars and times icons
      if (navLinks.classList.contains('active')) {
        barsIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        barsIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    }

    // Event listeners
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking on nav links (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768 && 
          !navLinks.contains(e.target) && 
          !menuToggle.contains(e.target) &&
          navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });

    // Close menu when resizing to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  });

  // Highlight current page link
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === window.location.pathname.split('/').pop()) {
      link.classList.add('active');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Update URL without page reload
        if (history.pushState) {
          history.pushState(null, null, this.getAttribute('href'));
        }
      }
    });
  });

  // Back to top button
  const backToTopBtn = document.createElement('div');
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.classList.add('back-to-top');
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Close mobile menu when clicking back/forward buttons
  window.addEventListener('popstate', function() {
    if (window.innerWidth <= 768 && navLinks?.classList.contains('active')) {
      toggleMenu();
    }
  });
});