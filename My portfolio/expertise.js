document.addEventListener('DOMContentLoaded', function() {
  // Animate progress bars on scroll
  const progressItems = document.querySelectorAll('.progress-item');
  
  function animateProgressBars() {
    progressItems.forEach(item => {
      const progressFill = item.querySelector('.progress-fill');
      const percent = item.querySelector('.progress-info span:last-child').textContent;
      const width = parseInt(percent);
      
      if (isElementInViewport(item)) {
        progressFill.style.width = percent;
      }
    });
  }
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  // Initialize animation on load
  animateProgressBars();
  
  // Animate on scroll
  window.addEventListener('scroll', animateProgressBars);
  
  // Card hover effects
  const expertiseCards = document.querySelectorAll('.expertise-card');
  
  expertiseCards.forEach(card => {
    const icon = card.querySelector('.card-icon');
    
    card.addEventListener('mouseenter', function() {
      icon.style.transform = 'rotate(15deg) scale(1.1)';
      icon.style.backgroundColor = 'rgba(108, 99, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      icon.style.transform = 'rotate(0) scale(1)';
      icon.style.backgroundColor = 'rgba(108, 99, 255, 0.1)';
    });
  });
});