# HEYA Font System Implementation - DM Sans Brand Update

## 📝 Claude Code Implementation Prompt

```
Please implement the new HEYA font system using DM Sans as our primary brand font, replacing Inter across all applications. This creates a softer, more modern and elegant typography system that aligns with our mint theme and beauty salon focus.

## FONT IMPLEMENTATION STEPS

### 1. IMPORT THE NEW FONTS

Add these Google Font imports to the <head> of each application (landing page, merchant app, booking app, admin dashboard):

```html
<!-- DM Sans - Primary Brand Font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400;1,9..40,500&display=swap" rel="stylesheet">

<!-- Optional: Manrope for special display text -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

For Next.js applications, use next/font instead:

```javascript
// app/fonts.ts or similar
import { DM_Sans, Manrope } from 'next/font/google'

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

// In your root layout:
<body className={`${dmSans.variable} ${manrope.variable}`}>
```

### 2. UPDATE CSS VARIABLES

Replace all font-family variables with:

```css
:root {
  /* Primary Font Stack */
  --font-primary: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-heading: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Optional Display Font for Special Cases */
  --font-display: 'Manrope', 'DM Sans', -apple-system, sans-serif;
  
  /* Fallback System Fonts */
  --font-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Letter Spacing Adjustments for DM Sans */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: -0.01em;
  --letter-spacing-wide: 0.01em;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.7;
}
```

### 3. GLOBAL TYPOGRAPHY STYLES

Update your global CSS with optimized settings for DM Sans:

```css
/* Base Typography */
body {
  font-family: var(--font-body);
  font-weight: var(--font-weight-regular);
  font-size: 16px;
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
  font-feature-settings: 'kern' 1, 'liga' 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text-primary);
}

/* Specific Heading Sizes */
h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: var(--font-weight-bold);
}

h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: var(--font-weight-semibold);
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: var(--font-weight-semibold);
}

h4 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: var(--font-weight-medium);
}

/* Body Text Variations */
.text-large {
  font-size: 1.125rem;
  line-height: var(--line-height-relaxed);
}

.text-small {
  font-size: 0.875rem;
  letter-spacing: 0;
}

.text-xs {
  font-size: 0.75rem;
  letter-spacing: var(--letter-spacing-wide);
}

/* Special Display Text (using Manrope) */
.display-text {
  font-family: var(--font-display);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
}

/* Buttons and UI Elements */
button, .btn {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0;
}

/* Forms */
input, textarea, select {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  font-size: 1rem;
}

/* Navigation */
nav, .nav-link {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0;
}
```

### 4. SEARCH AND REPLACE

Find and replace these font references throughout the codebase:

REPLACE:
- `font-family: 'Inter'` → `font-family: 'DM Sans'`
- `font-family: Inter` → `font-family: DM Sans`
- `"Inter"` → `"DM Sans"` (in font stacks)
- `--font-sans: Inter` → `--font-sans: 'DM Sans'`

### 5. APP-SPECIFIC ADJUSTMENTS

**LANDING PAGE:**
```css
/* Hero sections - slightly larger for impact */
.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.03em;
}

/* Testimonials - add elegance */
.testimonial-text {
  font-size: 1.25rem;
  font-weight: var(--font-weight-light);
  line-height: var(--line-height-relaxed);
  font-style: italic;
}
```

**MERCHANT APP (POS):**
```css
/* Data-heavy interfaces need clarity */
.data-table {
  font-size: 0.875rem;
  font-weight: var(--font-weight-regular);
}

.metric-value {
  font-family: var(--font-display);
  font-weight: var(--font-weight-bold);
  font-variant-numeric: tabular-nums;
}
```

**BOOKING APP:**
```css
/* Welcoming and readable */
.service-name {
  font-weight: var(--font-weight-semibold);
  font-size: 1.125rem;
}

.booking-confirmation h2 {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--color-success);
}
```

**ADMIN DASHBOARD:**
```css
/* Professional and scannable */
.dashboard-title {
  font-weight: var(--font-weight-semibold);
  letter-spacing: -0.01em;
}

.stat-label {
  font-size: 0.75rem;
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### 6. TAILWIND CONFIGURATION (if using Tailwind)

Update tailwind.config.js:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'display': ['Manrope', 'DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'normal': '0',
        'wide': '0.01em',
      },
    },
  },
}
```

### 7. PERFORMANCE OPTIMIZATION

1. Use font-display: swap for better loading performance
2. Preload critical font weights:
```html
<link rel="preload" href="https://fonts.gstatic.com/s/dmsans/v14/[font-file].woff2" as="font" type="font/woff2" crossorigin>
```

3. Subset fonts if needed for non-Latin languages

### 8. ACCESSIBILITY CONSIDERATIONS

- Ensure minimum font size of 16px for body text
- Maintain proper contrast ratios with the new font
- Test readability at all sizes
- Verify letter spacing doesn't affect dyslexic users negatively

### 9. TESTING CHECKLIST

After implementation:
- [ ] All Inter references are replaced with DM Sans
- [ ] Font weights display correctly (300-700)
- [ ] Italic styles work where needed
- [ ] Letter spacing adjustments look natural
- [ ] Headers have proper hierarchy
- [ ] Forms remain readable
- [ ] Numbers in data tables align properly
- [ ] Mobile text sizes are comfortable
- [ ] Loading performance is maintained
- [ ] No FOUT (Flash of Unstyled Text)

### 10. FALLBACK HANDLING

Ensure graceful degradation:
```css
/* Feature detection for variable fonts */
@supports (font-variation-settings: normal) {
  body {
    font-family: 'DM Sans var', var(--font-system);
  }
}
```

The goal is to create a softer, more elegant typography system that feels modern and welcoming while maintaining excellent readability across all HEYA applications. DM Sans provides the perfect balance of personality and professionalism for a beauty salon platform.
```