"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Eye, TrendingUp } from "lucide-react";

const ordinal = (n: number) => {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return "th";
  switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
};

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [display, setDisplay] = useState(0);
  const [failed, setFailed] = useState(false);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    const alreadyVisited = sessionStorage.getItem("has_visited");
    const url = alreadyVisited ? "/api/visitor?increment=false" : "/api/visitor";

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data: { count?: number }) => {
        if (typeof data.count !== "number") throw new Error("Bad response");
        setCount(data.count);
        if (!alreadyVisited) sessionStorage.setItem("has_visited", "true");
      })
      .catch(() => setFailed(true));
  }, []);

  // Count-up animation
  useEffect(() => {
    if (count === null) return;
    const duration = 1200;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(count * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [count]);

  const width = Math.max(4, String(count ?? 0).length);
  const digits =
    count === null
      ? Array(width).fill("-")
      : String(display).padStart(width, "0").split("");

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
          // Visitors
        </p>

        <div className="bg-[#0d0d0d] rounded-[1rem] border border-white/10 relative overflow-hidden group hover:border-[#E8A33D]/30 transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8A33D] via-[#E8A33D]/40 to-transparent" />
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#E8A33D]/[0.07] blur-[100px] pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Left: odometer */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-[#E8A33D]/10 border border-[#E8A33D]/20 flex items-center justify-center shrink-0">
                  <Eye size={16} className="text-[#E8A33D]" />
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold mb-0.5">
                    Analytics
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-white/85">
                    Visitor Counter
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2" aria-label={`${count ?? 0} visitors`}>
                {digits.map((d, i) => (
                  <div
                    key={i}
                    className="relative w-10 h-14 sm:w-12 sm:h-16 md:w-14 md:h-[4.5rem] rounded-lg bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden"
                  >
                    <span
                      className={`font-mono font-bold text-3xl sm:text-4xl md:text-5xl tabular-nums leading-none ${
                        count === null
                          ? `text-zinc-700 ${failed ? "" : "animate-pulse"}`
                          : "text-[#E8A33D]"
                      }`}
                    >
                      {d}
                    </span>
                    {/* Odometer split line */}
                    <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/60" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: message */}
            <div className="md:text-right md:max-w-xs">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold tracking-wider text-[#E8A33D] bg-[#E8A33D]/10 px-2.5 py-1 rounded-full border border-[#E8A33D]/20 mb-4">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8A33D] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E8A33D]" />
                </span>
                <TrendingUp size={11} />
                Live
              </span>

              <p className="text-zinc-300 text-base md:text-lg font-medium leading-snug">
                {count !== null ? (
                  <>
                    You are visitor{" "}
                    <span className="text-white font-bold font-mono">
                      #{count.toLocaleString()}
                    </span>
                    <sup className="text-xs text-zinc-500 font-mono ml-0.5">
                      {ordinal(count)}
                    </sup>
                  </>
                ) : failed ? (
                  "Counter unavailable right now"
                ) : (
                  "Counting visitors..."
                )}
              </p>
              <p className="text-zinc-500 text-xs mt-2">
                Thanks for stopping by.
              </p>
            </div>
          </div>

          <div className="relative z-10 px-6 sm:px-8 md:px-10 py-3 border-t border-white/5">
            <p className="text-[10px] font-mono text-zinc-600 tracking-wide">
              Counted once per browser session
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VisitorCounter;