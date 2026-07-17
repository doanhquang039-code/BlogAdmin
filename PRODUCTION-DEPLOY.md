# 🚀 Production Deployment Guide

## ⚠️ Problem: Counter Không Update trên Production

### Nguyên nhân:
- CountAPI.xyz có thể bị CORS block
- Rate limiting
- API không stable cho production
- Cache aggressive trên CDN

### ✅ Giải pháp cho Production:

---

## Option 1: Upstash Redis + Vercel (RECOMMENDED ✅)

### Bước 1: Tạo Upstash Redis Database (FREE)

1. Đăng ký tại: https://upstash.com/
2. Create Database → Select region gần user
3. Copy `UPSTASH_REDIS_REST_URL` và `UPSTASH_REDIS_REST_TOKEN`

### Bước 2: Deploy lên Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd D:\BlogAdmin
vercel

# Add environment variables trong Vercel dashboard:
# UPSTASH_REDIS_REST_URL=your_url
# UPSTASH_REDIS_REST_TOKEN=your_token
```

### Bước 3: Update script.js

```javascript
const COUNTER_CONFIG = {
    customBackend: {
        enabled: true,
        url: 'https://YOUR_VERCEL_APP.vercel.app/api/views'
    }
};
```

### Bước 4: Test
```
https://YOUR_VERCEL_APP.vercel.app/api/views
```

Should see: `{"count": 0}`

---

## Option 2: Firebase Realtime Database (FREE tier)

### Bước 1: Setup Firebase

1. Go to: https://console.firebase.google.com/
2. Create project
3. Enable Realtime Database
4. Set rules:
```json
{
  "rules": {
    "portfolio": {
      "views": {
        ".read": true,
        ".write": "newData.val() === data.val() + 1"
      }
    }
  }
}
```

### Bước 2: Add to HTML

```html
<script type="module">
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
  import { getDatabase, ref, runTransaction } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
  
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT_ID"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const viewsRef = ref(db, 'portfolio/views');
  
  // Increment
  runTransaction(viewsRef, (current) => (current || 0) + 1)
    .then((result) => {
      document.getElementById('viewCount').textContent = result.snapshot.val();
    });
</script>
```

---

## Option 3: GitHub Actions + GitHub API

### Use GitHub repo as database

```yaml
# .github/workflows/update-views.yml
name: Update Views
on:
  workflow_dispatch:
  
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Update counter
        run: |
          count=$(cat views.txt || echo 0)
          echo $((count + 1)) > views.txt
      - name: Commit
        run: |
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add views.txt
          git commit -m "Update views"
          git push
```

---

## Option 4: Simple Backend (Your Own Server)

### Node.js + Express

```javascript
// server.js
const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

let viewCount = 0;
try {
    viewCount = parseInt(fs.readFileSync('views.txt', 'utf8')) || 0;
} catch(e) {}

app.post('/api/views', (req, res) => {
    viewCount++;
    fs.writeFileSync('views.txt', viewCount.toString());
    res.json({ count: viewCount });
});

app.get('/api/views', (req, res) => {
    res.json({ count: viewCount });
});

app.listen(3000);
```

### Deploy to:
- **Heroku**: Free tier
- **Railway**: Free tier
- **Fly.io**: Free tier
- **DigitalOcean**: $5/month

---

## Option 5: Netlify Functions

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Create netlify.toml
[build]
  functions = "api"

# Deploy
netlify deploy --prod
```

Use `api/views-with-db.js` as Netlify Function

---

## 🎯 Recommended Stack for Your Portfolio:

### Best Choice: Vercel + Upstash Redis

**Why?**
- ✅ Free forever
- ✅ Global CDN
- ✅ Auto SSL
- ✅ Serverless functions
- ✅ Redis database
- ✅ 5-minute setup

**Cost:** $0 (Free tier: 10K requests/day)

### Steps:

1. **Sign up Upstash**: https://upstash.com
2. **Create Redis DB** (free)
3. **Deploy to Vercel**: `vercel --prod`
4. **Add env vars** in Vercel dashboard
5. **Done!** ✅

---

## 📊 Current Code Already Supports:

Your `script.js` already has multi-provider support:

```javascript
const COUNTER_CONFIG = {
    countApi: {
        namespace: 'doanhquang-portfolio',
        key: 'portfolio-views'
    },
    customBackend: {
        enabled: false,  // Set to true
        url: 'YOUR_API_URL'  // Add your API
    }
};
```

Just enable `customBackend` and add your API URL!

---

## 🧪 Test Production

### Test API:
```bash
curl https://your-api.com/api/views
```

### Test Increment:
```bash
curl -X POST https://your-api.com/api/views
```

### Test from Browser:
```javascript
fetch('https://your-api.com/api/views')
  .then(r => r.json())
  .then(console.log);
```

---

## 🔐 Security Best Practices

### 1. Rate Limiting
```javascript
// In serverless function
const rateLimit = new Map();

export default async function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const lastVisit = rateLimit.get(ip);
    
    if (lastVisit && Date.now() - lastVisit < 60000) {
        return res.status(429).json({ error: 'Too many requests' });
    }
    
    rateLimit.set(ip, Date.now());
    // ... rest of code
}
```

### 2. CORS Whitelist
```javascript
const ALLOWED_ORIGINS = [
    'https://your-portfolio.com',
    'https://your-portfolio.vercel.app'
];

const origin = req.headers.origin;
if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
}
```

### 3. Environment Variables
Never commit:
- API keys
- Database URLs
- Tokens

Always use `.env` and Vercel/Netlify environment variables.

---

## 📈 Analytics Alternatives

If you just want view statistics (not display on page):

1. **Google Analytics** (Free, comprehensive)
2. **Plausible** ($9/month, privacy-focused)
3. **Umami** (Free, self-hosted)
4. **GoatCounter** (Free, open-source)

---

## 🚀 Quick Start (5 minutes):

```bash
# 1. Sign up Upstash
open https://upstash.com

# 2. Create Redis database

# 3. Install dependencies
npm install @upstash/redis

# 4. Deploy to Vercel
npx vercel --prod

# 5. Add environment variables in Vercel dashboard

# 6. Update script.js:
const COUNTER_CONFIG = {
    customBackend: {
        enabled: true,
        url: 'https://YOUR_APP.vercel.app/api/views'
    }
};

# 7. Done! 🎉
```

---

## 💡 Pro Tips

1. **Start with Upstash** - Easiest and most reliable
2. **Use Firebase** if you need more features
3. **Build custom backend** only if you have time
4. **Enable multiple providers** for fallback
5. **Cache last known count** in localStorage
6. **Test on production** before going live

---

Need help? Check these files:
- `api/views-with-db.js` - Serverless function with Redis
- `vercel.json` - Vercel configuration
- `script.js` - Already supports multiple providers!

🎯 **Bottom line:** Deploy to Vercel + Upstash Redis = Problem solved!
