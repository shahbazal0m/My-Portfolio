"use client";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/shahbaz-alam.vercel.app/visits")
      .then((res) => res.json())
      .then((data) => {
        if (data?.value) setCount(data.value);
      })
      .catch(() => setCount(null));
  }, []);

  const formatCount = (num: number) => num.toLocaleString("en-US");

  const getOrdinal = (num: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = num % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  if (count === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-8 left-6 md:left-8 z-[999]"
      >
        <div className="flex items-center gap-3 px-4 py-3 glass rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-xl">
          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
            <Eye size={15} className="text-zinc-400" />
          </div>
          <p className="text-white text-sm font-medium whitespace-nowrap">
            You are the{" "}
            <span className="font-bold">
              {formatCount(count)}
              <sup className="text-[10px]">{getOrdinal(count)}</sup>
            </span>{" "}
            visitor
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VisitorCounter;