# Gentle Color Scheme Update for Timely Landing Page

Replace the jarring red urgency colors with a more cohesive, gentle color scheme that maintains urgency without being aggressive:

## 🎨 COLOR SCHEME UPDATE - Replace Jarring Red

Replace ALL instances of red (#DC2626) throughout the page with this purple-based urgency palette:

**Urgent elements:**
- Background: #5B21B6 (deep purple) or gradient: linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)
- Text on dark backgrounds: #FFFFFF
- Accent highlights: #F59E0B (warm amber - use sparingly for "FREE" badges only)
- Scarcity indicators: #14B8A6 (teal accent)

### Specific Color Updates:

**Countdown Timer:**
```css
background: linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%);
color: white;
box-shadow: 0 4px 20px rgba(124, 58, 237, 0.2);
border-radius: 8px;
animation: subtle-pulse 3s ease-in-out infinite;
```

**Urgent CTA Buttons:**
```css
background: #5B21B6;
color: white;
box-shadow: 0 4px 14px rgba(91, 33, 182, 0.3);
transition: all 0.2s ease;

&:hover {
  background: #4C1D95;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(91, 33, 182, 0.4);
}
```

**Add these animations for gentle urgency:**
```css
@keyframes subtle-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.02); opacity: 0.95; }
}

@keyframes gentle-glow {
  0%, 100% { box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3); }
  50% { box-shadow: 0 4px 20px rgba(124, 58, 237, 0.5); }
}
```

## 💰 "6 MONTHS FREE" BADGES

Add small amber badges next to any mention of "6 Months FREE":
```css
.free-badge {
  background: #F59E0B;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
  display: inline-block;
  margin-left: 8px;
  vertical-align: middle;
}
```

## VISUAL HIERARCHY

1. **Most Important:** Deep purple (#5B21B6) with subtle animation
2. **Important:** Primary purple (#7C3AED)  
3. **Supporting:** Teal (#14B8A6) for positive indicators
4. **Special Highlight:** Amber (#F59E0B) - ONLY for "FREE" badges

Remove any remaining red elements, warning icons, or harsh contrasts. The goal is professional urgency without alarm.