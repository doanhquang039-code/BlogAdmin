# 📊 View Counter Guide

## 🎯 Current Implementation

Your portfolio now uses **CountAPI.xyz** - a free, reliable API that tracks views across ALL devices.

### ✅ How It Works:

1. **Global Counter** - Counts EVERY visitor from any device
2. **Session-based** - Only counts 1 view per session (not per page refresh)
3. **No Backend Needed** - Uses free external API
4. **Fallback Support** - Uses localStorage if API fails

### 📊 Features:

- ✅ Real-time view counting
- ✅ Works across all devices (phone, tablet, laptop)
- ✅ Animated number increment
- ✅ Formatted with commas (1,234 instead of 1234)
- ✅ Session-based (not counted on refresh)
- ✅ Automatic fallback to localStorage

## 🚀 Quick Test

1. Open your portfolio on laptop: `http://localhost:8080`
2. Open on phone: `http://YOUR_IP:8080`
3. Watch the counter increase!

## 🔧 Customization

### Change Counter Namespace/Key:

Edit in `script.js`:
```javascript
const COUNTER_API_NAMESPACE = 'your-name-portfolio';
const COUNTER_API_KEY = 'portfolio-views';
```

### Reset Counter:

Visit this URL in browser (replace with your values):
```
https://api.countapi.xyz/set/doanhquang-portfolio/portfolio-views?value=0
```

### Get Current Count:

```
https://api.countapi.xyz/get/doanhquang-portfolio/portfolio-views
```

## 📱 Alternative Solutions

### Option 1: CountAPI.xyz (Current - RECOMMENDED ✅)

**Pros:**
- ✅ Free forever
- ✅ No signup required
- ✅ No backend needed
- ✅ Simple API
- ✅ Reliable

**Cons:**
- ⚠️ Public API (anyone can see count)
- ⚠️ No detailed analytics

**Setup:** Already done! ✅

---

### Option 2: Firebase Realtime Database

**Pros:**
- ✅ Free tier (50GB/month)
- ✅ Real-time updates
- ✅ More control
- ✅ Can add analytics

**Cons:**
- ⚠️ Requires Firebase account
- ⚠️ More setup

**Setup:**

1. Create Firebase project: https://console.firebase.google.com
2. Enable Realtime Database
3. Get your config from Project Settings
4. Replace config in `view-counter-firebase.js`
5. Uncomment the code in that file
6. Update `index.html` to use Firebase script

---

### Option 3: Your Own Backend API

**Pros:**
- ✅ Full control
- ✅ Custom analytics
- ✅ IP tracking
- ✅ Admin dashboard

**Cons:**
- ⚠️ Need to build backend
- ⚠️ Hosting costs

**Setup:**

Create a simple Node.js/Express API:

```javascript
// server.js
const express = require('express');
const app = express();
let viewCount = 0;

app.post('/api/views', (req, res) => {
    viewCount++;
    res.json({ count: viewCount });
});

app.get('/api/views', (req, res) => {
    res.json({ count: viewCount });
});

app.listen(3000);
```

Or use Spring Boot:

```java
@RestController
@RequestMapping("/api/views")
public class ViewCounterController {
    private AtomicLong viewCount = new AtomicLong(0);
    
    @PostMapping
    public Map<String, Long> increment() {
        return Map.of("count", viewCount.incrementAndGet());
    }
    
    @GetMapping
    public Map<String, Long> getCount() {
        return Map.of("count", viewCount.get());
    }
}
```

---

### Option 4: Google Analytics

**Pros:**
- ✅ Free
- ✅ Detailed analytics
- ✅ Page views, demographics
- ✅ Real-time dashboard

**Cons:**
- ⚠️ Need Google account
- ⚠️ Counter not visible on page (only in GA dashboard)

**Setup:**

1. Create GA4 property
2. Add tracking code to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔐 Security Considerations

### Current Setup (CountAPI):
- Public counter (anyone can increment)
- No authentication
- Rate limited by IP

### To Make More Secure:

1. **Add Rate Limiting** (client-side):
```javascript
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
if (lastVisit && now - lastVisit < 60000) {
    // Don't count if visited less than 1 minute ago
    return;
}
localStorage.setItem('lastVisit', now);
```

2. **Use Firebase Security Rules**:
```json
{
  "rules": {
    "portfolio": {
      "viewCount": {
        ".read": true,
        ".write": "newData.val() === data.val() + 1"
      }
    }
  }
}
```

3. **Backend with IP Tracking**:
```javascript
app.post('/api/views', (req, res) => {
    const ip = req.ip;
    if (!recentIPs.has(ip)) {
        viewCount++;
        recentIPs.add(ip);
        setTimeout(() => recentIPs.delete(ip), 3600000); // 1 hour
    }
    res.json({ count: viewCount });
});
```

## 📈 Analytics Features You Can Add

### 1. Unique Visitors
Track unique IPs or use browser fingerprinting

### 2. Page Visit Duration
Track how long users stay on page

### 3. Device Types
Track mobile vs desktop views

### 4. Geographic Location
Use IP geolocation API

### 5. Referrer Tracking
See where visitors come from

## 🛠️ Troubleshooting

### Counter Not Updating?

1. **Check API Status**:
```javascript
fetch('https://api.countapi.xyz/info/doanhquang-portfolio/portfolio-views')
    .then(r => r.json())
    .then(console.log);
```

2. **Clear Session**:
```javascript
sessionStorage.clear();
location.reload();
```

3. **Check Console**: Open DevTools > Console for errors

4. **Test API Directly**:
Visit: `https://api.countapi.xyz/hit/doanhquang-portfolio/portfolio-views`

### Counter Shows Wrong Number?

Reset it:
```
https://api.countapi.xyz/set/doanhquang-portfolio/portfolio-views?value=YOUR_NUMBER
```

## 📊 Recommended Solution

For a personal portfolio like yours, I recommend:

**Option 1: CountAPI (Current)** ✅
- Perfect for personal portfolios
- No maintenance
- Works immediately

**Option 2: Firebase** (If you want more features)
- Add when you need analytics
- Still free for small traffic
- Easy to upgrade later

**Option 3: Backend API** (For professional/production)
- When portfolio becomes popular
- Need custom features
- Have time to maintain

## 🎯 Current Status

✅ **CountAPI is working!**
- Tracks views across ALL devices
- Session-based (1 count per visit)
- Animated display
- Fallback to localStorage

🚀 **Test it now:**
1. Open on laptop
2. Open on phone
3. See counter increase!

---

Made with ❤️ for Đặng Quang Doanh's Portfolio
