"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, RefreshCw, Code2, Palette, Globe, Sparkles } from "lucide-react";

const quotes = [
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    tag: "Clean Code",
    icon: <Code2 size={12} />,
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    tag: "Design",
    icon: <Palette size={12} />,
  },
  {
    text: "Good design is as little design as possible.",
    author: "Dieter Rams",
    tag: "Design",
    icon: <Palette size={12} />,
  },
  {
    text: "The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    author: "Tim Berners-Lee",
    tag: "Web",
    icon: <Globe size={12} />,
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    tag: "Craft",
    icon: <Sparkles size={12} />,
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    tag: "Clean Code",
    icon: <Code2 size={12} />,
  },
  {
    text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
    tag: "Simplicity",
    icon: <Sparkles size={12} />,
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    tag: "Clean Code",
    icon: <Code2 size={12} />,
  },
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
                  {quote.icon}
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

            {/* Footer: dots + next button */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Show quote ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-[#E8A33D]" : "w-1.5 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setIndex((i) => (i + 1) % quotes.length)}
                className="inline-flex items-center gap-2 px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-400 bg-white/5 border border-white/10 rounded-full hover:text-[#E8A33D] hover:border-[#E8A33D]/30 hover:bg-[#E8A33D]/5 transition-all duration-300 group/btn cursor-pointer"
              >
                Another quote
                <RefreshCw size={13} className="group-hover/btn:rotate-180 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteOfTheDay;