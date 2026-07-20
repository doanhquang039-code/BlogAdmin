# 🔑 THÊM API KEY ĐỂ CHATBOT HOẠT ĐỘNG

## ⚠️ Hiện Tại: Chatbot chưa hoạt động
**Lý do:** Chưa có Gemini API key → Chatbot không thể trả lời câu hỏi

## ✅ Giải pháp: Thêm API key (5 phút, MIỄN PHÍ)

---

## 📝 HƯỚNG DẪN TỪNG BƯỚC

### BƯỚC 1: Lấy API Key

#### 1.1. Mở trang Google AI Studio
Tôi đã mở link này cho bạn rồi. Nếu chưa mở, click vào:
```
https://makersuite.google.com/app/apikey
```

#### 1.2. Đăng nhập Google
- Dùng Gmail của bạn
- Accept Terms nếu lần đầu

#### 1.3. Tạo API Key
Bạn sẽ thấy trang như này:

```
┌─────────────────────────────────────┐
│  Get an API key                     │
│                                     │
│  [Create API key in new project]   │  ← CLICK ĐÂY
│                                     │
│  Or use existing project:           │
│  [ Select project ▼ ]               │
└─────────────────────────────────────┘
```

**→ Click nút "Create API key in new project"**

#### 1.4. Copy API Key
Sau vài giây, bạn sẽ thấy:

```
┌─────────────────────────────────────┐
│  Your API key                       │
│                                     │
│  AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz  │
│                                     │
│  [📋 Copy]                         │  ← CLICK COPY
└─────────────────────────────────────┘
```

**→ Click "Copy" để copy API key**

⚠️ **Lưu ý:** API key sẽ dạng `AIzaSy...` (39 ký tự)

---

### BƯỚC 2: Thêm API Key Vào Code

#### 2.1. Mở file chatbot.js
**Cách 1:** Double-click file: `D:\BlogAdmin\chatbot.js`

**Cách 2:** Right-click → Open with → Notepad/VS Code

#### 2.2. Tìm dòng 6
Tìm đoạn code này:

```javascript
const CHATBOT_CONFIG = {
    // ⚠️ IMPORTANT: Replace with your Gemini API Key
    // Get free API key at: https://makersuite.google.com/app/apikey
    GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',  ← DÒNG NÀY (line 6)
```

#### 2.3. Thay thế API key
**Trước (Before):**
```javascript
GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
```

**Sau (After):**
```javascript
GEMINI_API_KEY: 'AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz',  ← Paste API key của bạn
```

⚠️ **Chú ý:**
- Giữ nguyên dấu ngoặc đơn `'...'`
- Không có khoảng trắng thừa
- Phải có dấu phẩy `,` ở cuối

#### 2.4. Save file
**Nhấn:** `Ctrl + S` hoặc File → Save

---

### BƯỚC 3: Test Chatbot

#### 3.1. Mở Portfolio
- Double-click: `D:\BlogAdmin\index.html`
- Hoặc: Right-click → Open with → Chrome/Edge

#### 3.2. Hard Refresh
Nhấn: **`Ctrl + Shift + R`**
(Để load lại file JavaScript mới)

#### 3.3. Mở Chatbot
**Cách 1:** Click icon 🤖 trong Hero section (cùng hàng với GitHub, LinkedIn)

**Cách 2:** Click nút 🤖 góc phải dưới màn hình

#### 3.4. Gửi Tin Nhắn
Thử gửi các câu hỏi này:

```
✅ "Kinh nghiệm làm việc của bạn là gì?"
✅ "Bạn có những dự án AI nào?"
✅ "Kỹ năng nổi bật của bạn?"
✅ "Giới thiệu về bản thân"
✅ "Thông tin liên hệ"
```

#### 3.5. Kết quả mong đợi
```
User: Kinh nghiệm làm việc của bạn là gì?
  ↓
🤖 AI Bot: Xin chào! Tôi là sinh viên năm 2 CNTT...
           - Backend: Spring Boot (90%), Node.js, Go...
           - AI/ML: Python, OpenAI API, Gemini...
           - Dự án: Intelligent Expense Tracker, HR Chatbot...
           ...
```

✅ **Nếu chatbot trả lời → THÀNH CÔNG!** 🎉

---

## 🐛 NẾU GẶP LỖI

### Lỗi 1: "API key not valid"
**Nguyên nhân:**
- API key sai
- Copy thiếu/thừa ký tự
- Có khoảng trắng

**Giải pháp:**
```javascript
// ❌ SAI
GEMINI_API_KEY: ' AIzaSy... ',  // Có khoảng trắng
GEMINI_API_KEY: 'AIzaSy...'     // Thiếu dấu phẩy

// ✅ ĐÚNG
GEMINI_API_KEY: 'AIzaSy...',    // Perfect!
```

### Lỗi 2: Chatbot không trả lời
**Check list:**
```
1. API key đã thêm chưa? → Mở chatbot.js, check dòng 6
2. Đã save file chưa? → Ctrl + S
3. Đã hard refresh chưa? → Ctrl + Shift + R
4. Internet có OK không? → Ping google.com
5. Console có lỗi không? → F12 → Console tab
```

### Lỗi 3: 400 Bad Request
**Nguyên nhân:** API chưa enable

**Giải pháp:**
1. Vào: https://console.cloud.google.com/apis/library
2. Tìm: "Generative Language API"
3. Click **Enable**
4. Đợi vài phút rồi test lại

### Lỗi 4: 429 Too Many Requests
**Nguyên nhân:** Gửi quá nhiều requests (>60/phút)

**Giải pháp:** Đợi 1 phút rồi thử lại

---

## 💡 TIPS

### 1. Test API Key Nhanh
Không cần mở portfolio, test ngay bằng curl:

```bash
curl -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY" ^
-H "Content-Type: application/json" ^
-d "{\"contents\":[{\"parts\":[{\"text\":\"Hello\"}]}]}"
```

### 2. Check Console Errors
Nhấn **F12** → Tab **Console**
- Nếu có lỗi màu đỏ → đọc error message
- Nếu không có lỗi → API key OK!

### 3. Backup API Key
Lưu API key vào:
- Notepad file (local)
- Password manager
- ❌ **KHÔNG** commit lên Git public

---

## 📊 API LIMITS (FREE TIER)

### Miễn phí mãi mãi:
```
✅ 60 requests/phút
✅ 1,500 requests/ngày
✅ Không giới hạn tháng
✅ Không cần thẻ tín dụng
✅ Không hết hạn
```

**→ Đủ cho portfolio cá nhân!** 🎊

---

## 🎯 TÓM TẮT

### 3 bước đơn giản:
1. **Lấy API key:** https://makersuite.google.com/app/apikey
2. **Dán vào chatbot.js dòng 6:** `GEMINI_API_KEY: 'AIzaSy...',`
3. **Test:** Mở portfolio → Ctrl+Shift+R → Chat thử

### Thời gian:
- Lấy API key: **2 phút**
- Thêm vào code: **1 phút**
- Test: **2 phút**
- **Tổng: 5 phút** ⏱️

---

## ✅ CHECKLIST

```
□ Đã mở https://makersuite.google.com/app/apikey
□ Đã đăng nhập Google
□ Đã click "Create API key in new project"
□ Đã copy API key (dạng AIzaSy...)
□ Đã mở D:\BlogAdmin\chatbot.js
□ Đã tìm dòng 6: GEMINI_API_KEY
□ Đã paste API key vào
□ Đã save file (Ctrl + S)
□ Đã mở index.html trong browser
□ Đã hard refresh (Ctrl + Shift + R)
□ Đã click icon 🤖
□ Đã gửi tin nhắn test
□ Chatbot đã trả lời ✅
```

---

## 📞 CẦN GIÚP?

### Vẫn không hoạt động?
1. **Check Console:** F12 → Console → screenshot lỗi
2. **Re-read guide:** Đọc lại từ đầu
3. **Double-check API key:** Có chính xác không?
4. **Google error:** Copy error message → Google

### Tài liệu khác:
- `GEMINI-API-KEY-GUIDE.md` - Hướng dẫn chi tiết hơn
- `CHATBOT-SETUP.md` - Setup tổng quan
- `TEST-CHATBOT-I18N.html` - Test page

---

## 🎉 SAU KHI XONG

Bạn sẽ có:
✅ Chatbot hoạt động 100%  
✅ Trả lời câu hỏi bằng 3 ngôn ngữ  
✅ Context về bạn (kinh nghiệm, dự án, kỹ năng)  
✅ UI đẹp với animations  
✅ Free mãi mãi!  

---

**Good luck! 🚀**

Made with ❤️ | Version 1.0 | July 20, 2026

---

## 🔧 QUICK COMMANDS

```bash
# Mở trang lấy API key
start https://makersuite.google.com/app/apikey

# Mở chatbot.js
notepad D:\BlogAdmin\chatbot.js

# Mở portfolio
start D:\BlogAdmin\index.html

# Mở console
# Trong browser: nhấn F12
```
