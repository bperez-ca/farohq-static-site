# Local Testing Guide

This guide explains how to test the static site locally.

## Prerequisites

- Node.js 18+ installed
- npm installed

## Setup

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   The server will start on `http://localhost:3000` (or the next available port)

## Testing Checklist

### ✅ Home Page (`/`)
- [ ] Page loads without errors
- [ ] Navigation menu is visible
- [ ] All sections render correctly:
  - Hero section
  - Product tour
  - For Agencies section
  - For SMBs section
  - Pricing section (inline)
  - Footer
- [ ] Dark mode toggle works
- [ ] Mobile menu works on small screens
- [ ] Navigation links work:
  - Hash links (#product, #agencies, #smbs) scroll to sections
  - Link components (/pricing, /docs, /blog) navigate to pages
  - External links (Sign in) open in new tab

### ✅ Pricing Page (`/pricing`)
- [ ] Page loads correctly
- [ ] Navigation header is present
- [ ] Pricing toggle (Agencies/SMBs) works
- [ ] All pricing plans display correctly
- [ ] "Contact sales" links work
- [ ] FAQ section displays
- [ ] Back to home link works

### ✅ Products Page (`/products`)
- [ ] Page loads correctly
- [ ] All product sections display:
  - Listings Sync
  - Reviews Inbox
  - Posts & Offers
  - Insights & ROI
- [ ] CTA section at bottom works
- [ ] Navigation links work

### ✅ Docs Page (`/docs`)
- [ ] Page loads correctly
- [ ] Documentation categories display
- [ ] Search bar is present (UI ready)
- [ ] Quick links section displays
- [ ] Navigation works

### ✅ Blog Page (`/blog`)
- [ ] Page loads correctly
- [ ] Blog posts list displays
- [ ] Category filter buttons are present
- [ ] Newsletter signup form displays
- [ ] Navigation works

### ✅ Demo Page (`/demo`)
- [ ] Page loads correctly
- [ ] Demo request form displays
- [ ] All form fields work
- [ ] Form submission works (currently simulated)
- [ ] Success state displays after submission

## Testing Navigation

### Internal Links (React Router)
- [ ] Logo → Home (`/`)
- [ ] Pricing → `/pricing`
- [ ] Docs → `/docs`
- [ ] Blog → `/blog`
- [ ] Get a demo → `/demo`

### Hash Links (Same-page scrolling)
- [ ] Product → Scrolls to `#product` section
- [ ] For Agencies → Scrolls to `#agencies` section
- [ ] For SMBs → Scrolls to `#smbs` section

### External Links
- [ ] Sign in → Opens `https://app.farohq.com/signin` in new tab
- [ ] Start free → Opens `https://app.farohq.com/signup` in new tab

## Testing Responsive Design

- [ ] Desktop view (1920px+) - All elements visible
- [ ] Tablet view (768px-1024px) - Layout adapts correctly
- [ ] Mobile view (< 768px) - Mobile menu works, content stacks properly

## Testing Dark Mode

- [ ] Dark mode toggle works on all pages
- [ ] Colors adapt correctly in dark mode
- [ ] Text is readable in dark mode
- [ ] All components support dark mode

## Common Issues

### Port Already in Use
If port 3000 is already in use:
```bash
# The dev server will automatically use the next available port
# Check the terminal output for the actual port number
```

### Build Errors
If you see build errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Type Errors
If TypeScript errors appear:
```bash
# Run type check
npm run typecheck
```

## Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if on macOS)

## Performance

- [ ] Page loads quickly (< 2 seconds)
- [ ] No console errors
- [ ] Images load correctly
- [ ] Fonts load correctly

## Next Steps After Testing

1. Fix any issues found
2. Test in production build:
   ```bash
   npm run build
   npm run preview
   ```
3. Deploy to Cloudflare Pages

