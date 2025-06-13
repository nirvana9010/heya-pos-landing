# HEYA Comprehensive Text Contrast System

## 📝 Claude Code Implementation Prompt

```
Please implement a comprehensive text contrast system to ensure all text is readable on various background colors throughout HEYA's applications. This fixes the current contrast issues and prevents future problems.

## TEXT CONTRAST RULES

### 1. ADD BACKGROUND-AWARE TEXT COLORS TO CSS VARIABLES

Add these new CSS variables to automatically handle text contrast:

```css
:root {
  /* Existing text colors */
  --color-text-primary: #0F172A;
  --color-text-secondary: #334155;
  --color-text-on-dark: #FFFFFF;
  
  /* NEW: Background-specific text colors */
  --color-text-on-mint-light: #0F172A;      /* Dark text on light mint */
  --color-text-on-mint-dark: #FFFFFF;       /* White text on dark mint/teal */
  --color-text-on-primary: #FFFFFF;         /* White text on primary teal */
  --color-text-on-accent: #0F172A;          /* Dark text on accent colors */
  --color-text-on-coral: #FFFFFF;           /* White text on coral */
  --color-text-on-peach: #0F172A;           /* Dark text on peach */
  --color-text-on-lavender: #FFFFFF;        /* White text on lavender */
  --color-text-on-yellow: #0F172A;          /* Dark text on yellow */
}
```

### 2. CREATE UTILITY CLASSES FOR CONTRAST

Add these utility classes that automatically set correct text color based on background:

```css
/* Light backgrounds - use dark text */
.bg-light,
.bg-mint-soft,
.bg-white,
.bg-surface {
  color: var(--color-text-primary);
}

.bg-light h1, .bg-light h2, .bg-light h3,
.bg-mint-soft h1, .bg-mint-soft h2, .bg-mint-soft h3 {
  color: var(--color-text-primary);
}

/* Dark backgrounds - use white text */
.bg-dark,
.bg-primary,
.bg-primary-dark,
.bg-teal-dark,
.section-dark {
  color: var(--color-text-on-dark);
}

.bg-dark h1, .bg-dark h2, .bg-dark h3,
.bg-primary h1, .bg-primary h2, .bg-primary h3 {
  color: var(--color-text-on-dark);
}

/* Specific background colors */
.bg-coral { color: var(--color-text-on-coral); }
.bg-peach { color: var(--color-text-on-peach); }
.bg-lavender { color: var(--color-text-on-lavender); }
.bg-yellow { color: var(--color-text-on-yellow); }

/* Gradient backgrounds - ensure white text */
.bg-gradient-hero,
.bg-gradient-primary {
  color: var(--color-text-on-dark);
}

.bg-gradient-hero h1,
.bg-gradient-hero h2,
.bg-gradient-hero p {
  color: var(--color-text-on-dark);
}
```

### 3. SECTION-SPECIFIC FIXES

Update these specific sections across all apps:

```css
/* Hero sections with dark backgrounds */
.hero-dark,
.cta-section-dark,
.special-offer-section {
  background: var(--color-primary-dark);
  color: var(--color-text-on-dark);
}

.hero-dark * {
  color: inherit;
}

/* Fix the Timely Refugee Special section specifically */
.timely-special-offer {
  background: var(--color-primary-dark);
  color: var(--color-text-on-dark) !important;
}

.timely-special-offer h2,
.timely-special-offer h3,
.timely-special-offer p,
.timely-special-offer li {
  color: var(--color-text-on-dark) !important;
}

/* Cards on colored backgrounds */
.card-on-mint {
  background: var(--color-surface);
  color: var(--color-text-primary);
}
```

### 4. IMPLEMENT SASS/CSS MIXINS (if using preprocessor)

```scss
// Contrast mixin
@mixin ensure-contrast($bg-color) {
  @if (lightness($bg-color) > 50%) {
    color: var(--color-text-primary);
  } @else {
    color: var(--color-text-on-dark);
  }
}

// Usage
.dynamic-section {
  background: var(--color-primary);
  @include ensure-contrast(var(--color-primary));
}
```

### 5. JAVASCRIPT CONTRAST DETECTION (for dynamic content)

Add this utility function for dynamically generated content:

```javascript
// utils/contrast.js
export const getContrastTextColor = (backgroundColor) => {
  // Convert hex to RGB
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return white for dark backgrounds, dark for light
  return luminance > 0.5 ? 'var(--color-text-primary)' : 'var(--color-text-on-dark)';
};

// Usage in React components
const textColor = getContrastTextColor(backgroundColor);
```

### 6. COMPONENT-LEVEL CONTRAST RULES

Update components to automatically handle contrast:

```jsx
// Button component example
const Button = ({ variant, children }) => {
  const getTextColor = () => {
    switch(variant) {
      case 'primary':
      case 'coral':
      case 'lavender':
        return 'var(--color-text-on-dark)';
      case 'secondary':
      case 'peach':
      case 'yellow':
        return 'var(--color-text-primary)';
      default:
        return 'inherit';
    }
  };
  
  return (
    <button style={{ color: getTextColor() }}>
      {children}
    </button>
  );
};
```

### 7. TAILWIND UTILITIES (if using Tailwind)

Add these to your Tailwind config:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      textColor: {
        'on-dark': 'var(--color-text-on-dark)',
        'on-light': 'var(--color-text-primary)',
        'on-mint': 'var(--color-text-on-mint-dark)',
        'on-primary': 'var(--color-text-on-primary)',
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-contrast-auto': {
          color: 'var(--color-text-primary)',
        },
        '.bg-dark .text-contrast-auto': {
          color: 'var(--color-text-on-dark)',
        },
      })
    }
  ]
}
```

### 8. GLOBAL RULES TO PREVENT ISSUES

Add these global rules to catch edge cases:

```css
/* Ensure all text on primary/dark backgrounds is white */
[class*="bg-primary"] *:not(.text-dark),
[class*="bg-dark"] *:not(.text-dark),
[class*="bg-teal-dark"] *:not(.text-dark) {
  color: var(--color-text-on-dark);
}

/* Ensure form inputs maintain readability */
.bg-dark input,
.bg-dark textarea,
.bg-dark select {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-on-dark);
  border-color: rgba(255, 255, 255, 0.3);
}

.bg-dark input::placeholder,
.bg-dark textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
```

### 9. TESTING CHECKLIST

After implementation, verify:
- [ ] All text on dark teal/mint backgrounds is white
- [ ] All text on light mint/white backgrounds is dark
- [ ] Hero sections maintain proper contrast
- [ ] CTA sections are readable
- [ ] Form labels and inputs have proper contrast
- [ ] Navigation items are visible on all backgrounds
- [ ] Cards maintain internal contrast
- [ ] Disabled states are still perceivable
- [ ] Focus states have sufficient contrast

### 10. SPECIFIC FIXES NEEDED NOW

1. **Timely Special Offer Section**: 
   - Background: Dark teal (#0F766E or similar)
   - All text: White (#FFFFFF)
   - Accent text: Yellow (#FCD34D)

2. **All Hero Sections**:
   - If background luminance < 50%: Use white text
   - If background luminance > 50%: Use dark text

3. **CTA Sections**:
   - Primary CTA with teal background: White text
   - Secondary CTA with white background: Teal text

4. **Footer** (if dark):
   - All text: White or light mint
   - Links: Light mint with white hover

This comprehensive system will prevent contrast issues across all current and future sections of HEYA's applications.
```