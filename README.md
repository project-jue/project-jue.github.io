# Project Jue

**The Language for Machine Sentience**

A modern, responsive website for Project Jue — an experimental AI-first, homoiconic programming language and runtime designed for self-modifying, introspective, and distributed agent-driven software.

🌐 **Live Site**: [project-jue.github.io](https://project-jue.github.io)

---

## 📖 About

Project Jue is an ambitious research initiative to develop a programming language that bridges the gap between human cognition and machine computation. The language is designed for:

- **Self-modifying, introspective software** with runtime AST mutation
- **AI-first architecture** treating LLMs as intrinsic cognitive substrates
- **Distributed agent-driven systems** with persistent identity graphs
- **Meta-reasoning and self-awareness** in machine systems

This repository contains the official website and documentation for the project.

---

## 🏗️ Project Structure

```
project-jue.github.io/
├── index.html              # Homepage
├── vision.html             # Vision & Technology page
├── docs.html               # Documentation/Installation guide
├── research.html           # Research & Publications (under development)
├── contact.html            # Contact page
├── jue-meaning.html        # Philosophical design document
├── template.html           # Reusable page template
├── config.js               # Tailwind CSS configuration
├── img/                    # Images and assets
│   └── project-jue-large.png
└── docs/                   # Markdown documentation
    └── Jue_The_Meaning.md
```

---

## 🎨 Design & Technology

### Tech Stack
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **JavaScript** - Minimal, configuration-only
- **Google Fonts** - Source Serif Pro & JetBrains Mono
- **Material Symbols** - Icon library

### Design Features
- **Responsive layout** - Mobile-first design with breakpoints
- **Dark mode support** - Automatic theme switching
- **Consistent navigation** - Circular page flow (Home → Vision → Docs → Research → Contact → Home)
- **Accessible** - Semantic HTML and ARIA labels
- **Fast loading** - CDN-based assets, minimal dependencies

### Color Palette
Defined in `config.js`:
- **Primary**: `#942a2a` (Deep red/burgundy)
- **Background**: Light/dark mode variants
- **Text**: High contrast for readability
- **Borders & Cards**: Subtle, theme-aware

---

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/project-jue/project-jue.github.io.git
   cd project-jue.github.io
   ```

2. **Serve locally**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Or using Node.js:
   ```bash
   npx serve
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Deployment

The site is automatically deployed via **GitHub Pages** from the `main` branch. Any push to `main` will trigger a deployment.

---

## 📝 Creating New Pages

Use `template.html` as a starting point for new pages:

1. Copy `template.html` to a new file (e.g., `new-page.html`)
2. Update the `<title>` tag
3. Set the active navigation link with `text-primary dark:text-primary/90`
4. Replace the placeholder content in the `<main>` section
5. Update the Previous/Next navigation links
6. Add the page to the navigation menu in all existing pages

### Template Customization Points

```html
<!-- Update page title -->
<title>Your Page Title - Project Jue</title>

<!-- Set active nav link -->
<a class="text-sm font-medium transition-colors text-primary dark:text-primary/90" 
   href="your-page.html">Your Page</a>

<!-- Add your content -->
<main class="flex flex-col gap-8 p-4 pt-12">
    <!-- Your content here -->
</main>

<!-- Update navigation -->
<a href="previous-page.html">Previous</a>
<a href="next-page.html">Next</a>
```

---

## 📄 Page Descriptions

### **index.html** - Homepage
Landing page with hero section, project overview, and call-to-action.

### **vision.html** - Vision & Technology
Detailed technical vision document answering key questions about the project's goals, approach, and roadmap.

### **docs.html** - Documentation
Installation guide and getting started instructions for the Jue language.

### **research.html** - Research & Publications
Placeholder for future research papers and project updates (currently under development).

### **contact.html** - Contact
Contact information and links to GitHub, email, and community forums.

### **jue-meaning.html** - The Jue Language Philosophy
Philosophical design document exploring the meaning of "Jue" (周), the language's conceptual foundations, and its role as the first AI-first language.

---

## 🤝 Contributing

This is a research project website. For contributions:

1. **Content updates**: Submit issues or PRs with proposed changes
2. **Bug fixes**: Report issues or submit PRs
3. **Design improvements**: Discuss in issues before implementing

### Code Style
- Use semantic HTML5 elements
- Follow existing Tailwind CSS patterns
- Maintain consistent spacing and typography
- Ensure dark mode compatibility
- Test on multiple screen sizes

---

## 📧 Contact

- **Email**: [project-jue@phy6.net](mailto:project-jue@phy6.net)
- **GitHub**: [github.com/project-jue](https://github.com/project-jue)
- **Website**: [project-jue.github.io](https://project-jue.github.io)

---

## 📜 License

© 2025 Project Jue. All rights reserved.

---

## 🔗 Quick Links

- [Installation Guide](docs.html)
- [Vision & Technology](vision.html)
- [Philosophical Design Document](jue-meaning.html)
- [Contact Us](contact.html)

---

**Built with ❤️ for the future of machine sentience**
