/**
 * Form validation and submission handling
 */
export function setupFormValidation() {
  const form = document.getElementById('notifyForm');
  const emailInput = document.getElementById('emailInput');
  const submitButton = document.getElementById('submitButton');
  const feedbackElement = document.querySelector('.form-feedback');
  
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!form || !emailInput || !submitButton || !feedbackElement) {
    console.error('Form elements not found');
    return;
  }
  
  // Validate email as user types
  emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    
    if (email === '') {
      // Empty input - reset states
      emailInput.classList.remove('valid', 'error');
      feedbackElement.textContent = '';
      feedbackElement.classList.remove('success', 'error');
      return;
    }
    
    if (emailRegex.test(email)) {
      emailInput.classList.add('valid');
      emailInput.classList.remove('error');
      feedbackElement.textContent = '';
    } else {
      emailInput.classList.add('error');
      emailInput.classList.remove('valid');
      feedbackElement.textContent = 'Please enter a valid email address';
      feedbackElement.classList.add('error');
      feedbackElement.classList.remove('success');
    }
  });
  
  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    // Validate email
    if (!emailRegex.test(email)) {
      feedbackElement.textContent = 'Please enter a valid email address';
      feedbackElement.classList.add('error');
      feedbackElement.classList.remove('success');
      emailInput.classList.add('error');
      emailInput.focus();
      return;
    }
    
    // Show loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    // Simulate API call
    try {
      // In a real implementation, this would be an actual API request
      await mockApiCall(email);
      
      // Success
      feedbackElement.textContent = 'Thanks! We\'ll notify you when we launch.';
      feedbackElement.classList.add('success');
      feedbackElement.classList.remove('error');
      
      // Reset form
      emailInput.value = '';
      emailInput.classList.remove('valid', 'error');
      
    } catch (error) {
      // Error handling
      feedbackElement.textContent = error.message || 'Something went wrong. Please try again.';
      feedbackElement.classList.add('error');
      feedbackElement.classList.remove('success');
    } finally {
      // Reset loading state
      submitButton.classList.remove('loading');
      submitButton.disabled = false;
    }
  });
  
  // Mock API call with artificial delay
  async function mockApiCall(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() < 0.9) {
          console.log(`Email submitted: ${email}`);
          resolve({ success: true });
        } else {
          reject(new Error('Network error. Please try again.'));
        }
      }, 1500);
    });
  }
}