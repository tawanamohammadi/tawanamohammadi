# Tawana Mohammadi - Personal Website

![License](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)

## 🌟 Overview

This is the personal website of **Tawana Mohammadi**, an independent AI researcher, data strategist, and educator. The website showcases research publications, projects, blog posts, and professional information.

**Live Site**: [https://tawana.online](https://tawana.online)

## 🚀 Features

- **Modern React Application**: Built with React 19 and Vite for optimal performance
- **Responsive Design**: TailwindCSS for beautiful, mobile-first responsive design
- **SEO Optimized**: Complete meta tags, Schema.org structured data, and Open Graph support
- **Blog System**: Markdown-based blog with categories and search functionality
- **Portfolio Section**: Showcasing academic profiles, GitHub projects, and publications
- **Contact Form**: Direct email integration for easy communication
- **Automated Deployment**: GitHub Actions workflow for continuous deployment to GitHub Pages

## 📁 Project Structure

```
/
├── public/                 # Public and static files
│   ├── assets/             # Images, fonts, icons
│   ├── favicon.ico         # Site favicon
│   ├── robots.txt          # Search engine directives
│   └── CNAME              # Custom domain configuration
│
├── src/                    # Main application code
│   ├── components/         # Reusable components (Navbar, Footer)
│   ├── pages/              # Website pages (Home, About, Blog, etc.)
│   └── App.jsx            # App entry point
│
├── blog/                   # Markdown blog posts
│   ├── ai-ethics/          # Posts on AI Ethics
│   ├── data-transparency/  # Posts on Data Transparency
│   └── personal/           # Personal writings
│
├── .github/                # GitHub configurations
│   └── workflows/
│       └── deploy.yml      # Deployment automation configuration
│
├── package.json            # Package management
├── tailwind.config.js      # TailwindCSS configuration
├── vite.config.js          # Vite configuration
└── README.md              # Project README file
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: TailwindCSS 3.x
- **Routing**: React Router DOM
- **Markdown Processing**: React Markdown, Remark GFM
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/tawanamohammadi/tawanamohammadi.git
cd tawanamohammadi

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🔨 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deployment is automated via GitHub Actions when pushing to main branch.

## 👤 Author

**Tawana Mohammadi**
- Website: [https://tawana.online](https://tawana.online)
- ORCID: [0009-0005-6825-6728](https://orcid.org/0009-0005-6825-6728)
- GitHub: [@tawanamohammadi](https://github.com/tawanamohammadi)
- Email: info@tawana.online

---

**Built with ❤️ using React, Vite, and TailwindCSS**
