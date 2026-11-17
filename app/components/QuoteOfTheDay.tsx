"use client";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Code2,
  Palette,
  Globe,
  Sparkles,
  Minimize2,
  BookOpen,
  Lightbulb,
  Wrench,
} from "lucide-react";

const tagIcons: Record<string, ReactNode> = {
  "Clean Code": <Code2 size={12} />,
  Design: <Palette size={12} />,
  Web: <Globe size={12} />,
  Craft: <Sparkles size={12} />,
  Simplicity: <Minimize2 size={12} />,
  Learning: <BookOpen size={12} />,
  Mindset: <Lightbulb size={12} />,
  Engineering: <Wrench size={12} />,
};

const quotes = [
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler", tag: "Clean Code" },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs", tag: "Design" },
  { text: "Good design is as little design as possible.", author: "Dieter Rams", tag: "Design" },
  { text: "The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.", author: "Tim Berners-Lee", tag: "Web" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck", tag: "Craft" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House", tag: "Clean Code" },
  { text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry", tag: "Simplicity" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Abelson & Sussman", tag: "Clean Code" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra", tag: "Simplicity" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth", tag: "Craft" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds", tag: "Craft" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay", tag: "Mindset" },
  { text: "Everyone knows that debugging is twice as hard as writing a program in the first place.", author: "Brian Kernighan", tag: "Engineering" },
  { text: "Software is eating the world.", author: "Marc Andreessen", tag: "Web" },
  { text: "Design is thinking made visual.", author: "Saul Bass", tag: "Design" },
  { text: "People ignore design that ignores people.", author: "Frank Chimero", tag: "Design" },
  { text: "The details are not the details. They make the design.", author: "Charles Eames", tag: "Design" },
  { text: "Content precedes design. Design in the absence of content is not design, it's decoration.", author: "Jeffrey Zeldman", tag: "Web" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson", tag: "Engineering" },
  { text: "A user interface is like a joke. If you have to explain it, it's not that good.", author: "Martin LeBlanc", tag: "Design" },
  { text: "The most important property of a program is whether it accomplishes the intention of its user.", author: "C.A.R. Hoare", tag: "Engineering" },
  { text: "There are only two hard things in Computer Science: cache invalidation and naming things.", author: "Phil Karlton", tag: "Engineering" },
  { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan", tag: "Simplicity" },
  { text: "Make the change easy, then make the easy change.", author: "Kent Beck", tag: "Craft" },
  { text: "The only way to go fast is to go well.", author: "Robert C. Martin", tag: "Craft" },
  { text: "Clean code always looks like it was written by someone who cares.", author: "Michael Feathers", tag: "Clean Code" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin", tag: "Learning" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes", tag: "Learning" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", tag: "Mindset" },
  { text: "Typography is what language looks like.", author: "Ellen Lupton", tag: "Design" },
];

const QuoteOfTheDay = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Same quote for the whole day, changes every new day
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000);
    setIndex(dayOfYear % quotes.length);
  }, []);

  const quote = quotes[index];
  const pad = (n: number) => String(n).padStart(2, "0");
  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);
  const next = () => setIndex((i) => (i + 1) % quotes.length);

  return (
    <section className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-[#E8A33D] text-xs font-mono font-bold uppercase tracking-[0.3em]">
            // Quote of the day
          </p>
          <span className="text-[10px] font-mono text-zinc-600 tracking-widest">
            {pad(index + 1)} / {pad(quotes.length)}
          </span>
        </div>

        <div className="bg-[#0d0d0d] rounded-[1rem] border border-white/10 relative overflow-hidden group hover:border-[#E8A33D]/30 transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8A33D] via-[#E8A33D]/40 to-transparent" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#E8A33D]/[0.08] blur-[100px] pointer-events-none" />
          <Quote
            size={110}
            className="absolute top-6 right-6 md:right-10 text-[#E8A33D]/[0.07] rotate-180 pointer-events-none"
          />

          <div className="relative z-10 p-6 sm:p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 text-[10px] font-mono font-bold uppercase tracking-widest text-[#E8A33D] bg-[#E8A33D]/10 border border-[#E8A33D]/20 rounded-full">
                  {tagIcons[quote.tag]}
                  {quote.tag}
                </span>

                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug max-w-4xl">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>

                <p className="mt-6 text-xs sm:text-sm text-[#E8A33D] font-mono font-semibold tracking-wide flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#E8A33D]/50 inline-block" />
                  {quote.author}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Footer: progress bar + prev / next */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-6">
              <div className="h-1 flex-1 max-w-xs rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#E8A33D] transition-all duration-500"
                  style={{ width: `${((index + 1) / quotes.length) * 100}%` }}
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous quote"
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full text-zinc-400 bg-white/5 border border-white/10 hover:text-[#E8A33D] hover:border-[#E8A33D]/30 hover:bg-[#E8A33D]/5 transition-all duration-300 cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={next}
                  className="inline-flex items-center gap-1.5 pl-4 pr-3 h-9 text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-400 bg-white/5 border border-white/10 rounded-full hover:text-[#E8A33D] hover:border-[#E8A33D]/30 hover:bg-[#E8A33D]/5 transition-all duration-300 cursor-pointer"
                >
                  Next quote
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteOfTheDay;