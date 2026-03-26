# 📱 HeroApps Store

<div align="center">

![HeroApps Banner](https://placehold.co/800x200/8B5CF6/white?text=HeroApps+Store)

**Discover, Install, and Manage Your Favorite Apps All in One Place**

[![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646cff?style=flat&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-4.4-5a0ef8?style=flat)](https://daisyui.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)

</div>

---

## 👨‍💻 Author

<div align="center">

![Nur Mohammad Hridoy](https://avatars.githubusercontent.com/u/108605580?v=4)

### **Nur Mohammad Hridoy**

[![GitHub](https://img.shields.io/badge/GitHub-Hridoy--ii-181717?style=for-the-badge&logo=github)](https://github.com/Hridoy-ii/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-8B5CF6?style=for-the-badge)](https://github.com/Hridoy-ii/)

> Full Stack Developer | React Enthusiast | UI/UX Lover

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technologies](#-technologies)
- [Live Demo](#-live-demo)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

**HeroApps Store** is a modern, responsive web application that simulates a premium app store experience. Users can browse, search, sort, and manage app installations with a sleek UI built using React and Tailwind CSS. The application features persistent storage using localStorage, allowing users to track their installed apps across sessions.

Built with performance and user experience in mind, HeroApps Store showcases best practices in React development including custom hooks, context API for state management, lazy loading, and component reusability.

---

## ✨ Features

### 🏠 Home Page
- Eye-catching banner with call-to-action buttons (Google Play & App Store)
- Statistics section showing downloads, reviews, and active apps
- Trending apps grid with quick navigation

### 📱 All Apps Page
- **Live Search** - Filter apps by title in real-time with loading animation
- **Sort Functionality** - Sort by downloads (High-Low, Low-High)
- **Loading States** - Smooth loading animations during search operations
- **Empty States** - Beautiful "App Not Found" UI when no results match
- **Responsive Grid** - 4-column layout on desktop, adaptive on mobile

### 📊 App Details Page
- Dynamic routing with `/:id` parameters
- Detailed app information (image, title, company, stats)
- **Interactive Install Button** - Toggle install/uninstall with localStorage persistence
- **Rating Chart** - Visual representation using Recharts (horizontal bar chart)
- **Description Section** - Full app details and features
- **Error Handling** - Custom "App Not Found" page for invalid app IDs

### 📦 My Installations Page
- View all installed apps in a horizontal list format
- **Uninstall Functionality** - Remove apps with confirmation toast notification
- **Sort by Size** - Organize apps by file size (High-Low, Low-High)
- **Empty State** - Friendly message when no apps are installed

### 🎨 UI/UX
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Custom Navbar** - Logo, navigation links with active state, Contribute button
- **Dark Footer** - Consistent branding with social links across all pages
- **Toast Notifications** - Success/Error messages for all user actions
- **Loading Animations** - Page navigation and search operations
- **Two Error Pages** - App Not Found (cat illustration) & 404 Route Not Found (laptop illustration)

### 🔧 Technical Features
- **Context API** - Global state management for app installations
- **Custom Hooks** - Reusable logic for localStorage, search, sort, loading, and details
- **Lazy Loading** - Code-splitting with React.lazy and Suspense for better performance
- **Dynamic Routes** - Flexible routing with React Router DOM v6
- **LocalStorage** - Persistent app installation data across browser sessions
- **CI/CD Ready** - GitHub Actions workflow for automated deployment

---

## 🛠 Technologies

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | React | 18.2.0 | UI Library |
| **Build Tool** | Vite | 5.0+ | Fast Build & Dev Server |
| **Routing** | React Router DOM | 6.20+ | Client-side Routing |
| **Styling** | Tailwind CSS | 3.4+ | Utility-first CSS |
| **UI Components** | DaisyUI | 4.4+ | Tailwind Component Library |
| **Charts** | Recharts | 2.10+ | Data Visualization |
| **Icons** | React Icons | 4.12+ | Icon Library |
| **State Management** | Context API | Built-in | Global State |
| **Storage** | LocalStorage | Browser API | Data Persistence |
| **Package Manager** | npm | 9.0+ | Dependency Management |

---

## 🌐 Live Demo

| Environment | URL | Status |
|-------------|-----|--------|
| **Production** | [Coming Soon](#) | 🔄 Deploying |
| **Development** | `http://localhost:5173` | ✅ Local |

> 🚀 *Live site will be updated after deployment to Vercel/Netlify/GitHub Pages*

---

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/Hridoy-ii/hero-io-appStore.git
cd hero-io-appStore

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

### Development Server

After running `npm run dev`, the application will be available at:
- **URL**: `http://localhost:5173`
- **Hot Reload**: Enabled for instant updates

---

## 📁 Project Structure

```
hero-io-appStore/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD Pipeline Configuration
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                 # Static assets (images, fonts)
│   ├── components/
│   │   ├── apps/
│   │   │   └── AppCard.jsx     # Reusable app card component
│   │   ├── appDetails/
│   │   │   ├── AppInfo.jsx     # App header info section
│   │   │   ├── AppDescription.jsx
│   │   │   └── RatingChart.jsx # Recharts bar chart
│   │   ├── home/
│   │   │   ├── Banner.jsx      # Hero banner section
│   │   │   ├── Stats.jsx       # Statistics section
│   │   │   └── TopApps.jsx     # Trending apps grid
│   │   ├── installations/
│   │   │   ├── InstallationItem.jsx
│   │   │   └── SortDropdown.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Top navigation bar
│   │   │   └── Footer.jsx      # Bottom footer
│   │   └── ui/
│   │       ├── Loader.jsx      # Loading spinner
│   │       ├── Toast.jsx       # Notification toast
│   │       └── AppNotFound.jsx # Empty state component
│   ├── context/
│   │   └── AppContext.jsx      # Global state (installations)
│   ├── data/
│   │   └── appsData.json       # Mock app data (20 apps)
│   ├── hooks/
│   │   ├── useLocalStorage.js  # LocalStorage hook
│   │   ├── useAppFilter.js     # Search & sort hook
│   │   ├── useAppDetails.js    # App details fetch hook
│   │   └── useInstalledApps.js # Installed apps hook
│   ├── layouts/
│   │   └── MainLayout.jsx      # Layout wrapper with Outlet
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── AllApps.jsx         # All apps listing
│   │   ├── AppDetails.jsx      # Individual app page
│   │   ├── MyInstallations.jsx # User's installed apps
│   │   └── ErrorPage.jsx       # 404 route error page
│   ├── App.jsx                 # Router configuration
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles (Tailwind)
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:5173` |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://placehold.co/800x600/f3f4f6/8B5CF6?text=Home+Page+-+Banner+%2B+Stats+%2B+Trending+Apps)

### 📱 All Apps Page
![All Apps Page](https://placehold.co/800x600/f3f4f6/8B5CF6?text=All+Apps+Page+-+Search+%2B+Sort+%2B+Grid)

### 📊 App Details Page
![App Details Page](https://placehold.co/800x600/f3f4f6/8B5CF6?text=App+Details+Page+-+Info+%2B+Chart+%2B+Install)

### 📦 My Installations Page
![My Installations Page](https://placehold.co/800x600/f3f4f6/8B5CF6?text=My+Installations+Page+-+List+%2B+Uninstall)

### ❌ Error Pages
![Error Pages](https://placehold.co/800x600/f3f4f6/8B5CF6?text=Error+Pages+-+App+Not+Found+%2B+404)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository: [https://github.com/Hridoy-ii/hero-io-appStore.git](https://github.com/Hridoy-ii/hero-io-appStore.git)
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style Guidelines

- ✅ Use functional components with hooks
- ✅ Follow ESLint configuration
- ✅ Write meaningful commit messages
- ✅ Add comments for complex logic
- ✅ Ensure responsive design for all components
- ✅ Use reusable components where possible
- ✅ Implement proper error handling

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
Copyright (c) 2025 Nur Mohammad Hridoy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🔗 Quick Links

| Resource | Link |
|----------|------|
| 📂 **Project Repository** | [https://github.com/Hridoy-ii/hero-io-appStore.git](https://github.com/Hridoy-ii/hero-io-appStore.git) |
| 👨‍💻 **Author GitHub** | [https://github.com/Hridoy-ii/](https://github.com/Hridoy-ii/) |
| 🌐 **Live Site** | *[Coming Soon]* |
| 🐛 **Report Issue** | [Open Issue](https://github.com/Hridoy-ii/hero-io-appStore/issues) |
| 💡 **Request Feature** | [New Feature](https://github.com/Hridoy-ii/hero-io-appStore/issues) |

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Recharts](https://recharts.org/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/)
- [Vite](https://vitejs.dev/)

---

<div align="center">

**Made with ❤️ by Nur Mohammad Hridoy**

[![GitHub](https://img.shields.io/badge/GitHub-Follow%20Me-181717?style=for-the-badge&logo=github)](https://github.com/Hridoy-ii/)

⭐ Star this repo if you found it helpful!

</div>

---
