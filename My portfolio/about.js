document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the about page
  if (document.querySelector('.about-page')) {
    // Animation for detail items and timeline
    const animateElements = () => {
      const aboutItems = document.querySelectorAll('.detail-item, .timeline-item');
      
      const animateOnScroll = () => {
        aboutItems.forEach(item => {
          const itemPosition = item.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;
          
          if(itemPosition < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }
        });
      };
      
      // Set initial state for animation
      aboutItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      // Initial animation and scroll listener
      animateOnScroll();
      window.addEventListener('scroll', animateOnScroll);
    };

    // Image hover effect - only on desktop
    const initImageHover = () => {
      const profileImg = document.querySelector('.profile-img');
      if(profileImg && window.innerWidth > 768) {
        profileImg.addEventListener('mouseenter', function() {
          this.parentElement.style.boxShadow = '0 8px 32px rgba(108, 99, 255, 0.3)';
        });
        
        profileImg.addEventListener('mouseleave', function() {
          this.parentElement.style.boxShadow = 'var(--shadow)';
        });
      }
    };

    // Initialize mobile navigation state
    const initMobileNav = () => {
      if (window.innerWidth <= 768) {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        // Close mobile menu if open
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          const barsIcon = menuToggle.querySelector('.fa-bars');
          const timesIcon = menuToggle.querySelector('.fa-times');
          if (barsIcon) barsIcon.style.display = 'block';
          if (timesIcon) timesIcon.style.display = 'none';
        }
        
        // Update active link
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === 'about.html') {
            link.classList.add('active');
          }
        });
      }
    };

    // Initialize all functions
    animateElements();
    initImageHover();
    initMobileNav();

    // Re-initialize on resize
    window.addEventListener('resize', () => {
      initImageHover();
      initMobileNav();
    });
  }
});