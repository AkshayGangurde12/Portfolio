# Design Document

## Overview

This design document outlines the technical approach for refining the visual design and user experience of Akshay Gangurde's portfolio website. The enhancements focus on creating a professional, modern, and accessible portfolio that effectively showcases skills and projects while providing an excellent user experience across all devices.

The design leverages existing components and infrastructure while introducing new features like dark mode toggle, enhanced hero section, improved navigation, and refined animation system.

## Architecture

### Component Structure

```
src/
├── components/
│   ├── Navigation.tsx (Enhanced)
│   ├── Hero.tsx (Enhanced)
│   ├── ThemeToggle.tsx (New)
│   ├── MobileMenu.tsx (New)
│   ├── About.tsx (Minor updates)
│   ├── Skills.tsx (Minor updates)
│   ├── Projects.tsx (Minor updates)
│   ├── Contact.tsx (Existing)
│   └── Footer.tsx (Existing)
├── hooks/
│   └── useTheme.ts (New)
├── contexts/
│   └── ThemeContext.tsx (New)
└── index.css (Enhanced)
```

### Theme System Architecture

The theme system will use React Context API for state management and localStorage for persistence:

1. **ThemeContext**: Provides theme state and toggle function
2. **ThemeProvider**: Wraps the application and manages theme logic
3. **useTheme hook**: Custom hook for accessing theme state
4. **CSS Variables**: Define light and dark mode color schemes

## Components and Interfaces

### 1. ThemeContext and Provider

**Purpose**: Manage theme state across the application

**Interface**:
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}
```

**Implementation Details**:
- Initialize theme from localStorage or system preference
- Persist theme changes to localStorage
- Apply theme class to document root element
- Provide theme state and controls via Context

### 2. ThemeToggle Component

**Purpose**: UI control for switching between light and dark modes

**Props**:
```typescript
interface ThemeToggleProps {
  className?: string;
}
```

**Features**:
- Sun/Moon icon toggle
- Smooth transition animation
- Accessible button with aria-label
- Positioned in Navigation component

### 3. Enhanced Navigation Component

**Current State**: Basic sticky navigation with smooth scroll
**Enhancements**:
- Add ThemeToggle component
- Implement mobile hamburger menu
- Add active section highlighting
- Improve backdrop blur effect
- Add mobile menu overlay

**New State**:
```typescript
interface NavigationState {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  activeSection: string;
}
```

### 4. MobileMenu Component

**Purpose**: Responsive mobile navigation menu

**Props**:
```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  sections: Array<{ id: string; label: string }>;
}
```

**Features**:
- Slide-in animation from right
- Overlay backdrop with blur
- Close on section click or backdrop click
- Accessible with focus trap

### 5. Enhanced Hero Component

**Current State**: Basic hero with avatar and CTA
**Enhancements**:
- Update headline to "Hi, I'm Akshay — MERN Full-Stack Developer helping businesses build scalable web apps"
- Increase avatar size to 180px
- Add subtle background gradient animation
- Improve typography hierarchy
- Add fade-in animation on load

**Updated Structure**:
```typescript
interface HeroContent {
  greeting: string;
  headline: string;
  description: string;
  ctaText: string;
  avatarUrl: string;
}
```

## Data Models

### Theme Preference

```typescript
type Theme = 'light' | 'dark';

interface ThemePreference {
  theme: Theme;
  timestamp: number;
}
```

**Storage**: localStorage key `portfolio-theme`

### Navigation Sections

```typescript
interface NavigationSection {
  id: string;
  label: string;
  href: string;
}

const sections: NavigationSection[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
```

## Design System

### Color Palette

**Light Mode** (New):
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;
  --primary: 262 83% 58%;
  --primary-foreground: 0 0% 100%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222 47% 11%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --accent: 262 83% 58%;
  --accent-foreground: 0 0% 100%;
  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 262 83% 58%;
}
```

**Dark Mode** (Enhanced):
```css
.dark {
  --background: 0 0% 4%;
  --foreground: 210 40% 98%;
  --card: 0 0% 10%;
  --card-foreground: 210 40% 98%;
  --primary: 262 83% 70%;
  --primary-foreground: 210 40% 98%;
  --secondary: 0 0% 15%;
  --secondary-foreground: 210 40% 98%;
  --muted: 0 0% 15%;
  --muted-foreground: 215 20% 65%;
  --accent: 262 83% 70%;
  --accent-foreground: 210 40% 98%;
  --border: 0 0% 18%;
  --input: 0 0% 18%;
  --ring: 262 83% 70%;
}
```

### Typography Scale

```css
/* Headings */
h1: 3.5rem / 4rem (mobile: 2.5rem / 3rem)
h2: 2.5rem / 3rem (mobile: 2rem / 2.5rem)
h3: 1.875rem / 2.25rem (mobile: 1.5rem / 2rem)
h4: 1.5rem / 2rem
h5: 1.25rem / 1.75rem

/* Body */
body: 1rem / 1.5rem
small: 0.875rem / 1.25rem
xs: 0.75rem / 1rem

/* Weights */
normal: 400
medium: 500
semibold: 600
bold: 700
```

### Spacing Scale

```css
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-12: 3rem;    /* 48px */
--spacing-16: 4rem;    /* 64px */
--spacing-24: 6rem;    /* 96px */
```

### Animation System

**Principles**:
- Use transform and opacity for performance
- Duration: 150ms-600ms for most interactions
- Easing: cubic-bezier(0.4, 0, 0.2, 1) for smooth feel
- Respect prefers-reduced-motion

**Animation Utilities**:
```css
/* Fade in on scroll */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Slide up on scroll */
.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

/* Hover scale */
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.02);
}

/* Theme transition */
.theme-transition {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
```

## Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Mobile Optimizations

1. **Navigation**: Hamburger menu below 768px
2. **Hero**: Single column, reduced font sizes
3. **Projects**: Single column grid below 768px
4. **Skills**: Single column below 768px, 2 columns on tablets
5. **Touch Targets**: Minimum 44x44px for all interactive elements

## Error Handling

### Theme System Errors

1. **localStorage unavailable**: Fall back to system preference
2. **Invalid theme value**: Default to 'dark'
3. **System preference unavailable**: Default to 'dark'

**Implementation**:
```typescript
const getInitialTheme = (): Theme => {
  try {
    const stored = localStorage.getItem('portfolio-theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch (error) {
    console.warn('localStorage unavailable:', error);
  }
  
  // Fall back to system preference
  if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  
  return 'dark';
};
```

### Animation Performance

1. **Reduced Motion**: Disable animations when user prefers reduced motion
2. **Intersection Observer**: Only animate elements when in viewport
3. **Debounce Scroll**: Limit scroll event handlers to 60fps

## Testing Strategy

### Visual Testing

1. **Theme Toggle**: Verify smooth transition between light/dark modes
2. **Responsive Design**: Test all breakpoints (320px, 768px, 1024px, 1920px)
3. **Browser Compatibility**: Test on Chrome, Firefox, Safari, Edge
4. **Animation Performance**: Verify 60fps on animations

### Accessibility Testing

1. **Keyboard Navigation**: All interactive elements accessible via keyboard
2. **Screen Reader**: Proper ARIA labels and semantic HTML
3. **Color Contrast**: Minimum 4.5:1 ratio for text
4. **Focus Indicators**: Visible focus states on all interactive elements
5. **Reduced Motion**: Animations respect prefers-reduced-motion

### User Experience Testing

1. **Mobile Navigation**: Hamburger menu opens/closes smoothly
2. **Smooth Scroll**: Section navigation scrolls smoothly
3. **Theme Persistence**: Theme preference persists across sessions
4. **Loading Performance**: Hero section visible within 1 second
5. **Touch Targets**: All buttons/links easily tappable on mobile

### Manual Testing Checklist

- [ ] Theme toggle switches between light/dark modes
- [ ] Theme preference persists after page reload
- [ ] Mobile menu opens and closes properly
- [ ] All navigation links scroll to correct sections
- [ ] Hero section displays updated headline
- [ ] Animations are smooth and performant
- [ ] Site is fully responsive on mobile devices
- [ ] All interactive elements have proper hover states
- [ ] Keyboard navigation works throughout the site
- [ ] Site works with JavaScript disabled (graceful degradation)

## Implementation Notes

### Phase 1: Theme System
1. Create ThemeContext and Provider
2. Implement useTheme hook
3. Add light mode CSS variables
4. Create ThemeToggle component
5. Integrate into Navigation

### Phase 2: Enhanced Navigation
1. Add mobile menu state management
2. Create MobileMenu component
3. Add active section detection
4. Improve backdrop blur effect
5. Add theme toggle to navigation

### Phase 3: Hero Enhancement
1. Update headline text
2. Increase avatar size
3. Add background gradient animation
4. Improve typography hierarchy
5. Add fade-in animation

### Phase 4: Polish & Testing
1. Test all responsive breakpoints
2. Verify accessibility compliance
3. Test theme persistence
4. Optimize animation performance
5. Cross-browser testing

## Performance Considerations

1. **CSS Variables**: Use for theme switching (no JS recalculation)
2. **Lazy Loading**: Images load only when in viewport
3. **Code Splitting**: Theme components loaded separately
4. **Animation**: Use transform/opacity (GPU accelerated)
5. **Debouncing**: Scroll handlers limited to 60fps
6. **Bundle Size**: Theme system adds ~2KB gzipped

## Accessibility Compliance

- WCAG 2.1 Level AA compliance
- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus management in mobile menu
- Color contrast ratios meet standards
- Reduced motion support
