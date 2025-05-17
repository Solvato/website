// Main JS file for Solvato Coming Soon Page
import { setupFormValidation } from './form.js';
import { setupAnimations } from './animations.js';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupFormValidation();
  setupAnimations();
});