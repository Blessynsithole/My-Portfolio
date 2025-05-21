document.addEventListener('DOMContentLoaded', function() {
  // Set initial positions (full width)
  const progressBars = document.querySelectorAll('.progress-bar');
  
  // First set all bars to their full width (visible on load)
  progressBars.forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.width = targetWidth; // Set to final width initially
    bar.dataset.percent = targetWidth; // Store target width
  });

  // After a brief delay, reset to 0 and animate back
  setTimeout(() => {
    progressBars.forEach(bar => {
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = bar.dataset.percent;
      }, 50);
    });
  }, 300);
  
  // Optional: Re-animate when scrolled to
  function animateOnScroll() {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
      
      if (isVisible && !bar.classList.contains('animated')) {
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = bar.dataset.percent;
        }, 100);
        bar.classList.add('animated');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
});