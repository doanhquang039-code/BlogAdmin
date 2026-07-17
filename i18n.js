// Internationalization (i18n) System
// Supports Vietnamese (vi), English (en), and Chinese (zh)

const translations = {
    vi: {
        // Navigation
        devPortfolio: 'DevPortfolio',
        home: 'Trang chủ',
        about: 'Giới thiệu',
        techStack: 'Công nghệ',
        achievements: 'Thành tựu',
        contact: 'Liên hệ',
        
        // Hero Section
        hello: '👋 Xin chào, tôi là',
        heroSubtitle: 'Sinh viên CNTT năm 2 | Full-Stack Developer',
        heroDescription: '🚀 Passionate about building innovative solutions | 💻 Spring Boot • Node.js • Flutter • Python AI',
        passionate: 'Passionate',
        buildingInnovative: 'xây dựng những giải pháp sáng tạo',
        dateOfBirth: 'Ngày sinh:',
        birthPlace: 'Nơi sinh:',
        university: 'Trường:',
        computerScience: 'Sinh viên CNTT - Năm 2',
        viewAchievements: 'Xem thành tựu',
        contactMe: 'Liên hệ',
        availableForWork: 'Sẵn sàng làm việc',
        
        // View counter
        views: 'Lượt xem',
        
        // About Section
        aboutMe: '📖 Giới thiệu',
        aboutTitle: 'Về tôi',
        aboutDesc: 'Tìm hiểu thêm về hành trình học tập và phát triển kỹ năng của tôi',
        computerScienceStudent: 'Sinh viên CNTT',
        aboutCard1: 'Tôi là sinh viên năm 2 ngành Công nghệ Thông tin với niềm đam mê mạnh mẽ về phát triển phần mềm và giải quyết vấn đề. Luôn tìm tòi những công nghệ mới để nâng cao kỹ năng và kiến thức.',
        fullStackDeveloper: 'Full-Stack Developer',
        aboutCard2: 'Tôi yêu thích xây dựng các ứng dụng web hoàn chỉnh, từ backend API đến frontend UI. Có kinh nghiệm với Spring Boot, Node.js, React và Flutter để tạo ra các sản phẩm chất lượng cao.',
        currentlyLearning: 'Đang học tập',
        aboutCard3: 'Không ngừng cải thiện kỹ năng trong Spring Boot, Node.js, Flutter & AI/Python với mục tiêu xây dựng các ứng dụng có khả năng mở rộng cao.',
        aiEnthusiast: 'AI/ML Enthusiast',
        aboutCard4: 'Đang khám phá AI/ML với Python — xây dựng các ứng dụng thông minh sử dụng LLMs & APIs như OpenAI, Gemini để tạo ra các giải pháp innovative.',
        futureGoals: 'Mục tiêu tương lai',
        aboutCard5: 'Mong muốn trở thành một DevOps & Cloud Engineer, hiểu rõ về deployment, scaling, và quản lý hệ thống. Quan tâm đến các công nghệ cloud như AWS, GCP, Azure.',
        myDream: 'Giấc mơ của tôi',
        aboutCard6: '"Xây dựng những sản phẩm giải quyết các vấn đề thực tế trong cuộc sống, giúp con người làm việc hiệu quả hơn và hạnh phúc hơn."',
        basedIn: 'Hiện tại ở',
        
        // Tech Stack Section
        techStackTag: '🛠️ Công nghệ',
        techStackTitle: 'Công Nghệ',
        techStackDesc: 'Các công nghệ và công cụ mà tôi thành thạo và sử dụng hàng ngày',
        
        // Achievements Section
        achievementTag: '🏆 Thành tựu',
        myAchievements: 'Thành Tựu Của Tôi',
        achievementsDesc: 'Chứng chỉ và những thành tựu cho thấy quá trình học tập và phát triển của tôi',
        
        // Contact Section
        getInTouch: '📬 Liên hệ',
        contactTitle: 'Liên Hệ Với Tôi',
        contactDesc: 'Hãy liên hệ với tôi cho những cơ hội hợp tác hoặc chỉ một cuộc trò chuyện thân thiện!',
        
        // Footer
        devPortfolioFooter: 'DevPortfolio',
        madeWith: 'Tạo ra với',
        
        // Projects
        projectsTag: '🚀 Dự án',
        myProjects: 'Dự Án Của Tôi',
        projectsDesc: 'Các dự án và công việc mà tôi đã thực hiện',
        projectName: 'Dự án',
        techStackCol: 'Công nghệ',
        description: 'Mô tả',
        link: 'Liên kết',
        projects: 'Dự án',
        viewProjects: 'Xem dự án',
        
        // Experience
        experienceTag: '💼 Kinh Nghiệm',
        myExperience: 'Kinh Nghiệm Của Tôi',
        experienceDesc: 'Quá trình làm việc và phát triển kỹ năng chuyên môn',
        
        // Interests
        interestsTag: '🎮 Sở Thích',
        myInterests: 'Sở Thích Của Tôi',
        interestsDesc: 'Những điều tôi yêu thích ngoài lập trình',
    },
    en: {
        // Navigation
        devPortfolio: 'DevPortfolio',
        home: 'Home',
        about: 'About',
        techStack: 'Tech Stack',
        achievements: 'Achievements',
        contact: 'Contact',
        
        // Hero Section
        hello: '👋 Hello, I am',
        heroSubtitle: 'Year 2 CS Student | Full-Stack Developer',
        heroDescription: '🚀 Passionate about building innovative solutions | 💻 Spring Boot • Node.js • Flutter • Python AI',
        passionate: 'Passionate',
        buildingInnovative: 'building innovative solutions',
        dateOfBirth: 'Date of Birth:',
        birthPlace: 'Place of Birth:',
        university: 'University:',
        computerScience: 'CS Year 2 Student',
        viewAchievements: 'View Achievements',
        contactMe: 'Contact Me',
        availableForWork: 'Available for Work',
        
        // View counter
        views: 'Views',
        
        // About Section
        aboutMe: '📖 About Me',
        aboutTitle: 'About Me',
        aboutDesc: 'Learn more about my learning journey and skill development',
        computerScienceStudent: 'Computer Science Student',
        aboutCard1: 'I am a 2nd year Computer Science student with a strong passion for software development and problem-solving. I constantly explore new technologies to enhance my skills and knowledge.',
        fullStackDeveloper: 'Full-Stack Developer',
        aboutCard2: 'I love building complete web applications from backend APIs to frontend UI. I have experience with Spring Boot, Node.js, React, and Flutter to create high-quality products.',
        currentlyLearning: 'Currently Learning',
        aboutCard3: 'Continuously improving my skills in Spring Boot, Node.js, Flutter & AI/Python with the goal of building highly scalable applications.',
        aiEnthusiast: 'AI/ML Enthusiast',
        aboutCard4: 'Exploring AI/ML with Python — building intelligent applications using LLMs & APIs like OpenAI, Gemini to create innovative solutions.',
        futureGoals: 'Future Goals',
        aboutCard5: 'Aspiring to become a DevOps & Cloud Engineer with deep understanding of deployment, scaling, and system management. Interested in cloud technologies like AWS, GCP, Azure.',
        myDream: 'My Dream',
        aboutCard6: '"Build products that solve real-world problems, helping people work more efficiently and live happier lives."',
        basedIn: 'Based in',
        
        // Tech Stack Section
        techStackTag: '🛠️ Technologies',
        techStackTitle: 'Tech Stack',
        techStackDesc: 'Technologies and tools I am proficient in and use daily',
        
        // Achievements Section
        achievementTag: '🏆 Achievements',
        myAchievements: 'My Achievements',
        achievementsDesc: 'Certifications and achievements showing my learning and development progress',
        
        // Contact Section
        getInTouch: '📬 Get In Touch',
        contactTitle: 'Get In Touch',
        contactDesc: 'Contact me for collaboration opportunities or just a friendly conversation!',
        
        // Footer
        devPortfolioFooter: 'DevPortfolio',
        madeWith: 'Made with',
        
        // Projects
        projectsTag: '🚀 Projects',
        myProjects: 'My Projects',
        projectsDesc: 'Projects and work that I have completed',
        projectName: 'Project',
        techStackCol: 'Tech Stack',
        description: 'Description',
        link: 'Link',
        projects: 'Projects',
        viewProjects: 'View Projects',
        
        // Experience
        experienceTag: '💼 Experience',
        myExperience: 'My Experience',
        experienceDesc: 'Professional experience and skill development',
        
        // Interests
        interestsTag: '🎮 Interests',
        myInterests: 'My Interests',
        interestsDesc: 'Things I love besides coding',
    },
    zh: {
        // Navigation
        devPortfolio: '开发组合',
        home: '首页',
        about: '关于',
        techStack: '技术栈',
        achievements: '成就',
        contact: '联系',
        
        // Hero Section
        hello: '👋 你好，我是',
        heroSubtitle: '计算机科学二年级学生 | 全栈开发者',
        heroDescription: '🚀 热衷于构建创新解决方案 | 💻 Spring Boot • Node.js • Flutter • Python AI',
        passionate: '热衷',
        buildingInnovative: '构建创新解决方案',
        dateOfBirth: '出生日期：',
        birthPlace: '出生地：',
        university: '大学：',
        computerScience: '计算机科学二年级',
        viewAchievements: '查看成就',
        contactMe: '联系我',
        availableForWork: '可以工作',
        
        // View counter
        views: '浏览',
        
        // About Section
        aboutMe: '📖 关于我',
        aboutTitle: '关于我',
        aboutDesc: '了解我的学习之旅和技能发展',
        computerScienceStudent: '计算机科学学生',
        aboutCard1: '我是计算机科学二年级学生，对软件开发和解决问题充满热情。我不断探索新技术来提高技能和知识。',
        fullStackDeveloper: '全栈开发者',
        aboutCard2: '我热爱构建完整的网络应用，从后端API到前端UI。我有使用Spring Boot、Node.js、React和Flutter创建高质量产品的经验。',
        currentlyLearning: '正在学习',
        aboutCard3: '不断提高在Spring Boot、Node.js、Flutter和AI/Python方面的技能，目标是构建高度可扩展的应用。',
        aiEnthusiast: 'AI/ML爱好者',
        aboutCard4: '用Python探索AI/ML — 使用OpenAI、Gemini等LLM API构建智能应用以创建创新解决方案。',
        futureGoals: '未来目标',
        aboutCard5: '渴望成为DevOps和云工程师，深入了解部署、扩展和系统管理。对AWS、GCP、Azure等云技术感兴趣。',
        myDream: '我的梦想',
        aboutCard6: '"构建解决现实问题的产品，帮助人们更有效地工作和生活得更幸福。"',
        basedIn: '现居',
        
        // Tech Stack Section
        techStackTag: '🛠️ 技术',
        techStackTitle: '技术栈',
        techStackDesc: '我精通并日常使用的技术和工具',
        
        // Achievements Section
        achievementTag: '🏆 成就',
        myAchievements: '我的成就',
        achievementsDesc: '显示我学习和发展进度的认证和成就',
        
        // Contact Section
        getInTouch: '📬 联系我',
        contactTitle: '联系我',
        contactDesc: '联系我获取合作机会或只是友好的交谈！',
        
        // Footer
        devPortfolioFooter: '开发组合',
        madeWith: '用',
        
        // Projects
        projectsTag: '🚀 项目',
        myProjects: '我的项目',
        projectsDesc: '我完成的项目和工作',
        projectName: '项目',
        techStackCol: '技术栈',
        description: '描述',
        link: '链接',
        projects: '项目',
        viewProjects: '查看项目',
        
        // Experience
        experienceTag: '💼 经验',
        myExperience: '我的经验',
        experienceDesc: '专业经验和技能发展',
        
        // Interests
        interestsTag: '🎮 兴趣',
        myInterests: '我的兴趣',
        interestsDesc: '除了编程之外我喜欢的东西',
    }
};

// Current language (default: Vietnamese)
let currentLanguage = localStorage.getItem('language') || 'vi';

// Initialize i18n
function initI18n() {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Set active language button
    updateLanguageButtons();
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// Set language and update all text elements
function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language '${lang}' not found, using Vietnamese`);
        lang = 'vi';
    }
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Preserve HTML content if it exists
            if (element.children.length > 0) {
                // For elements with child elements, only update text nodes
                let textContent = translations[lang][key];
                element.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = textContent;
                    }
                });
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update language attribute
    document.documentElement.lang = lang;
    
    // Update language buttons
    updateLanguageButtons();
    
    // Trigger any custom i18n change events
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Update language button states
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLanguage) {
            btn.classList.add('active');
            btn.style.background = 'var(--gradient)';
            btn.style.color = 'white';
        } else {
            btn.classList.remove('active');
            btn.style.background = '';
            btn.style.color = '';
        }
    });
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Change language (public API)
function changeLanguage(lang) {
    setLanguage(lang);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initI18n();
});

// If DOM is already loaded (in case script runs after DOMContentLoaded)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initI18n();
    });
} else {
    initI18n();
}
