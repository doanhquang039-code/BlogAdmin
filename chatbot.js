// ===== AI Chatbot with Gemini API =====

// Configuration
const CHATBOT_CONFIG = {
    // ⚠️ IMPORTANT: Replace with your Gemini API Key
    // Get free API key at: https://makersuite.google.com/app/apikey
    GEMINI_API_KEY: 'AIzaSyAQ.Ab8RNIoRcCCd00DRY4kn5Fl6uPKmlzzinLMfDX383Fmng95Gw', // ✅ API key đã được thêm!
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    
    // Context about portfolio owner
    CONTEXT: `Bạn là AI assistant cho portfolio của Đặng Quang Doanh. 
    
Thông tin về Đặng Quang Doanh:
- Tên: Đặng Quang Doanh
- Tuổi: 18 tuổi (sinh 29/12/2006)
- Quê quán: Thái Bình, Việt Nam
- Trình độ: Sinh viên CNTT năm 2
- Vai trò: Full-Stack Developer & AI Enthusiast

Kỹ năng:
- Backend: Spring Boot (90%), Node.js, Go, C#/.NET, Android
- Frontend: React, TypeScript, HTML5, CSS3 (80%)
- Mobile: Flutter (75%), Android
- AI/ML: Python, OpenAI API, Gemini API, LangChain (70%)
- Database: MySQL, MongoDB, SQL Server (85%)
- DevOps: Docker, GCP, CI/CD (75%)

Dự án nổi bật:
1. Intelligent Expense Tracker - AI-powered financial assistant (Python, OpenAI, FastAPI, Flutter)
   - Auto-categorization với NLP (95% accuracy)
   - Spending prediction với Time Series
   - Personalized advice từ GPT-4
   
2. HR Management Chatbot - Conversational AI (LangChain, ChromaDB, Spring Boot)
   - RAG với company knowledge base
   - Multi-turn conversation
   
3. AI Code Review Assistant - Automated code analysis (GPT-4, GitHub API, Node.js)
   - Code smell detection
   - Security vulnerability scan
   
4. Banking System - Full-stack web app (Spring Boot, React, MySQL)
5. Tourism Website - ASP.NET MVC web application
6. HR Management System - Enterprise HR software (Spring Boot, Thymeleaf)

Thành tựu:
- Google Cloud Certified (2026)
- Học Bổng Toàn Phần (2024)
- GameKren Prize 16M VND (2024)

Nghiên cứu AI:
- Prompt Engineering (đang nghiên cứu)
- RAG - Retrieval Augmented Generation (đang nghiên cứu)
- LLM Fine-tuning (đang học)
- AI Safety & Ethics (đang học)

Liên hệ:
- Email: doanhquang039@gmail.com
- GitHub: https://github.com/doanhquang039-code
- LinkedIn: https://www.linkedin.com/in/doanh-quang-0a4561407/
- Zalo: 0373542892

Bạn nên:
- Trả lời bằng tiếng Việt một cách thân thiện và chuyên nghiệp
- Cung cấp thông tin chi tiết nhưng ngắn gọn
- Sử dụng emoji phù hợp để giao tiếp sinh động
- Nếu được hỏi về thông tin không có trong context, hãy khuyên người hỏi liên hệ trực tiếp
- Luôn khuyến khích người dùng liên hệ qua email hoặc LinkedIn nếu quan tâm hợp tác`
};

// State
let conversationHistory = [];

// Initialize chatbot
function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const trigger = document.getElementById('chatbotTrigger'); // Social icon trigger
    const close = document.getElementById('chatbotClose');
    const window = document.getElementById('chatbotWindow');
    const form = document.getElementById('chatbotForm');
    const input = document.getElementById('chatbotInput');
    const quickActions = document.querySelectorAll('.quick-action-btn');
    
    // Check API key
    if (CHATBOT_CONFIG.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        document.getElementById('apiKeyWarning').style.display = 'flex';
        console.warn('⚠️ Gemini API Key not configured! Please update GEMINI_API_KEY in chatbot.js');
    }
    
    // Update placeholder on language change
    document.addEventListener('languageChanged', updateChatbotLanguage);
    updateChatbotLanguage(); // Initial update
    
    // Toggle chatbot (floating button)
    if (toggle) {
        toggle.addEventListener('click', () => {
            window.classList.toggle('active');
            if (window.classList.contains('active')) {
                input.focus();
            }
        });
    }
    
    // Toggle chatbot (social icon)
    if (trigger) {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            window.classList.toggle('active');
            if (window.classList.contains('active')) {
                input.focus();
            }
        });
    }
    
    // Close chatbot
    close.addEventListener('click', () => {
        window.classList.remove('active');
    });
    
    // Submit form
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = input.value.trim();
        if (message) {
            await sendMessage(message);
            input.value = '';
        }
    });
    
    // Quick actions - updated to use i18n
    quickActions.forEach(btn => {
        btn.addEventListener('click', () => {
            const questionKey = btn.getAttribute('data-question-key');
            const currentLang = getCurrentLanguage ? getCurrentLanguage() : 'vi';
            const translations = getTranslations ? getTranslations() : null;
            
            let question;
            if (translations && translations[currentLang] && translations[currentLang][questionKey]) {
                question = translations[currentLang][questionKey];
            } else {
                // Fallback to button text
                question = btn.textContent.trim();
            }
            
            sendMessage(question);
        });
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
        const container = document.getElementById('chatbotContainer');
        const triggerIcon = document.getElementById('chatbotTrigger');
        if (container && !container.contains(e.target) && e.target !== triggerIcon) {
            window.classList.remove('active');
        }
    });
}

// Update chatbot language
function updateChatbotLanguage() {
    const input = document.getElementById('chatbotInput');
    if (input) {
        const currentLang = getCurrentLanguage ? getCurrentLanguage() : 'vi';
        const translations = getTranslations ? getTranslations() : null;
        
        if (translations && translations[currentLang] && translations[currentLang].chatbotPlaceholder) {
            input.placeholder = translations[currentLang].chatbotPlaceholder;
        }
    }
}

// Send message
async function sendMessage(message) {
    // Add user message to chat
    addMessage(message, 'user');
    
    // Show typing indicator
    showTypingIndicator();
    
    // Add to conversation history
    conversationHistory.push({
        role: 'user',
        parts: [{ text: message }]
    });
    
    try {
        // Call Gemini API
        const response = await callGeminiAPI(message);
        
        // Hide typing indicator
        hideTypingIndicator();
        
        // Add bot response
        addMessage(response, 'bot');
        
        // Add to conversation history
        conversationHistory.push({
            role: 'model',
            parts: [{ text: response }]
        });
        
    } catch (error) {
        hideTypingIndicator();
        addMessage('❌ Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email: doanhquang039@gmail.com', 'bot');
        console.error('Chatbot error:', error);
    }
}

// Call Gemini API
async function callGeminiAPI(userMessage) {
    // Check API key
    if (CHATBOT_CONFIG.GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
        return '⚠️ API Key chưa được cấu hình. Vui lòng cập nhật GEMINI_API_KEY trong file chatbot.js.\n\n📧 Bạn có thể liên hệ trực tiếp:\n- Email: doanhquang039@gmail.com\n- LinkedIn: https://www.linkedin.com/in/doanh-quang-0a4561407/';
    }
    
    const url = `${CHATBOT_CONFIG.GEMINI_API_URL}?key=${CHATBOT_CONFIG.GEMINI_API_KEY}`;
    
    // Prepare messages with context
    const messages = [
        {
            role: 'user',
            parts: [{ text: CHATBOT_CONFIG.CONTEXT }]
        },
        ...conversationHistory.slice(-10), // Last 10 messages for context
        {
            role: 'user',
            parts: [{ text: userMessage }]
        }
    ];
    
    const requestBody = {
        contents: messages,
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
        },
        safetySettings: [
            {
                category: 'HARM_CATEGORY_HARASSMENT',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            },
            {
                category: 'HARM_CATEGORY_HATE_SPEECH',
                threshold: 'BLOCK_MEDIUM_AND_ABOVE'
            }
        ]
    };
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
    } else {
        throw new Error('Invalid API response');
    }
}

// Add message to chat
function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    // Parse markdown-style formatting
    let html = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
        .replace(/`(.*?)`/g, '<code>$1</code>') // Code
        .replace(/\n\n/g, '</p><p>') // Paragraphs
        .replace(/\n-\s/g, '<li>') // List items
        .replace(/\n/g, '<br>'); // Line breaks
    
    // Wrap in paragraphs
    if (!html.includes('<p>')) {
        html = '<p>' + html + '</p>';
    }
    
    // Wrap list items in ul
    if (html.includes('<li>')) {
        html = html.replace(/(<li>.*?)(?=<li>|<\/p>|$)/g, '<ul>$1</ul>');
        html = html.replace(/<\/ul><ul>/g, '');
    }
    
    content.innerHTML = html;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    document.getElementById('typingIndicator').style.display = 'flex';
    const messagesContainer = document.getElementById('chatbotMessages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    document.getElementById('typingIndicator').style.display = 'none';
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}

console.log('🤖 AI Chatbot initialized!');
console.log('⚠️ Remember to set your Gemini API Key in chatbot.js');
console.log('📝 Get free API key at: https://makersuite.google.com/app/apikey');
