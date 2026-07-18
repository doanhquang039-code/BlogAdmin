// ===== Settings Panel =====
function initSettingsPanel() {
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsPanel = document.getElementById('settingsPanel');
    const settingsOverlay = document.getElementById('settingsOverlay');
    const closeSettingsBtn = document.getElementById('closeSettings');
    const resetBtn = document.getElementById('resetSettings');

    // Check if elements exist
    if (!settingsBtn || !settingsPanel || !settingsOverlay) {
        console.warn('Settings elements not found');
        return;
    }

    // Theme settings
    const brightnessInput = document.getElementById('brightness');
    const contrastInput = document.getElementById('contrast');
    const saturationInput = document.getElementById('saturation');
    const colorBtns = document.querySelectorAll('.color-btn');
    const bgBtns = document.querySelectorAll('.bg-btn');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    // Open settings panel
    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.add('active');
        settingsOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close settings panel function
    function closeSettings() {
        settingsPanel.classList.remove('active');
        settingsOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close button
    closeSettingsBtn.addEventListener('click', closeSettings);

    // Click overlay to close
    settingsOverlay.addEventListener('click', closeSettings);

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && settingsPanel.classList.contains('active')) {
            closeSettings();
        }
    });

    // Apply brightness, contrast, saturation
    function updateFilterEffects() {
        const brightness = brightnessInput.value;
        const contrast = contrastInput.value;
        const saturation = saturationInput.value;
        
        document.body.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
        
        document.getElementById('brightnessValue').textContent = brightness + '%';
        document.getElementById('contrastValue').textContent = contrast + '%';
        document.getElementById('saturationValue').textContent = saturation + '%';
        
        // Save to localStorage
        localStorage.setItem('portfolio_brightness', brightness);
        localStorage.setItem('portfolio_contrast', contrast);
        localStorage.setItem('portfolio_saturation', saturation);
    }

    brightnessInput.addEventListener('input', updateFilterEffects);
    contrastInput.addEventListener('input', updateFilterEffects);
    saturationInput.addEventListener('input', updateFilterEffects);

// Color theme
const colorThemes = {
    purple: {
        '--primary-color': '#6366f1',
        '--secondary-color': '#8b5cf6',
        '--accent-color': '#ec4899',
        '--gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
    },
    blue: {
        '--primary-color': '#3b82f6',
        '--secondary-color': '#06b6d4',
        '--accent-color': '#0ea5e9',
        '--gradient': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #0ea5e9 100%)'
    },
    green: {
        '--primary-color': '#10b981',
        '--secondary-color': '#14b8a6',
        '--accent-color': '#34d399',
        '--gradient': 'linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #34d399 100%)'
    },
    pink: {
        '--primary-color': '#ec4899',
        '--secondary-color': '#f43f5e',
        '--accent-color': '#fb7185',
        '--gradient': 'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb7185 100%)'
    },
    orange: {
        '--primary-color': '#f97316',
        '--secondary-color': '#fb923c',
        '--accent-color': '#fdba74',
        '--gradient': 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fdba74 100%)'
    }
};

colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        applyColorTheme(color);
        
        // Update active state
        colorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Save to localStorage
        localStorage.setItem('portfolio_color', color);
    });
});

function applyColorTheme(color) {
    const theme = colorThemes[color];
    if (theme) {
        Object.keys(theme).forEach(key => {
            document.documentElement.style.setProperty(key, theme[key]);
        });
    }
}

// Background theme
const bgThemes = {
    dark: {
        '--dark-bg': '#0f172a',
        '--card-bg': '#1e293b'
    },
    light: {
        '--dark-bg': '#f8fafc',
        '--card-bg': '#e2e8f0'
    },
    gradient: {
        '--dark-bg': 'linear-gradient(135deg, #0f172a 0%, #1a2f4f 100%)',
        '--card-bg': 'linear-gradient(135deg, #1e293b 0%, #2d3a5f 100%)'
    }
};

bgBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const bg = btn.getAttribute('data-bg');
        applyBgTheme(bg);
        
        // Update active state
        bgBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Save to localStorage
        localStorage.setItem('portfolio_bg', bg);
    });
});

function applyBgTheme(bg) {
    const theme = bgThemes[bg];
    if (theme) {
        Object.keys(theme).forEach(key => {
            document.documentElement.style.setProperty(key, theme[key]);
        });
    }
}

// Music toggle
musicToggle.addEventListener('change', () => {
    if (musicToggle.checked) {
        bgMusic.play().catch(err => console.log('Autoplay blocked:', err));
    } else {
        bgMusic.pause();
    }
    localStorage.setItem('portfolio_music', musicToggle.checked);
});

// Reset all settings
resetBtn.addEventListener('click', () => {
    brightnessInput.value = 100;
    contrastInput.value = 100;
    saturationInput.value = 100;
    updateFilterEffects();
    
    applyColorTheme('purple');
    colorBtns[0].click();
    
    applyBgTheme('dark');
    bgBtns[0].click();
    
    musicToggle.checked = true;
    musicToggle.dispatchEvent(new Event('change'));
    
    localStorage.clear();
    showNotification('✨ Settings reset to default!');
});

// Load saved settings
function loadSettings() {
    const brightness = localStorage.getItem('portfolio_brightness') || 100;
    const contrast = localStorage.getItem('portfolio_contrast') || 100;
    const saturation = localStorage.getItem('portfolio_saturation') || 100;
    const color = localStorage.getItem('portfolio_color') || 'purple';
    const bg = localStorage.getItem('portfolio_bg') || 'dark';
    const music = localStorage.getItem('portfolio_music') !== 'false';
    
    brightnessInput.value = brightness;
    contrastInput.value = contrast;
    saturationInput.value = saturation;
    updateFilterEffects();
    
    applyColorTheme(color);
    const colorBtn = document.querySelector(`[data-color="${color}"]`);
    if (colorBtn) colorBtn.classList.add('active');
    
    applyBgTheme(bg);
    const bgBtn = document.querySelector(`[data-bg="${bg}"]`);
    if (bgBtn) bgBtn.classList.add('active');
    
    musicToggle.checked = music;
}

// Initialize settings on load
window.addEventListener('load', () => {
    loadSettings();
    if (musicToggle.checked) {
        bgMusic.play().catch(err => console.log('Autoplay blocked:', err));
    }
    });
}

// Initialize settings when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSettingsPanel);
} else {
    initSettingsPanel();
}

// ===== View Counter with Multiple Providers =====
const COUNTER_CONFIG = {
    // Primary: GoatCounter (Privacy-focused, production-ready)
    goatCounter: {
        enabled: false, // Set to true and add your site code
        siteCode: 'YOUR_SITE_CODE', // Get from goatcounter.com
    },
    // Fallback 1: CountAPI
    countApi: {
        namespace: 'doanhquang-portfolio',
        key: 'portfolio-views'
    },
    // Fallback 2: Simple PHP/Node backend (if you have one)
    customBackend: {
        enabled: false,
        url: 'https://your-api.com/views'
    }
};

async function initViewCounter() {
    const viewCountElement = document.getElementById('viewCount');
    if (!viewCountElement) return;
    
    try {
        // Check if user already visited (using sessionStorage for current session)
        const hasVisitedThisSession = sessionStorage.getItem('hasVisited');
        
        if (!hasVisitedThisSession) {
            // First visit in this session - increment counter
            await incrementViewCountMultiProvider(viewCountElement);
            sessionStorage.setItem('hasVisited', 'true');
        } else {
            // Already visited in this session - just fetch current count
            await fetchViewCountMultiProvider(viewCountElement);
        }
    } catch (error) {
        console.error('View counter error:', error);
        // Fallback to localStorage if all APIs fail
        useFallbackCounter(viewCountElement);
    }
}

async function incrementViewCountMultiProvider(element) {
    // Try multiple providers in order
    const providers = [
        () => incrementCountAPI(element),
        () => incrementCustomBackend(element),
    ];
    
    for (const provider of providers) {
        try {
            await provider();
            return; // Success, exit
        } catch (error) {
            console.warn('Provider failed, trying next...', error);
        }
    }
    
    // All providers failed
    throw new Error('All counter providers failed');
}

async function fetchViewCountMultiProvider(element) {
    // Try multiple providers in order
    const providers = [
        () => fetchCountAPI(element),
        () => fetchCustomBackend(element),
    ];
    
    for (const provider of providers) {
        try {
            await provider();
            return; // Success, exit
        } catch (error) {
            console.warn('Provider failed, trying next...', error);
        }
    }
    
    // All providers failed
    throw new Error('All counter providers failed');
}

// Provider 1: CountAPI.xyz
async function incrementCountAPI(element) {
    const { namespace, key } = COUNTER_CONFIG.countApi;
    const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    });
    
    if (!response.ok) throw new Error('CountAPI failed');
    
    const data = await response.json();
    if (data.value) {
        animateViewCount(element, data.value);
        // Save to localStorage as backup
        localStorage.setItem('lastKnownCount', data.value);
    } else {
        throw new Error('Invalid CountAPI response');
    }
}

async function fetchCountAPI(element) {
    const { namespace, key } = COUNTER_CONFIG.countApi;
    const response = await fetch(`https://api.countapi.xyz/get/${namespace}/${key}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    });
    
    if (!response.ok) throw new Error('CountAPI failed');
    
    const data = await response.json();
    if (data.value) {
        animateViewCount(element, data.value);
        localStorage.setItem('lastKnownCount', data.value);
    } else {
        throw new Error('Invalid CountAPI response');
    }
}

// Provider 2: Custom Backend (if you have one)
async function incrementCustomBackend(element) {
    if (!COUNTER_CONFIG.customBackend.enabled) {
        throw new Error('Custom backend not enabled');
    }
    
    const response = await fetch(COUNTER_CONFIG.customBackend.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'increment', page: 'portfolio' })
    });
    
    if (!response.ok) throw new Error('Custom backend failed');
    
    const data = await response.json();
    if (data.count) {
        animateViewCount(element, data.count);
        localStorage.setItem('lastKnownCount', data.count);
    }
}

async function fetchCustomBackend(element) {
    if (!COUNTER_CONFIG.customBackend.enabled) {
        throw new Error('Custom backend not enabled');
    }
    
    const response = await fetch(COUNTER_CONFIG.customBackend.url, {
        method: 'GET'
    });
    
    if (!response.ok) throw new Error('Custom backend failed');
    
    const data = await response.json();
    if (data.count) {
        animateViewCount(element, data.count);
        localStorage.setItem('lastKnownCount', data.count);
    }
}

function useFallbackCounter(element) {
    // Use last known count from API, or fallback to localStorage
    let viewCount = localStorage.getItem('lastKnownCount');
    
    if (!viewCount) {
        // No API count cached, use localStorage counter
        viewCount = localStorage.getItem('portfolioViewCount');
        if (!viewCount) {
            viewCount = 1;
        } else {
            viewCount = parseInt(viewCount) + 1;
        }
        localStorage.setItem('portfolioViewCount', viewCount);
    }
    
    animateViewCount(element, parseInt(viewCount));
    console.info('Using fallback counter:', viewCount);
}

function animateViewCount(element, targetCount) {
    let currentCount = parseInt(element.textContent) || 0;
    const increment = Math.ceil(targetCount / 30);
    const duration = 1000; // 1 second
    const steps = 30;
    const stepDuration = duration / steps;
    
    const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetCount) {
            element.textContent = targetCount.toLocaleString(); // Format with commas
            clearInterval(timer);
        } else {
            element.textContent = currentCount.toLocaleString();
        }
    }, stepDuration);
}

// Initialize view counter on page load
window.addEventListener('load', () => {
    initViewCounter();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Animated counter for stats (if needed)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .about-card, .tech-card, .project-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Typing effect for hero title (optional)
const typewriterText = document.querySelector('.gradient-text');
if (typewriterText) {
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Uncomment to enable typing effect
    // setTimeout(typeWriter, 1000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Copy email to clipboard
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.href.replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            // Show notification
            showNotification('Email copied to clipboard! 📋');
        });
    });
});

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    /* Mobile menu active styles */
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(15, 23, 42, 0.98);
        padding: 2rem;
        gap: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Tech stack hover effect - show description
const techCards = document.querySelectorAll('.tech-card');
const techDescriptions = {
    'Java': 'Enterprise backend development',
    'Spring Boot': 'Rapid application development framework',
    'Node.js': 'JavaScript runtime for scalable apps',
    'Python': 'AI/ML and scripting',
    'Flutter': 'Cross-platform mobile development'
};

techCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const techName = this.querySelector('span').textContent;
        if (techDescriptions[techName]) {
            this.title = techDescriptions[techName];
        }
    });
});

// Easter egg - Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 3s ease infinite';
    showNotification('🎉 Easter egg activated! You are awesome!');
    
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);
    
    setTimeout(() => {
        document.body.style.animation = '';
        rainbowStyle.remove();
    }, 3000);
}

// Project card click - open in new tab
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.project-link')) {
            const link = this.querySelector('.project-link');
            if (link) {
                window.open(link.href, '_blank');
            }
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('🚀 Portfolio loaded successfully!');
console.log('💡 Tip: Try the Konami code for a surprise!');


// ===== Enhanced Animations =====

// Counter Animation for Stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stats cards and animate when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => animateCounter(counter));
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats cards
const statsCards = document.querySelector('.stats-cards');
if (statsCards) {
    statsObserver.observe(statsCards);
}

// Role Text Animator
function initRoleAnimator() {
    const roles = [
        'Sinh viên CNTT năm 2',
        'Full-Stack Developer',
        'AI Enthusiast',
        'Cloud Developer'
    ];
    
    let currentIndex = 0;
    const roleElement = document.querySelector('.role-animator');
    
    if (!roleElement) return;
    
    function typeText(text, callback) {
        let index = 0;
        roleElement.textContent = '';
        
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                roleElement.textContent += text[index];
                index++;
            } else {
                clearInterval(typingInterval);
                setTimeout(callback, 2000); // Wait 2s before next
            }
        }, 100);
    }
    
    function eraseText(callback) {
        let text = roleElement.textContent;
        
        const erasingInterval = setInterval(() => {
            if (text.length > 0) {
                text = text.slice(0, -1);
                roleElement.textContent = text;
            } else {
                clearInterval(erasingInterval);
                callback();
            }
        }, 50);
    }
    
    function nextRole() {
        eraseText(() => {
            currentIndex = (currentIndex + 1) % roles.length;
            typeText(roles[currentIndex], nextRole);
        });
    }
    
    // Start animation
    typeText(roles[0], nextRole);
}

// Initialize on load
window.addEventListener('load', () => {
    initRoleAnimator();
    
    // Animate focus progress bars
    const focusItems = document.querySelectorAll('.focus-progress');
    const focusObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
                focusObserver.unobserve(entry.target);
            }
        });
    });
    
    focusItems.forEach(item => focusObserver.observe(item));
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link on scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Particle animation in hero
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s infinite ease-in-out;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add float animation
const floatStyle = document.createElement('style');
floatStyle.textContent += `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatStyle);

createParticles();

// Print Portfolio as PDF
function printPortfolio() {
    window.print();
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl + P = Print
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        printPortfolio();
    }
    
    // Ctrl + K = Open settings
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('settingsBtn').click();
    }
});

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 998;
    box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
`;

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// ===== Skills Progress Animation =====
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-progress');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-progress');
                
                // Animate progress bar
                setTimeout(() => {
                    progressBar.style.width = targetWidth + '%';
                }, 100);
                
                skillsObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => {
        skillsObserver.observe(item);
    });
}

// Initialize skills animation when page loads
window.addEventListener('load', () => {
    animateSkills();
});

console.log('🚀 Enhanced Portfolio Loaded!');
console.log('💡 Keyboard Shortcuts:');
console.log('   Ctrl + P = Print Portfolio');
console.log('   Ctrl + K = Open Settings');
console.log('   ESC = Close Settings');
