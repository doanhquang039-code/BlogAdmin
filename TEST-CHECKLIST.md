# Portfolio Testing Checklist ✅

## Test Status: Ready for Testing

### 1. Settings Panel ⚙️
- [ ] Click settings icon (⚙️) at top-right
- [ ] Panel should slide in from right
- [ ] Overlay should appear and darken background
- [ ] Click X button to close
- [ ] Click overlay to close
- [ ] Press ESC key to close
- [ ] Brightness slider (50-150%)
- [ ] Contrast slider (80-150%)
- [ ] Saturation slider (0-150%)
- [ ] 5 Color themes (Purple, Blue, Green, Pink, Orange)
- [ ] 3 Background themes (Dark 🌙, Light ☀️, Gradient 🌌)
- [ ] Music toggle ON/OFF
- [ ] Reset button restores defaults
- [ ] Settings saved in localStorage (persist on refresh)

### 2. View Counter 👁️
- [ ] Counter visible at top-right
- [ ] Animates on page load
- [ ] Shows formatted number (with commas)
- [ ] Only counts once per session (not on refresh)
- [ ] Uses CountAPI.xyz for global counting
- [ ] Falls back to localStorage if API fails

### 3. Animations ✨
- [ ] Hero name has typing effect
- [ ] Role animator cycles through 4 roles
- [ ] Stats cards animate when visible (9 Projects, 5 Achievements, 2 Years)
- [ ] Skills progress bars animate when scrolled into view
- [ ] Particles float in hero background
- [ ] Smooth scroll with offset for fixed navbar
- [ ] Scroll to top button appears after scrolling down

### 4. Navigation 🧭
- [ ] Active section highlighted in navbar
- [ ] Smooth scroll to sections on click
- [ ] Mobile hamburger menu works
- [ ] Language selector (VN/EN/中文)

### 5. Hero Section 🎯
- [ ] Profile image with rotating ring
- [ ] Status badge with pulsing dot
- [ ] Personal info: DOB, Location, University
- [ ] Stats cards with counter animation
- [ ] Social links (GitHub, LinkedIn, Email, Zalo)
- [ ] Two CTA buttons (View Projects, Contact)

### 6. About Me Section 👨‍💻
- [ ] Story section with personal narrative
- [ ] Quick facts (6 items)
- [ ] Strengths tags (6 tags)
- [ ] Current focus progress bars (4 items)
- [ ] Life timeline (2006-2026, 6 milestones)
- [ ] All content in Vietnamese
- [ ] Responsive layout

### 7. Skills Section 💪
- [ ] 6 skill categories with progress bars
- [ ] Progress bars animate when scrolled into view
- [ ] Percentage displayed for each skill
- [ ] Tech tags under each skill
- [ ] Hover effects on skill items

### 8. Tech Stack Section 🛠️
- [ ] Skills overview at top with animated progress bars
- [ ] Auto-scrolling tech cards (conveyor belt)
- [ ] 4 categories: Backend, AI/Python, Frontend/Mobile, Database
- [ ] Hover to pause scrolling
- [ ] Tech icons colored correctly

### 9. Achievements Section 🏆
- [ ] 5 achievement cards with images
- [ ] Hover overlay with link icon
- [ ] Achievement tags

### 10. Projects Section 💼
- [ ] Table with 9 projects
- [ ] Tech badges colored correctly
- [ ] GitHub links working
- [ ] Hover effect on rows

### 11. Experience Section 💼
- [ ] Timeline with markers
- [ ] 4 experience items
- [ ] Tech badges for each
- [ ] Hover effects

### 12. Interests Section 🎮
- [ ] 3 interest cards
- [ ] Icons and items
- [ ] Hover effects

### 13. Contact Section 📧
- [ ] 4 contact cards (Email, GitHub, LinkedIn, Zalo)
- [ ] All links working
- [ ] Direct links (not modal)
- [ ] Hover effects

### 14. Responsive Design 📱
- [ ] Desktop Large (≥1440px)
- [ ] Desktop (1024-1440px)
- [ ] Tablet/iPad (768-1024px)
- [ ] Mobile (480-768px)
- [ ] Small Mobile (<480px)
- [ ] Landscape Mobile
- [ ] Settings panel full-width on mobile
- [ ] Timeline left-aligned on mobile
- [ ] Stats cards stack vertically on mobile

### 15. Keyboard Shortcuts ⌨️
- [ ] Ctrl + P = Print portfolio
- [ ] Ctrl + K = Open settings
- [ ] ESC = Close settings

### 16. Performance 🚀
- [ ] Page loads quickly
- [ ] Smooth animations (no lag)
- [ ] Images load properly
- [ ] No console errors (F12)

### 17. Accessibility ♿
- [ ] All buttons have titles/labels
- [ ] Links have meaningful text
- [ ] Images have alt text
- [ ] Keyboard navigation works

---

## How to Test

1. **Hard Refresh Browser**
   - Windows: `Ctrl + Shift + R` or `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Open Developer Console**
   - Press `F12`
   - Check for any errors in Console tab

3. **Test Settings Panel**
   - Click ⚙️ icon at top-right
   - Try all sliders and buttons
   - Close with X, overlay, or ESC
   - Refresh page and verify settings are saved

4. **Test View Counter**
   - Note the view count
   - Refresh page (should NOT increment)
   - Open in new browser/incognito (should increment)

5. **Test Skills Animation**
   - Scroll to "Tech Stack" section
   - Watch progress bars animate
   - Scroll up and down again (should not re-animate)

6. **Test Responsiveness**
   - Press `F12` → Device Toolbar (Ctrl + Shift + M)
   - Test on different device sizes
   - Test landscape and portrait

7. **Test Keyboard Shortcuts**
   - `Ctrl + K` → Settings should open
   - `ESC` → Settings should close
   - `Ctrl + P` → Print dialog should open

---

## Known Issues & Solutions

### Issue 1: Settings Panel Not Opening
**Solution:**
1. Hard refresh browser (Ctrl + Shift + R)
2. Open Console (F12) and check for errors
3. Verify `script.js` is loading (check Network tab)
4. Run debug script in console: `test-settings.html`

### Issue 2: View Counter Not Updating (Production)
**Solution:**
- CountAPI.xyz may be blocked by CORS, ad blockers, or firewalls
- Deploy backend to Vercel with Upstash Redis (see `PRODUCTION-DEPLOY.md`)
- Or use GoatCounter (privacy-focused analytics)

### Issue 3: Progress Bars Not Animating
**Solution:**
- Scroll slowly to Skills section
- Wait for section to be 50% visible
- Check if `data-progress` attribute exists on `.skill-progress` elements

### Issue 4: Cache Issues
**Solution:**
- Clear browser cache
- Hard refresh (Ctrl + Shift + R)
- Check version in HTML links: `style.css?v=3.0`

---

## Deployment Checklist

Before deploying to production:

- [ ] Replace placeholder image with real profile photo
- [ ] Update project URLs (if any are placeholder)
- [ ] Test all external links (GitHub, LinkedIn, etc.)
- [ ] Setup backend for view counter (Vercel + Upstash)
- [ ] Add Google Analytics (optional)
- [ ] Test on real mobile devices
- [ ] Check loading speed (Google PageSpeed Insights)
- [ ] Verify SEO meta tags
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)

---

## Debug Commands

Run these in browser console (F12):

```javascript
// Check if settings elements exist
console.log('Settings Button:', document.getElementById('settingsBtn'));
console.log('Settings Panel:', document.getElementById('settingsPanel'));
console.log('Settings Overlay:', document.getElementById('settingsOverlay'));

// Check if event listeners are attached
document.getElementById('settingsBtn').addEventListener('click', () => {
    console.log('Settings button clicked!');
});

// Check view counter
console.log('View Count:', document.getElementById('viewCount').textContent);

// Check skills progress bars
document.querySelectorAll('.skill-progress').forEach(el => {
    console.log('Skill:', el.getAttribute('data-progress'), 'Current:', el.style.width);
});
```

---

## Browser Compatibility

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
⚠️ IE 11 (not supported)

---

## Contact for Issues

If you encounter any issues:
1. Check console for errors (F12)
2. Take a screenshot
3. Note your browser and OS
4. Send details to: doanhquang039@gmail.com

---

**Status:** All features implemented ✅
**Last Updated:** 2026-07-18
**Next Steps:** Test all features, fix any bugs, deploy to production
