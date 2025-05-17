/**
 * Setup animations and interactive elements
 */
export function setupAnimations() {
  // Enhanced gradient animation
  animateGradient();
  
  // Intersection Observer for scrolling animations
  setupScrollAnimations();
  
  // Hover effects on social links
  setupSocialHoverEffects();
}

/**
 * Dynamically animates the background gradient
 */
function animateGradient() {
  const gradientOverlay = document.querySelector('.gradient-overlay');
  if (!gradientOverlay) return;
  
  // Create more dynamic gradient shifts
  let angle = 45;
  let direction = 1;
  let blueOpacity = 0.2;
  let orangeOpacity = 0.2;
  
  setInterval(() => {
    // Slowly shift angle
    angle += 0.3 * direction;
    
    // Change direction occasionally
    if (Math.random() < 0.01) {
      direction *= -1;
    }
    
    // Modulate opacities slightly
    blueOpacity = 0.15 + (Math.sin(Date.now() / 5000) * 0.1);
    orangeOpacity = 0.15 + (Math.cos(Date.now() / 7000) * 0.1);
    
    // Keep angle in reasonable bounds
    if (angle > 125 || angle < 0) {
      direction *= -1;
    }
    
    // Apply the new gradient
    gradientOverlay.style.background = `linear-gradient(
      ${angle}deg, 
      rgba(255, 87, 34, ${orangeOpacity}), 
      rgba(0, 180, 255, ${blueOpacity})
    )`;
  }, 100);
}

/**
 * Setup animations for elements as they scroll into view
 */
function setupScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observe elements that should animate on scroll
  document.querySelectorAll('.social-links a, .footer-info').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Setup enhanced hover effects for social links
 */
function setupSocialHoverEffects() {
  const socialLinks = document.querySelectorAll('.social-links a');
  
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      // Scale up slightly
      link.style.transform = 'translateY(-4px) scale(1.1)';
      
      // Add glow effect
      link.style.boxShadow = '0 0 15px rgba(0, 180, 255, 0.5)';
      
      // Change icon color
      const icon = link.querySelector('svg');
      if (icon) {
        icon.style.fill = 'white';
      }
    });
    
    link.addEventListener('mouseleave', () => {
      // Reset styles
      link.style.transform = '';
      link.style.boxShadow = '';
      
      const icon = link.querySelector('svg');
      if (icon) {
        icon.style.fill = '';
      }
    });
  });
}