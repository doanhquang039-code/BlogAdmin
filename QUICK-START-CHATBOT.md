# 🚀 Quick Start - AI Chatbot

## ✅ What's Already Done

Your AI chatbot is **fully integrated** with i18n and ready to go! 🎉

**✔️ 100% Complete:**
- Multi-language support (Vietnamese, English, Chinese)
- Language auto-sync with portfolio selector
- Smart quick action buttons
- Beautiful UI with animations
- Full documentation

---

## 🔑 ONE THING TO DO: Get API Key

The chatbot needs a **free** Gemini API key to respond to questions.

### ⚡ 5-Minute Setup

#### Step 1: Get API Key
1. Visit: https://makersuite.google.com/app/apikey
2. Sign in with Google
3. Click "**Create API key in new project**"
4. Copy the key (looks like: `AIzaSy...`)

#### Step 2: Add to Code
1. Open: `D:\BlogAdmin\chatbot.js`
2. Find **line 6**:
   ```javascript
   GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
   ```
3. Replace with your key:
   ```javascript
   GEMINI_API_KEY: 'AIzaSyAbC...xyz',  // Your actual key
   ```
4. **Save** (Ctrl + S)

#### Step 3: Test
1. Open `D:\BlogAdmin\index.html` in browser
2. Hard refresh: **Ctrl + Shift + R**
3. Click 🤖 button (bottom-right)
4. Ask: "Kể về kinh nghiệm của bạn?"
5. 🎉 It works!

---

## 🧪 Test Language Sync

### Test 1: UI Translation
1. Open chatbot (click 🤖)
2. Switch language: **VN** → **EN** → **中**
3. ✅ All chatbot text should change

### Test 2: Quick Actions
1. Select **Vietnamese**
2. Click "💼 Kinh nghiệm"
3. ✅ Should send: "Kinh nghiệm làm việc của bạn là gì?"

4. Select **English**
5. Click "💼 Experience"
6. ✅ Should send: "What is your work experience?"

### Test 3: Placeholder
1. Switch languages
2. ✅ Input placeholder text should change

---

## 📄 Documentation

| File | Description |
|------|-------------|
| `CHATBOT-I18N-COMPLETE.md` | Full technical details |
| `GEMINI-API-KEY-GUIDE.md` | Detailed API key setup |
| `CHATBOT-SETUP.md` | Overall chatbot guide |
| `TEST-CHATBOT-I18N.html` | Interactive test page |

---

## 🐛 Troubleshooting

### ❌ "API key not valid"
- Check you copied the entire key
- No spaces before/after the key
- Key starts with `AIzaSy`

### ❌ Chatbot doesn't open
- Hard refresh: Ctrl + Shift + R
- Check console (F12) for errors
- Make sure all files are saved

### ❌ Language not syncing
- Check `i18n.js` is loaded before `chatbot.js`
- Open console, check for errors
- Verify `data-i18n` attributes exist

---

## 💰 API Limits (Free)

**FREE FOREVER:**
- ✅ 60 requests/minute
- ✅ 1,500 requests/day
- ✅ No credit card needed
- ✅ Never expires

Perfect for personal portfolio! 🎊

---

## 🎯 Quick Commands

```bash
# Open portfolio
start D:\BlogAdmin\index.html

# Edit API key
code D:\BlogAdmin\chatbot.js

# Check browser console
# Press F12 → Console tab
```

---

## ✨ Features Ready to Use

1. ✅ **3 Languages**
   - Vietnamese (default)
   - English
   - Chinese

2. ✅ **Smart Quick Actions**
   - Auto-translate questions
   - Context-aware responses

3. ✅ **Portfolio Context**
   - Knows your skills
   - Knows your projects
   - Knows your achievements

4. ✅ **Beautiful UI**
   - Gradient design
   - Smooth animations
   - Responsive layout

---

## 📞 Need Help?

1. **Read guides:** Check `GEMINI-API-KEY-GUIDE.md`
2. **Test page:** Open `TEST-CHATBOT-I18N.html`
3. **Console:** Press F12, check errors
4. **Email:** doanhquang039@gmail.com

---

## 🎉 You're All Set!

**Status:** 🟢 **READY**

Just add the API key and start chatting! 🚀

---

**Made with ❤️ | Version 1.0.0 | July 20, 2026**
