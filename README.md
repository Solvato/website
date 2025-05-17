# Solvato.io - Coming Soon Page

A modern, responsive "Under Construction" page for Solvato.io with email notification functionality, animations, and complete accessibility compliance.

## Features

- Email collection form with validation
- Animated background with gradient shifts
- Responsive design optimized for devices from 320px to 1440px
- WCAG 2.1 AA compliant
- Core Web Vitals optimized
- Cross-browser compatibility
- Privacy Policy page

## Technology Stack

- HTML5
- CSS3 with custom properties (variables)
- Vanilla JavaScript (ES6+)
- SVG icons and animations

## Project Structure

```
├── public/                # Public assets
│   ├── favicon.svg        # Site favicon
│   └── privacy.html       # Privacy policy page
├── src/
│   ├── styles/            # CSS files
│   │   ├── reset.css      # CSS reset
│   │   ├── variables.css  # CSS variables
│   │   ├── main.css       # Main styles
│   │   ├── components.css # Component styles
│   │   ├── animations.css # Animation styles
│   │   └── responsive.css # Responsive styles
│   ├── js/                # JavaScript files
│   │   ├── main.js        # Main JavaScript file
│   │   ├── form.js        # Form validation module
│   │   └── animations.js  # Animation module
├── index.html             # Main HTML file
└── README.md              # This file
```

## Deployment Instructions

### Local Development

1. Clone the repository
2. Open the project in your favorite code editor
3. Launch a local development server:

```bash
# Using Python
python -m http.server 3000

# Or with Node.js
npx serve
```

4. Access the site at `http://localhost:3000`

### Production Deployment

1. Upload all files to your web hosting service
2. Ensure all files maintain their directory structure
3. Set up proper HTTP headers:
   - Cache-Control for static assets
   - Content-Security-Policy
   - X-Content-Type-Options: nosniff

### Performance Optimizations

For production deployment, consider these optimizations:

1. Minify CSS and JavaScript files
2. Optimize SVG icons
3. Implement proper caching strategies
4. Use a CDN for content delivery

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Android Chrome

## Accessibility

The page adheres to WCAG 2.1 AA standards:

- Proper contrast ratios
- Keyboard navigation
- Screen reader compatibility
- Focus management
- Appropriate ARIA attributes

## Form Integration

To connect the email form to an actual backend service:

1. Replace the `mockApiCall` function in `src/js/form.js` with your actual API endpoint
2. Update the form handling logic as needed for your backend requirements
3. Add any additional validation rules specific to your service

## Additional Notes

- The background animation can be disabled by uncommenting the relevant section in `animations.js` for users with reduced motion preferences.
- Social media links should be updated with actual URLs before deployment.