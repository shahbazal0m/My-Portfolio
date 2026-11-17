"use client";
import { useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Globe,
  CloudSun,
  Layers,
  Bell,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  X,
} from "lucide-react";
import {
  SiGithub,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJson,
  SiSwiper,
  SiFontawesome,
  SiGooglefonts,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiMinutemailer,
} from "react-icons/si";

type Tech = { name: string; icon: ReactNode };

type CaseStudy = {
  overview?: string;
  problem?: string;
  solution?: string;
  role?: string;
  duration?: string;
  challenges?: string[];
  outcome?: string;
  learnings?: string[];
};

type Project = {
  id: string;
  type: string;
  title: string;
  image: string;
  description: string;
  tech: Tech[];
  github: string;
  live: string;
  caseStudy?: CaseStudy;
};

// Reusable tech tags with icons
const T = {
  html: { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  css: { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
  js: { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  json: { name: "JSON", icon: <SiJson className="text-zinc-300" /> },
  swiper: { name: "Swiper.js", icon: <SiSwiper className="text-[#6332F6]" /> },
  fontAwesome: { name: "Font Awesome", icon: <SiFontawesome className="text-[#528DD7]" /> },
  googleFonts: { name: "Google Fonts", icon: <SiGooglefonts className="text-[#4285F4]" /> },
  rest: { name: "REST APIs", icon: <Globe size={14} className="text-[#00BCD4]" /> },
  remix: { name: "Remix Icons", icon: <Layers size={14} className="text-[#E8A33D]" /> },
  weather: { name: "WeatherAPI", icon: <CloudSun size={14} className="text-[#38BDF8]" /> },
  next: { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  ts: { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  tailwind: { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  framer: { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
  emailjs: { name: "EmailJS", icon: <SiMinutemailer className="text-[#FFCA28]" /> },
  toast: { name: "React Hot Toast", icon: <Bell size={14} className="text-[#E8A33D]" /> },
};

/*
  To publish a case study, add this to a project below and fill it in.
  Leave a field empty and it simply will not show.
  While every field is empty, the card shows "Case study · coming soon".

  caseStudy: {
    overview: "",
    problem: "",
    solution: "",
    role: "",
    duration: "",
    challenges: ["", ""],
    outcome: "",
    learnings: ["", ""],
  },
*/

const projects: Project[] = [
  {
    id: "01",
    type: "Frontend / Web",
    title: "Food Ordering Web App",
    image: "/project-image/food-website.png",
    description: "A highly responsive food delivery store layout built with seamless category sorting filters, custom micro-interactions, and JSON-based menu integration.",
    tech: [T.html, T.css, T.js, T.json, T.swiper, T.fontAwesome, T.googleFonts],
    github: "https://github.com/shahbazal0m/foodie-website",
    live: "https://foodie-website-eta-one.vercel.app/",
    caseStudy: {
      role: "Solo project",
      overview:
        "A responsive food ordering front end where visitors browse a menu, filter dishes by category and add items to a cart.",
      problem:
        "Hard-coding every dish into the HTML makes a menu slow to update, and a cart that lags behind the user's clicks feels broken. I wanted a store that stays easy to maintain and responds instantly.",
      solution:
        "The menu lives in a JSON file and is loaded with the Fetch API, so adding a dish means editing data, not markup. Category filters re-render the list without a page reload, and the cart updates item counts and totals as soon as something changes. The layout uses Flexbox and media queries to work from phones to desktops, with Swiper.js for sliding sections.",
      challenges: [
        "Keeping cart totals and item counts in sync as items are added, removed or changed.",
        "Re-rendering the filtered menu without reloading the page.",
        "Making the layout hold up across screen sizes using Flexbox and media queries.",
      ],
      outcome:
        "A working, deployed ordering front end with dynamic menu loading, category filtering, a live cart and a responsive layout.",
      learnings: [
        "Loading and rendering JSON data with the Fetch API.",
        "Managing UI state with plain JavaScript and the DOM.",
        "Building responsive layouts with Flexbox and media queries.",
      ],
    },
  },
  {
    id: "02",
    type: "Frontend / UI",
    title: "E-commerce Website",
    image: "/project-image/E-commerce.png",
    description: "A comprehensive digital catalog system simulating active state shopping flows, REST API responses, scalable utility classes, and optimized card checkouts.",
    tech: [T.html, T.css, T.js, T.rest, T.json, T.fontAwesome],
    github: "https://github.com/shahbazal0m/frontend-ecommerce-website",
    live: "https://frontend-ecommerce-website-two.vercel.app/",
    caseStudy: {
      role: "Solo project",
      overview:
        "A front-end storefront with a product catalog, a shopping cart and a checkout-style flow.",
      problem:
        "I wanted to understand how a store works end to end on the front end, from showing products to handling a cart, without relying on a custom backend.",
      solution:
        "Product data comes from REST API responses in JSON and is rendered into product cards. Cart logic handles adding, removing and quantity changes with updated totals, and reusable utility classes keep card and layout styling consistent. Font Awesome icons are used across the interface.",
      challenges: [
        "Turning API data into product cards and keeping them consistent.",
        "Handling cart state: adding, removing, changing quantities and recalculating totals.",
        "Keeping the styling scalable with reusable utility classes instead of one-off rules.",
      ],
      outcome:
        "A deployed storefront front end that simulates a complete shopping flow, from browsing to cart.",
      learnings: [
        "Consuming REST API data and rendering it dynamically.",
        "Structuring cart logic so totals always stay correct.",
        "Writing reusable CSS utility classes.",
      ],
    },
  },
  {
    id: "03",
    type: "Frontend / App",
    title: "Productivity Dashboard",
    image: "/project-image/Pro-dashboar.png",
    description: "An elegant workspace management hub offering real-time custom weather widgets, task queues, habit tracking, and sleek Swiper-powered micro-frontend blocks.",
    tech: [T.html, T.css, T.js, T.swiper, T.remix, T.weather],
    github: "https://github.com/shahbazal0m/productivity-dashboard",
    live: "https://productivity-dashboard-kappa-ebon.vercel.app/",
    caseStudy: {
      role: "Solo project",
      overview:
        "A single dashboard that brings a Pomodoro timer, tasks, habit tracking and live weather together in one place.",
      problem:
        "Staying focused often means juggling a timer, a to-do list and a few other tabs. I wanted one clean workspace instead.",
      solution:
        "The dashboard is split into modular blocks: a Pomodoro timer, a task list, habit tracking and a weather widget, plus an automatic theme toggle. Weather and quotes come from third-party REST APIs through the Fetch API. Tasks are saved in localStorage so they survive a refresh, and Swiper.js gives touch-friendly gestures on mobile.",
      challenges: [
        "Getting the Pomodoro timer's start, pause and reset states to behave correctly.",
        "Saving tasks with no backend by persisting them in the browser's localStorage.",
        "Handling the wait for API data and showing the weather cleanly.",
        "Keeping the layout and touch interactions comfortable on small screens.",
      ],
      outcome:
        "A deployed dashboard that works without any backend and keeps tasks between visits.",
      learnings: [
        "Fetching and displaying data from third-party APIs.",
        "Persisting state in the browser with localStorage.",
        "Splitting a UI into small, reusable blocks.",
      ],
    },
  },
  {
    id: "04",
    type: "Full-Stack / Web",
    title: "Personal Portfolio Website",
    image: "/project-image/portfolio.png",
    description: "A highly interactive, modern portfolio website showcasing dynamic client-side animations, smooth transitions, and seamless responsive design structures.",
    tech: [T.next, T.ts, T.tailwind, T.framer, T.emailjs, T.toast],
    github: "https://github.com/shahbazal0m/My-Portfolio",
    live: "https://shahbaz-alam.vercel.app",
    caseStudy: {
      role: "Solo project",
      overview:
        "The site you are on: a personal portfolio that presents my projects, experience and skills in one place.",
      problem:
        "I needed a single link that shows recruiters what I have built, loads quickly and looks right on a phone as well as a desktop.",
      solution:
        "It is built with Next.js (App Router), TypeScript and Tailwind CSS, with Framer Motion for animation. The contact form posts to its own Next.js API route, so the email handling stays on the server. A visitor counter runs through another API route backed by Upstash Redis, and the GitHub section pulls repository stats from the GitHub REST API. The site deploys to Vercel on every push.",
      challenges: [
        "A failed Vercel deployment caused by a wrong Root Directory setting, and pointing Production at the right branch.",
        "A third-party contribution graph service stopped responding, so I switched to a more reliable source.",
        "Counting each visit once per session while keeping the total persistent across visitors.",
        "Keeping animations smooth while staying responsive on small screens.",
      ],
      outcome:
        "A live portfolio on Vercel with continuous deployment and working contact and visitor features.",
      learnings: [
        "Using the Next.js App Router and API routes.",
        "Configuring deployments, branches and environment variables on Vercel.",
        "Designing around third-party failures with fallbacks and error states.",
      ],
    },
  },
];

// A case study counts as written only if at least one field has content
const hasCaseStudy = (p: Project) =>
  !!p.caseStudy &&
  Object.values(p.caseStudy).some((v) => (Array.isArray(v) ? v.some(Boolean) : Boolean(v)));

const Label = ({ children }: { children: ReactNode }) => (
  <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#E8A33D] mb-2">
    {children}
  </p>
);

const TextBlock = ({ label, body }: { label: string; body?: string }) =>
  body ? (
    <div>
      <Label>{label}</Label>
      <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{body}</p>
    </div>
  ) : null;

const ListBlock = ({ label, items }: { label: string; items?: string[] }) => {
  const filled = (items ?? []).filter(Boolean);
  if (filled.length === 0) return null;
  return (
    <div>
      <Label>{label}</Label>
      <ul className="space-y-2.5">
        {filled.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm md:text-base text-zinc-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A33D] mt-2.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const CaseStudyModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const cs = project.caseStudy ?? {};

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[1rem] border border-white/10 bg-[#0d0d0d]"
      >
        {/* Sticky top bar: back button + close */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-4 md:px-6 py-3 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/10">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8A33D] via-[#E8A33D]/40 to-transparent" />

          <button
            onClick={onClose}
            autoFocus
            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 rounded-full hover:text-[#E8A33D] hover:border-[#E8A33D]/30 hover:bg-[#E8A33D]/5 transition-all duration-300 cursor-pointer group/back"
          >
            <ArrowLeft size={14} className="group-hover/back:-translate-x-0.5 transition-transform" />
            Back to projects
          </button>

          <span className="hidden sm:block flex-1 text-center text-[10px] font-mono uppercase tracking-widest text-zinc-600 truncate">
            {project.title}
          </span>

          <button
            onClick={onClose}
            aria-label="Close case study"
            className="w-9 h-9 shrink-0 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-[#E8A33D] hover:border-[#E8A33D]/40 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <Image
          src={project.image}
          alt={project.title}
          width={1900}
          height={910}
          className="w-full h-auto object-cover border-b border-white/10"
        />

        <div className="p-6 md:p-10 space-y-7">
          <div>
            <p className="text-[#E8A33D] text-xs font-mono font-bold uppercase tracking-[0.3em] mb-2">
              // Case study
            </p>
            <h3 id="case-study-title" className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 rounded-full">
                {project.type}
              </span>
              {cs.role && (
                <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#E8A33D] bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full">
                  {cs.role}
                </span>
              )}
              {cs.duration && (
                <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-300 bg-white/5 border border-white/10 rounded-full">
                  {cs.duration}
                </span>
              )}
            </div>
          </div>

          <TextBlock label="Overview" body={cs.overview} />
          <TextBlock label="The problem" body={cs.problem} />
          <TextBlock label="My solution" body={cs.solution} />
          <ListBlock label="Challenges" items={cs.challenges} />
          <TextBlock label="Outcome" body={cs.outcome} />
          <ListBlock label="What I learned" items={cs.learnings} />

          <div>
            <Label>Stack</Label>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] md:text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-zinc-200 [&>svg]:text-sm"
                >
                  {item.icon}
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom actions */}
          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/10">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0a0a0a] bg-[#E8A33D] hover:bg-amber-400 rounded-full transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-300 bg-white/5 hover:bg-[#E8A33D]/10 border border-white/10 hover:border-[#E8A33D]/30 rounded-full transition-all"
              >
                <SiGithub size={14} />
                GitHub
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#E8A33D] bg-[#E8A33D]/10 hover:bg-[#E8A33D] hover:text-[#0a0a0a] border border-[#E8A33D]/30 rounded-full transition-all cursor-pointer"
            >
              <ArrowLeft size={14} />
              Back to projects
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const close = useCallback(() => setActiveId(null), []);

  const active = projects.find((p) => p.id === activeId && hasCaseStudy(p));

  return (
    <section id="projects" className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10 scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16 flex flex-col items-center justify-center text-center"
      >
        <p className="text-[#E8A33D] text-xs font-mono font-bold uppercase tracking-[0.3em] mb-2">
          // Things I&apos;ve built
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest text-white/85">
          My Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            className="glass rounded-[1rem] border border-white/10 hover:border-[#E8A33D]/30 overflow-hidden flex flex-col group transition-all duration-500"
          >
            <div className="w-full overflow-hidden border-b border-white/10 bg-zinc-900 relative">
              <Image
                src={project.image}
                alt={project.title}
                width={1900}
                height={910}
                className="w-full h-auto object-cover"
                priority={index < 2}
              />
              <div className="absolute top-3 left-3 font-mono text-xs font-bold text-[#E8A33D] bg-[#0a0a0a]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E8A33D]/30">
                {project.id}
              </div>
            </div>

            <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow space-y-4 sm:space-y-5 bg-[#030303]/50 backdrop-blur-sm">
              
              <div className="flex items-center w-fit font-mono text-[10px] md:text-xs tracking-widest uppercase select-none">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-zinc-400 font-medium">
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#E8A33D] transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-300 font-medium text-xs md:text-sm leading-relaxed tracking-wide antialiased transition-colors duration-300 group-hover:text-zinc-100">
                {project.description}
              </p>

              {/* Stack with icons */}
              <div className="pt-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2.5">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span 
                      key={item.name} 
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] md:text-xs font-semibold bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-zinc-200 [&>svg]:text-sm"
                    >
                      {item.icon}
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 mt-auto relative z-20 w-full space-y-3">
                <div className="flex items-center gap-3 sm:gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 md:px-5 py-2.5 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.12em] md:tracking-[0.15em] text-zinc-300 bg-white/5 hover:bg-[#E8A33D]/10 border border-white/10 hover:border-[#E8A33D]/30 rounded-full transition-all duration-300 whitespace-nowrap ${!project.live ? "w-full flex-none" : ""}`}
                    >
                      <SiGithub size={14} className="flex-shrink-0" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 md:px-5 py-2.5 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.12em] md:tracking-[0.15em] text-[#0a0a0a] bg-[#E8A33D] hover:bg-amber-400 border border-[#E8A33D] rounded-full transition-all duration-300 whitespace-nowrap"
                    >
                      <ExternalLink size={14} className="flex-shrink-0" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                {hasCaseStudy(project) ? (
                  <button
                    onClick={() => setActiveId(project.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.12em] md:tracking-[0.15em] text-[#E8A33D] bg-[#E8A33D]/10 hover:bg-[#E8A33D] hover:text-[#0a0a0a] border border-[#E8A33D]/30 rounded-full transition-all duration-300 cursor-pointer group/cs"
                  >
                    <BookOpen size={14} />
                    Read case study
                    <ArrowRight size={14} className="group-hover/cs:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <div
                    aria-disabled="true"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.12em] md:tracking-[0.15em] text-zinc-500 bg-white/[0.02] border border-dashed border-white/10 rounded-full select-none cursor-not-allowed"
                  >
                    <BookOpen size={14} />
                    Case study · coming soon
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-12 md:mt-16"
      >
        <a
          href="https://github.com/shahbazal0m?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 glass rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-[#E8A33D]/40 hover:bg-[#E8A33D]/5 transition-all duration-300 group text-sm font-medium"
        >
          See All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform duration-300 text-[#E8A33D]"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>

      <AnimatePresence>
        {active && <CaseStudyModal key={active.id} project={active} onClose={close} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;