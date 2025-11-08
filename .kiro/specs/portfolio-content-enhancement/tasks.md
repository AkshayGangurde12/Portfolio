# Implementation Plan

- [x] 1. Create data structure files



  - Create src/data directory if it doesn't exist
  - Create experience.ts with TypeScript interfaces for ExperienceEntry
  - Create testimonials.ts with TypeScript interfaces for Testimonial
  - Create projects.ts and move project data from Projects component
  - Create about.ts with enhanced AboutContent interface
  - Define all TypeScript interfaces for type safety
  - _Requirements: 1.1, 2.1, 2.2, 2.3, 2.4, 4.1, 4.2, 5.1, 5.2_

- [ ] 2. Populate data files with actual content
  - Add education entry to experience.ts with VIIT details
  - Add work experience or internship entries if available
  - Add at least 2 testimonials to testimonials.ts (can use placeholder initially)
  - Enhance project data with challenge, myRole, and expanded keyFeatures
  - Add aboutContent with whyIBuild, whatDrivesMe, and softSkills
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 4.2, 4.3, 5.2, 5.3_

- [ ] 3. Create Experience component with timeline layout
  - Create src/components/Experience.tsx component
  - Implement timeline vertical line with dots
  - Create experience card layout with type-based icons
  - Add date badges and organization info
  - Display achievements as bullet points
  - Add technology badges for each entry
  - Implement alternating left/right layout for desktop
  - Add responsive single-column layout for mobile
  - Add hover effects and animations
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

- [ ] 4. Create Testimonials component with carousel
  - Create src/components/Testimonials.tsx component
  - Implement carousel/slider functionality using embla-carousel-react (already in dependencies)
  - Create testimonial card with quote styling
  - Add decorative quote marks
  - Display author info with avatar, name, role, and company
  - Add navigation dots or arrows
  - Implement smooth slide transitions
  - Add responsive layout for mobile
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 5. Create CTASection component
  - Create src/components/CTASection.tsx component
  - Add headline "Let's Build Something Together"
  - Add descriptive subheading
  - Create three action buttons: Email, LinkedIn, Download Resume
  - Implement resume download functionality with error handling
  - Add gradient background styling
  - Make buttons responsive (stack on mobile)
  - Add scroll-into-view animation
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.6_

- [ ] 6. Enhance About component with personality content
  - Import aboutContent from data/about.ts
  - Add "Why I Build" card section
  - Create soft skills grid with icons and descriptions
  - Add "What Drives Me" list with checkmark icons
  - Maintain existing bio and stats sections
  - Ensure responsive layout for all new sections
  - Add fade-in animations for new sections
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 7. Enhance Projects component with detailed information
  - Import projects data from data/projects.ts
  - Add "Challenge/Goal" field display prominently in cards
  - Add "My Role" badge or section
  - Expand tech stack display with better grouping
  - Make case study section more prominent (visible by default or easier to access)
  - Improve key features list presentation
  - Ensure all project links (live demo, GitHub) are clearly visible
  - Verify screenshot display and lightbox functionality
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 7.1, 7.2, 7.3_

- [ ] 8. Enhance Hero component with additional CTAs
  - Add secondary CTA button for "Download Resume"
  - Add social links row (GitHub, LinkedIn) with icons
  - Implement resume download functionality
  - Improve button layout and spacing
  - Ensure responsive layout on mobile
  - _Requirements: 6.2, 6.3, 6.4, 6.5_

- [ ] 9. Enhance Contact component with CTA
  - Add CTASection component above the contact form
  - Customize CTA variant for contact page context
  - Ensure proper spacing and visual hierarchy
  - Verify all CTA buttons work correctly
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ] 10. Update Footer with resume download link
  - Add "Download Resume" link to Footer component
  - Implement resume download functionality
  - Add appropriate icon (Download or FileText)
  - Style consistently with other footer links
  - _Requirements: 6.4_

- [ ] 11. Integrate new sections into Index page
  - Import Experience component
  - Import Testimonials component
  - Add Experience section after Skills section
  - Add Testimonials section after Projects section
  - Verify section order: Hero → About → Skills → Experience → Projects → Testimonials → Contact → Footer
  - Test smooth scrolling between all sections
  - _Requirements: 4.1, 5.1_

- [ ] 12. Add project screenshots and optimize images
  - Add actual project screenshots to public/projects directory
  - Ensure images are optimized for web (compressed, appropriate format)
  - Implement lazy loading for project images
  - Add placeholder images for projects without screenshots
  - Verify lightbox functionality with multiple images
  - Test image loading performance
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 13. Create and add resume PDF
  - Create professional resume PDF
  - Add resume.pdf to public directory
  - Test download functionality from all CTA locations
  - Verify file downloads with correct filename
  - Add error handling for missing resume file
  - _Requirements: 6.4, 6.6_

- [ ] 14. Test responsive design for new sections
  - Test Experience timeline on mobile, tablet, and desktop
  - Test Testimonials carousel on all screen sizes
  - Test CTA section button layout on mobile
  - Verify About section enhancements on mobile
  - Test Projects enhanced layout on all breakpoints
  - Ensure all touch targets are minimum 44x44px
  - _Requirements: 4.6, 5.4, 6.5_

- [ ] 15. Accessibility testing for new components
  - Test keyboard navigation through Experience timeline
  - Test keyboard navigation in Testimonials carousel
  - Verify all images have proper alt text
  - Test screen reader announcements for timeline
  - Verify ARIA labels on carousel controls
  - Test focus indicators on all new interactive elements
  - Verify heading hierarchy across all sections
  - _Requirements: 1.5, 2.7, 4.3, 5.3_

- [ ] 16. Content review and polish
  - Review all text content for grammar and clarity
  - Verify all links work correctly (social, GitHub, live demos)
  - Test resume download from all locations
  - Verify project data accuracy (tech stacks, descriptions)
  - Check testimonial formatting and attribution
  - Ensure consistent tone and voice across all sections
  - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 2.4, 5.2, 6.1_
