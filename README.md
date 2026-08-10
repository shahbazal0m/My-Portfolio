# 🚀 Shahbaz Alam — Portfolio Website

A modern, animated personal portfolio built to showcase my skills, projects, and journey as a Full Stack Developer.

🔗 **Live Demo:** [shahbaz-alam.vercel.app](https://shahbaz-alam.vercel.app)
📂 **Repository:** [github.com/shahbazal0m/My-Portfolio](https://github.com/shahbazal0m/My-Portfolio)

---

## 📸 Overview

This portfolio is built with **Next.js 15** and **Tailwind CSS v4**, featuring a sleek glassmorphic dark theme, smooth Framer Motion animations, an interactive particle background, and a fully functional contact form powered by a custom API route.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🧊 **Glassmorphic UI** | Floating pill-shaped navbar with dynamic scroll-based blur and shadow effects |
| 🎬 **Framer Motion Animations** | Smooth, hardware-accelerated transitions across every section |
| ⌨️ **Typewriter Hero Text** | Rotating role titles (Full Stack, Frontend, Backend Developer) |
| 🎡 **Skills Marquee** | Infinite auto-scrolling strip of tech stack icons |
| 🖼️ **Dynamic Project Cards** | Rendered from a structured data array with GitHub & live demo links |
| 📊 **Live GitHub Activity** | Fetches real-time star/fork counts via the GitHub REST API |
| 🏆 **Certifications Showcase** | AWS, NPTEL, and Sheryians certificates with verification links |
| 📩 **Custom Contact Form** | Built with a Next.js API route (`/api/contact`) instead of a third-party-only service, with toast notifications for success/error states |
| 👀 **Visitor Counter** | Session-based live visitor tracking using `sessionStorage` + API route |
| 🌌 **Interactive Particle Background** | Built with `tsparticles`, reacts to mouse hover |
| ⬆️ **Scroll-to-Top Button** | Appears after scrolling, with smooth animated entrance/exit |
| 📱 **Fully Responsive** | Optimized layouts and reduced animation load for mobile devices |

---

## 🛠️ Tech Stack

**Frontend**
- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hot Toast](https://react-hot-toast.com/)
- [tsParticles](https://particles.js.org/)
- [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

**Backend**
- Next.js API Routes (`/api/contact`, `/api/visitor`)
- GitHub REST API integration

**Tools & Deployment**
- Git & GitHub
- Vercel (CI/CD & Hosting)
- VS Code

---

## 📂 Project Structure

```
frontend/
├── app/
│   ├── api/
│   │   ├── contact/           # Handles contact form submissions
│   │   └── visitor/           # Tracks and returns live visitor count
│   ├── components/
│   │   ├── navbar.tsx         # Floating responsive navbar
│   │   ├── Hero.tsx           # Landing section with typewriter effect
│   │   ├── SkillsMarquee.tsx  # Auto-scrolling tech stack
│   │   ├── About.tsx          # Bio and background
│   │   ├── Education.tsx      # Education & training timeline
│   │   ├── Projects.tsx       # Project showcase cards
│   │   ├── Githubactivity.tsx # Live GitHub stats
│   │   ├── certificates.tsx   # Certifications grid
│   │   ├── Contact.tsx        # Contact form with API integration
│   │   ├── Visitorcounter.tsx # Live visitor counter widget
│   │   ├── Background.tsx     # Animated particle background
│   │   ├── Divider.tsx        # Section divider with glow effect
│   │   ├── Scrolltotop.tsx    # Scroll-to-top button
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── project-image/
│   ├── certificates-images/
│   ├── profile-image/
│   └── tab-logo/
└── package.json
```

---

## 🚀 Getting Started

Clone and run the project locally:

```bash
git clone https://github.com/shahbazal0m/My-Portfolio.git
cd My-Portfolio/frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

### Environment Variables

Create a `.env.local` file in the `frontend` directory for the contact form and any API keys used:

```
# Add required environment variables here
```

---

## 🧩 Featured Projects Shown on This Site

- **Food Ordering Web App** — Responsive food delivery layout with category filters and JSON-based menu integration
- **E-commerce Website** — Digital catalog with simulated shopping flows and REST API integration
- **Productivity Dashboard** — Workspace hub with weather widgets, task tracking, and habit tracking
- **Personal Portfolio** — This very site, built with Next.js, Tailwind, and Framer Motion

---

## 📬 Contact

- **Email:** shahbazalam4842@gmail.com
- **LinkedIn:** [iamshahbaz-alam](https://www.linkedin.com/in/iamshahbaz-alam/)
- **GitHub:** [shahbazal0m](https://github.com/shahbazal0m)
- **Twitter/X:** [@shahbaz_al0m](https://x.com/shahbaz_al0m)

---

⭐ If you found this project interesting, consider giving it a star on GitHub!