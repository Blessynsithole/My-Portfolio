document.addEventListener('DOMContentLoaded', () => {
    // Animation for project cards
    const projects = document.querySelectorAll('.project-card');
    
    const animateProjects = () => {
      projects.forEach((project, index) => {
        setTimeout(() => {
          project.style.opacity = '1';
          project.style.transform = 'translateY(0)';
        }, 150 * index);
      });
    };
  
    // Initialize projects with hidden state
    projects.forEach(project => {
      project.style.opacity = '0';
      project.style.transform = 'translateY(20px)';
      project.style.transition = 'all 0.5s ease';
    });
  
    // Animate on load
    animateProjects();
  
    // Filter projects (if you add filter buttons later)
    window.filterProjects = (category) => {
      projects.forEach(project => {
        const techs = project.querySelector('.project-tech').textContent.toLowerCase();
        if (category === 'all' || techs.includes(category.toLowerCase())) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    };
  });