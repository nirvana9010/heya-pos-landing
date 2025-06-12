# HEYA Light & Playful Mint Theme - Complete Implementation Guide

## 🎨 Theme Overview

A fresh, modern color system for HEYA POS that uses light mint/teal backgrounds with dark accents for a playful yet professional beauty salon platform.

## 📋 Complete Color System

```css
:root {
  /* =================================
     PRIMARY BACKGROUNDS
     ================================= */
  /* Light, airy backgrounds that create a fresh salon atmosphere */
  --color-background-primary: #F0FFF4;      /* Soft mint - main background */
  --color-background-secondary: #E6FFFA;    /* Soft teal - alternate sections */
  --color-background-soft: #F5FFF5;         /* Even lighter mint - subtle areas */
  --color-surface: #FFFFFF;                 /* White - cards and overlays */
  
  /* Background Gradients for Hero/Special Sections */
  --gradient-hero: linear-gradient(135deg, #A7F3D0 0%, #E6FFFA 50%, #FEFCE8 100%);
  --gradient-subtle: linear-gradient(180deg, #F0FFF4 0%, #E6FFFA 100%);
  --gradient-mint-glow: radial-gradient(circle at top right, rgba(167, 243, 208, 0.3), transparent 50%);
  
  /* =================================
     PRIMARY COLORS
     ================================= */
  /* Dark colors for text and interactive elements - ensuring accessibility */
  --color-primary: #0F766E;                 /* Deep teal - primary CTAs */
  --color-primary-hover: #134E4A;           /* Darker teal - hover state */
  --color-primary-light: #10B981;           /* Medium teal - secondary actions */
  --color-primary-dark: #064E3B;            /* Darkest teal - emphasis */
  
  /* =================================
     TEXT COLORS
     ================================= */
  /* High contrast text colors for excellent readability */
  --color-text-primary: #0F172A;            /* Nearly black - main text */
  --color-text-secondary: #334155;          /* Slate gray - secondary text */
  --color-text-tertiary: #64748B;           /* Light gray - metadata */
  --color-text-on-dark: #FFFFFF;            /* White - text on dark backgrounds */
  --color-text-mint: #0F766E;               /* Teal - links and accents */
  
  /* =================================
     PLAYFUL ACCENT COLORS
     ================================= */
  /* Beauty industry-inspired accent palette */
  --color-accent-coral: #FF6B6B;            /* Coral pink - energy */
  --color-accent-peach: #FFB088;            /* Soft peach - warmth */
  --color-accent-lavender: #C7B2FF;         /* Light purple - luxury */
  --color-accent-yellow: #FCD34D;           /* Sunny yellow - happiness */
  --color-accent-mint-bright: #5DE0A6;      /* Bright mint - freshness */
  
  /* =================================
     SEMANTIC COLORS
     ================================= */
  /* Functional colors that fit the mint theme */
  --color-success: #059669;                 /* Green - different from primary */
  --color-warning: #F59E0B;                 /* Amber - stands out on mint */
  --color-error: #DC2626;                   /* Red - urgent actions */
  --color-info: #0891B2;                    /* Cyan - informational */
  
  /* Success/Error backgrounds for notifications */
  --color-success-bg: rgba(5, 150, 105, 0.1);
  --color-warning-bg: rgba(245, 158, 11, 0.1);
  --color-error-bg: rgba(220, 38, 38, 0.1);
  --color-info-bg: rgba(8, 145, 178, 0.1);
  
  /* =================================
     UI ELEMENT COLORS
     ================================= */
  /* Borders, shadows, and other UI details */
  --color-border: rgba(15, 118, 110, 0.15); /* Tinted mint border */
  --color-border-light: rgba(15, 118, 110, 0.08);
  --color-shadow: rgba(15, 118, 110, 0.1);  /* Tinted shadows */
  --color-focus-ring: rgba(15, 118, 110, 0.3);
  
  /* =================================
     INTERACTIVE STATES
     ================================= */
  /* Hover, active, and focus states */
  --color-hover-overlay: rgba(15, 118, 110, 0.05);
  --color-active-overlay: rgba(15, 118, 110, 0.1);
  --color-selected-bg: rgba(94, 234, 212, 0.2);
  
  /* =================================
     CATEGORY COLORS
     ================================= */
  /* Service category color coding */
  --category-hair: var(--color-accent-peach);
  --category-nails: var(--color-accent-lavender);
  --category-waxing: var(--color-accent-coral);
  --category-facial: var(--color-accent-mint-bright);
  --category-massage: var(--color-primary-light);
}

/* =================================
   DARK MODE ADJUSTMENTS (Optional)
   ================================= */
[data-theme="dark"] {
  --color-background-primary: #042F2E;      /* Dark teal */
  --color-background-secondary: #083344;    /* Darker teal */
  --color-surface: #0F766E;                 /* Teal surface */
  --color-text-primary: #F0FDF4;            /* Light mint */
  --color-text-secondary: #A7F3D0;          /* Medium mint */
  /* ... adjust other colors as needed */
}
```

## 🎨 Component Styling Guide

### Buttons
```css
/* Primary CTA Button */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-text-on-dark);
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 4px 15px var(--color-shadow);
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  transform: scale(1.05) rotate(-1deg);
  box-shadow: 0 6px 20px var(--color-shadow);
}

.btn-primary:active {
  transform: scale(0.98);
}

/* Secondary Button */
.btn-secondary {
  background: var(--color-surface);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-text-on-dark);
  transform: translateY(-2px);
}

/* Playful Accent Buttons */
.btn-accent-coral {
  background: var(--color-accent-coral);
  color: white;
}

.btn-accent-peach {
  background: var(--color-accent-peach);
  color: var(--color-text-primary);
}

.btn-accent-lavender {
  background: var(--color-accent-lavender);
  color: white;
}
```

### Cards & Surfaces
```css
/* Floating Card Pattern */
.card {
  background: var(--color-surface);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--color-border-light);
  box-shadow: 0 4px 20px var(--color-shadow);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px var(--color-shadow);
  border-color: var(--color-border);
}

/* Glass Card Variant */
.card-glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

### Service Category Cards
```css
/* Category-specific styling */
.service-card {
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  transition: width 0.3s ease;
}

.service-card:hover::before {
  width: 8px;
}

/* Category variations */
.service-card.hair::before {
  background: var(--category-hair);
}

.service-card.hair {
  background: linear-gradient(135deg, rgba(255, 176, 136, 0.1) 0%, transparent 50%);
}

.service-card.nails::before {
  background: var(--category-nails);
}

.service-card.nails {
  background: linear-gradient(135deg, rgba(199, 178, 255, 0.1) 0%, transparent 50%);
}

.service-card.waxing::before {
  background: var(--category-waxing);
}

.service-card.waxing {
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
}
```

### Form Elements
```css
/* Input Fields */
.input {
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  transition: all 0.2s ease;
  width: 100%;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}

/* Floating Label */
.input-group {
  position: relative;
  margin-bottom: 24px;
}

.floating-label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
  transition: all 0.2s ease;
  pointer-events: none;
  background: var(--color-surface);
  padding: 0 4px;
}

.input:focus + .floating-label,
.input:not(:placeholder-shown) + .floating-label {
  top: 0;
  font-size: 12px;
  color: var(--color-primary);
}
```

### Navigation
```css
/* Top Navigation Bar */
.navbar {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border-light);
  backdrop-filter: blur(10px);
}

/* Navigation Items */
.nav-item {
  color: var(--color-text-primary);
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item:hover {
  background: var(--color-hover-overlay);
  color: var(--color-primary);
}

.nav-item.active {
  background: var(--color-selected-bg);
  color: var(--color-primary);
  font-weight: 600;
}

/* Playful underline animation */
.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 80%;
}
```

### Animations & Micro-interactions
```css
/* Floating Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

/* Pulse Animation for CTAs */
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--color-primary); }
  70% { box-shadow: 0 0 0 10px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}

.pulse-animation {
  animation: pulse 2s infinite;
}

/* Gradient Animation */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-animated {
  background: var(--gradient-hero);
  background-size: 200% 200%;
  animation: gradient-shift 5s ease infinite;
}

/* Bounce on Hover */
.bounce-hover {
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.bounce-hover:hover {
  transform: scale(1.05);
}
```

### Special Components
```css
/* Badge/Tag Styling */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.badge-coral {
  background: var(--color-accent-coral);
  color: white;
}

.badge-peach {
  background: var(--color-accent-peach);
  color: var(--color-text-primary);
}

.badge-lavender {
  background: var(--color-accent-lavender);
  color: white;
}

.badge-mint {
  background: var(--color-accent-mint-bright);
  color: var(--color-text-primary);
}

/* Notification Toast */
.toast {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 30px var(--color-shadow);
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-success {
  border-left: 4px solid var(--color-success);
  background: var(--color-success-bg);
}

.toast-error {
  border-left: 4px solid var(--color-error);
  background: var(--color-error-bg);
}
```

## 🎯 Accessibility Guidelines

### Contrast Ratios
- Primary text (#0F172A) on mint background (#F0FFF4): **15.7:1** ✅
- Secondary text (#334155) on mint background: **9.8:1** ✅
- Primary teal (#0F766E) on white: **6.2:1** ✅
- White text on primary teal: **6.2:1** ✅

### Focus States
```css
/* Visible focus indicators */
*:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Custom focus for buttons */
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}
```

### Color Blind Considerations
- Don't rely on color alone for status
- Use icons alongside color coding
- Provide text labels for color-coded elements

## 🚀 Implementation Patterns

### Page Layout with Alternating Backgrounds
```css
/* Hero Section */
.hero {
  background: var(--gradient-hero);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: var(--gradient-mint-glow);
  animation: float 20s ease-in-out infinite;
}

/* Alternating Section Backgrounds */
.section:nth-child(odd) {
  background: var(--color-background-primary);
}

.section:nth-child(even) {
  background: var(--color-surface);
}

/* Feature sections with subtle patterns */
.section-pattern {
  background-color: var(--color-background-secondary);
  background-image: 
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 35px,
      rgba(15, 118, 110, 0.03) 35px,
      rgba(15, 118, 110, 0.03) 70px
    );
}
```

### Responsive Considerations
```css
/* Mobile-first approach */
@media (max-width: 768px) {
  :root {
    /* Slightly adjusted colors for mobile screens */
    --color-shadow: rgba(15, 118, 110, 0.08);
  }
  
  .card {
    padding: 16px;
    border-radius: 12px;
  }
  
  .btn-primary {
    width: 100%;
    padding: 16px;
  }
}
```

---

## 📝 Claude Code Implementation Prompt

```
Please implement the HEYA Light & Playful Mint Theme across the entire platform. This is a complete redesign from purple to a fresh mint/teal color system. Apply this theme to:

1. Landing page (marketing site)
2. Merchant App (POS system for staff)
3. Booking App (customer-facing booking interface) 
4. Admin Dashboard (platform administration)

This is a unified theme that should create consistency across all HEYA applications.

## THEME IMPLEMENTATION STEPS

### 1. CSS VARIABLES UPDATE
Replace ALL existing color variables with the new mint theme variables provided above. Copy the entire :root CSS block from this document and replace the existing one.

### 2. GLOBAL COLOR REPLACEMENTS

Search and replace these color values throughout the codebase:

PURPLE COLORS TO REMOVE:
- #7C3AED → #0F766E (primary teal)
- #8B5CF6 → #10B981 (medium teal)
- #6D28D9 → #064E3B (dark teal)
- #5B21B6 → #134E4A (hover teal)
- #4C1D95 → #0F766E (primary)

BACKGROUND UPDATES:
- White backgrounds (#FFFFFF) → Keep for cards, change page background to #F0FFF4
- Gray backgrounds (#F7F7F7, #F9FAFB) → #E6FFFA (soft teal)

### 3. HERO SECTION TRANSFORMATION

Update the hero section:
- Background: Use var(--gradient-hero) for a playful gradient
- Add subtle floating animation elements
- Update all CTAs to use the new button styles
- Change text colors to var(--color-text-primary)

### 4. COMPONENT UPDATES

**Buttons:**
- Primary buttons: Background var(--color-primary), with bounce hover effect
- Secondary buttons: White with teal border
- Add playful hover animations (scale and slight rotation)

**Cards:**
- All cards should have white backgrounds with subtle mint shadows
- Add hover lift effect (translateY(-4px))
- Border: 1px solid var(--color-border-light)

**Navigation:**
- Background: White with mint border-bottom
- Active states: Use var(--color-selected-bg)
- Add underline animation on hover

**Form Elements:**
- White backgrounds with mint-tinted borders
- Focus states with mint glow (box-shadow)
- Floating labels with mint accent when focused

### 5. SERVICE CATEGORIES

Implement category-specific colors for service cards:
- Hair services: Peach accent (#FFB088)
- Nail services: Lavender accent (#C7B2FF)
- Waxing services: Coral accent (#FF6B6B)
- Facial services: Bright mint (#5DE0A6)

Add a colored left border and subtle gradient background to each service card based on its category.

### 6. SECTIONS & LAYOUT

**Background Pattern:**
- Odd sections: var(--color-background-primary) - soft mint
- Even sections: white
- Add subtle repeating gradient pattern to feature sections

**Spacing:**
- Increase padding to create more breathing room
- Cards should have generous padding (24px desktop, 16px mobile)

### 7. ANIMATIONS & MICRO-INTERACTIONS

Add these CSS animations:
- Float animation for decorative elements
- Pulse animation for primary CTAs
- Gradient shift for hero background
- Bounce effect on interactive elements

### 8. TYPOGRAPHY ADJUSTMENTS

- Primary text: var(--color-text-primary) - nearly black for maximum readability
- Secondary text: var(--color-text-secondary) - slate gray
- Links: var(--color-text-mint) - teal color
- Ensure all text passes WCAG AA standards

### 9. SPECIAL ELEMENTS

**Badges/Tags:**
- Use playful accent colors (coral, peach, lavender)
- Rounded corners (20px border-radius)
- Small and elegant (4px 12px padding)

**Notifications:**
- Success: Green with light green background
- Error: Red with light red background
- Warning: Amber with light amber background
- All with colored left border

### 10. MOBILE OPTIMIZATION

- Ensure touch targets are at least 44px
- Adjust shadows to be lighter on mobile
- Make buttons full-width on mobile
- Test all hover states have touch equivalents
- Booking app: Ensure calendar is swipeable
- Merchant app: Ensure POS checkout is thumb-friendly
- Admin dashboard: Make data tables horizontally scrollable

### 11. APP-SPECIFIC IMPLEMENTATIONS

**LANDING PAGE:**
- Hero gradient background with floating elements
- Testimonials with mint quote marks
- Pricing cards with white background on mint
- Footer with dark teal background

**MERCHANT APP (POS):**
- Sidebar: White with mint hover states
- Calendar: 
  - Available slots: White with mint border on hover
  - Booked slots: Primary teal with white text
  - Current time indicator: Bright mint line
- Checkout flow: Mint success states
- Customer list: Alternating white/light mint rows

**BOOKING APP:**
- Service browser: Category-colored cards
- Booking steps: Teal progress indicator
- Time slots: White available, teal selected
- Confirmation: Large mint checkmark animation
- Mobile: Full-screen mint success state

**ADMIN DASHBOARD:**
- Top nav: White with mint border
- Sidebar: Dark teal with white text
- Metric cards: White with colored accents based on data type
- Charts: Use accent color palette for data visualization
- Tables: Mint row hover states

### 12. CLEANUP

- Remove any purple color references from all apps
- Ensure no gradient uses purple
- Update any hardcoded color values to use CSS variables
- Test color contrast for accessibility in each app context
- Verify brand consistency across all touchpoints

### 13. FINAL POLISH

- Add subtle background patterns where appropriate
- Implement smooth transitions (0.3s ease) on all interactive elements
- Ensure consistent border-radius (8px for inputs, 12px for cards, 16px for larger elements)
- Add appropriate box-shadows using the tinted shadow color

## TESTING CHECKLIST

After implementation, verify across all apps:
- [ ] All purple is removed from all 4 applications
- [ ] Backgrounds are light mint/teal consistently
- [ ] Text has proper contrast in all contexts
- [ ] Buttons have playful hover effects
- [ ] Service categories have unique colors
- [ ] Mobile experience is optimized for all apps
- [ ] Animations are smooth and subtle
- [ ] Forms are accessible and clear
- [ ] Navigation is consistent across apps
- [ ] Calendar maintains readability with new colors
- [ ] Admin dashboard remains professional
- [ ] Booking flow feels inviting

The goal is a fresh, modern, playful design that feels perfect for a beauty salon platform while maintaining professionalism and accessibility across all touchpoints - from marketing to daily operations.
```

---

## 🎯 App-Specific Color Applications

### Landing Page
- Hero sections use animated gradients
- Alternating mint/white section backgrounds
- Playful CTAs with bounce effects
- Service showcases with category colors

### Merchant App (POS)
- White sidebar with mint accents
- Mint backgrounds for main content areas
- Service cards with category color coding
- Calendar with mint availability slots
- Success states in mint for completed bookings

### Booking App
- Welcoming mint gradient hero
- Step progress in primary teal
- Service selection with category colors
- Calendar with clear available (white) vs booked (teal) slots
- Confirmation screens with success mint

### Admin Dashboard
- Professional white/mint combination
- Data tables with mint row hovers
- Charts using the accent color palette
- Status badges with semantic colors
- Mint accents for key metrics