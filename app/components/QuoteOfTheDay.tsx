"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. Clean code always looks like it was written by someone who cares.",
    author: "Martin Fowler",
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out. The most important skill of a great software engineer is the relentless ability to solve complex problems step by step.",
    author: "Chris Pine",
  },
  {
    text: "Software architecture is the art of drawing lines that divide the system into components, keeping them independent, and ensuring that future changes require minimal effort and risk.",
    author: "Robert C. Martin (Uncle Bob)",
  },
  {
    text: "The best systems are built by engineers who deeply understand both the simplicity of user experience and the raw complexity of scalable infrastructure underneath.",
    author: "Linus Torvalds",
  },
  {
    text: "Walking on water and developing software from a specification are easy if both are frozen. True engineering lies in building resilient systems that adapt to continuous change.",
    author: "Edward V. Berard",
  },
];

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const dayIndex = new Date().getDate() % quotes.length;
    setQuote(quotes[dayIndex]);
  }, []);

  return (
    <section className="py-5 px-6 md:px-24 max-w-[1400px] mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <p className="text-[#E8A33D] text-xs font-mono font-bold uppercase tracking-[0.3em] mb-4">
          // Quote of the day
        </p>

        <div className="bg-[#0d0d0d] rounded-[1rem] border border-white/10 p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-[#E8A33D]/30 transition-all duration-500">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E8A33D]/[0.08] blur-[100px] pointer-events-none" />

          <Quote className="text-[#E8A33D]/30 mb-4 transition-transform duration-300 group-hover:scale-110" size={40} />

          <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-medium italic text-zinc-200 leading-relaxed max-w-4xl">
            &ldquo;{quote.text}&rdquo;
          </p>

          <p className="relative z-10 mt-6 text-xs sm:text-sm text-[#E8A33D] font-mono font-semibold tracking-wide flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#E8A33D]/50 inline-block" />
            {quote.author}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteOfTheDay;