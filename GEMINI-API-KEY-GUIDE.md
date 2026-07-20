# 🔑 Hướng Dẫn Lấy Gemini API Key

## ✨ Gemini API là gì?

**Google Gemini** là mô hình AI mạnh mẽ của Google, tương tự ChatGPT. API key cho phép bạn tích hợp Gemini vào ứng dụng của mình **MIỄN PHÍ**!

### 💰 Free Tier (Miễn phí mãi mãi)
- ✅ **60 requests/phút**
- ✅ **1,500 requests/ngày**
- ✅ **Unlimited requests/tháng** (trong giới hạn trên)
- ✅ **Không cần thẻ tín dụng**
- ✅ **Không hết hạn**

Perfect cho portfolio cá nhân! 🎉

---

## 🚀 CÁCH LẤY API KEY (5 PHÚT)

### BƯỚC 1: Truy cập Google AI Studio

Mở browser và vào:
```
https://makersuite.google.com/app/apikey
```

Hoặc Google tìm: **"Google AI Studio API Key"**

### BƯỚC 2: Đăng nhập Google

- Sử dụng tài khoản Google của bạn
- Có thể dùng Gmail cá nhân hoặc công ty
- **Không cần** Google Cloud Platform account

### BƯỚC 3: Create API Key

Bạn sẽ thấy trang như này:

```
┌─────────────────────────────────────┐
│  Google AI Studio                   │
│                                     │
│  Get an API key                     │
│                                     │
│  [Create API key in new project]   │  ← Click đây
│                                     │
│  Or select existing project:        │
│  [ My Project ▼ ]                   │
│  [Create API key]                   │
└─────────────────────────────────────┘
```

**Click**: "**Create API key in new project**"

### BƯỚC 4: Copy API Key

Sau vài giây, bạn sẽ nhận được API key:

```
┌─────────────────────────────────────┐
│  Your API key                       │
│                                     │
│  AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz  │  ← API Key
│                                     │
│  [📋 Copy]  [Show]                 │
└─────────────────────────────────────┘
```

**Click**: "**📋 Copy**" để copy API key

⚠️ **LƯU Ý**: 
- API key dạng: `AIzaSy...` (39 ký tự)
- Lưu lại API key này, bạn sẽ cần nó!

### BƯỚC 5: Thêm vào Code

Mở file: `D:\BlogAdmin\chatbot.js`

Tìm dòng **6**:
```javascript
GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
```

Thay bằng API key của bạn:
```javascript
GEMINI_API_KEY: 'AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz',
```

**Save file** (Ctrl + S)

### BƯỚC 6: Test Chatbot

1. Mở `D:\BlogAdmin\index.html` trong browser
2. **Hard refresh**: `Ctrl + Shift + R`
3. Click icon **🤖** ở góc phải dưới
4. Nhập: "Kể về kinh nghiệm của bạn?"
5. Chatbot sẽ trả lời! 🎉

---

## 🎯 XEM DEMO STEP-BY-STEP

### Step 1: Vào Google AI Studio
![Step 1](https://ai.google.dev/static/site-assets/images/marketing/ai-studio-hero.png)

URL: https://makersuite.google.com/app/apikey

### Step 2: Đăng nhập
- Chọn tài khoản Google
- Accept Terms of Service nếu lần đầu

### Step 3: Tạo API Key
```
Option 1: Create API key in new project
  → Tự động tạo project mới
  → Nhanh nhất! (Recommended)

Option 2: Create API key in existing project
  → Chọn project có sẵn
  → Nếu bạn đã có Google Cloud project
```

### Step 4: Copy & Save
```
✅ DO: Copy ngay và lưu vào Notepad
❌ DON'T: Đóng trang trước khi copy
```

---

## 🔒 BẢO MẬT API KEY

### ⚠️ Quan trọng!

API key trong `chatbot.js` là **client-side** → Ai cũng xem được (F12 → Sources)

### ✅ An toàn cho Development

Khi test trên localhost:
- ✅ OK để dùng trực tiếp
- ✅ Không ai truy cập được
- ✅ Chỉ bạn test thôi

### ⚠️ CHO PRODUCTION

Khi deploy lên internet public, **PHẢI** bảo mật:

#### Option 1: Restrict API Key (Recommended - Dễ nhất)

1. Vào: https://console.cloud.google.com/apis/credentials
2. Tìm API key của bạn → Click Edit (✏️)
3. **Application restrictions**:
   ```
   ☑ HTTP referrers (web sites)
   
   Add an item:
   https://your-domain.com/*
   ```
4. **API restrictions**:
   ```
   ☑ Restrict key
   
   Select APIs:
   ✓ Generative Language API
   ```
5. Click **Save**

Giờ API key chỉ hoạt động trên domain của bạn! 🔒

#### Option 2: Backend Proxy (Pro)

Tạo server trung gian:
```
User → Your Server (ẩn API key) → Gemini API
```

Ví dụ với Node.js:
```javascript
// server.js
const express = require('express');
const app = express();

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;
    
    // Call Gemini với API key ẩn
    const response = await fetch(`https://...?key=${process.env.GEMINI_KEY}`, {
        method: 'POST',
        body: JSON.stringify({ message: userMessage })
    });
    
    res.json(await response.json());
});
```

#### Option 3: Environment Variables (Pro)

Với Vercel/Netlify:
```javascript
// chatbot.js
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;
```

```bash
# .env (không commit lên Git)
VITE_GEMINI_KEY=AIzaSy...
```

---

## 🐛 TROUBLESHOOTING

### ❌ Error: "API key not valid"

**Nguyên nhân:**
- API key sai
- Copy thiếu/thừa ký tự
- Có khoảng trắng

**Giải pháp:**
```javascript
// ❌ SAI
GEMINI_API_KEY: ' AIzaSy... ',  // Có khoảng trắng

// ✅ ĐÚNG
GEMINI_API_KEY: 'AIzaSy...',    // Không khoảng trắng
```

### ❌ Error: 400 Bad Request

**Nguyên nhân:**
- API chưa enable
- Request format sai

**Giải pháp:**
1. Vào: https://console.cloud.google.com/apis/library
2. Tìm: "Generative Language API"
3. Click **Enable**

### ❌ Error: 429 Too Many Requests

**Nguyên nhân:**
- Vượt quá 60 requests/phút
- Hoặc 1,500 requests/ngày

**Giải pháp:**
- Đợi 1 phút rồi thử lại
- Hoặc upgrade lên paid tier

### ❌ Chatbot không trả lời

**Check list:**
```
1. API key đã thêm chưa?
   → Mở chatbot.js, check dòng 6

2. Internet có OK không?
   → Ping google.com

3. Console có lỗi không?
   → F12 → Console tab

4. API key có hợp lệ không?
   → Test tại: https://aistudio.google.com/app/prompts/new_chat
```

---

## 📊 CHECK API USAGE

### Xem bạn đã dùng bao nhiêu requests

1. Vào: https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/metrics
2. Chọn project
3. Xem charts:
   - Requests per minute
   - Requests per day
   - Errors

### Set up Alerts

Nhận email khi sắp hết quota:
1. Cloud Console → Monitoring → Alerting
2. Create Alert Policy
3. Target: API usage
4. Threshold: 1,200 requests/day (80%)

---

## 💡 TIPS & TRICKS

### 1. Test API Key ngay

Không cần mở portfolio, test trực tiếp:

```bash
curl -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY" \
-H "Content-Type: application/json" \
-d '{
  "contents": [{
    "parts": [{"text": "Hello, Gemini!"}]
  }]
}'
```

### 2. Tạo nhiều API keys

Mỗi project có thể có nhiều keys:
- Development key
- Production key
- Testing key

### 3. Backup API Key

Lưu vào:
- ✅ Notepad file (local)
- ✅ Password manager (1Password, Bitwarden)
- ❌ KHÔNG commit lên Git public
- ❌ KHÔNG share công khai

### 4. Monitor Usage

Check hàng tuần:
```
Current usage:
- Today: 45/1,500 requests (3%)
- This minute: 2/60 requests (3%)
```

---

## 🎓 HỌC THÊM VỀ GEMINI

### Official Docs
- **Home**: https://ai.google.dev/
- **Quickstart**: https://ai.google.dev/tutorials/web_quickstart
- **API Reference**: https://ai.google.dev/api/rest

### Gemini Models

```
gemini-pro (Free)
├─ Text generation
├─ 60 req/min, 1,500 req/day
└─ Best for chatbots

gemini-pro-vision (Free)
├─ Text + Image input
├─ 60 req/min, 1,500 req/day
└─ Best for image analysis

gemini-1.5-pro (Paid)
├─ Longer context (1M tokens!)
├─ Better performance
└─ $$$
```

### Example Prompts

```javascript
// System prompt
"You are a helpful assistant for a portfolio website..."

// User prompt
"What are Doanh's AI projects?"

// Temperature (creativity)
temperature: 0.7  // 0-1 (higher = more creative)

// Max tokens (length)
maxOutputTokens: 1024  // Max response length
```

---

## 🚀 ADVANCED SETUP

### Rate Limiting (Prevent abuse)

```javascript
// chatbot.js
let requestCount = 0;
let lastResetTime = Date.now();

async function sendMessage(msg) {
    // Reset every minute
    if (Date.now() - lastResetTime > 60000) {
        requestCount = 0;
        lastResetTime = Date.now();
    }
    
    // Check limit
    if (requestCount >= 10) {  // Max 10/min per user
        addMessage('⏱️ Bạn hỏi quá nhanh, vui lòng đợi...', 'bot');
        return;
    }
    
    requestCount++;
    // ... rest of code
}
```

### Caching Responses

```javascript
const responseCache = new Map();

async function callGeminiAPI(msg) {
    // Check cache
    if (responseCache.has(msg)) {
        return responseCache.get(msg);
    }
    
    // Call API
    const response = await fetch(...);
    const data = await response.json();
    
    // Save to cache
    responseCache.set(msg, data);
    
    return data;
}
```

### Error Handling

```javascript
try {
    const response = await callGeminiAPI(msg);
    addMessage(response, 'bot');
} catch (error) {
    if (error.status === 429) {
        addMessage('⏱️ Quá nhiều requests, đợi 1 phút nhé!', 'bot');
    } else if (error.status === 400) {
        addMessage('❌ Lỗi API key, kiểm tra lại nhé!', 'bot');
    } else {
        addMessage('❌ Lỗi không xác định, thử lại sau!', 'bot');
    }
}
```

---

## 📝 CHECKLIST

### Trước khi Deploy

- [ ] API key đã lấy
- [ ] API key đã test (localhost works)
- [ ] Restrict API key (HTTP referrers)
- [ ] Enable "Generative Language API"
- [ ] Test trên production URL
- [ ] Monitor usage dashboard
- [ ] Backup API key
- [ ] Add rate limiting (optional)
- [ ] Setup error handling
- [ ] Test all quick actions

---

## 🎉 HOÀN THÀNH!

Bạn đã:
- ✅ Hiểu Gemini API là gì
- ✅ Biết cách lấy API key
- ✅ Biết cách thêm vào code
- ✅ Biết cách bảo mật
- ✅ Biết cách troubleshoot
- ✅ Biết cách monitor usage

**Giờ chatbot của bạn đã sẵn sàng! 🤖✨**

---

## 📞 HỖ TRỢ

### Vẫn gặp khó khăn?

1. **Đọc lại guide** từ đầu
2. **Check Console** (F12) xem lỗi gì
3. **Google error message** + "Gemini API"
4. **Hỏi ChatGPT/Claude** với error message
5. **Email tôi**: doanhquang039@gmail.com

### Tài nguyên hữu ích

- 📚 Gemini Docs: https://ai.google.dev/docs
- 💬 Community: https://discuss.ai.google.dev/
- 📺 YouTube: Search "Google Gemini API tutorial"
- 🐛 Report bugs: https://issuetracker.google.com/

---

**Good luck với AI Chatbot! 🚀**

Made with ❤️ for **Đặng Quang Doanh's Portfolio**
