# 🔧 Fix Counter Not Working

## ⚠️ Common Issues & Solutions

### Issue 1: Browser Cache

**Solution: Hard Refresh**

#### Chrome/Edge:
```
Ctrl + Shift + R  (Windows)
Cmd + Shift + R   (Mac)
```

#### Firefox:
```
Ctrl + F5         (Windows)
Cmd + Shift + R   (Mac)
```

#### Or Clear Cache:
1. Open DevTools (F12)
2. Right-click on Refresh button
3. Select "Empty Cache and Hard Reload"

---

### Issue 2: Running from file://

**Problem:** Opening `index.html` directly shows `file:///` in URL
**Solution:** Must run from a web server

#### Option 1: Python
```bash
cd D:\BlogAdmin
python -m http.server 8080
# Open: http://localhost:8080
```

#### Option 2: Node.js (if installed)
```bash
cd D:\BlogAdmin
npx http-server -p 8080
# Open: http://localhost:8080
```

#### Option 3: Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

### Issue 3: API Blocked

**Check in Console (F12):**
```
CORS error
net::ERR_BLOCKED_BY_CLIENT
```

**Solution:**
1. Disable ad blocker for this page
2. Check if antivirus is blocking
3. Use test-counter.html to verify API works

---

## 🧪 Quick Test

### Step 1: Open Test Page
```
Open: http://localhost:8080/test-counter.html
```

### Step 2: Click "Refresh Count"
Should see current count from API

### Step 3: Click "Increment +1"
Should see count increase

### If test-counter.html works but main page doesn't:
→ It's a cache issue. Do hard refresh!

---

## 🔍 Debug Steps

### Step 1: Open Console
Press `F12` → Console tab

### Step 2: Check for Errors
Look for red error messages:
- ❌ "Failed to fetch" → API blocked or no internet
- ❌ "CORS" → CORS issue (shouldn't happen with CountAPI)
- ❌ "undefined" → Variable error

### Step 3: Manual Test
Copy and paste into console:
```javascript
fetch('https://api.countapi.xyz/hit/doanhquang-portfolio/portfolio-views')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

Should see: `{value: NUMBER}`

---

## ✅ Verification Checklist

- [ ] Running from http:// (not file://)
- [ ] Browser cache cleared (Ctrl + Shift + R)
- [ ] Console shows no errors (F12)
- [ ] test-counter.html works
- [ ] Counter increases when opening in new device/browser

---

## 🎯 Expected Behavior

### First Visit (Fresh Browser):
1. Counter increments by 1
2. Number animates from 0 to N
3. SessionStorage saved

### Refresh Page (Same Session):
1. Counter STAYS the same
2. Fetches count but doesn't increment
3. No new visit counted

### New Browser/Device:
1. Counter increments by 1
2. Both devices see same count
3. Global counter updated

---

## 🚨 Still Not Working?

### Check These Files:

#### 1. script.js (Line 242-244)
```javascript
const COUNTER_API_NAMESPACE = 'doanhquang-portfolio';
const COUNTER_API_KEY = 'portfolio-views';
```

#### 2. index.html (Line ~854)
```html
<script src="script.js?v=2.0"></script>
```

### Reset Everything:

#### Clear All Storage:
```javascript
// In console (F12)
localStorage.clear();
sessionStorage.clear();
location.reload();
```

#### Reset API Counter:
```
Open: https://api.countapi.xyz/set/doanhquang-portfolio/portfolio-views?value=0
```

---

## 📞 Test Right Now!

### 1. Hard Refresh:
```
Ctrl + Shift + R
```

### 2. Open Console:
```
F12 → Console
```

### 3. Look for:
```
✅ "View counter initialized"
or
❌ Error messages
```

### 4. Check Count Updates:
Open in another browser (Chrome, Firefox, Edge) - Should see same count!

---

## 💡 Pro Tips

1. **Always run from localhost** - Not file://
2. **Check console first** - Errors show there
3. **Test with test-counter.html** - Isolates the issue
4. **Use Incognito** - No cache/extensions
5. **Check API directly** - Visit CountAPI URL in browser

---

## 🎓 Understanding Counter Logic

```javascript
// Visit 1 (Chrome):
sessionStorage empty → API +1 → count = 1

// Refresh (Chrome):  
sessionStorage has 'hasVisited' → API fetch only → count = 1

// Visit 2 (Firefox):
sessionStorage empty → API +1 → count = 2

// Both browsers now show: 2 ✅
```

---

Made for troubleshooting Đặng Quang Doanh's Portfolio
