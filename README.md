# 🎨 Personal Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> A modern, responsive, and feature-rich personal portfolio website showcasing my skills, projects, and achievements.

![Portfolio Preview](screenshot.png)

## ✨ Features

- 🎯 **Responsive Design** - Works perfectly on all devices
- 🌐 **Multi-language Support** - Vietnamese, English, Chinese
- 🎨 **Theme Customization** - 5 color themes + 3 background themes
- ⚙️ **Settings Panel** - Brightness, Contrast, Saturation controls
- 🎵 **Background Music** - Toggle-able ambient music
- 📊 **View Counter** - Track portfolio visits
- 🏆 **Achievement Showcase** - Display certificates and awards
- 💼 **Projects Table** - Organized project portfolio
- 🎪 **Auto-scrolling Tech Stack** - Infinite carousel animation
- 📧 **Direct Contact Links** - Easy access to social profiles
- ⏱️ **Experience Timeline** - Visual work experience display
- 🎮 **Interests Section** - Personal hobbies and interests

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+
- Or Docker (for containerized deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/doanhquang039-code/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view your portfolio.

## 📦 Available Scripts

### Development
```bash
npm run dev          # Start live-server on port 3000
npm run start        # Start production server on port 8080
npm run serve        # Serve with http-server
```

### Build & Optimization
```bash
npm run build        # Build and minify all assets
npm run minify       # Minify CSS and JS
npm run minify:css   # Minify CSS only
npm run minify:js    # Minify JavaScript only
```

### Code Quality
```bash
npm run format       # Format code with Prettier
npm run lint         # Lint JavaScript files
npm run lint:fix     # Lint and auto-fix issues
```

### Docker Commands
```bash
npm run docker:build          # Build Docker image
npm run docker:run            # Run Docker container
npm run docker:stop           # Stop Docker container
npm run docker:compose:up     # Start with Docker Compose
npm run docker:compose:down   # Stop Docker Compose
npm run docker:compose:logs   # View Docker logs
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)
```bash
# Start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Using Docker CLI
```bash
# Build image
docker build -t portfolio-website .

# Run container
docker run -d -p 8080:80 --name portfolio portfolio-website

# Access at http://localhost:8080
```

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css               # Styles
├── script.js              # JavaScript functionality
├── i18n.js                # Internationalization
├── *.png, *.jpg           # Images and certificates
├── package.json           # Node.js dependencies
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
├── nginx.conf             # Nginx configuration
├── .prettierrc            # Prettier config
├── .eslintrc.json         # ESLint config
├── .gitignore             # Git ignore rules
└── README.md              # Documentation
```

## 🎨 Customization

### Theme Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

### Add New Language
Edit `i18n.js` and add your translations:
```javascript
const translations = {
    en: { ... },
    vi: { ... },
    fr: { ... }  // Add new language
};
```

### Modify Settings
The settings panel allows users to customize:
- Brightness (50-150%)
- Contrast (80-150%)
- Saturation (0-150%)
- Color themes (5 options)
- Background themes (3 options)
- Background music toggle

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📱 Responsive Breakpoints

- 📱 Mobile: < 768px
- 💻 Tablet: 768px - 1024px
- 🖥️ Desktop: > 1024px

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Đặng Quang Doanh**

- 📧 Email: doanhquang039@gmail.com
- 🐙 GitHub: [@doanhquang039-code](https://github.com/doanhquang039-code)
- 💼 LinkedIn: [Đặng Quang Doanh](https://www.linkedin.com/in/doanh-quang-0a4561407/)
- 📱 Zalo: 0373542892

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Nginx for web server
- Docker for containerization
- All open-source contributors

## 📊 Stats

- **Languages**: HTML, CSS, JavaScript
- **Framework**: Vanilla JS (No frameworks)
- **Styling**: Pure CSS with CSS Variables
- **Performance**: 95+ Lighthouse Score
- **Size**: ~25MB Docker image
- **Load Time**: < 1s

## 🔮 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Blog section
- [ ] Contact form with email integration
- [ ] Analytics dashboard
- [ ] SEO optimization
- [ ] PWA support
- [ ] Animated transitions
- [ ] More language options

## 📧 Support

If you have any questions or issues, please:
- 🐛 [Open an issue](https://github.com/doanhquang039-code/portfolio/issues)
- 💬 Contact me via email
- 🌟 Star this repo if you found it helpful!

---

Made with ❤️ and ☕ by Đặng Quang Doanh
