# 🚀 Deploy Portfolio với View Counter

## ⚡ Quick Deploy (5 phút)

### Option 1: Vercel + Upstash (RECOMMENDED)

```bash
# 1. Tạo tài khoản Upstash
https://upstash.com → Sign up → Create Redis Database

# 2. Copy credentials
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN

# 3. Deploy lên Vercel
npx vercel --prod

# 4. Add environment variables
Vercel Dashboard → Settings → Environment Variables
- UPSTASH_REDIS_REST_URL = your_url
- UPSTASH_REDIS_REST_TOKEN = your_token

# 5. Update script.js line ~242
const COUNTER_CONFIG = {
    customBackend: {
        enabled: true,
        url: 'https://YOUR_APP.vercel.app/api/views'
    }
};

# 6. Redeploy
vercel --prod

# Done! ✅
```

---

### Option 2: GitHub Pages + CountAPI (Simple nhưng có thể lỗi)

```bash
# Just push to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main

# Enable GitHub Pages
Settings → Pages → Source: main branch

# CountAPI sẽ tự hoạt động (nhưng không stable lắm)
```

---

### Option 3: Netlify

```bash
# 1. Install CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy --prod

# Done!
```

---

## 📊 Kiểm Tra Counter Hoạt Động

### Test API:
```
https://YOUR_APP.vercel.app/api/views
```

Phải trả về: `{"count": 0}` hoặc số khác

### Test từ Console:
```javascript
fetch('https://YOUR_APP.vercel.app/api/views')
  .then(r => r.json())
  .then(data => console.log('Count:', data.count));
```

### Test Increment:
```javascript
fetch('https://YOUR_APP.vercel.app/api/views', { method: 'POST' })
  .then(r => r.json())
  .then(data => console.log('New count:', data.count));
```

---

## 🔧 Nếu Vẫn Không Hoạt Động

### 1. Check Console (F12)
```
❌ CORS error → Check Vercel env vars
❌ 404 error → API path wrong
❌ 500 error → Redis credentials wrong
```

### 2. Check API directly
```
https://YOUR_APP.vercel.app/api/views
```

### 3. Verify script.js updated
```javascript
customBackend: {
    enabled: true,  // ← Must be true
    url: 'https://YOUR_APP.vercel.app/api/views'  // ← Your URL
}
```

---

## 💡 Files You Need:

✅ `api/views-with-db.js` - Serverless function
✅ `vercel.json` - Vercel config
✅ `script.js` - Already updated with multi-provider
✅ `.env.example` - Template for env vars

---

## 🎯 Expected Result:

✅ Counter updates across ALL devices
✅ Works on production (not just localhost)
✅ Persists data (uses Redis)
✅ No CORS errors
✅ Fast & reliable

---

**TLDR:** 
1. Tạo Upstash Redis (free)
2. Deploy lên Vercel (free)
3. Add env vars
4. Update script.js
5. Done! 🎉

Read `PRODUCTION-DEPLOY.md` for full guide.
