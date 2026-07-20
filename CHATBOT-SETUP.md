# 🤖 AI Chatbot Setup Guide

## ✅ What's Been Added

Đã tích hợp **AI Chatbot** sử dụng **Google Gemini API** vào portfolio của bạn!

---

## 🎯 Features

### Chatbot Capabilities
- ✅ **Trả lời thông tin về portfolio** (kinh nghiệm, kỹ năng, dự án)
- ✅ **Context-aware conversation** (nhớ ngữ cảnh 10 tin nhắn gần nhất)
- ✅ **Powered by Gemini Pro** (Google's latest LLM)
- ✅ **Quick action buttons** (câu hỏi nhanh)
- ✅ **Typing indicator** (hiệu ứng đang nhập)
- ✅ **Beautiful UI** (gradient design, smooth animations)
- ✅ **Responsive** (hoạt động tốt trên mobile)

### Visual Design
- 🎨 Floating chatbot button với pulse animation
- 💬 Chat window đẹp mắt với gradient header
- ✨ Smooth animations & transitions
- 📱 Fully responsive design
- 🌓 Tự động adapt theo theme portfolio

---

## 🚀 SETUP IN 3 STEPS

### Step 1: Get Gemini API Key (FREE)

1. Truy cập: https://makersuite.google.com/app/apikey
2. Đăng nhập với Google Account
3. Click "**Create API Key**"
4. Copy API key (dạng: `AIzaSy...`)

### Step 2: Add API Key to Code

Mở file `D:\BlogAdmin\chatbot.js`, tìm dòng 6:

```javascript
GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
```

Thay bằng API key của bạn:

```javascript
GEMINI_API_KEY: 'AIzaSyYourActualKeyHere123456789',
```

### Step 3: Test

1. Mở `D:\BlogAdmin\index.html` trong browser
2. Hard refresh: `Ctrl + Shift + R`
3. Click icon 🤖 ở góc phải dưới
4. Nhập câu hỏi: "Kể về kinh nghiệm của bạn?"
5. Chatbot sẽ trả lời! 🎉

---

## 📂 Files Added

1. ✅ `chatbot.css` - Chatbot styles (400+ lines)
2. ✅ `chatbot.js` - Chatbot logic & Gemini API integration (300+ lines)
3. ✅ `CHATBOT-SETUP.md` - This documentation
4. ✅ `index.html` (updated) - Added chatbot HTML

**Total Lines:** ~800 lines of new code!

---

## 🎨 UI Components

### 1. Floating Button
```
┌────────────┐
│    🤖     │  ← Pulse animation
│    AI     │  ← Badge
└────────────┘
```

### 2. Chat Window
```
┌─────────────────────────────────┐
│ 🤖 Portfolio AI Assistant       │ ← Gradient header
│ ● Powered by Gemini AI          │
├─────────────────────────────────┤
│                                 │
│ 🤖: Xin chào! Tôi là AI...     │ ← Bot message
│                                 │
│         👤: Kinh nghiệm? │ ← User message
│                                 │
├─────────────────────────────────┤
│ [💼 Kinh nghiệm] [🤖 Dự án AI] │ ← Quick actions
├─────────────────────────────────┤
│ Nhập câu hỏi... [📤]           │ ← Input form
└─────────────────────────────────┘
```

---

## 💬 Sample Conversations

### Example 1: Experience
```
User: Kinh nghiệm làm việc của bạn là gì?

Bot: 💼 Đặng Quang Doanh có kinh nghiệm:

- **Backend Development**: 2 năm với Spring Boot, Node.js
- **Mobile Development**: Flutter apps
- **AI/ML Projects**: Intelligent Expense Tracker, HR Chatbot
  
Các dự án nổi bật:
1. Banking System - Full-stack với Spring Boot
2. HR Management - Enterprise software
3. AI Code Review Assistant

📧 Liên hệ: doanhquang039@gmail.com
```

### Example 2: AI Projects
```
User: Bạn có những dự án AI nào?

Bot: 🤖 Dự án AI của Đặng Quang Doanh:

1. **Intelligent Expense Tracker** 💰
   - Auto-categorization (95% accuracy)
   - Spending prediction
   - GPT-4 financial advice
   - Tech: Python, OpenAI, FastAPI

2. **HR Management Chatbot** 🤖
   - RAG với knowledge base
   - Multi-turn conversation
   - Tech: LangChain, ChromaDB

3. **AI Code Review Assistant** 💻
   - Code smell detection
   - Security scan
   - Tech: GPT-4, GitHub API

🔗 GitHub: https://github.com/doanhquang039-code
```

### Example 3: Skills
```
User: Kỹ năng nổi bật của bạn?

Bot: ⭐ Kỹ năng của Đặng Quang Doanh:

**Backend** (90%):
- Spring Boot, Node.js, Go, C#/.NET

**AI/ML** (70%):
- Python, OpenAI API, Gemini API
- LangChain, RAG, Prompt Engineering

**Frontend** (80%):
- React, TypeScript, HTML5, CSS3

**Mobile** (75%):
- Flutter, Android

**Database** (85%):
- MySQL, MongoDB, SQL Server

💪 Điểm mạnh: Problem Solving, Quick Learner, Team Player
```

---

## ⚙️ Configuration

### Customize Chatbot Personality

Edit `chatbot.js`, find `CONTEXT` section (line 10):

```javascript
CONTEXT: `Bạn là AI assistant...
    
Bạn nên:
- Trả lời bằng tiếng Việt  ← Change language
- Cung cấp thông tin chi tiết ← Adjust detail level
- Sử dụng emoji phù hợp    ← Enable/disable emojis
...`
```

### Add More Quick Actions

Edit `index.html`, find `.quick-actions` section:

```html
<button class="quick-action-btn" data-question="Your question here">
    🎯 Button Label
</button>
```

### Change Colors

Edit `chatbot.css`:

```css
.chatbot-toggle {
    background: var(--gradient);  /* Change button color */
}

.chatbot-header {
    background: var(--gradient);  /* Change header color */
}
```

---

## 🔒 Security & Best Practices

### API Key Security

⚠️ **IMPORTANT**: Gemini API key trong chatbot.js là **client-side** (visible in browser)

**For Production:**
1. **Option 1 (Recommended)**: Create a backend proxy
   ```
   User → Your Backend → Gemini API
   ```
   - Hide API key on server
   - Add rate limiting
   - Log requests

2. **Option 2**: Use restricted API key
   - Go to Google Cloud Console
   - Restrict API key by HTTP referrer
   - Only allow your domain

3. **Option 3**: Use Firebase Functions
   - Create serverless function
   - Call Gemini from function
   - Return response to frontend

### Rate Limiting

Gemini Free Tier:
- **60 requests per minute**
- **1,500 requests per day**

Add rate limiting:

```javascript
let requestCount = 0;
const RATE_LIMIT = 60;

async function sendMessage(message) {
    if (requestCount >= RATE_LIMIT) {
        addMessage('⏱️ Giới hạn số câu hỏi. Vui lòng chờ 1 phút.', 'bot');
        return;
    }
    requestCount++;
    // ... rest of code
}
```

---

## 🎨 Customization Examples

### Change Bot Avatar

```javascript
// In addMessage function
avatar.innerHTML = sender === 'bot' 
    ? '<img src="bot-avatar.png" />' 
    : '<i class="fas fa-user"></i>';
```

### Add Voice Input

```html
<button id="voiceBtn" class="voice-btn">
    <i class="fas fa-microphone"></i>
</button>
```

```javascript
const recognition = new webkitSpeechRecognition();
recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    sendMessage(transcript);
};
```

### Add Message Timestamps

```javascript
function addMessage(text, sender) {
    // ... existing code
    
    const timestamp = document.createElement('span');
    timestamp.className = 'message-timestamp';
    timestamp.textContent = new Date().toLocaleTimeString();
    content.appendChild(timestamp);
}
```

---

## 🐛 Troubleshooting

### Chatbot Button Not Showing?

**Solution:**
1. Hard refresh: `Ctrl + Shift + R`
2. Check Console (F12) for errors
3. Verify `chatbot.css` is loaded
4. Check z-index conflicts

### API Error: 400 Bad Request

**Causes:**
- Invalid API key
- API key not activated
- Request format error

**Solution:**
1. Verify API key is correct
2. Check Google Cloud Console
3. Enable "Generative Language API"

### API Error: 429 Too Many Requests

**Cause:** Rate limit exceeded

**Solution:**
1. Wait 1 minute
2. Implement rate limiting
3. Upgrade to paid tier if needed

### Chatbot Not Responding?

**Check:**
1. API key configured?
2. Internet connection?
3. Console errors? (F12)
4. CORS issues? (use backend proxy)

### Bot Responses Are Generic?

**Solution:**
Improve the CONTEXT in `chatbot.js`:
- Add more specific information
- Include project details
- Add personality traits
- Give examples of good responses

---

## 📊 Analytics (Optional)

### Track Chatbot Usage

```javascript
function sendMessage(message) {
    // Track with Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'chatbot_message', {
            'message': message,
            'timestamp': new Date().toISOString()
        });
    }
    
    // ... rest of code
}
```

### Popular Questions

```javascript
const popularQuestions = {};

function sendMessage(message) {
    popularQuestions[message] = (popularQuestions[message] || 0) + 1;
    console.log('Popular:', popularQuestions);
    // ... rest of code
}
```

---

## 🚀 Advanced Features (TODO)

- [ ] **Voice Input** - Speech recognition
- [ ] **File Upload** - Upload CV/documents
- [ ] **Multi-language** - Auto-detect language
- [ ] **Sentiment Analysis** - Detect user mood
- [ ] **Conversation Export** - Download chat history
- [ ] **Email Integration** - Send conversation to email
- [ ] **Calendar Integration** - Schedule meetings
- [ ] **Video Call** - Integrate with Zoom/Meet

---

## 📞 Support

### Having Issues?

1. Check Console (F12 → Console tab)
2. Read this documentation again
3. Search error message on Google
4. Ask ChatGPT/Claude for help

### Contact

- **Email:** doanhquang039@gmail.com
- **GitHub:** https://github.com/doanhquang039-code

---

## 🎉 Summary

### What You Have Now:
- ✅ AI Chatbot with Gemini API
- ✅ Beautiful UI with animations
- ✅ Context-aware conversations
- ✅ Quick action buttons
- ✅ Responsive design
- ✅ Easy to customize

### What You Need To Do:
1. ⚠️ **Get Gemini API Key** (free, 5 minutes)
2. ⚠️ **Add to chatbot.js** (1 line of code)
3. ✅ **Test** (click robot icon)

**That's it!** 🎉

---

**Your portfolio now has a professional AI assistant!** 🤖✨

**Visitors can:**
- Ask about your experience
- Learn about your projects
- Get contact information
- Discover your AI research

**Result: More engagement & conversions!** 📈

---

Made with ❤️ for **Đặng Quang Doanh's AI-Powered Portfolio**
