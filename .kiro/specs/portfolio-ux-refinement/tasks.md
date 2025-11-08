# Implementation Plan

- [ ] 1. Implement theme system foundation
  - Create ThemeContext with theme state management and toggle function
  - Create ThemeProvider component that wraps application and manages theme logic
  - Implement useTheme custom hook for accessing theme state
  - Add theme initialization logic (localStorage, system preference fallback)
  - Add theme persistence to localStorage on change
  - Apply theme class to document root element
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 2. Add light mode CSS variables
  - Define light mode color palette in index.css :root selector
  - Ensure proper contrast ratios for accessibility (minimum 4.5:1)
  - Add smooth transition classes for theme switching
  - Test color combinations in light mode
  - _Requirements: 2.1, 2.4, 2.5, 5.2_

- [ ] 3. Create ThemeToggle component
  - Build toggle button with sun/moon icons from lucide-react
  - Implement smooth icon transition animation
  - Add proper aria-label for accessibility
  - Connect to useTheme hook for theme state
  - Style with hover and focus states
  - _Requirements: 5.1, 5.2_

- [ ] 4. Integrate theme system into application
  - Wrap App component with ThemeProvider in main.tsx
  - Add ThemeToggle component to Navigation
  - Position toggle button in navigation bar (desktop and mobile)
  - Test theme switching functionality
  - Verify theme persistence across page reloads
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 5. Create MobileMenu component
  - Build slide-in menu component with overlay backdrop
  - Implement open/close animations using framer-motion
  - Add navigation links in vertical layout
  - Include close button with X icon
  - Add click-outside-to-close functionality
  - Implement focus trap for accessibility
  - Style with backdrop blur effect
  - _Requirements: 3.3, 6.2, 6.3_

- [ ] 6. Enhance Navigation component with mobile menu
  - Add mobileMenuOpen state to Navigation component
  - Create hamburger menu icon button (visible below 768px)
  - Integrate MobileMenu component
  - Add active section highlighting based on scroll position
  - Implement scroll position detection with Intersection Observer
  - Ensure minimum 44x44px touch targets on mobile
  - Hide desktop navigation links below 768px breakpoint
  - _Requirements: 3.1, 3.3, 3.4, 3.5, 6.2, 6.3, 6.4_

- [ ] 7. Update Hero section content and styling
  - Update headline to "Hi, I'm Akshay — MERN Full-Stack Developer helping businesses build scalable web apps"
  - Increase avatar size from 128px to 180px
  - Add subtle background gradient animation
  - Improve typography hierarchy with proper heading levels
  - Add fade-in animation on component mount
  - Ensure responsive text sizing for mobile (reduce font sizes below 768px)
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 8. Implement animation system enhancements
  - Add fade-in animation utility for scroll-triggered elements
  - Implement hover scale effects on project cards (scale 1.02-1.05)
  - Add smooth transitions to all interactive elements (150-300ms duration)
  - Ensure animations use transform and opacity for performance
  - Add prefers-reduced-motion media query support
  - Limit animations to GPU-accelerated properties
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 9. Refine responsive design across all sections
  - Test and adjust Hero section for mobile (320px-767px)
  - Ensure Projects section uses single column on mobile
  - Verify Skills section layout on tablet (2 columns) and mobile (1 column)
  - Test Contact form on mobile devices
  - Verify all sections maintain proper spacing on all breakpoints
  - Ensure no horizontal scrolling on any device size
  - _Requirements: 6.1, 6.2, 6.5, 1.5_

- [ ] 10. Verify design system consistency
  - Audit all components for consistent color usage (accent + neutrals)
  - Verify typography scale is applied consistently
  - Check spacing scale usage across all sections
  - Ensure accent color is used for all interactive elements
  - Verify glass effect and hover states are consistent
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ] 11. Accessibility testing and refinements
  - Test keyboard navigation through all interactive elements
  - Verify all buttons have proper aria-labels
  - Test with screen reader (NVDA or VoiceOver)
  - Verify color contrast ratios meet WCAG 2.1 AA standards
  - Test focus indicators on all interactive elements
  - Verify reduced motion preferences are respected
  - Test mobile menu focus trap
  - _Requirements: 2.5, 4.5, 6.4_

- [ ] 12. Cross-browser and performance testing
  - Test theme toggle in Chrome, Firefox, Safari, Edge
  - Verify animations run at 60fps
  - Test responsive design on actual mobile devices
  - Verify theme persistence works in all browsers
  - Test with JavaScript disabled (graceful degradation)
  - Measure and optimize bundle size impact
  - _Requirements: 3.1, 3.2, 4.4, 5.3, 5.4_
